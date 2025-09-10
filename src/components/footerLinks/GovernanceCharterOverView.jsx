import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { FileText, Shield, Users, Gavel, Eye, Settings } from 'lucide-react';

const GovernanceCharterOverview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    

      {/* Main Content */}
      <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
            Platform Governance Charter
          </h1>
          <div className="text-sm text-slate-600 space-y-1">
            <p>Platform: Glass File | Version 1.0 | Created: January 2024</p>
            <p>Platform Name: Glass File</p>
          </div>
        </div>

        {/* Section 1.0 - Purpose and Mandate */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader className="bg-red-50 border-b border-red-100">
            <CardTitle className="flex items-center space-x-2 text-red-700">
              <Shield className="w-5 h-5" />
              <span>SECTION 1.0 — PURPOSE AND MANDATE</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div>
              <h3 className="font-semibold mb-3 text-slate-900">1.1 Statement Of Purpose</h3>
              <p className="text-slate-700 leading-relaxed">
                This Platform Governance Charter establishes the governance framework for the Glass File platform. It outlines the structures, processes, and principles that guide platform operations, ensuring transparency, accountability, and effective decision-making. The platform is committed to maintaining the highest standards of integrity while serving our community and stakeholders through innovative file management solutions.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-semibold mb-3 text-slate-900">1.2 Mandate</h3>
              <p className="text-slate-700 mb-4">The platform shall fulfill the following core mandates:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1 text-xs">A</Badge>
                    <p className="text-sm text-slate-600">Establish and maintain platform governance standards</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1 text-xs">B</Badge>
                    <p className="text-sm text-slate-600">Ensure compliance with regulatory requirements and industry best practices</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1 text-xs">C</Badge>
                    <p className="text-sm text-slate-600">Promote transparency in platform operations and decision-making processes</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1 text-xs">D</Badge>
                    <p className="text-sm text-slate-600">Facilitate stakeholder engagement and community participation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1 text-xs">E</Badge>
                    <p className="text-sm text-slate-600">Maintain data privacy, security, and user confidentiality standards</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2.0 - Governance Structure */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader className="bg-blue-50 border-b border-blue-100">
            <CardTitle className="flex items-center space-x-2 text-blue-700">
              <Users className="w-5 h-5" />
              <span>SECTION 2.0 — GOVERNANCE STRUCTURE</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div>
              <h3 className="font-semibold mb-3 text-slate-900">2.1 Organizational Chart of Authority</h3>
              <p className="text-slate-700 mb-4">The governance structure is organized hierarchically to ensure clear lines of authority and accountability:</p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <p className="font-medium text-slate-800">Executive Board (Strategic oversight and policy governance)</p>
                  <p className="ml-4 text-slate-600">↳ Platform Management Team (Operational leadership and execution)</p>
                  <p className="ml-8 text-slate-600">↳ Technical Advisory Committee (Technical guidance and standards)</p>
                  <p className="ml-8 text-slate-600">↳ Security and Compliance Office (Risk management and regulatory compliance)</p>
                  <p className="ml-8 text-slate-600">↳ Community Relations Board (Stakeholder engagement and user advocacy)</p>
                  <p className="ml-4 text-slate-600">↳ Independent Audit Committee (Oversight and performance monitoring)</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3 text-slate-900">2.2 Oversight Board Composition And Powers</h3>
              <p className="text-slate-700 mb-4">The Oversight Board consists of independent members with diverse expertise in technology, governance, and industry best practices. The board exercises the following powers:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-slate-50">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Board Composition</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Independent Chairperson</li>
                      <li>• Technology Expert</li>
                      <li>• Legal and Compliance Advisor</li>
                      <li>• Community Representative</li>
                      <li>• Industry Specialist</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-slate-50">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Key Powers</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Strategic direction setting</li>
                      <li>• Policy approval and oversight</li>
                      <li>• Performance monitoring</li>
                      <li>• Risk assessment and mitigation</li>
                      <li>• Stakeholder representation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3.0 - Case Work Procedures */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader className="bg-green-50 border-b border-green-100">
            <CardTitle className="flex items-center space-x-2 text-green-700">
              <Gavel className="w-5 h-5" />
              <span>SECTION 3.0 — CASEWORK PROCEDURES</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div>
              <h3 className="font-semibold mb-3 text-slate-900">3.1 Case Lifecycle Process</h3>
              <div className="space-y-4">
                {[
                  { phase: 'Case Intake Process', desc: 'Initial assessment and categorization of incoming cases' },
                  { phase: 'Investigation Procedures', desc: 'Systematic review and evidence gathering' },
                  { phase: 'Stakeholder Consultation', desc: 'Engagement with relevant parties and experts' },
                  { phase: 'Decision Framework', desc: 'Structured approach to case resolution' },
                  { phase: 'Resolution Process', desc: 'Implementation of decisions and remedial actions' },
                  { phase: 'Appeals Handling', desc: 'Review process for contested decisions' },
                  { phase: 'Case Documentation', desc: 'Comprehensive record keeping and reporting' },
                  { phase: 'Follow-up Monitoring', desc: 'Post-resolution compliance and effectiveness tracking' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
                    <Badge variant="secondary" className="bg-green-200 text-green-800 font-mono text-xs px-2 py-1">
                      {index + 1}
                    </Badge>
                    <div>
                      <p className="font-medium text-slate-800">{item.phase}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3 text-slate-900">3.2 Quality Classifications</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold">H</span>
                    </div>
                    <p className="font-medium text-red-700">High Priority</p>
                    <p className="text-xs text-red-600">Critical system issues</p>
                  </CardContent>
                </Card>
                <Card className="bg-yellow-50 border-yellow-200">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold">M</span>
                    </div>
                    <p className="font-medium text-yellow-700">Medium Priority</p>
                    <p className="text-xs text-yellow-600">Standard operations</p>
                  </CardContent>
                </Card>
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold">L</span>
                    </div>
                    <p className="font-medium text-green-700">Low Priority</p>
                    <p className="text-xs text-green-600">Routine maintenance</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4.0 - Ethical Standards */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader className="bg-purple-50 border-b border-purple-100">
            <CardTitle className="flex items-center space-x-2 text-purple-700">
              <Eye className="w-5 h-5" />
              <span>SECTION 4.0 — ETHICAL STANDARDS</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div>
              <h3 className="font-semibold mb-3 text-slate-900">4.1 Ethical Principles</h3>
              <p className="text-slate-700 mb-4">All platform operations are guided by the following fundamental ethical principles:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="font-medium text-slate-800">Transparency</h4>
                    <p className="text-sm text-slate-600">Open communication and clear decision-making processes</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="font-medium text-slate-800">Accountability</h4>
                    <p className="text-sm text-slate-600">Responsibility for actions and decisions at all levels</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="font-medium text-slate-800">Integrity</h4>
                    <p className="text-sm text-slate-600">Honest and ethical conduct in all business practices</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="font-medium text-slate-800">User Privacy</h4>
                    <p className="text-sm text-slate-600">Protection of user data and privacy rights</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="font-medium text-slate-800">Fair Access</h4>
                    <p className="text-sm text-slate-600">Equal opportunities and non-discriminatory practices</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="font-medium text-slate-800">Continuous Improvement</h4>
                    <p className="text-sm text-slate-600">Commitment to ongoing enhancement and innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5.0 - Review and Amendments */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader className="bg-orange-50 border-b border-orange-100">
            <CardTitle className="flex items-center space-x-2 text-orange-700">
              <Settings className="w-5 h-5" />
              <span>SECTION 5.0 — REVIEW, APPEAL, AND SANCTIONS</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div>
              <h3 className="font-semibold mb-3 text-slate-900">5.1 Appeal Controls</h3>
              <p className="text-slate-700 mb-4">The platform maintains a comprehensive appeals process ensuring fair resolution of disputes:</p>
              <div className="bg-orange-50 p-4 rounded-lg space-y-3">
                <div className="flex items-start space-x-3">
                  <Badge className="bg-orange-200 text-orange-800">1</Badge>
                  <p className="text-sm text-slate-700">Initial appeal submission and acknowledgment within 48 hours</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-orange-200 text-orange-800">2</Badge>
                  <p className="text-sm text-slate-700">Independent review by qualified panel within 14 business days</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-orange-200 text-orange-800">3</Badge>
                  <p className="text-sm text-slate-700">Stakeholder consultation and evidence review process</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-orange-200 text-orange-800">4</Badge>
                  <p className="text-sm text-slate-700">Final determination and implementation of remedial measures</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

    </div>
  );
};

export default GovernanceCharterOverview;
