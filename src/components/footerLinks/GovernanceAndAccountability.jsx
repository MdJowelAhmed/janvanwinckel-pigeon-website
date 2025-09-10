import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Shield, 
  Users, 
  Gavel, 
  FileText, 
  Eye, 
  Lock, 
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ExternalLink
} from 'lucide-react';

export default function GovernanceAndAccountabilityOverview() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-red-600 flex items-center justify-center gap-2">
            <Shield className="w-8 h-8" />
            Platform Governance & Accountability
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Welcome to the <strong>Governance & Accountability</strong> page. This section outlines how the Platform is structured, how decisions are made and reviewed, and how we protect the ethical, procedural, and legal integrity of our community. For the Platform Governance Charter, 
            <Button variant="link" className="text-blue-600 p-0 h-auto font-normal">
              View Here
            </Button>
          </p>
        </div>

        {/* Platform Governance Structure */}
        <Card>
          <CardHeader>
            <CardTitle className="text-red-600 flex items-center gap-2">
              <Shield className="w-6 h-6" />
            ⚙️ Platform Governance Structure
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-600">The Platform operates under a multi-layered governance system, composed of:</p>
            
            {/* Governance Bodies */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-lg">1. Administrative Oversight Board</h3>
                  <ul className="text-gray-600 space-y-1 mt-2">
                    <li>• Policy development and revision</li>
                    <li>• Oversight of platform operations and security</li>
                    <li>• Ensuring compliance with applicable laws</li>
                    <li>• Reviewing ethical and procedural escalations</li>
                  </ul>
                </div>

                <Alert className="bg-red-50 border-red-200">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <AlertDescription className="text-red-700">
                    Composed Of Legal, Technology, Ethics, And Victim Advocacy Professionals. Updated Annually.
                  </AlertDescription>
                </Alert>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">2. Moderator Panel</h3>
                  <ul className="text-gray-600 space-y-1 mt-2">
                    <li>• Review submissions for eligibility and completeness</li>
                    <li>• Mediate disputed or ambiguous cases</li>
                    <li>• Facilitate the notice process and redaction of sensitive content</li>
                    <li>• May halt or escalate cases that present safety concerns</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-2">
                    <strong>Note:</strong> Moderators do not vote on allegations but ensure fair play and integrity before juror review.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg">3. Community Jurors</h3>
                  <ul className="text-gray-600 space-y-1 mt-2">
                    <li>• Anonymous vetted users selected per case</li>
                    <li>• Subject to Juror Ethics Code, orientation/testing, and background checks</li>
                    <li>• Blind review and majority voting determine allegation status</li>
                  </ul>
                </div>

                <Alert className="bg-red-50 border-red-200">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <AlertDescription className="text-red-700">
                    Juror Decisions Are Logged And Auditable By Governance If Formally Challenged.
                  </AlertDescription>
                </Alert>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg">4. Compliance & Safety Team</h3>
                  <ul className="text-gray-600 space-y-1 mt-2">
                    <li>• User privacy and data integrity</li>
                    <li>• Enforcement of platform terms, policies, and ethics rules</li>
                    <li>• Investigation of user reports, misconduct, and abuses</li>
                    <li>• Interface with legal authorities when required</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Decision-Making and Appeals */}
        <Card>
          <CardHeader>
            <CardTitle className="text-red-600 flex items-center gap-2">
              <Gavel className="w-6 h-6" />
              Decision-Making And Appeals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left font-semibold">Tier</th>
                    <th className="border p-3 text-left font-semibold">Decision Type</th>
                    <th className="border p-3 text-left font-semibold">Authority</th>
                    <th className="border p-3 text-left font-semibold">Appeal Possible?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">1</td>
                    <td className="border p-3">Initial System Rejection</td>
                    <td className="border p-3">Auto-Filter + Moderator</td>
                    <td className="border p-3">
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Yes - Moderator Review
                      </Badge>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3">2</td>
                    <td className="border p-3">Moderator Decision</td>
                    <td className="border p-3">Moderator Panel</td>
                    <td className="border p-3">
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Yes - Governance Appeal Panel
                      </Badge>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">3</td>
                    <td className="border p-3">Juror Verdict</td>
                    <td className="border p-3">Juror Pool</td>
                    <td className="border p-3">
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Yes - Community Appeal Process (Limited)
                      </Badge>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3">4</td>
                    <td className="border p-3">Governance Override</td>
                    <td className="border p-3">Oversight Board</td>
                    <td className="border p-3">
                      <Badge className="bg-red-100 text-red-800">
                        <XCircle className="w-3 h-3 mr-1" />
                        Final
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Button variant="outline" className="mt-4">
              <FileText className="w-4 h-4 mr-2" />
              File An Appeal
            </Button>
          </CardContent>
        </Card>

        {/* Two Column Layout for remaining sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Transparency & Accountability Logs */}
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600 flex items-center gap-2">
                <Eye className="w-6 h-6" />
                Transparency & Accountability Logs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Moderator Action Logs</strong> - available to internal audit</li>
                <li>• <strong>Juror Vote Logs</strong> - anonymized, internally audited only</li>
                <li>• <strong>Decision Timeline Records</strong> - visible to both Initiator and Respondent</li>
                <li>• <strong>Case Retention & Sealing</strong> - visible to public view</li>
              </ul>
              <p className="text-sm text-gray-600">
                All platform users may request a review of moderator conduct or governance decisions.
              </p>
              <Button variant="outline" className="w-full">
                <FileText className="w-4 h-4 mr-2" />
                File A Misuse Report Form
              </Button>
            </CardContent>
          </Card>

          {/* Data Protection & Legal Compliance */}
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-600 flex items-center gap-2">
                <Lock className="w-6 h-6" />
                Data Protection & Legal Compliance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-gray-600">
                <li>• Jurisdictional compliance with applicable civil and data privacy laws</li>
                <li>• Transparent retention policies for submissions and verdicts</li>
                <li>• Tamper-resistant evidence locking after juror voting begins</li>
                <li>• Secure redaction of sensitive or expired records</li>
              </ul>
              <div className="space-y-2">
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Read The Full Privacy Policy
                </Button>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Terms Of Use
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Community Feedback & Policy Revision */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-600 flex items-center gap-2">
                <MessageSquare className="w-6 h-6" />
                Community Feedback & Policy Revision
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">The Platform is committed to user inclusion in shaping our policies.</p>
              <div>
                <p className="font-semibold mb-2">Submit Feedback Or Proposed Changes To:</p>
                <ul className="space-y-1 text-gray-600 ml-4">
                  <li>• Juror rules</li>
                  <li>• Case types</li>
                  <li>• Moderator behavior</li>
                  <li>• Transparency practices</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                All approved policy revisions are announced with a 7-day public notice window and will include archived version history.
              </p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Submit Policy Feedback Form
                </Button>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Browse Governance Change Log
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Ethics Review & Reporting */}
          <Card>
            <CardHeader>
              <CardTitle className="text-red-600 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Ethics Review & Reporting
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Users, jurors, and moderators may confidentially report:</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2 text-sm">
                  <div>• Conflicts of interest</div>
                  <div>• Abuse of platform powers</div>
                  <div>• Undue influence or retaliation</div>
                  <div>• Procedural violations</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    All reports are confidential
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    Anonymous submissions are permitted
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-red-600" />
                    Confirmed violations result in sanctions or disqualification
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <FileText className="w-4 h-4 mr-2" />
                File A Misuse Report Form
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Governance Charter & Platform Mission */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Governance Charter & Platform Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="bg-red-50 border-red-200">
              <AlertDescription className="text-red-700 font-medium">
                "To Provide A Fair, Confidential, And Structured Digital Record System For Matters Of Personal Integrity And Harm, Using Due Process, Collective Review, And Ethics-Centered Technology."
              </AlertDescription>
            </Alert>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="flex-1">
                <FileText className="w-4 h-4 mr-2" />
                Read The Current Platform Governance Charter PDF
              </Button>
              <Button variant="outline" className="flex-1">
                <ExternalLink className="w-4 h-4 mr-2" />
                Annual Governance Transparency Report - 2024
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}