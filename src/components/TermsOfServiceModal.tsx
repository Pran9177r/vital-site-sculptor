"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface TermsOfServiceModalProps {
  open: boolean;
  onClose: () => void;
}

export function TermsOfServiceModal({ open, onClose }: TermsOfServiceModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200"
              aria-label="Close terms of service"
            >
              <X className="h-5 w-5" />
            </button>

            <div data-lenis-prevent className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-8 sm:p-10 md:p-12">
              <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Terms of Service</h1>
              <p className="mt-3 text-sm text-slate-500">
                Effective Date: August 1, 2026<br />
                Last Updated: August 1, 2026
              </p>

              <div className="mt-8 max-w-none [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-slate-600 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_li]:leading-relaxed [&_li]:text-slate-600">
                <p>
                  Welcome to the website of Teen Harbor Behavioral Health (&ldquo;Teen Harbor,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of Teen Harbor&apos;s website, online forms, resources, and other website-based services (collectively, the &ldquo;Website&rdquo;).
                </p>
                <p>
                  By accessing or using this Website, you acknowledge that you have read, understood, and agree to these Terms. If you do not agree with these Terms, please discontinue use of the Website.
                </p>

                <h2>1. About Teen Harbor Behavioral Health</h2>
                <p>
                  Teen Harbor Behavioral Health provides residential behavioral health treatment and related services for adolescents. Information provided through this Website is intended to help individuals, parents and guardians, healthcare professionals, referral partners, and other visitors learn about Teen Harbor and its services.
                </p>
                <p>
                  Information on this Website does not guarantee admission, eligibility, insurance authorization, coverage, reimbursement, or a particular treatment outcome.
                </p>

                <h2>2. Website Information Is Not Medical Advice</h2>
                <p>Information provided on this Website is for general informational and educational purposes only.</p>
                <p>
                  Website content is not intended to constitute medical, psychiatric, psychological, substance use disorder, legal, or other professional advice and should not be used as a substitute for evaluation, diagnosis, or treatment by an appropriately qualified healthcare professional.
                </p>
                <p>
                  Use of this Website does not establish a provider-patient, therapist-client, or other clinical relationship between you or your child and Teen Harbor or any Teen Harbor employee, contractor, clinician, or affiliated provider.
                </p>
                <p>A clinical relationship is established only through Teen Harbor&apos;s applicable admission, consent, and treatment processes.</p>

                <h2>3. Not for Emergencies or Crisis Services</h2>
                <p>This Website is not an emergency or crisis response service and should not be used to request emergency assistance.</p>
                <p>
                  Teen Harbor cannot guarantee that website forms, email messages, voicemail messages, or other electronic communications will be reviewed immediately.
                </p>
                <p>
                  If you or another person is experiencing a medical or psychiatric emergency, is in immediate danger, or may harm themselves or another person, contact 911 or go to the nearest emergency department.
                </p>
                <p>Do not rely on this Website, a contact form, or email communication for time-sensitive emergency assistance.</p>

                <h2>4. Admissions and Eligibility</h2>
                <p>
                  Submitting an inquiry, referral, contact form, insurance information, or other information through this Website does not constitute admission to Teen Harbor.
                </p>
                <p>
                  Admission may be subject to clinical assessment, program criteria, age and service requirements, safety considerations, availability, financial arrangements, insurance authorization, and other applicable requirements.
                </p>
                <p>Teen Harbor reserves the right to determine whether its program is clinically and operationally appropriate for a prospective client.</p>

                <h2>5. Insurance and Payment Information</h2>
                <p>
                  References to insurance companies, insurance coverage, benefits, reimbursement, or payment arrangements on this Website are provided for informational purposes only.
                </p>
                <p>Verification of benefits is not a guarantee of coverage or payment.</p>
                <p>
                  Insurance coverage and authorization decisions are made by the applicable insurance company or other payor and may depend on medical necessity, eligibility, plan requirements, authorization, deductibles, copayments, coinsurance, exclusions, and other factors.
                </p>
                <p>Patients, parents, guardians, or financially responsible parties remain responsible for understanding their applicable financial obligations.</p>

                <h2>6. Website Forms and Electronic Communications</h2>
                <p>
                  Teen Harbor may provide online forms or electronic methods for requesting information, making referrals, contacting admissions, or communicating with our organization.
                </p>
                <p>Please provide accurate information when using these features.</p>
                <p>
                  Electronic communications may involve privacy and security risks. Users should avoid submitting unnecessary sensitive information through general contact forms, standard email, or other communication methods that are not specifically identified as secure.
                </p>
                <p>
                  Information submitted to Teen Harbor may be handled in accordance with applicable federal and California privacy laws and Teen Harbor policies.
                </p>

                <h2>7. Privacy and Health Information</h2>
                <p>Your use of this Website is also subject to our Privacy Policy.</p>
                <p>
                  Certain information collected in connection with treatment or healthcare operations may constitute protected health information (&ldquo;PHI&rdquo;) and may be governed by the Health Insurance Portability and Accountability Act (&ldquo;HIPAA&rdquo;), applicable California law, and Teen Harbor&apos;s Notice of Privacy Practices, where applicable.
                </p>
                <p>The Website Privacy Policy is not intended to replace Teen Harbor&apos;s HIPAA Notice of Privacy Practices.</p>

                <h2>8. Information Concerning Minors</h2>
                <p>
                  Teen Harbor provides services involving adolescents. However, this Website is primarily intended for use by adults, including parents, legal guardians, healthcare professionals, referral sources, and other individuals seeking information about Teen Harbor.
                </p>
                <p>
                  Minors should not independently submit sensitive personal, medical, or behavioral health information through general Website forms without the involvement of a parent, legal guardian, or other legally authorized individual, except where otherwise permitted by applicable law.
                </p>
                <p>Teen Harbor will handle information concerning minors in accordance with applicable federal and California law.</p>

                <h2>9. Appropriate Use of the Website</h2>
                <p>You agree not to:</p>
                <ul>
                  <li>Use the Website for unlawful, fraudulent, abusive, or harmful purposes;</li>
                  <li>Attempt to gain unauthorized access to Teen Harbor&apos;s systems or information;</li>
                  <li>Interfere with the operation or security of the Website;</li>
                  <li>Introduce malicious software, viruses, or harmful code;</li>
                  <li>Impersonate another person or misrepresent your identity or authority;</li>
                  <li>Submit information that you do not have the legal authority to provide; or</li>
                  <li>Use Website content in a manner that infringes Teen Harbor&apos;s or another party&apos;s intellectual property or other legal rights.</li>
                </ul>
                <p>
                  Teen Harbor may restrict or terminate Website access when reasonably necessary to protect the organization, its clients, its systems, or other users.
                </p>

                <h2>10. Intellectual Property</h2>
                <p>
                  Unless otherwise stated, Website content—including text, graphics, logos, branding, photographs, videos, design elements, downloadable materials, and other content—is owned by or licensed to Teen Harbor and is protected by applicable intellectual property laws.
                </p>
                <p>You may access and use Website materials for personal, noncommercial informational purposes.</p>
                <p>
                  No Website content may be copied, reproduced, republished, distributed, modified, sold, or commercially exploited without prior written authorization from Teen Harbor, except as permitted by law.
                </p>

                <h2>11. Third-Party Websites and Services</h2>
                <p>
                  The Website may contain links to third-party websites, resources, insurance companies, healthcare organizations, social media platforms, or other services.
                </p>
                <p>
                  Teen Harbor does not control third-party websites and is not responsible for their content, security, privacy practices, availability, or services.
                </p>
                <p>A link to a third-party resource does not necessarily constitute an endorsement.</p>

                <h2>12. Website Availability and Accuracy</h2>
                <p>
                  Teen Harbor makes reasonable efforts to provide useful and accurate information but does not warrant that Website information will always be complete, current, accurate, or error-free.
                </p>
                <p>
                  Programs, services, eligibility requirements, staffing, availability, insurance participation, and other information may change without notice.
                </p>
                <p>Teen Harbor may modify, suspend, or discontinue any portion of the Website at any time.</p>

                <h2>13. Disclaimer of Warranties</h2>
                <p>
                  To the extent permitted by law, the Website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
                </p>
                <p>
                  Teen Harbor makes no warranties, express or implied, regarding Website availability, accuracy, reliability, security, suitability, or fitness for a particular purpose.
                </p>
                <p>Nothing in these Terms limits rights or protections that cannot legally be waived under applicable law.</p>

                <h2>14. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by applicable law, Teen Harbor and its owners, officers, employees, contractors, agents, and affiliates will not be liable for indirect, incidental, special, consequential, or punitive damages arising from or relating to use of, or inability to use, this Website.
                </p>
                <p>This limitation does not apply where liability cannot legally be excluded or limited.</p>

                <h2>15. Changes to These Terms</h2>
                <p>
                  Teen Harbor may update these Terms periodically to reflect changes in our Website, operations, services, or legal requirements.
                </p>
                <p>
                  The revised Terms will be posted on this Website with an updated &ldquo;Last Updated&rdquo; date. Continued use of the Website after an update constitutes acceptance of the revised Terms to the extent permitted by law.
                </p>

                <h2>16. Governing Law</h2>
                <p>These Terms are governed by the laws of the State of California, without regard to conflict-of-law principles.</p>
                <p>Any dispute relating to these Terms or use of the Website will be subject to applicable California and federal law.</p>

                <h2>17. Contact Teen Harbor</h2>
                <p>Questions regarding these Terms may be directed to:</p>
                <p>
                  Teen Harbor Behavioral Health<br />
                  Fresno, California<br />
                  Email: info@teenharbor.com<br />
                  Phone: 559-234-1001
                </p>
                <p className="mt-6 rounded-xl bg-slate-50 p-4 text-sm italic text-slate-500">
                  IMPORTANT: These Website Terms of Service concern use of Teen Harbor&apos;s public Website and are not a substitute for admission agreements, consent forms, financial agreements, treatment agreements, HIPAA notices, or other documents applicable to clients receiving services from Teen Harbor.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
