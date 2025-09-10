import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { AlertTriangle, Shield, Users, FileText, Eye, UserX, HelpCircle } from 'lucide-react';

const JurorEthicsOverview = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Juror Ethics & Responsibilities
          </h1>
          <p className="text-gray-600  mx-auto leading-relaxed">
            Welcome to the <strong>Juror Ethics Page</strong>, a training code of conduct for all participants in the Platform's ethics oversight review process. As a juror, you're entrusted with confidential sensitive information that impacts regulations, safety, and fairness. Your duty by accessing justice within the Platform's community.
          </p>
        </div>

        {/* Section 1: Core Juror Values */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-red-600" />
              <CardTitle className="text-red-700">SECTION 1: Core Juror Values</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">All jurors must commit to the following ethical values:</p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">• Impartiality:</h4>
                  <p className="text-sm text-gray-700">You must approach each case with neutrality, free from bias, personal interests, or external influence.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">• Confidentiality:</h4>
                  <p className="text-sm text-gray-700">All case materials and discussions are strictly confidential and should not be shared with anyone outside the jury panel.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">• Diligence:</h4>
                  <p className="text-sm text-gray-700">You are expected to review all materials carefully before voting. Do not rush or skim case-type submissions.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">• Accountability:</h4>
                  <p className="text-sm text-gray-700">You are responsible for your conduct and decisions and must be prepared to justify your vote ethically, if reviewed.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Prohibited Conduct */}
        <Card className="mb-8 border-orange-200 bg-orange-50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <UserX className="h-5 w-5 text-orange-600" />
              <CardTitle className="text-orange-700">SECTION 2: Prohibited Conduct</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">Any of the following behaviors may result in disqualification from the juror pool, loss of platform privileges, or formal sanctions:</p>
            <div className="grid gap-2 text-sm text-gray-700">
              <div>• Participating in a case involving a personal relationship, past case, or known party.</div>
              <div>• Using external resources or seeking to influence your vote.</div>
              <div>• Colluding or communicating with other jurors.</div>
              <div>• Revealing case details, votes, or juror ID to any person (except during secure communications with an active Moderator or platform administrator).</div>
              <div>• Casting a vote without reviewing all presented evidence and testimony.</div>
              <div>• Voting dishonestly, carelessly, or with bias in a case.</div>
              <div>• Ignoring a filed conflict of interest or failing to recuse when appropriate.</div>
              <div>• Attempting to identify or retaliate against parties in a case.</div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Juror Oath */}
        <Card className="mb-8 border-purple-200 bg-purple-50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-purple-600" />
              <CardTitle className="text-purple-700">SECTION 3: Juror Oath</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4 font-medium">Every juror must agree to the following oath before each round of service:</p>
            <Alert className="border-purple-300 bg-purple-100">
              <AlertDescription className="text-purple-800 italic">
                "I solemnly affirm that I will execute this task with fairness and adhere to Standards. I will respect the identity of all parties, protect the confidentiality of this process, and render my most well-based duty on the merits of the evidence presented. I understand that my actions have real consequences, and I pledge the utmost care required to the jury process, case."
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Section 4: Recusal & Conflict Disclosure */}
        <Card className="mb-8 border-yellow-200 bg-yellow-50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <CardTitle className="text-yellow-700">SECTION 4: Recusal & Conflict Disclosure</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">Jurors <strong>Must Recuse</strong> themselves or file a conflict declaration if any of the following are true:</p>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <div>• You know or recognize any party involved in the case.</div>
              <div>• You have a financial or personal interest in the case's outcome.</div>
              <div>• You have a bias or opinion about the general subject matter that may interfere with neutrality.</div>
              <div>• You do not have the emotional or mental bandwidth to review the materials responsibly.</div>
            </div>
            <div className="bg-blue-100 p-3 rounded border border-blue-300">
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                ► File Juror Recusal Or Conflict Declaration ►
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Ethics Test Requirement */}
        <Card className="mb-8 border-pink-200 bg-pink-50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-pink-600" />
              <CardTitle className="text-pink-700">SECTION 5: Ethics Test Requirement</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">Before serving, all jurors must:</p>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <div>• Complete the <strong>Juror Orientation</strong> module</div>
              <div>• Pass the <strong>Juror Ethics & Conduct Test</strong> (80% or higher)</div>
              <div>• Re-certify every 12 months or as requested</div>
              <div>• Re-verify at each half-decade interval</div>
            </div>
            <p className="text-red-600 text-sm font-medium">
              Non-compliance results in automatic suspension from the juror pool.
            </p>
          </CardContent>
        </Card>

        {/* Section 6: Platform Protections */}
        <Card className="mb-8 border-green-200 bg-green-50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              <CardTitle className="text-green-700">SECTION 6: Platform Protections For Jurors</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">To ensure your safety and impartiality:</p>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <div>• Juror identities are permanently masked from all users.</div>
              <div>• Juror logs are stored securely and only accessible for system administrators.</div>
              <div>• Any threat, contact attempt, or retaliation will result in severe sanctions and possible legal referral.</div>
            </div>
            <div className="bg-red-100 p-3 rounded border border-red-300">
              <span className="text-red-700 font-medium">🛡️ Permanently Withdrawn From Juror Program</span>
            </div>
          </CardContent>
        </Card>

        {/* Section 7: Violations & Consequences */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <CardTitle className="text-red-700">SECTION 7: Violations & Consequences</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">Violation of these ethics guidelines may lead to:</p>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <div>• Platform sanctions, which may include fines</div>
              <div>• Suspension or permanent ban from platform services</div>
              <div>• Temporary or permanent suspension from juror service</div>
              <div>• Record placement on <strong>Juror Misconduct Register</strong> (internal)</div>
              <div>• Loss of platform privileges (including suspension rights)</div>
              <div>• Referral to legal or safety authorities if misconduct is severe</div>
            </div>
            <p className="text-red-600 text-sm font-medium">
              Non-compliance results in automatic suspension from the juror pool.
            </p>
          </CardContent>
        </Card>

        {/* Questions Section */}
        <Card className="border-gray-300">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-gray-600" />
              <CardTitle className="text-gray-700">🤔 QUESTIONS OR ETHICS CONCERNS?</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              If you suspect unethical behavior from another juror or believe a case was compromised:
            </p>
            <div className="space-y-2">
              <div className="bg-blue-100 p-3 rounded border border-blue-300">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  🚨 Report Juror Misconduct
                </a>
              </div>
              <div className="bg-blue-100 p-3 rounded border border-blue-300">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  📋 Request Confidential Ethics Review
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JurorEthicsOverview;
