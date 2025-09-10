"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar, FileText, AlertTriangle } from 'lucide-react';

export default function MisuseReportForm() {
  const [formData, setFormData] = useState({
    reporterInfo: {
      fullName: '',
      anonymousPreferred: false,
      contactInformation: '',
      emailAddress: '',
      phoneNumber: '',
      relationship: '',
      witnessesPresent: ''
    },
    misuseNature: [],
    complaintSubject: '',
    allegedOfficial: '',
    incidentDate: '',
    incidentDetails: '',
    supportingEvidence: [],
    resolutionRequested: [],
    affirmation: false,
    signature: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleCheckboxChange = (section, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [section]: checked 
        ? [...prev[section], value]
        : prev[section].filter(item => item !== value)
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">


      <div className="container mx-auto px-4 py-8 ">
        {/* Title Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl font-bold text-gray-900">Misuse Report Form</h1>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Use this form to report any misuse of power, fraud, waste, abuse of authority, or any violation of law or policy. Your report will be treated confidentially to the extent permitted by law.
          </p>
        </div>

        <div className="space-y-8">
          {/* Section 1: Reporter Information */}
          <Card>
            <CardHeader className="bg-red-50 border-b">
              <CardTitle className="text-red-700 flex items-center gap-2">
                Section 1: Reporter Information
              </CardTitle>
              <p className="text-sm text-gray-600 mt-1">Please provide your contact information. Anonymous reporting is allowed.</p>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    value={formData.reporterInfo.fullName}
                    onChange={(e) => handleInputChange('reporterInfo', 'fullName', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="contactInfo">General Information (Optional)</Label>
                  <Input 
                    id="contactInfo"
                    value={formData.reporterInfo.contactInformation}
                    onChange={(e) => handleInputChange('reporterInfo', 'contactInformation', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={formData.reporterInfo.emailAddress}
                    onChange={(e) => handleInputChange('reporterInfo', 'emailAddress', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone"
                    value={formData.reporterInfo.phoneNumber}
                    onChange={(e) => handleInputChange('reporterInfo', 'phoneNumber', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="relationship">Your Relationship to Organization</Label>
                <Input 
                  id="relationship"
                  value={formData.reporterInfo.relationship}
                  onChange={(e) => handleInputChange('reporterInfo', 'relationship', e.target.value)}
                />
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Are you personally knowledgeable about the problem or event reported? (or this disclosure):</p>
                <RadioGroup defaultValue="yes" className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Nature of Misuse */}
          <Card>
            <CardHeader className="bg-red-50 border-b">
              <CardTitle className="text-red-700">Section 2: Nature Of The Reported Misuse</CardTitle>
              <p className="text-sm text-gray-600 mt-1">Check all that apply:</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Exceeding normal budgetary expenditures',
                  'Budgetary misapplication',
                  'Harassment or threats per coercive funds',
                  'Identity Misuse From winning Users',
                  'User endorsement as conflict of interests',
                  'Assistance of Staff information',
                  'Data misuse, identity',
                  'Unauthorized misuse or System forgering',
                  'Others'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`misuse-${index}`}
                      onCheckedChange={(checked) => handleCheckboxChange('misuseNature', item, checked)}
                    />
                    <Label htmlFor={`misuse-${index}`} className="text-sm">{item}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Subject of Complaint */}
          <Card>
            <CardHeader className="bg-red-50 border-b">
              <CardTitle className="text-red-700">Section 3: Subject of The Complaint</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <Label>Name of the Person Being or Mayor Employer (if known):</Label>
                <Input 
                  className="mt-1"
                  value={formData.complaintSubject}
                  onChange={(e) => setFormData(prev => ({...prev, complaintSubject: e.target.value}))}
                />
              </div>

              <div>
                <Label>Email of the person (if known):</Label>
                <Input className="mt-1" />
              </div>

              <div>
                <Label>What was alleged official or employee:</Label>
                <div className="mt-2 space-y-2">
                  {['Supervisor', 'Coworker', 'Top', 'Unknown field', 'In Person'].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox id={`official-${index}`} />
                      <Label htmlFor={`official-${index}`} className="text-sm">{item}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: Incident Details */}
          <Card>
            <CardHeader className="bg-red-50 border-b">
              <CardTitle className="text-red-700">Section 4: Incident Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="text-sm text-gray-600">
                Please provide the specific details of the incident including when where and how the misconduct or improper conduct occurred. Provide all supporting facts.
              </p>
              
              <div>
                <Label>Describe Facts (Optional):</Label>
                <Textarea 
                  className="mt-1 h-32"
                  value={formData.incidentDetails}
                  onChange={(e) => setFormData(prev => ({...prev, incidentDetails: e.target.value}))}
                />
              </div>

              <div>
                <Label>Incident date or time period:</Label>
                <Input 
                  type="date" 
                  className="mt-1"
                  value={formData.incidentDate}
                  onChange={(e) => setFormData(prev => ({...prev, incidentDate: e.target.value}))}
                />
              </div>
            </CardContent>
          </Card>

          {/* Section 5: Supporting Evidence */}
          <Card>
            <CardHeader className="bg-red-50 border-b">
              <CardTitle className="text-red-700">Section 5: Supporting Evidence</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-4">
                Attach any documents you cite and the documents that you can provide to support maintaining a administrative filing etc.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">5.1</span>
                  <Input placeholder="Attach File" className="flex-1" />
                  <Button variant="outline" size="sm">No file chosen</Button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">5.2</span>
                  <Input placeholder="Attach File" className="flex-1" />
                  <Button variant="outline" size="sm">No file chosen</Button>
                </div>
              </div>
              
              <div className="mt-4">
                <Label>Papers or Links you find in this information files</Label>
                <Textarea className="mt-1" placeholder="Enter links or references" />
              </div>
            </CardContent>
          </Card>

          {/* Section 6: Resolution Requested */}
          <Card>
            <CardHeader className="bg-red-50 border-b">
              <CardTitle className="text-red-700">Section 6: Resolution Requested</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-4">
                Check the outcome that you believe would correct or redress the violation:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Criminal investigation',
                  'Disciplinary Personnel security measures',
                  'Personnel selection criteria',
                  'Other financial or audit',
                  'Money to be adding or Effective',
                  'Disciplinary to employee and personal termina',
                  'Investigation to check placement and Right to give and continues the community',
                  'Others'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`resolution-${index}`}
                      onCheckedChange={(checked) => handleCheckboxChange('resolutionRequested', item, checked)}
                    />
                    <Label htmlFor={`resolution-${index}`} className="text-sm">{item}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Section 7: Affirmation & Signature */}
          <Card>
            <CardHeader className="bg-red-50 border-b">
              <CardTitle className="text-red-700">Section 7: Affirmation & Signature</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <p className="text-sm text-red-800 font-medium mb-2">Perjury Declaration & Affidavit: Compliance Advice</p>
                <p className="text-sm text-red-700">
                  I swear or affirm under penalty of perjury that the information I have provided in this complaint is true and correct to the best of my knowledge and belief. I understand that this information may be investigated and may result in legal action against the named individual(s). I also understand that knowingly filing a false complaint may subject me to criminal penalties.
                </p>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="affirmation"
                  onCheckedChange={(checked) => setFormData(prev => ({...prev, affirmation: checked}))}
                />
                <Label htmlFor="affirmation" className="text-sm">
                  I affirm and attest to the absolute statement.
                </Label>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Report Signature:</Label>
                  <Input 
                    className="mt-1"
                    value={formData.signature}
                    onChange={(e) => setFormData(prev => ({...prev, signature: e.target.value}))}
                  />
                </div>
                <div>
                  <Label>Date:</Label>
                  <Input 
                    type="date" 
                    className="mt-1"
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({...prev, date: e.target.value}))}
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-gray-400" />
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  <div className="font-semibold">Sun</div>
                  <div className="font-semibold">Mon</div>
                  <div className="font-semibold">Tue</div>
                  <div className="font-semibold">Wed</div>
                  <div className="font-semibold">Thu</div>
                  <div className="font-semibold">Fri</div>
                  <div className="font-semibold">Sat</div>
                  
                  {Array.from({ length: 42 }, (_, i) => {
                    const day = i - 2; // Assuming month starts on Wednesday
                    const isCurrentDay = day === 10; // Highlighting day 10 as example
                    return (
                      <div 
                        key={i} 
                        className={`p-1 ${day > 0 && day <= 31 ? 'cursor-pointer hover:bg-gray-200' : 'text-gray-300'} ${isCurrentDay ? 'bg-blue-500 text-white rounded-full' : ''}`}
                      >
                        {day > 0 && day <= 31 ? day : ''}
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Section */}
          <Card>
            <CardHeader className="bg-red-50 border-b">
              <CardTitle className="text-red-700">Submit Form</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-4">
                Once you submit this form, you will receive a confirmation email and your report will be assigned a complaint reference number. You can check the status of your complaint using the reference number in the status section.
              </p>
              
              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => window.location.reload()}>Reset Form</Button>
                <Button 
                  onClick={handleSubmit}
                  className="bg-red-600 hover:bg-red-700 text-white px-8"
                >
                  Submit Securely
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    
    </div>
  );
};


