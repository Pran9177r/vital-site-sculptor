"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone } from "lucide-react";

export function ContactForm() {
  const [showMaintenance, setShowMaintenance] = useState(false);

  return (
    <>
      <div className="relative w-full max-w-2xl mx-auto">
        {/* Intercept Overlay */}
        <div 
          className="absolute inset-0 z-10 cursor-pointer rounded-2xl hover:bg-slate-50/30 transition-colors" 
          onClick={() => setShowMaintenance(true)}
          aria-label="Form temporarily disabled for maintenance"
        />
        
        {/* Visual Form */}
        <form className="space-y-6 opacity-80 pointer-events-none select-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 text-left">
              <Label className="text-slate-700 font-medium">First Name</Label>
              <Input className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400" placeholder="Jane" readOnly />
            </div>
            <div className="space-y-2 text-left">
              <Label className="text-slate-700 font-medium">Last Name</Label>
              <Input className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400" placeholder="Doe" readOnly />
            </div>
          </div>
          <div className="space-y-2 text-left">
            <Label className="text-slate-700 font-medium">Email Address</Label>
            <Input className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400" placeholder="jane@example.com" readOnly />
          </div>
          <div className="space-y-2 text-left">
            <Label className="text-slate-700 font-medium">Phone Number</Label>
            <Input className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400" placeholder="(559) 000-0000" readOnly />
          </div>
          <div className="space-y-2 text-left">
            <Label className="text-slate-700 font-medium">How can we help?</Label>
            <Textarea className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 min-h-[120px]" placeholder="Please describe your situation briefly..." readOnly />
          </div>
          <Button 
            type="button" 
            className="w-full h-14 rounded-full bg-sun text-sun-foreground hover:bg-primary hover:text-primary-foreground font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg"
          >
            Send Message
          </Button>
        </form>
      </div>

      <Dialog open={showMaintenance} onOpenChange={setShowMaintenance}>
        <DialogContent className="sm:max-w-2xl bg-white p-10 md:p-14 rounded-[2rem] border-amber-100 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 text-center">Secure Portal Maintenance</DialogTitle>
            <DialogDescription className="text-xl md:text-2xl leading-relaxed text-slate-700 text-center mt-4">
              Our online secure submission portal is currently undergoing scheduled maintenance. For immediate admissions inquiries, please call our team directly.
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
