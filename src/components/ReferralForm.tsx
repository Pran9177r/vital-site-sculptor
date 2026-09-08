"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone } from "lucide-react";

export function ReferralForm() {
  const [showMaintenance, setShowMaintenance] = useState(false);
  const inputClass = "bg-white border-slate-200 focus-visible:ring-0";

  return (
    <>
      <div className="relative w-full">
        {/* Intercept Overlay */}
        <div 
          className="absolute inset-0 z-10 cursor-pointer rounded-2xl bg-slate-50/10 hover:bg-slate-100/20 transition-colors" 
          onClick={() => setShowMaintenance(true)}
          aria-label="Form temporarily disabled for maintenance"
        />
        
        {/* Visual Form */}
        <form className="space-y-8 opacity-70 pointer-events-none select-none text-left">
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800 text-lg">Adolescent Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">First Name</Label>
                <Input className={inputClass} placeholder="Legal first name" readOnly />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Last Name</Label>
                <Input className={inputClass} placeholder="Legal last name" readOnly />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Date of Birth</Label>
                <Input type="date" className={inputClass} readOnly />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h4 className="font-semibold text-slate-800 text-lg">Parent / Legal Guardian Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Guardian Name</Label>
                <Input className={inputClass} placeholder="Full name" readOnly />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Relationship to Youth</Label>
                <Input className={inputClass} placeholder="Mother, Father, etc." readOnly />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Phone Number</Label>
                <Input className={inputClass} placeholder="(555) 000-0000" readOnly />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Email</Label>
                <Input className={inputClass} placeholder="email@example.com" readOnly />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h4 className="font-semibold text-slate-800 text-lg">Reason for Referral</h4>
            <div className="space-y-2">
              <Label className="text-slate-700 font-medium">Describe the primary concerns</Label>
              <Textarea className="bg-white border-slate-200 min-h-[120px]" placeholder="Presenting symptoms, recent events, safety concerns..." readOnly />
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h4 className="font-semibold text-slate-800 text-lg">Mental Health History</h4>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Current Diagnosis (if known)</Label>
                <Input className={inputClass} placeholder="Diagnosis" readOnly />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Current Medications</Label>
                <Input className={inputClass} placeholder="Medication list" readOnly />
              </div>
            </div>
          </div>

          <Button
            type="button"
            className="w-full h-14 rounded-xl bg-[#F97316] text-white font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
          >
            Submit Referral
          </Button>
        </form>
      </div>

      <Dialog open={showMaintenance} onOpenChange={setShowMaintenance}>
        <DialogContent className="sm:max-w-2xl bg-white p-10 md:p-14 rounded-[2rem] border-amber-100 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 text-center">Secure Portal Maintenance</DialogTitle>
            <DialogDescription className="text-xl md:text-2xl leading-relaxed text-slate-700 text-center mt-4">
              Our online secure submission portal is currently undergoing scheduled maintenance. For immediate admissions inquiries or to make a referral over the phone, please call our team directly.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-8 md:mt-10">
            <a 
              href="tel:5592341001" 
              className="inline-flex items-center gap-3 bg-[#32A5DA] text-white px-8 py-4 rounded-full font-bold text-xl md:text-2xl hover:bg-[#258ab8] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Phone className="w-6 h-6 md:w-7 md:h-7" />
              559-234-1001
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
