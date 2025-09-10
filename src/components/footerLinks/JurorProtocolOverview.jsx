import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Users, Scale, FileText, Shield, Clock, Vote, FileCheck, AlertTriangle, Award } from 'lucide-react';

const JurorProtocolOverview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
 

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Juror Protocol</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Warning Alert */}
        <Alert className="mb-8 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/10">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Important:</strong> All information pertaining to this case, including evidence, testimony, and deliberations, 
            must be kept strictly confidential. Failure to maintain confidentiality may result in legal consequences.
          </AlertDescription>
        </Alert>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Purpose of Jurors */}
            <Card className="shadow-lg border-0 bg-white dark:bg-slate-800">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                <CardTitle className="flex items-center gap-3 text-blue-900 dark:text-blue-100">
                  <Users className="w-5 h-5" />
                  <span className="text-red-600 font-bold">1.</span> Purpose of Jurors
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Jurors are trusted community members empowered to evaluate submitted claims — including complaints, 
                  allegations, disputes, accusations, and other allegations — whether they have sufficient legal merit 
                  to be considered for court proceedings or warrant judgment to defendants cite.
                </p>
                <Separator className="my-4" />
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Jurors serve to maintain fair, trusted, and wise review and analysis whether filing a voluntary grievance.
                </p>
              </CardContent>
            </Card>

            {/* Juror Eligibility Criteria */}
            <Card className="shadow-lg border-0 bg-white dark:bg-slate-800">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <CardTitle className="flex items-center gap-3 text-green-900 dark:text-green-100">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-red-600 font-bold">2.</span> Juror Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-green-700 border-green-200">✓</Badge>
                    <span className="text-slate-700 dark:text-slate-300">Be at least 21 years of age</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-green-700 border-green-200">✓</Badge>
                    <span className="text-slate-700 dark:text-slate-300">Have no record of criminal conviction with ethical policy involved in the case</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-green-700 border-green-200">✓</Badge>
                    <span className="text-slate-700 dark:text-slate-300">Have passed a jury competency and ethics test</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-green-700 border-green-200">✓</Badge>
                    <span className="text-slate-700 dark:text-slate-300">Have read and agree to binding on the creation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-green-700 border-green-200">✓</Badge>
                    <span className="text-slate-700 dark:text-slate-300">Have no connection to the case or affiliation of any case</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Oath of Impartiality */}
            <Card className="shadow-lg border-0 bg-white dark:bg-slate-800">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20">
                <CardTitle className="flex items-center gap-3 text-purple-900 dark:text-purple-100">
                  <Scale className="w-5 h-5" />
                  <span className="text-red-600 font-bold">3.</span> Oath of Impartiality
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "Before participating as such, I swear by my moral values..."
                </p>
                <Alert className="mt-4 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/10">
                  <AlertDescription className="text-amber-800 dark:text-amber-200">
                    This oath must be taken before participating in any case proceedings. All jurors must recite and sign this oath 
                    before gaining access to case materials.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Case Review Workflow */}
            <Card className="shadow-lg border-0 bg-white dark:bg-slate-800">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
                <CardTitle className="flex items-center gap-3 text-orange-900 dark:text-orange-100">
                  <FileText className="w-5 h-5" />
                  <span className="text-red-600 font-bold">4.</span> Case Review Workflow
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Step 1: Assignment</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Cases are randomly and anonymously assigned to a panel (e.g., 3 members)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Step 2: Evidence Review</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Jurors independently review all the allegations, evidence, and witness statements.
                    </p>
                  </div>
                </div>
                
                <Alert className="mt-4 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/10">
                  <AlertDescription className="text-red-800 dark:text-red-200">
                    <strong>Important:</strong> All documents and evidence must remain fully confidential and cannot be shared outside the jury.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Voting & Outcomes */}
            <Card className="shadow-lg border-0 bg-white dark:bg-slate-800">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20">
                <CardTitle className="flex items-center gap-3 text-teal-900 dark:text-teal-100">
                  <Vote className="w-5 h-5" />
                  <span className="text-red-600 font-bold">5.</span> Voting & Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <th className="text-left py-2 font-semibold text-slate-900 dark:text-white">Option</th>
                        <th className="text-left py-2 font-semibold text-slate-900 dark:text-white">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                      <tr>
                        <td className="py-2">
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Accept</Badge>
                        </td>
                        <td className="py-2 text-slate-600 dark:text-slate-400">Case evidence submitted has merit reasonably enough</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Reject</Badge>
                        </td>
                        <td className="py-2 text-slate-600 dark:text-slate-400">Case evidence does not warrant consideration</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Escalate</Badge>
                        </td>
                        <td className="py-2 text-slate-600 dark:text-slate-400">Escalate case to court</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Rules of Conduct */}
            <Card className="shadow-lg border-0 bg-white dark:bg-slate-800">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20">
                <CardTitle className="flex items-center gap-3 text-indigo-900 dark:text-indigo-100">
                  <Shield className="w-5 h-5" />
                  <span className="text-red-600 font-bold">6.</span> Rules of Conduct
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                    <span className="text-slate-700 dark:text-slate-300 text-sm">Remain anonymous throughout the process</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                    <span className="text-slate-700 dark:text-slate-300 text-sm">No discussion outside with any external party (including other jurors)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                    <span className="text-slate-700 dark:text-slate-300 text-sm">Do not investigate if they encounter any party involved</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                    <span className="text-slate-700 dark:text-slate-300 text-sm">Report unauthorized information contact from outside</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Confidentiality Agreement */}
          <Card className="shadow-lg border-0 bg-white dark:bg-slate-800">
            <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20">
              <CardTitle className="flex items-center gap-3 text-rose-900 dark:text-rose-100">
                <FileCheck className="w-5 h-5" />
                <span className="text-red-600 font-bold">7.</span> Confidentiality Agreement
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Jurors agree to the following:
              </p>
              <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/10">
                <AlertDescription className="text-red-800 dark:text-red-200">
                  All case information, evidence, and deliberations must remain confidential both during and after the proceedings. 
                  Violation of confidentiality may result in legal action.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Compensation */}
          <Card className="shadow-lg border-0 bg-white dark:bg-slate-800">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20">
              <CardTitle className="flex items-center gap-3 text-emerald-900 dark:text-emerald-100">
                <Award className="w-5 h-5" />
                <span className="text-red-600 font-bold">8.</span> Compensation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Juror compensation <strong>$25/case</strong> for cases processed and properly submitted. Based on:
              </p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <p>• Case length</p>
                <p>• Time investment</p>
                <p>• Complexity as evaluated (minimum as agreed rate)</p>
                <p>• Payments are processed per review cycle and may be reflected in cases of verified reimbursement.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final Sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Juror Records & Quality Control */}
          <Card className="shadow-lg border-0 bg-white dark:bg-slate-800">
            <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20">
              <CardTitle className="flex items-center gap-3 text-violet-900 dark:text-violet-100">
                <FileText className="w-5 h-5" />
                <span className="text-red-600 font-bold">9.</span> Juror Records & Quality Control
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                Data files are offerings and updated on feedback and questionnaire feedback. 
                When the system determines things that how the incidents determine outcomes...
              </p>
            </CardContent>
          </Card>

          {/* Appeals & Overrides */}
          <Card className="shadow-lg border-0 bg-white dark:bg-slate-800">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
              <CardTitle className="flex items-center gap-3 text-amber-900 dark:text-amber-100">
                <Clock className="w-5 h-5" />
                <span className="text-red-600 font-bold">10.</span> Appeals & Overrides
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                If there is no refusal, the case may be reconsidered with a different jury. 
                A emotional governing team can override jury verdict on a final appeal request.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final Acknowledgment */}
        <Card className="shadow-lg border-0 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Final Acknowledgment</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Before beginning your duties, please acknowledge that you have read, understood, and agree to adhere to all protocols outlined in this document.
            </p>
            <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/10">
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>By proceeding, you agree to maintain strict confidentiality and conduct yourself with the highest ethical standards.</strong>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </main>

    
    </div>
  );
};

export default JurorProtocolOverview;
