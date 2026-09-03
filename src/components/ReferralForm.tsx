"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, FileText } from "lucide-react";

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

  // Mental Health History
  currentDiagnosis: z.string().optional(),
  previousTreatment: z.string().optional(),
  currentMedications: z.string().optional(),
  riskSuicidalIdeation: z.boolean().default(false),
  riskSelfHarm: z.boolean().default(false),
  riskAggression: z.boolean().default(false),
  riskElopement: z.boolean().default(false),
  riskSubstanceUse: z.boolean().default(false),
  riskOther: z.string().optional(),

  // Submitted By
  submittedBy: z.string().min(2, "Required"),
  submittedDate: z.string().optional(),

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
      riskSuicidalIdeation: false,
      riskSelfHarm: false,
      riskAggression: false,
      riskElopement: false,
      riskSubstanceUse: false,
      website: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (data.website) return;
    setIsSubmitting(true);

    const risks = [
      data.riskSuicidalIdeation && "Suicidal ideation",
      data.riskSelfHarm && "Self-harm",
      data.riskAggression && "Aggression",
      data.riskElopement && "Elopement risk",
      data.riskSubstanceUse && "Substance use concerns",
      data.riskOther && `Other: ${data.riskOther}`,
    ]
      .filter(Boolean)
      .join(", ");

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

MENTAL HEALTH HISTORY
Current Diagnosis: ${data.currentDiagnosis || "N/A"}
Previous Treatment: ${data.previousTreatment || "N/A"}
Current Medications: ${data.currentMedications || "N/A"}
Risk Concerns: ${risks || "None indicated"}

REFERRAL SUBMITTED BY
Name: ${data.submittedBy}
Date: ${data.submittedDate || "N/A"}
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

      {/* Mental Health History */}
      <div className="space-y-4 pt-6 border-t border-slate-100">
        <h4 className="font-semibold text-slate-800 text-lg">Mental Health History</h4>
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="currentDiagnosis" className="text-slate-700 font-medium">Current Diagnosis (if known)</Label>
            <Input id="currentDiagnosis" {...register("currentDiagnosis")} className={inputClass} placeholder="Diagnosis" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="previousTreatment" className="text-slate-700 font-medium">Previous Treatment (therapy, RTC, inpatient, etc.)</Label>
            <Textarea
              id="previousTreatment"
              {...register("previousTreatment")}
              className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-amber-500 min-h-[80px] resize-y"
              placeholder="Prior levels of care, dates, and outcomes"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="currentMedications" className="text-slate-700 font-medium">Current Medications</Label>
            <Input id="currentMedications" {...register("currentMedications")} className={inputClass} placeholder="Medication list" />
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <p className="text-slate-700 font-medium text-sm">Risk Concerns</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: "riskSuicidalIdeation", label: "Suicidal ideation" },
              { id: "riskSelfHarm", label: "Self-harm" },
              { id: "riskAggression", label: "Aggression" },
              { id: "riskElopement", label: "Elopement risk" },
              { id: "riskSubstanceUse", label: "Substance use concerns" },
            ].map((risk) => (
              <label key={risk.id} htmlFor={risk.id} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 cursor-pointer hover:bg-slate-100 transition-colors">
                <input
                  type="checkbox"
                  id={risk.id}
                  {...register(risk.id as keyof FormValues)}
                  className="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-500"
                />
                <span className="text-sm text-slate-700">{risk.label}</span>
              </label>
            ))}
          </div>
          <div className="space-y-2">
            <Label htmlFor="riskOther" className="text-slate-700 font-medium">Other risk concerns</Label>
            <Input id="riskOther" {...register("riskOther")} className={inputClass} placeholder="Describe any other concerns" />
          </div>
        </div>
      </div>

      {/* Supporting Documentation */}
      <div className="space-y-3 pt-6 border-t border-slate-100">
        <h4 className="font-semibold text-slate-800 text-lg">Supporting Documentation</h4>
        <p className="text-sm text-slate-500 leading-relaxed">
          If available, please send psychological evaluations, IEP / 504 documents, behavior plans,
          treatment summaries, medication lists, and court or placement paperwork to our admissions
          team by secure fax at <span className="font-medium text-slate-700">559-777-9929</span> or
          secure email at{" "}
          <a href="mailto:referrals@teenharbor.com" className="font-medium text-amber-600 hover:underline">
            referrals@teenharbor.com
          </a>
          .
        </p>
        <div className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-100 p-4">
          <FileText className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-500 leading-relaxed">
            All information shared is kept confidential and used solely to determine the appropriate
            level of care. Submitting this form does not guarantee admission.
          </p>
        </div>
      </div>

      {/* Referral Submitted By */}
      <div className="space-y-4 pt-6 border-t border-slate-100">
        <h4 className="font-semibold text-slate-800 text-lg">Referral Submitted By</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="submittedBy" className="text-slate-700 font-medium">Name *</Label>
            <Input id="submittedBy" {...register("submittedBy")} className={inputClass} placeholder="Your name" />
            {errors.submittedBy && <p className="text-red-500 text-xs mt-1">{errors.submittedBy.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="submittedDate" className="text-slate-700 font-medium">Date</Label>
            <Input id="submittedDate" type="date" {...register("submittedDate")} className={inputClass} />
          </div>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-14 rounded-xl bg-[#F97316] text-white hover:bg-[#32A5DA] font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-4"
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
