import React from 'react';
import { CheckCircle, Users, FileText, Shield, UserCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const JurorPipelineOverview = () => {
  const steps = [
    {
      id: 1,
      title: "User Submits Juror Application & Affidavit",
      icon: <Users className="w-6 h-6" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
      status: "✅ Recommended Placement in the Juror Pipeline",
      statusColor: "bg-green-100 text-green-800",
      details: [
        "Completes eligibility attestations",
        "Certifies intent as an impartial"
      ]
    },
    {
      id: 2,
      title: "Preliminary Review By Moderators Or Automated Filters",
      icon: <FileText className="w-6 h-6" />,
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      iconColor: "text-gray-600",
      details: [
        "Ensure applicant meets basic eligibility account standing, verified account, duplicate accounts, etc.)",
        "Flag any active allegations for moderation awareness",
        "Form is reviewed for completeness and red flags"
      ]
    },
    {
      id: 3,
      title: "Conditional Approval + Orientation Invitation",
      icon: <UserCheck className="w-6 h-6" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
      details: [
        "If eligible, user receives each notice:",
        "\"Your application has been preliminarily accepted. To complete your enrollment, you must now complete the Juror Orientation and Ethics Test that covers our due process guidelines based below.\"",
        "\"We may perform a background search to determine any criminal history related to fraud, perjury, and other related criminal convictions that may be deemed as a red flag for the ClearVoice Juror program.\" If your application is flagged due to a specific fraud, a background check may be an additional step for your first approved application."
      ],
      notice: "The Juror Board will passively reactivate appeals. 50% of the board is now volunteers to cover administrations of the trials of the site renewing in advanced ones for jurors enrolled in the next program. First-time superintendents requested from the juror program has Juror Service Directors."
    },
    {
      id: 4,
      title: "Juror Orientation & Ethics Test (Required)",
      icon: <Shield className="w-6 h-6" />,
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      iconColor: "text-yellow-600",
      required: true,
      details: [
        "Covers:",
        "• Confidentiality & non-disclosure",
        "• Evidence handling",
        "• Bias recognition",
        "• Disqualification criteria", 
        "• Voting standards"
      ],
      requirements: [
        "User must pass with minimum score (e.g. 80%)",
        "Annual Testing Due by January 31 each year for renewal, retact active jurors",
        "Must acknowledge and agree to the Juror Service Agreement",
        "On the third infraction, if a Juror does not have a Juror Rank, a Juror will be required to pay to the platform a Juror Bond. On the fourth infraction, the Juror will be permanently removed from the juror program and forfeits the Juror Bond",
        "If a Juror Quits"
      ],
      warning: "If a Juror associated with a Juror Bond and Juror will be permanently removed from the juror program and forfeits the Juror Bond after the first infraction."
    },
    {
      id: 5,
      title: "Full Enrollment Confirmed + Added To Juror Pool",
      icon: <CheckCircle className="w-6 h-6" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
      details: [
        "• Can see active status on their dashboard",
        "• Can now be randomly assigned to review cases",
        "• Can see their case status reflected on their dashboard",
        "• Other Users can see a Juror's active status",
        "• Once a Juror has completed at least 10 cases, they will see varying badges on a Juror's profile based on the number of completed cases"
      ]
    }
  ];

  return (
    <div className=" mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Juror Pipeline Process</h1>
        <p className="text-gray-600">Complete workflow for juror application and enrollment</p>
      </div>

      {steps.map((step, index) => (
        <Card key={step.id} className={`${step.bgColor} ${step.borderColor} border-l-4`}>
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full bg-white ${step.iconColor}`}>
                  {step.icon}
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    {step.id}. {step.title}
                    {step.required && (
                      <Badge variant="destructive" className="text-xs">Required</Badge>
                    )}
                  </CardTitle>
                </div>
              </div>
            </div>
            
            {step.status && (
              <Badge className={`${step.statusColor} w-fit mt-2`}>
                {step.status}
              </Badge>
            )}
          </CardHeader>

          <CardContent className="space-y-4">
            {step.details && (
              <div className="space-y-2">
                {step.details.map((detail, idx) => (
                  <div key={idx} className="text-sm text-gray-700">
                    {detail.startsWith('•') ? (
                      <div className="ml-4">{detail}</div>
                    ) : detail.startsWith('Covers:') ? (
                      <div className="font-medium">{detail}</div>
                    ) : (
                      <div className={detail.startsWith('"') ? 'italic bg-blue-50 p-3 rounded border-l-4 border-blue-200' : ''}>
                        {detail}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {step.requirements && (
              <div className="bg-white p-4 rounded border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                <div className="space-y-1">
                  {step.requirements.map((req, idx) => (
                    <div key={idx} className="text-sm text-gray-700">• {req}</div>
                  ))}
                </div>
              </div>
            )}

            {step.warning && (
              <div className="bg-red-50 border border-red-200 p-3 rounded">
                <div className="text-sm text-red-800 font-medium">⚠️ {step.warning}</div>
              </div>
            )}

            {step.notice && (
              <div className="bg-blue-50 border border-blue-200 p-3 rounded">
                <div className="text-sm text-blue-800">{step.notice}</div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      <div className="text-center pt-6">
        <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
          <CheckCircle className="w-4 h-4 text-green-500" />
          <span>Process Complete - Juror Ready for Case Assignment</span>
        </div>
      </div>
    </div>
  );
};

export default JurorPipelineOverview;
