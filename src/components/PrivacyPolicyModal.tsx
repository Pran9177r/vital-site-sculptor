"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface PrivacyPolicyModalProps {
  open: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ open, onClose }: PrivacyPolicyModalProps) {
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
              aria-label="Close privacy policy"
            >
              <X className="h-5 w-5" />
            </button>

            <div data-lenis-prevent className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-8 sm:p-10 md:p-12">
              <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Privacy Policy</h1>
              <p className="mt-3 text-sm text-slate-500">
                Effective Date: August 1, 2026<br />
                Last Updated: August 1, 2026
              </p>

              <div className="mt-8 max-w-none [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-slate-600 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_li]:leading-relaxed [&_li]:text-slate-600">
                <p>
                  Teen Harbor Behavioral Health (&ldquo;Teen Harbor,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects the privacy of individuals who visit our website, contact our organization, inquire about treatment, or submit information through our online services.
                </p>
                <p>
                  This Privacy Policy describes how Teen Harbor may collect, use, disclose, and protect information obtained through our public website (&ldquo;Website&rdquo;).
                </p>

                <h2>1. Scope of This Privacy Policy</h2>
                <p>
                  This Privacy Policy applies primarily to information collected through Teen Harbor&apos;s public Website, including contact forms, referral inquiries, admissions inquiries, newsletter or informational requests, and Website usage information.
                </p>
                <p>
                  Information created, received, maintained, or transmitted by Teen Harbor in connection with healthcare services may be subject to additional protections under the Health Insurance Portability and Accountability Act (&ldquo;HIPAA&rdquo;), California medical privacy laws, and other applicable laws.
                </p>
                <p>
                  Where applicable, the use and disclosure of protected health information (&ldquo;PHI&rdquo;) is governed by Teen Harbor&apos;s Notice of Privacy Practices.
                </p>
                <p>
                  If there is a conflict between this Website Privacy Policy and legal requirements applicable to protected health information, the applicable legal requirements and Notice of Privacy Practices will control.
                </p>

                <h2>2. Information We May Collect</h2>
                <p>Depending on how you interact with the Website, we may collect information such as:</p>
                <ul>
                  <li>Name;</li>
                  <li>Telephone number;</li>
                  <li>Email address;</li>
                  <li>Parent or guardian information;</li>
                  <li>Prospective client information;</li>
                  <li>Age or date of birth when voluntarily provided;</li>
                  <li>Referral source information;</li>
                  <li>Insurance or payor information;</li>
                  <li>General information regarding the reason treatment is being sought;</li>
                  <li>Information voluntarily included in a Website form or communication;</li>
                  <li>IP address;</li>
                  <li>Browser and device information;</li>
                  <li>Website activity and usage information;</li>
                  <li>Referring website information; and</li>
                  <li>Cookie or similar technology information.</li>
                </ul>
                <p>
                  Please do not submit unnecessary medical, psychiatric, substance use disorder, or other highly sensitive information through a general Website contact form.
                </p>

                <h2>3. Information About Prospective Clients and Minors</h2>
                <p>
                  Because Teen Harbor provides adolescent behavioral health services, information submitted by parents, guardians, healthcare professionals, referral sources, or other authorized individuals may concern a minor.
                </p>
                <p>Teen Harbor takes the privacy of information concerning minors seriously.</p>
                <p>
                  Our public Website is primarily intended for adults seeking information about Teen Harbor. Minors should not independently provide sensitive health or personal information through general Website forms without appropriate adult involvement, except where applicable law permits otherwise.
                </p>
                <p>Information regarding minors will be handled in accordance with applicable federal and California privacy laws.</p>

                <h2>4. How We Use Information</h2>
                <p>Teen Harbor may use Website information to:</p>
                <ul>
                  <li>Respond to inquiries;</li>
                  <li>Communicate with prospective clients, parents, guardians, or referral sources;</li>
                  <li>Evaluate potential referrals or requests for services;</li>
                  <li>Coordinate admissions inquiries;</li>
                  <li>Verify or obtain information concerning insurance benefits when authorized and appropriate;</li>
                  <li>Provide requested information about Teen Harbor&apos;s programs and services;</li>
                  <li>Operate and improve the Website;</li>
                  <li>Maintain Website security;</li>
                  <li>Analyze Website performance and visitor activity;</li>
                  <li>Meet legal, licensing, accreditation, regulatory, or compliance obligations;</li>
                  <li>Prevent fraud, misuse, or security incidents; and</li>
                  <li>Carry out other purposes disclosed at the time information is collected or otherwise permitted by law.</li>
                </ul>

                <h2>5. Protected Health Information</h2>
                <p>
                  Certain information may become PHI when it is received, created, or maintained by Teen Harbor in its capacity as a healthcare provider or otherwise falls within applicable healthcare privacy laws.
                </p>
                <p>Teen Harbor maintains policies and procedures designed to safeguard PHI as required by applicable law.</p>
                <p>
                  Our HIPAA Notice of Privacy Practices provides additional information regarding how PHI may be used and disclosed and describes applicable privacy rights.
                </p>

                <h2>6. Substance Use Disorder Information</h2>
                <p>
                  Information relating to substance use disorder treatment may be subject to heightened confidentiality protections under federal or state law, including 42 C.F.R. Part 2 where applicable.
                </p>
                <p>Teen Harbor handles information subject to these requirements in accordance with applicable confidentiality laws.</p>
                <p>
                  Submission of information through a general Website inquiry does not necessarily mean that the information constitutes a treatment record or record protected by 42 C.F.R. Part 2.
                </p>

                <h2>7. Cookies and Website Analytics</h2>
                <p>
                  Teen Harbor may use cookies, analytics tools, pixels, or similar technologies to understand how visitors interact with the Website and to improve Website functionality.
                </p>
                <p>
                  These technologies may collect information such as browser type, device type, IP address, pages visited, time spent on pages, referring pages, and general Website activity.
                </p>
                <p>
                  Because Teen Harbor operates in the healthcare field, we seek to use Website technologies in a manner consistent with applicable privacy requirements.
                </p>
                <p>
                  Teen Harbor does not intentionally use Website tracking technologies to disclose protected health information to advertising platforms in violation of applicable law.
                </p>

                <h2>8. How We May Share Information</h2>
                <p>Teen Harbor may share information when reasonably necessary with:</p>
                <ul>
                  <li>Authorized Teen Harbor employees and contractors;</li>
                  <li>Healthcare professionals involved in evaluating or providing services, where legally permitted;</li>
                  <li>Service providers supporting Website hosting, communications, information technology, security, or business operations;</li>
                  <li>Insurance companies or payors when authorized or otherwise permitted by law;</li>
                  <li>Government, licensing, accreditation, or regulatory authorities when legally required or permitted;</li>
                  <li>Law enforcement or other authorities when required by applicable law; and</li>
                  <li>Other parties when you authorize the disclosure or when otherwise permitted by law.</li>
                </ul>
                <p>Teen Harbor does not sell protected health information.</p>
                <p>Teen Harbor does not disclose PHI for targeted advertising in a manner prohibited by HIPAA or other applicable law.</p>

                <h2>9. Service Providers</h2>
                <p>
                  Teen Harbor may use third-party vendors to support Website hosting, form processing, analytics, email communications, security, or other operational functions.
                </p>
                <p>
                  Where legally required, Teen Harbor uses appropriate contractual or privacy safeguards with vendors that receive protected or confidential information.
                </p>
                <p>Third-party services may also maintain their own privacy policies and practices.</p>

                <h2>10. Data Security</h2>
                <p>
                  Teen Harbor maintains reasonable administrative, technical, and physical safeguards designed to protect information against unauthorized access, use, alteration, disclosure, or destruction.
                </p>
                <p>However, no website, electronic communication, or internet transmission can be guaranteed to be completely secure.</p>
                <p>
                  For this reason, users should avoid sending unnecessary sensitive medical or behavioral health information through ordinary email or general Website forms.
                </p>

                <h2>11. Email and Electronic Communications</h2>
                <p>Email and standard Website communications may not always be encrypted.</p>
                <p>
                  By voluntarily communicating with Teen Harbor electronically, you acknowledge that electronic communications can carry privacy and security risks.
                </p>
                <p>Do not use email or Website forms for emergency or crisis situations.</p>

                <h2>12. California Privacy Rights</h2>
                <p>California residents may have rights concerning their personal information under applicable California privacy laws.</p>
                <p>Depending on the law and circumstances, these rights may include the right to:</p>
                <ul>
                  <li>Request information about personal information collected about you;</li>
                  <li>Request access to certain personal information;</li>
                  <li>Request correction of inaccurate information;</li>
                  <li>Request deletion of certain information;</li>
                  <li>Obtain information concerning certain disclosures;</li>
                  <li>Limit certain uses or disclosures where applicable; and</li>
                  <li>Exercise applicable privacy rights without unlawful discrimination.</li>
                </ul>
                <p>
                  These rights are subject to legal exceptions and may differ when information is governed by HIPAA, California medical privacy laws, or other healthcare confidentiality requirements.
                </p>
                <p>To submit a privacy request, contact Teen Harbor using the information below.</p>
                <p>Teen Harbor may take reasonable steps to verify your identity or legal authority before processing a request.</p>

                <h2>13. Do Not Sell or Share</h2>
                <p>Teen Harbor does not sell protected health information.</p>
                <p>
                  To the extent California law defines certain Website activities as the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal information, Teen Harbor will provide and honor applicable rights as required by law.
                </p>
                <p>Teen Harbor does not knowingly sell or share the personal information of minors in violation of applicable California law.</p>

                <h2>14. Data Retention</h2>
                <p>
                  Teen Harbor retains Website information only for as long as reasonably necessary for the purposes for which it was collected, operational requirements, legal obligations, dispute resolution, security, and other legitimate purposes.
                </p>
                <p>Healthcare records and other regulated records may be retained for periods required by federal or California law.</p>

                <h2>15. Third-Party Links</h2>
                <p>Our Website may link to third-party websites or services.</p>
                <p>
                  Teen Harbor is not responsible for the privacy or security practices of third-party websites. Visitors should review the privacy policies of third-party services before providing information to them.
                </p>

                <h2>16. Children&apos;s Privacy</h2>
                <p>The Website is not designed as a general online service directed to children under 12.</p>
                <p>
                  Teen Harbor does not knowingly use its public Website to solicit personal information directly from children under 12 for general marketing purposes.
                </p>
                <p>
                  Because our treatment programs involve minors, parents, guardians, healthcare professionals, and authorized referral sources may provide information about minors when seeking behavioral health services.
                </p>
                <p>Such information will be handled in accordance with applicable healthcare and privacy requirements.</p>

                <h2>17. Changes to This Privacy Policy</h2>
                <p>Teen Harbor may update this Privacy Policy as our Website, services, technology, or legal obligations change.</p>
                <p>Updates will be posted on this page with a revised &ldquo;Last Updated&rdquo; date.</p>

                <h2>18. Contact Us</h2>
                <p>For questions about this Privacy Policy, privacy practices, or requests concerning personal information, contact:</p>
                <p>
                  Teen Harbor Behavioral Health<br />
                  Fresno, California<br />
                  Privacy Contact: Paige Williamson, COO<br />
                  Email: paige@teenharbor.com<br />
                  Phone: 559-234-1001
                </p>
                <p>
                  For privacy concerns involving healthcare records or protected health information, please contact Teen Harbor using the privacy contact information provided in our Notice of Privacy Practices.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
