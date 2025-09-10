import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, Phone, Shield, AlertTriangle, Scale, Book, Lock, FileText } from 'lucide-react';

export default function LegalResourcesOverView() {
  const emergencyServices = [
    {
      service: "911 (U.S. Emergency Services)",
      description: "For immediate threats or danger",
      urgent: true
    },
    {
      service: "National Domestic Violence Hotline",
      phone: "1-800-799-7233",
      website: "Thehotline.Org",
      description: "24/7 support for domestic violence"
    },
    {
      service: "RAINN (Rape, Abuse & Incest National Network)",
      phone: "1-800-656-HOPE",
      website: "Rainn.Org",
      description: "Support for sexual assault survivors"
    },
    {
      service: "Cyber Civil Rights Initiative",
      website: "Cybercivilrights.Org",
      description: "For image-based abuse or online harassment"
    }
  ];

  const governmentAgencies = [
    {
      agency: "State Attorneys General",
      purpose: "For consumer fraud or identity misuse"
    },
    {
      agency: "Department Of Justice (DOJ)",
      purpose: "For civil rights violations"
    },
    {
      agency: "Federal Trade Commission (FTC)",
      purpose: "For online privacy and identity-related concerns"
    },
    {
      agency: "Child Protective Services (CPS)",
      purpose: "If a minor is endangered or involved"
    }
  ];

  const legalResources = [
    "American Bar Association (ABA) Lawyer Referral Directory",
    "Legal Aid Services By State",
    "National Crime Victim Bar Association"
  ];

  const educationalResources = [
    "The Center For Relationship Abuse Awareness",
    "Know Your IX (Title IX Rights And Legal Advocacy)",
    "ACLU Resources On Civil Liberties & Abuse"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 ">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scale className="h-8 w-8 text-red-600" />
            <h1 className="text-4xl font-bold text-gray-900">Legal Resources & External Reporting</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            While the Platform provides structured tools for community-based accountability and digital records 
            regarding interpersonal misconduct, we recognize that certain matters require or are better served 
            by formal legal intervention or external reporting. This page is dedicated to assisting users in 
            identifying when and how to engage legal systems, governmental agencies, or external advocacy groups.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Section 1: When To Seek Legal Assistance */}
          <Card className="shadow-lg border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-blue-800">
                <FileText className="h-6 w-6" />
                Section 1: When To Seek Legal Assistance
              </CardTitle>
              <CardDescription className="text-base">
                The Platform is not a substitute for law enforcement, courts, or licensed legal counsel. 
                You should consider contacting a licensed attorney or appropriate agency if:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-red-700">Immediate Danger</span>
                      <p className="text-sm text-gray-600">or experiencing ongoing harassment or violence</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-orange-700">Protective Order</span>
                      <p className="text-sm text-gray-600">through your local court</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Scale className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-blue-700">File Criminal Charges</span>
                      <p className="text-sm text-gray-600">or initiate civil proceedings</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Book className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-green-700">Legal Rights Violated</span>
                      <p className="text-sm text-gray-600">in ways not addressed by the Platform</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Resources For Legal Help:</h4>
                <div className="flex flex-wrap gap-2">
                  {legalResources.map((resource, index) => (
                    <Badge key={index} variant="outline" className="text-blue-700 border-blue-300 hover:bg-blue-50">
                      {resource}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Emergency & Protective Services */}
          <Card className="shadow-lg border-l-4 border-l-red-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-red-800">
                <Phone className="h-6 w-6" />
                Section 2: Emergency & Protective Services
              </CardTitle>
              <CardDescription className="text-base font-semibold">
                If You Or Someone You Know Is In Crisis, The Following Agencies Can Provide Direct Support:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {emergencyServices.map((service, index) => (
                  <Card key={index} className={`${service.urgent ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}>
                    <CardContent className="p-4">
                      <h4 className={`font-bold mb-2 ${service.urgent ? 'text-red-800' : 'text-gray-900'}`}>
                        {service.service}
                      </h4>
                      {service.phone && (
                        <p className="text-lg font-mono text-blue-600 mb-1">{service.phone}</p>
                      )}
                      {service.website && (
                        <div className="flex items-center gap-1 mb-2">
                          <ExternalLink className="h-4 w-4 text-blue-500" />
                          <span className="text-blue-600 underline">{service.website}</span>
                        </div>
                      )}
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Reporting To Governmental Authorities */}
          <Card className="shadow-lg border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-green-800">
                <Shield className="h-6 w-6" />
                Section 3: Reporting To Governmental Authorities
              </CardTitle>
              <CardDescription className="text-base">
                In certain cases, Platform users may need to submit complaints or reports to public authorities. These may include:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {governmentAgencies.map((agency, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-white">
                    <h4 className="font-bold text-gray-900 mb-2">{agency.agency}</h4>
                    <p className="text-sm text-gray-600">{agency.purpose}</p>
                  </div>
                ))}
              </div>
              
              <Alert className="border-green-200 bg-green-50">
                <Shield className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  The Platform supports and will cooperate with valid government orders, subpoenas, and requests within our jurisdiction.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Section 4: Reporting Platform Misuse Or Abuse */}
          <Card className="shadow-lg border-l-4 border-l-purple-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-purple-800">
                <AlertTriangle className="h-6 w-6" />
                Section 4: Reporting Platform Misuse Or Abuse
              </CardTitle>
              <CardDescription className="text-base">
                We take allegations of misuse, false submissions, harassment, retaliation, or ethical violations seriously. 
                If you believe a user has violated platform policies, or if you've been falsely named or retaliated against:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-bold text-purple-800 mb-2">You May:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Submit A Formal Complaint using our <span className="text-red-600 font-semibold">[Misuse Report Form]</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Contact The Compliance & Integrity Division at [compliance@[platformname].org]</span>
                    </li>
                  </ul>
                </div>
                
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    We log all complaints and audit our systems regularly. Verified abuse or falsification will result 
                    in permanent sanctions and may trigger legal actions.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* Section 5: Educational Resources */}
          <Card className="shadow-lg border-l-4 border-l-amber-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-amber-800">
                <Book className="h-6 w-6" />
                Section 5: Educational Resources
              </CardTitle>
              <CardDescription className="text-base">
                For users who wish to better understand the legal definitions and frameworks surrounding 
                romantic misconduct, abuse, coercion, and civil redress:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-3">
                {educationalResources.map((resource, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg bg-white hover:bg-amber-50 transition-colors">
                    <ExternalLink className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-amber-800 font-medium">{resource}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Section 6: Confidentiality And Data Sharing */}
          <Card className="shadow-lg border-l-4 border-l-indigo-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-indigo-800">
                <Lock className="h-6 w-6" />
                Section 6: Confidentiality And Data Sharing
              </CardTitle>
              <CardDescription className="text-base">
                Other than stated within our Privacy Policy:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "We will never share private user information or submission contents with any third party except under legal compulsion or user authorization.",
                  "We are not obligated to notify a user of governmental access under certain emergency or law enforcement exceptions.",
                  "Juror votes, internal deliberation logs, and moderator activity are permanently retained for compliance but never made public."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                    <Lock className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-800">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Final Note */}
          <Alert className="border-red-200 bg-red-50 shadow-lg">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <div>
              <h4 className="font-bold text-red-800 mb-2">Final Note</h4>
              <AlertDescription className="text-red-800">
                The Platform encourages informed and responsible action. If you believe a situation exceeds 
                the scope of the Platform's purpose, or if someone is in danger, act immediately and contact 
                proper legal or emergency authorities.
              </AlertDescription>
            </div>
          </Alert>
        </div>
      </div>
    </div>
  );
}
