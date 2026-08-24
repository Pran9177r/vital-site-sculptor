import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Teen Harbor",
  description: "Terms of Service for Teen Harbor",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-5">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
          <div className="prose prose-slate max-w-none">
            <p className="lead text-lg text-slate-600 mb-6">
              Welcome to Teen Harbor. By accessing or using our website and services, you agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 mb-6">
              Please read these terms carefully before using our website. By using the site, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree to these terms, please do not use our website.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">2. Medical Disclaimer</h2>
            <p className="text-slate-600 mb-6">
              The content provided on the Teen Harbor website is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">3. Use of Services</h2>
            <p className="text-slate-600 mb-6">
              You agree to use our website and services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">4. Intellectual Property</h2>
            <p className="text-slate-600 mb-6">
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Teen Harbor and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
            </p>
            
            <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-sm text-slate-500 italic">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
