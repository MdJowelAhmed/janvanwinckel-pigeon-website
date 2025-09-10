"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AlertTriangle, FileText, Users, Shield, Settings } from 'lucide-react';

const JurorApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: 'Auto-filled',
    username: 'Auto-filled',
    dateOfBirth: 'Auto-filled',
    email: 'Auto-filled',
    showCurrentAddress: 'no',
    eligibilityChecks: [],
    digitalSignature: '',
    date: 'Auto-filled',
    platformConsent: []
  });

  const handleCheckboxChange = (section, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [section]: checked 
        ? [...prev[section], value]
        : prev[section].filter(item => item !== value)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Glass File</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white text-sm">Home</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm">FAQ</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm">Contact Us</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm">Dashboard</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm">Profile</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Title Section */}
        <div className="text-center py-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Users className="w-6 h-6 text-gray-600" />
            <h1 className="text-2xl font-bold text-gray-800">
              Application and Affidavit for Enrollment in Juror Program
            </h1>
          </div>
          <p className="text-sm text-gray-600">Platform Name: Glass File</p>
        </div>

        {/* Warning Alert */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
            <div className="text-sm text-red-700">
              It is a crime to submit as a Juror on this platform if you do not meet all eligibility criteria above or if there is information (public or otherwise) that is not required. A valid juror ID is the only requirement however that must be verified and acknowledged by the platform. The most current version and revision of the Juror Protocol is required for Jurror applications and approvals.
            </div>
          </div>
        </div>

        {/* Section 1: Applicant Information */}
        <Card>
          <CardHeader className="bg-gray-100 border-b">
            <CardTitle className="text-red-600 text-lg font-bold">
              SECTION 1: APPLICANT INFORMATION
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                  Full Legal Name: (Auto-filled)
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  className="mt-1"
                  disabled
                />
              </div>
              <div>
                <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                  Username: (Auto-filled)
                </Label>
                <Input
                  id="username"
                  value={formData.username}
                  className="mt-1"
                  disabled
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700">
                  Date of Birth: (Auto-filled)
                </Label>
                <Input
                  id="dateOfBirth"
                  value={formData.dateOfBirth}
                  className="mt-1"
                  disabled
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address: (Auto-filled)
                </Label>
                <Input
                  id="email"
                  value={formData.email}
                  className="mt-1"
                  disabled
                />
              </div>
            </div>
            
            <div className="mt-6">
              <Label className="text-sm font-medium text-gray-700 mb-3 block">
                Does your ID show your current address?
              </Label>
              <RadioGroup value={formData.showCurrentAddress} onValueChange={(value) => 
                setFormData(prev => ({ ...prev, showCurrentAddress: value }))
              }>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="text-sm">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="text-sm">No</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Eligibility Attestation */}
        <Card>
          <CardHeader className="bg-gray-100 border-b">
            <CardTitle className="text-red-600 text-lg font-bold">
              SECTION 2: ELIGIBILITY ATTESTATION
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-sm text-gray-700 mb-4">Please confirm each of the following:</p>
            <div className="space-y-3">
              {[
                "I am at least 21 years of age.",
                "I agree not to serve as a Juror on any case involving myself, a spouse or former spouse, partner or steppartner with whom I have a personal, familial, or professional relationship.",
                "I have no criminal record involving perjury, fraud of any kind, or violation of a court order within the past 5 years.",
                "I am able to objectively review sensitive and emotional materials.",
                "I agree to maintain strict confidentiality in all case reviews.",
                "I will serve impartially, based solely on the evidence provided.",
                "I will not share my platform credentials or allow anyone other than myself to operate using my unique platform-based Juror ID.",
                "I understand completion of the Juror Orientation and Ethics Test is required.",
                "I understand I must submit a government-issued photo ID that is not expired."
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Checkbox
                    id={`eligibility-${index}`}
                    checked={formData.eligibilityChecks.includes(index)}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange('eligibilityChecks', index, checked)
                    }
                    className="mt-1"
                  />
                  <Label htmlFor={`eligibility-${index}`} className="text-sm text-gray-700">
                    {item}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Affidavit */}
        <Card>
          <CardHeader className="bg-gray-100 border-b">
            <CardTitle className="text-red-600 text-lg font-bold">
              SECTION 3: AFFIDAVIT OF GOOD FAITH & OATH OF IMPARTIALITY
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-3">
                I, The Undersigned, Affirm Under Penalty Of Perjury:
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• That the information I have provided in this application is true and complete to the best of my knowledge.</li>
                <li>• That I seek to join the Juror pool voluntarily, without any external pressure or agenda.</li>
                <li>• That I understand my role is to evaluate cases based only on the evidence presented, not personal beliefs.</li>
                <li>• That I will abstain from research or voting on any matter of which I have conflict of interest.</li>
                <li>• That I agree to abide by all rules, duties and restrictions outlined in the Juror Protocol.</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="signature" className="text-sm font-medium text-gray-700">
                  Digital Signature (type full legal name):
                </Label>
                <Input
                  id="signature"
                  value={formData.digitalSignature}
                  onChange={(e) => setFormData(prev => ({ ...prev, digitalSignature: e.target.value }))}
                  placeholder="Your signature here"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="date" className="text-sm font-medium text-gray-700">
                  Date: (Auto-filled)
                </Label>
                <Input
                  id="date"
                  value={formData.date}
                  className="mt-1"
                  disabled
                />
              </div>
              <div className="text-xs text-gray-500">
                By submitting, you understand before completing Juror assignment.
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Platform Use and Consent */}
        <Card>
          <CardHeader className="bg-gray-100 border-b">
            <CardTitle className="text-red-600 text-lg font-bold">
              SECTION 4: PLATFORM USE AND CONSENT
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-sm text-gray-700 mb-4">By submitting this form: (you must check all boxes)</p>
            <div className="space-y-3">
              {[
                "I agree to the Terms of Service, Juror Protocol, and Privacy Policy.",
                "I agree to complete the Orientation and Ethics Test before being eligible to participate in any case review, and I understand that failing this test may delay or cancel my enrollment.",
                "I consent to receiving notifications for Juror assignments.",
                "I understand my performance may be reviewed and audited for fairness and consistency.",
                "I understand I may be removed from the juror pool at the Platform's discretion.",
                "I understand I will be contacted regarding this application to complete this process."
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Checkbox
                    id={`consent-${index}`}
                    checked={formData.platformConsent.includes(index)}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange('platformConsent', index, checked)
                    }
                    className="mt-1"
                  />
                  <Label htmlFor={`consent-${index}`} className="text-sm text-gray-700">
                    {item}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-center py-6">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-medium">
            Submit Application
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Glass File</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">User Resources & Guidelines</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Community & Documentation</a></li>
                <li><a href="#" className="hover:text-white">Community Charter</a></li>
                <li><a href="#" className="hover:text-white">Legal Information & External Resources</a></li>
                <li><a href="#" className="hover:text-white">API & Privacy Requirements</a></li>
                <li><a href="#" className="hover:text-white">Juror Code</a></li>
                <li><a href="#" className="hover:text-white">Juror Protocol</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">User Support & Policies</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Fair Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">© 2020 Glass File. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JurorApplicationForm;