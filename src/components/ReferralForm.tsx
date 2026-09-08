"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const inputClass =
  "bg-slate-50 border-slate-200 focus:bg-white focus:ring-amber-500 h-11";

const formSchema = z.object({
  // Referring Professional
  proName: z.string().min(2, "Required"),
  proAgency: z.string().optional(),
  proPhone: z.string().min(7, "Required"),
  proEmail: z.string().email("Invalid email"),
  proRelationship: z.string().optional(),

  // Adolescent Information
  teenName: z.string().min(2, "Required"),
  teenDob: z.string().min(2, "Required"),
  teenAge: z.string().optional(),
  teenGender: z.string().optional(),
  teenLanguage: z.string().optional(),
  teenSchool: z.string().optional(),
  teenGrade: z.string().optional(),

  // Guardian Information
  guardianName: z.string().min(2, "Required"),
  guardianPhone: z.string().min(7, "Required"),
  guardianEmail: z.string().email("Invalid email").optional().or(z.literal("")),
  guardianAddress: z.string().optional(),
  legalGuardian: z.string().optional(),

  // Reason for Referral
  clinicalPresentation: z.string().min(10, "Please describe the primary concerns"),

  // Honeypot
  website: z.string().max(0, "Invalid submission"),
});

type FormValues = z.infer<typeof formSchema>;

