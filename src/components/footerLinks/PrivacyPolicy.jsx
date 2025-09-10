import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Shield, Users, Lock, Eye, Clock, Mail, Globe, Cookie, ExternalLink, Phone } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">


      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-red-600 mb-4">Privacy Policy</h1>
              <p className="text-gray-600">
                <strong>Effective Date:</strong> [Insert Date]
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy ("Policy") governs the manner in which Glass File ("the Platform") ("we," "our," or "us") collects, uses, maintains, and discloses information collected from users ("User," "you," or "your") of the Platform. This Policy complies with applicable laws including but not limited to the California Consumer Privacy Act (CCPA), General Data Protection Regulation (GDPR), and other relevant data protection laws within jurisdictions where we operate.
              </p>
            </div>

            {/* Section 1: Information We Collect */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-600">1. INFORMATION WE COLLECT</h2>
              </div>
              
              <p className="text-gray-700 mb-4">We collect the following categories of information:</p>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">1. Personally Identifiable Information (PII)</h3>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Government-issued identification (for identity verification purposes)</li>
                    <li>Payment details</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">2. Case And Allegation Submissions</h3>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Content of allegations, including parties named</li>
                    <li>Supporting documents</li>
                    <li>Procedural history</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">3. Juror Records</h3>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Juror application details</li>
                    <li>Voting logs</li>
                    <li>Deliberation notes</li>
                    <li>Task certifications</li>
                    <li>Blockchain-linked documentation</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">4. Moderator Records</h3>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Moderator application details</li>
                    <li>Action logs</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">5. Technical Data (See Section 8)</h3>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Browser type</li>
                    <li>IP address</li>
                    <li>Device type</li>
                    <li>Usage logs</li>
                    <li>Cookies, Pixels, and Web Beacons</li>
                    <li>Error reports</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2: How We Use Information */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-600">2. HOW WE USE INFORMATION</h2>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">1. We May Use Collected Information For The Following Purposes:</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>To create, verify, and manage user accounts</li>
                  <li>To process case submissions and facilitate case contests</li>
                  <li>To enable juror functions and verify eligibility</li>
                  <li>To enable moderator functions and verify eligibility</li>
                  <li>To facilitate platform communication and notifications</li>
                  <li>To respond to legal requests that enforce platform terms</li>
                  <li>To improve system performance, usability, and integrity</li>
                </ul>
              </div>
            </section>

            {/* Section 3: Legal Bases */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-600">3. LEGAL BASES FOR PROCESSING (FOR EU USERS)</h2>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Under GDPR, We Process Your Data Based On:</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Consent (for marketing materials)</li>
                  <li>Contractual necessity</li>
                  <li>Legal obligations</li>
                  <li>Legitimate interests in maintaining platform integrity</li>
                </ul>
              </div>
            </section>

            {/* Section 4: Information Sharing */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-600">4. INFORMATION SHARING</h2>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">We Implement Appropriate Technical And Organizational Safeguards, Including:</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>End-to-end encryption of sensitive transmissions</li>
                  <li>Restricted access by role-based permissions</li>
                  <li>Audit trails and monitoring systems</li>
                </ul>
              </div>
            </section>

            {/* Section 5: Data Security */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-600">5. DATA SECURITY</h2>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">We Implement Appropriate Technical And Organizational Safeguards, Including:</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>End-to-end encryption of sensitive transmissions</li>
                  <li>Restricted access by role-based permissions</li>
                  <li>Audit trails and monitoring systems</li>
                </ul>
              </div>
            </section>

            {/* Section 6: Data Retention */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-600">6. DATA RETENTION</h2>
              </div>

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="font-semibold text-gray-800 min-w-0 sm:min-w-fit">1. Allegation Records:</span>
                  <span className="text-gray-700">Retained no more than two (2) years unless converted to verified records</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="font-semibold text-gray-800 min-w-0 sm:min-w-fit">2. Rejected or Withdrawn Cases (Without Notice To Respondent):</span>
                  <span className="text-gray-700">Deleted after up to thirty (30) days post-rejection (logs retained)</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="font-semibold text-gray-800 min-w-0 sm:min-w-fit">3. Withdrawn Cases (With Notice To Respondent):</span>
                  <span className="text-gray-700">Retained for twelve (12) days from time notice served</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="font-semibold text-gray-800 min-w-0 sm:min-w-fit">4. Verified Records:</span>
                  <span className="text-gray-700">Retained indefinitely for transparency and user safety</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="font-semibold text-gray-800 min-w-0 sm:min-w-fit">5. Audit Logs & Records:</span>
                  <span className="text-gray-700">Retained as internal logs, not publicly disclosed, for audit and accountability</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="font-semibold text-gray-800 min-w-0 sm:min-w-fit">6. Moderator Logs & Records:</span>
                  <span className="text-gray-700">Retained as internal logs, not publicly disclosed, for audit and accountability</span>
                </div>
              </div>
            </section>

            {/* Section 7: Your Rights */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-600">7. YOUR RIGHTS</h2>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Depending On Jurisdiction, Users Have The Right To:</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Access and review their data</li>
                  <li>Correct inaccuracies</li>
                  <li>Data portability under specific conditions</li>
                  <li>Request data deletion or account closure</li>
                  <li>File objections to data handling</li>
                </ul>
                <p className="mt-3 text-gray-700">
                  To exercise rights, contact us at: <a href="mailto:Privacy@PlatformName.Org" className="text-red-600 hover:underline">Privacy@PlatformName.Org</a>
                </p>
              </div>
            </section>

            {/* Section 8: Cookies & Tracking */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Cookie className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-600">8. COOKIES & TRACKING TECHNOLOGIES</h2>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  The Platform uses cookies solely for session management, authentication, and analytics. Users may opt out through browser settings; however, this may affect Platform usability.
                </p>
              </div>
            </section>

            {/* Section 9: Third-Party Links */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <ExternalLink className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-600">9. THIRD-PARTY LINKS & SERVICES</h2>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  External links or integrations (e.g., payment processors) are subject to their respective privacy policies. We are not responsible for third-party practices.
                </p>
              </div>
            </section>

            {/* Section 10: Changes to Policy */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-600">10. CHANGES TO THIS POLICY</h2>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  We may update this Policy at our discretion. Users will be notified via platform alert or email. Continued use of the Platform constitutes acceptance of changes.
                </p>
              </div>
            </section>

            {/* Section 11: Contact Us */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-600">11. CONTACT US</h2>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-4">If you have questions regarding this Privacy Policy, contact:</p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Privacy Officer</strong></p>
                  <p>Glass File</p>
                  <p>Email: <a href="mailto:Privacy@PlatformName.Org" className="text-red-600 hover:underline">Privacy@PlatformName.Org</a></p>
                </div>
                <p className="mt-4 text-gray-600 text-sm">
                  This Policy is deemed legally binding upon all registered users and those who access and utilize Platform services in any capacity.
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </main>

    </div>
  );
}

