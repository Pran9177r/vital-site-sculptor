import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Teen Harbor",
  description: "Privacy Policy for Teen Harbor",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-5">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none">
            <p className="lead text-lg text-slate-600 mb-6">
              At Teen Harbor, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">1. Information We Collect</h2>
            <p className="text-slate-600 mb-6">
              We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, when you participate in activities on the website, or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-600 mb-6">
              We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">3. HIPAA Compliance</h2>
            <p className="text-slate-600 mb-6">
              As a healthcare provider, we are committed to maintaining the privacy and security of your Protected Health Information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA). A separate Notice of Privacy Practices detailing our HIPAA compliance will be provided during the admissions process.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">4. Contact Us</h2>
            <p className="text-slate-600 mb-6">
              If you have questions or comments about this notice, you may email us at info@teenharbor.com or contact us by post at our facility address.
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
