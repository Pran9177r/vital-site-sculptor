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
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  // Honeypot field for basic spam protection
  website: z.string().max(0, "Invalid submission"),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      website: "", // honeypot
    }
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // If honeypot is filled, silently reject
    if (data.website) return;

    setIsSubmitting(true);
    
    try {
      // In a real application, you would POST this to your API route
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Failed to submit form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 text-green-800 p-8 rounded-2xl text-center border border-green-200">
        <h3 className="text-2xl font-semibold mb-2">Message Sent</h3>
        <p>Thank you for reaching out to Teen Harbor. Our admissions team will be in touch with you shortly.</p>
        <Button 
          variant="outline" 
          className="mt-6 border-green-300 text-green-700 hover:bg-green-100"
          onClick={() => setIsSuccess(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-2xl mx-auto">
      {/* Honeypot */}
      <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-white">First Name</Label>
          <Input 
            id="firstName"
            {...register("firstName")}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white focus:ring-white" 
            placeholder="Jane"
          />
          {errors.firstName && <p className="text-red-300 text-xs mt-1">{errors.firstName.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-white">Last Name</Label>
          <Input 
            id="lastName"
            {...register("lastName")}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white focus:ring-white" 
            placeholder="Doe"
          />
          {errors.lastName && <p className="text-red-300 text-xs mt-1">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">Email Address</Label>
        <Input 
          id="email"
          type="email"
          {...register("email")}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white focus:ring-white" 
          placeholder="jane@example.com"
        />
        {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-white">Phone Number</Label>
        <Input 
          id="phone"
          type="tel"
          {...register("phone")}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white focus:ring-white" 
          placeholder="(559) 000-0000"
        />
        {errors.phone && <p className="text-red-300 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-white">How can we help?</Label>
        <Textarea 
          id="message"
          {...register("message")}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white focus:ring-white min-h-[120px]" 
          placeholder="Please describe your situation briefly..."
        />
        {errors.message && <p className="text-red-300 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full h-14 rounded-full bg-sun text-sun-foreground hover:bg-primary hover:text-primary-foreground font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
