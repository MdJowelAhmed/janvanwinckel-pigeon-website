
"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, FileText, Wrench, AlertTriangle } from 'lucide-react';

export default function TechnicalSupportForm() {
  const [formData, setFormData] = useState({
    userInfo: {
      fullName: '',
      department: '',
      emailAddress: '',
      phoneNumber: '',
      jobTitle: '',
      requestType: ''
    },
    issueClassification: [],
    issueDescription: '',
    technicalDetails: {
      operatingSystem: '',
      browserType: '',
      systemSpecs: '',
      errorMessages: ''
    },
    attachments: [],
    impact: {
      severity: '',
      affectedUsers: '',
      businessImpact: ''
    },
    supportPreferences: {
      preferredContact: '',
      urgency: ''
    },
    declaration: false,
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
    console.log('Technical Support Request submitted:', formData);
    alert('Technical Support Request submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
  

      <div className="container mx-auto px-4 py-8 ">
        {/* Title Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl font-bold text-gray-900">Technical Support Request Form</h1>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Please fill out this form to request technical assistance. Our support team will review your request and respond within the timeframe based on the priority level selected.
          </p>
        </div>

        <div className="space-y-8">
          {/* Section 1: User Identification */}
          <Card>
            <CardHeader className="bg-red-50 border-b">
              <CardTitle className="text-red-700 flex items-center gap-2">
                Section 1: User Identification
              </CardTitle>
              <p className="text-sm text-gray-600 mt-1">Please provide your contact and identification information.</p>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name*</Label>
                  <Input 
                    id="fullName" 
                    value={formData.userInfo.fullName}
                    onChange={(e) => handleInputChange('userInfo', 'fullName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="department">Department/Unit/Organization*</Label>
                  <Input 
                    id="department"
                    value={formData.userInfo.department}
                    onChange={(e) => handleInputChange('userInfo', 'department', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address*</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={formData.userInfo.emailAddress}
                    onChange={(e) => handleInputChange('userInfo', 'emailAddress', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone"
                    value={formData.userInfo.phoneNumber}
                    onChange={(e) => handleInputChange('userInfo', 'phoneNumber', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input 
                    id="jobTitle"
                    value={formData.userInfo.jobTitle}
                    onChange={(e) => handleInputChange('userInfo', 'jobTitle', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="requestType">Request Type*</Label>
                  <Select onValueChange={(value) => handleInputChange('userInfo', 'requestType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select request type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hardware">Hardware Issue</SelectItem>
                      <SelectItem value="software">Software Issue</SelectItem>
                      <SelectItem value="network">Network Problem</SelectItem>
                      <SelectItem value="account">Account Access</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Issue Classification */}
          <Card>
            <CardHeader className="bg-red-50 border-b">
              <CardTitle className="text-red-700">Section 2: Issue Classification</CardTitle>
              <p className="text-sm text-gray-600 mt-1">Select all categories that best describe your issue:</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Login / Account Access Problems',
                  'Email Login/Setup Issue',
                  'Database / Application Issue',
                  'User Computer / Application Crash',
                  'Printing Issue / Server Error',
                  'Website Access Issues',
                  'System Login / Browser',
                  'Internet Connectivity Issues',
                  'Hardware / IT Infrastructure',
                  'Other (Please Specify)'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`issue-${index}`}
                      onCheckedChange={(checked) => handleCheckboxChange('issueClassification', item, checked)}
                    />
                    <Label htmlFor={`issue-${index}`} className="text-sm">{item}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Description of The Issue */}
          <Card>
            <CardHeader className="bg-red-50 border-b">
              <CardTitle className="text-red-700">Section 3: Description Of The Issue</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="text-sm text-gray-600">
                Please provide a detailed description of your technical issue or request. Include specific error messages, steps you have already tried, and when the problem first occurred.
              </p>
              
              <div>
                <Label>Detailed Issue Description*</Label>
                <Textarea 
                  className="mt-1 h-32"
                  value={formData.issueDescription}
                  onChange={(e) => setFormData(prev => ({...prev, issueDescription: e.target.value}))}
                  placeholder="Please describe your issue in detail..."
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Section 4: Technical Details (If Known) */}
          <Card>
            <CardHeader className="bg-red-50 border-b">
              <CardTitle className="text-red-700">Section 4: Technical Details (If Known)</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div>
                <Label className="text-base font-medium">Operating System and Other Information:</Label>
                <div className="mt-3 space-y-3">
                  <div>
                    <Label>Browser Type:</Label>
                    <div className="mt-2 space-y-2">
                      {['Microsoft Internet', 'Safari', 'Mozilla Firefox', 'Chrome', 'Other'].map((browser, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox id={`browser-${index}`} />
                          <Label htmlFor={`browser-${index}`} className="text-sm">{browser}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Operating System:</Label>
                    <div className="mt-2 space-y-2">
                      {['Mac OS', 'Linux', 'Windows', 'Android', 'iOS', 'Other'].map((os, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox id={`os-${index}`} />
                          <Label htmlFor={`os-${index}`} className="text-sm">{os}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Device:</Label>
                    <div className="mt-2 space-y-2">
                      {['Desktop', 'Laptop', 'Tablet', 'Smartphone', 'Other'].map((device, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox id={`device-${index}`} />
                          <Label htmlFor={`device-${index}`} className="text-sm">{device}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Browser/App:</Label>
                    <div className="mt-2 space-y-2">
                      {['Chrome', 'Firefox', 'Safari', 'Edge', 'Other'].map((app, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox id={`app-${index}`} />
                          <Label htmlFor={`app-${index}`} className="text-sm">{app}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Other:</Label>
                    <Input className="mt-1" placeholder="Please specify other details" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 5: Attachments (Optional) */}
          <Card>
            <CardHeader className="bg-red-50 border-b">
              <CardTitle className="text-red-700">Section 5: Attachments (Optional)</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-4">
                Please attach any relevant screenshots, error logs, or documents that might help us understand and resolve your issue more effectively.
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
            </CardContent>
          </Card>

          {/* Section 6: Impact */}
          <Card>
            <CardHeader className="bg-red-50 border-b">
              <CardTitle className="text-red-700">Section 6: Impact</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <Label className="text-sm font-medium">How urgent is the issue/request?</Label>
                <RadioGroup className="mt-2">
                  {['Critical', 'High', 'Medium', 'Low'].map((level, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={level.toLowerCase()} id={`urgency-${index}`} />
                      <Label htmlFor={`urgency-${index}`} className="text-sm">{level}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-sm font-medium">How many users are affected by this issue/request?</Label>
                <RadioGroup className="mt-2">
                  {['Just me', 'My team (2-10)', 'My department (10+)', 'Multiple departments', 'Entire organization'].map((scope, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={`users-${index}`} id={`users-${index}`} />
                      <Label htmlFor={`users-${index}`} className="text-sm">{scope}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Section 7: Support Preferences */}
          <Card>
            <CardHeader className="bg-red-50 border-b">
              <CardTitle className="text-red-700">Section 7: Support Preferences</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <Label className="text-sm font-medium">What is your preferred method to receive support?</Label>
                <RadioGroup className="mt-2">
                  {['Email', 'Phone'].map((method, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={method.toLowerCase()} id={`contact-${index}`} />
                      <Label htmlFor={`contact-${index}`} className="text-sm">{method}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-sm font-medium">Would you like to schedule a call or remote assistance?</Label>
                <RadioGroup className="mt-2">
                  {['Yes', 'No'].map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.toLowerCase()} id={`schedule-${index}`} />
                      <Label htmlFor={`schedule-${index}`} className="text-sm">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Section 8: Submission Declaration */}
          <Card>
            <CardHeader className="bg-red-50 border-b">
              <CardTitle className="text-red-700">Section 8: Submission Declaration</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="declaration"
                  onCheckedChange={(checked) => setFormData(prev => ({...prev, declaration: checked}))}
                />
                <Label htmlFor="declaration" className="text-sm">
                  I agree
                </Label>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Digital Signature*</Label>
                  <Input 
                    className="mt-1"
                    value={formData.signature}
                    onChange={(e) => setFormData(prev => ({...prev, signature: e.target.value}))}
                    placeholder="Type your full name"
                    required
                  />
                </div>
                <div>
                  <Label>Current Date*</Label>
                  <Input 
                    type="date" 
                    className="mt-1"
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({...prev, date: e.target.value}))}
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium">Date of Report/Issue or Occurrence:</Label>
                <div className="mt-2 space-y-2">
                  {['Today', 'Yesterday', 'This week', 'Last week', 'This month', 'More than a month ago'].map((time, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox id={`occurrence-${index}`} />
                      <Label htmlFor={`occurrence-${index}`} className="text-sm">{time}</Label>
                    </div>
                  ))}
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

              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>Disclaimer:</strong> This form is for technical support requests only. For urgent security issues or system outages, please contact the IT helpdesk directly at [phone number] or [emergency email]. By submitting this form, you acknowledge that the information provided is accurate and complete to the best of your knowledge.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Submit Section */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-center">
                <Button 
                  onClick={handleSubmit}
                  className="bg-red-600 hover:bg-red-700 text-white px-12 py-2"
                  size="lg"
                >
                  Submit Request
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    
    </div>
  );
}