export function ReferralForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      website: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (data.website) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          subject: "New Professional Referral - Teen Harbor Behavioral Health",
          from_name: "Teen Harbor Website",
          name: data.proName,
          email: data.proEmail,
          phone: data.proPhone,
          message: `
REFERRING PROFESSIONAL
Name: ${data.proName}
Agency / Organization: ${data.proAgency || "N/A"}
Phone: ${data.proPhone}
Email: ${data.proEmail}
Relationship to Youth: ${data.proRelationship || "N/A"}

ADOLESCENT INFORMATION
Full Name: ${data.teenName}
Date of Birth: ${data.teenDob}
Age: ${data.teenAge || "N/A"}
Gender: ${data.teenGender || "N/A"}
Primary Language: ${data.teenLanguage || "N/A"}
Current School: ${data.teenSchool || "N/A"}
Grade: ${data.teenGrade || "N/A"}

GUARDIAN INFORMATION
Name(s): ${data.guardianName}
Phone: ${data.guardianPhone}
Email: ${data.guardianEmail || "N/A"}
Address: ${data.guardianAddress || "N/A"}
Legal Guardian: ${data.legalGuardian || "N/A"}

REASON FOR REFERRAL
${data.clinicalPresentation}
          `,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        console.error("Referral submission failed:", result.message);
      }
    } catch (error) {
      console.error("Failed to submit referral", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 text-green-800 p-8 rounded-2xl text-center border border-green-200">
        <h3 className="text-2xl font-semibold mb-2">Referral Received</h3>
        <p>
          Thank you. Our admissions team will review the referral and respond within 24 hours of
          receiving the necessary clinical information.
        </p>
        <Button
          variant="outline"
          className="mt-6 border-green-300 text-green-700 hover:bg-green-100"
          onClick={() => setIsSuccess(false)}
        >
          Submit Another Referral
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 w-full text-left">
      {/* Honeypot */}
      <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Referring Professional */}
      <div className="space-y-4">
        <h4 className="font-semibold text-slate-800 text-lg">Referring Professional</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="proName" className="text-slate-700 font-medium">Name *</Label>
            <Input id="proName" {...register("proName")} className={inputClass} placeholder="Full name" />
            {errors.proName && <p className="text-red-500 text-xs mt-1">{errors.proName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="proAgency" className="text-slate-700 font-medium">Agency / Organization</Label>
            <Input id="proAgency" {...register("proAgency")} className={inputClass} placeholder="Agency or organization" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="proPhone" className="text-slate-700 font-medium">Phone *</Label>
            <Input id="proPhone" type="tel" {...register("proPhone")} className={inputClass} placeholder="(555) 000-0000" />
            {errors.proPhone && <p className="text-red-500 text-xs mt-1">{errors.proPhone.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="proEmail" className="text-slate-700 font-medium">Email *</Label>
            <Input id="proEmail" type="email" {...register("proEmail")} className={inputClass} placeholder="email@example.com" />
            {errors.proEmail && <p className="text-red-500 text-xs mt-1">{errors.proEmail.message}</p>}
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="proRelationship" className="text-slate-700 font-medium">Relationship to Youth</Label>
            <Input id="proRelationship" {...register("proRelationship")} className={inputClass} placeholder="e.g. Therapist, Case Manager, School Counselor" />
          </div>
        </div>
      </div>

      {/* Adolescent Information */}
      <div className="space-y-4 pt-6 border-t border-slate-100">
        <h4 className="font-semibold text-slate-800 text-lg">Adolescent Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="teenName" className="text-slate-700 font-medium">Full Name *</Label>
            <Input id="teenName" {...register("teenName")} className={inputClass} placeholder="Adolescent's full name" />
            {errors.teenName && <p className="text-red-500 text-xs mt-1">{errors.teenName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="teenDob" className="text-slate-700 font-medium">Date of Birth *</Label>
            <Input id="teenDob" type="date" {...register("teenDob")} className={inputClass} />
            {errors.teenDob && <p className="text-red-500 text-xs mt-1">{errors.teenDob.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="teenAge" className="text-slate-700 font-medium">Age</Label>
            <Input id="teenAge" {...register("teenAge")} className={inputClass} placeholder="Age" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="teenGender" className="text-slate-700 font-medium">Gender (optional)</Label>
            <Input id="teenGender" {...register("teenGender")} className={inputClass} placeholder="Gender" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="teenLanguage" className="text-slate-700 font-medium">Primary Language</Label>
            <Input id="teenLanguage" {...register("teenLanguage")} className={inputClass} placeholder="Primary language" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="teenSchool" className="text-slate-700 font-medium">Current School</Label>
            <Input id="teenSchool" {...register("teenSchool")} className={inputClass} placeholder="School name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="teenGrade" className="text-slate-700 font-medium">Grade</Label>
            <Input id="teenGrade" {...register("teenGrade")} className={inputClass} placeholder="Grade" />
          </div>
        </div>
      </div>

      {/* Guardian Information */}
      <div className="space-y-4 pt-6 border-t border-slate-100">
        <h4 className="font-semibold text-slate-800 text-lg">Guardian Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="guardianName" className="text-slate-700 font-medium">Name(s) *</Label>
            <Input id="guardianName" {...register("guardianName")} className={inputClass} placeholder="Guardian name(s)" />
            {errors.guardianName && <p className="text-red-500 text-xs mt-1">{errors.guardianName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="guardianPhone" className="text-slate-700 font-medium">Phone *</Label>
            <Input id="guardianPhone" type="tel" {...register("guardianPhone")} className={inputClass} placeholder="(555) 000-0000" />
            {errors.guardianPhone && <p className="text-red-500 text-xs mt-1">{errors.guardianPhone.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="guardianEmail" className="text-slate-700 font-medium">Email</Label>
            <Input id="guardianEmail" type="email" {...register("guardianEmail")} className={inputClass} placeholder="email@example.com" />
            {errors.guardianEmail && <p className="text-red-500 text-xs mt-1">{errors.guardianEmail.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="legalGuardian" className="text-slate-700 font-medium">Legal Guardian?</Label>
            <select
              id="legalGuardian"
              {...register("legalGuardian")}
              className="flex h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors"
            >
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No — documentation to be provided">No — documentation to be provided</option>
            </select>
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="guardianAddress" className="text-slate-700 font-medium">Address</Label>
            <Input id="guardianAddress" {...register("guardianAddress")} className={inputClass} placeholder="Street, City, State, ZIP" />
          </div>
        </div>
      </div>

      {/* Reason for Referral */}
      <div className="space-y-4 pt-6 border-t border-slate-100">
        <h4 className="font-semibold text-slate-800 text-lg">Reason for Referral</h4>
        <div className="space-y-2">
          <Label htmlFor="clinicalPresentation" className="text-slate-700 font-medium">
            Describe the youth&apos;s clinical presentation and primary concerns *
          </Label>
          <Textarea
            id="clinicalPresentation"
            {...register("clinicalPresentation")}
            className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-amber-500 min-h-[120px] resize-y"
            placeholder="Presenting symptoms, recent events, safety concerns, and what prompted this referral..."
          />
          {errors.clinicalPresentation && (
            <p className="text-red-500 text-xs mt-1">{errors.clinicalPresentation.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-14 rounded-xl bg-sun text-sun-foreground hover:bg-[#32A5DA] hover:text-white font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-4"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting Referral...
          </>
        ) : (
          "Submit Referral"
        )}
      </Button>
    </form>
  );
}
