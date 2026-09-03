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

const formSchema = z.object({
  supportType: z.string().min(1, "Please select support type"),
  childFirstName: z.string().min(2, "Required"),
  childLastName: z.string().min(2, "Required"),
  childDob: z.string().min(2, "Required"),
  childZip: z.string().min(5, "Required"),
  parentFirstName: z.string().min(2, "Required"),
  parentLastName: z.string().min(2, "Required"),
  parentPhone: z.string().min(10, "Required"),
  parentEmail: z.string().email("Invalid email"),
  noInsurance: z.boolean().default(false),
  insuranceCompany: z.string().optional(),
  secondaryInsurance: z.string().optional(),
  policyNumber: z.string().optional(),
  referralSource: z.string().optional(),
  message: z.string().optional(),
  smsConsent: z.boolean().refine(val => val === true, { message: "You must agree to receive SMS" }),
  // Honeypot field for basic spam protection
  website: z.string().max(0, "Invalid submission"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      noInsurance: false,
      smsConsent: false,
      website: "", // honeypot
    }
  });

  const noInsurance = watch("noInsurance");

  const onSubmit = async (data: FormValues) => {
    // If honeypot is filled, silently reject
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
          subject: "New Referral / Admissions Request - Teen Harbor",
          from_name: "Teen Harbor Website",
          name: `${data.parentFirstName} ${data.parentLastName}`,
          email: data.parentEmail,
          phone: data.parentPhone,
          message: `
Type of Support: ${data.supportType}

CHILD/PATIENT INFORMATION
Name: ${data.childFirstName} ${data.childLastName}
DOB: ${data.childDob}
Zip Code: ${data.childZip}

PARENT/GUARDIAN INFORMATION
Name: ${data.parentFirstName} ${data.parentLastName}
Phone: ${data.parentPhone}
Email: ${data.parentEmail}

INSURANCE INFORMATION
No Insurance: ${data.noInsurance ? 'Yes' : 'No'}
Primary Company: ${data.insuranceCompany || 'N/A'}
Policy Number: ${data.policyNumber || 'N/A'}
Secondary Insurance: ${data.secondaryInsurance || 'N/A'}

ADDITIONAL DETAILS
Referral Source: ${data.referralSource || 'N/A'}
Description: ${data.message || 'N/A'}
SMS Consent: ${data.smsConsent ? 'Yes' : 'No'}
          `,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        console.error("Form submission failed:", result.message);
      }
    } catch (error) {
      console.error("Failed to submit form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 text-green-800 p-8 rounded-2xl text-center border border-green-200">
        <h3 className="text-2xl font-semibold mb-2">Request Received</h3>
        <p>Thank you for reaching out to Teen Harbor. Our admissions team will be in touch with you shortly.</p>
        <Button 
          variant="outline" 
          className="mt-6 border-green-300 text-green-700 hover:bg-green-100"
          onClick={() => setIsSuccess(false)}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-full max-w-3xl mx-auto text-left">
      {/* Honeypot */}
      <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Support Type */}
      <div className="space-y-3">
        <Label htmlFor="supportType" className="text-slate-700 font-semibold text-base">Type of support needed *</Label>
        <select 
          id="supportType"
          {...register("supportType")}
          className="flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors"
        >
          <option value="">Select an option...</option>
          <option value="Residential Treatment">Residential Treatment</option>
          <option value="General Inquiry / Information">General Inquiry / Information</option>
          <option value="Insurance Verification">Insurance Verification</option>
          <option value="Other">Other</option>
        </select>
        {errors.supportType && <p className="text-red-500 text-xs mt-1">{errors.supportType.message}</p>}
      </div>

      {/* Child Information */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <h4 className="font-semibold text-slate-800 text-lg">Child / Patient Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="childFirstName" className="text-slate-700 font-medium">First Name *</Label>
            <Input id="childFirstName" {...register("childFirstName")} className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-amber-500 h-11" placeholder="First Name" />
            {errors.childFirstName && <p className="text-red-500 text-xs mt-1">{errors.childFirstName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="childLastName" className="text-slate-700 font-medium">Last Name *</Label>
            <Input id="childLastName" {...register("childLastName")} className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-amber-500 h-11" placeholder="Last Name" />
            {errors.childLastName && <p className="text-red-500 text-xs mt-1">{errors.childLastName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="childDob" className="text-slate-700 font-medium">Date of Birth *</Label>
            <Input id="childDob" type="date" {...register("childDob")} className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-amber-500 h-11" />
            {errors.childDob && <p className="text-red-500 text-xs mt-1">{errors.childDob.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="childZip" className="text-slate-700 font-medium">Zip Code *</Label>
            <Input id="childZip" {...register("childZip")} className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-amber-500 h-11" placeholder="e.g. 93706" />
            {errors.childZip && <p className="text-red-500 text-xs mt-1">{errors.childZip.message}</p>}
          </div>
        </div>
      </div>

      {/* Parent Information */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <h4 className="font-semibold text-slate-800 text-lg">Parent / Guardian Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="parentFirstName" className="text-slate-700 font-medium">First Name *</Label>
            <Input id="parentFirstName" {...register("parentFirstName")} className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-amber-500 h-11" placeholder="First Name" />
            {errors.parentFirstName && <p className="text-red-500 text-xs mt-1">{errors.parentFirstName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="parentLastName" className="text-slate-700 font-medium">Last Name *</Label>
            <Input id="parentLastName" {...register("parentLastName")} className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-amber-500 h-11" placeholder="Last Name" />
            {errors.parentLastName && <p className="text-red-500 text-xs mt-1">{errors.parentLastName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="parentPhone" className="text-slate-700 font-medium">Mobile Phone *</Label>
            <Input id="parentPhone" type="tel" {...register("parentPhone")} className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-amber-500 h-11" placeholder="(555) 000-0000" />
            {errors.parentPhone && <p className="text-red-500 text-xs mt-1">{errors.parentPhone.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="parentEmail" className="text-slate-700 font-medium">Email Address *</Label>
            <Input id="parentEmail" type="email" {...register("parentEmail")} className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-amber-500 h-11" placeholder="email@example.com" />
            {errors.parentEmail && <p className="text-red-500 text-xs mt-1">{errors.parentEmail.message}</p>}
          </div>
        </div>
      </div>

      {/* Insurance Information */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <h4 className="font-semibold text-slate-800 text-lg">Insurance Information</h4>
        <div className="flex items-center space-x-2 mb-2">
          <input 
            type="checkbox" 
            id="noInsurance" 
            {...register("noInsurance")}
            className="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-500"
          />
          <Label htmlFor="noInsurance" className="text-slate-700 font-medium cursor-pointer">No insurance available</Label>
        </div>

        {!noInsurance && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="insuranceCompany" className="text-slate-700 font-medium">Primary Insurance Company</Label>
              <Input id="insuranceCompany" {...register("insuranceCompany")} className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-amber-500 h-11" placeholder="e.g. Aetna, BlueShield" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="policyNumber" className="text-slate-700 font-medium">Policy Number / Member ID</Label>
              <Input id="policyNumber" {...register("policyNumber")} className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-amber-500 h-11" placeholder="Policy Number" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="secondaryInsurance" className="text-slate-700 font-medium">Secondary Insurance Provider (Optional)</Label>
              <Input id="secondaryInsurance" {...register("secondaryInsurance")} className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-amber-500 h-11" placeholder="Secondary Insurance Company" />
            </div>
          </div>
        )}
      </div>

      {/* Details & Disclaimers */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <div className="space-y-2">
          <Label htmlFor="referralSource" className="text-slate-700 font-medium">How did you hear about Teen Harbor?</Label>
          <select 
            id="referralSource"
            {...register("referralSource")}
            className="flex h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors"
          >
            <option value="">Select an option...</option>
            <option value="Healthcare Provider">Healthcare Provider</option>
            <option value="Insurance Company">Insurance Company</option>
            <option value="Online Search">Online Search</option>
            <option value="Friend or Family">Friend or Family</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-slate-700 font-medium">Brief Description or Additional Details</Label>
          <Textarea 
            id="message"
            {...register("message")}
            className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-amber-500 min-h-[100px] resize-y" 
            placeholder="Please briefly describe your situation..."
          />
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-6">
          <div className="flex items-start space-x-3">
            <input 
              type="checkbox" 
              id="smsConsent" 
              {...register("smsConsent")}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-500"
            />
            <div className="space-y-1">
              <Label htmlFor="smsConsent" className="text-slate-800 font-medium cursor-pointer">SMS Consent *</Label>
              <p className="text-xs text-slate-500 leading-relaxed">
                By checking this box, I consent to receive text messages from Teen Harbor regarding admissions, scheduling, and communication related to care. Message & data rates may apply. Reply STOP to opt out.
              </p>
              {errors.smsConsent && <p className="text-red-500 text-xs">{errors.smsConsent.message}</p>}
            </div>
          </div>
        </div>
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full h-14 rounded-xl bg-[#F97316] text-white hover:bg-[#32A5DA] font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-8"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending Request...
          </>
        ) : (
          "Submit Referral"
        )}
      </Button>
    </form>
  );
}
