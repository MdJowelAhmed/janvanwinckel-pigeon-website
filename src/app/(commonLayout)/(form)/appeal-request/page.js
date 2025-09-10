"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, FileText, AlertTriangle } from 'lucide-react';

const AppealRequestForm = () => {
  const [selectedGrounds, setSelectedGrounds] = useState([]);
  const [reviewOption, setReviewOption] = useState('');
  const [files, setFiles] = useState([]);
  const [justification, setJustification] = useState('');

  const handleGroundChange = (ground, checked) => {
    if (checked) {
      setSelectedGrounds([...selectedGrounds, ground]);
    } else {
      setSelectedGrounds(selectedGrounds.filter(g => g !== ground));
    }
  };

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles([...files, ...uploadedFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-6 h-6 text-gray-600" />
            <h1 className="text-2xl font-semibold text-gray-800">Appeal Request Form</h1>
          </div>
          
          <div className="space-y-1 text-sm text-gray-600">
            <div><span className="font-medium">Platform Case Reference ID:</span> [Case-ID-Here]</div>
            <div><span className="font-medium">Case Outcome Appealed:</span> [A-las-2025-4-docs]</div>
            <div><span className="font-medium">Filed By:</span> [Your-Name-Here]</div>
          </div>
        </div>

        {/* Section 1: Appeal Grounds */}
        <Card className="mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-red-600 text-lg">
              <span className="text-red-500">📋</span>
              SECTION 1: Appeal Grounds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 mb-6">
              Select at least one (1) or more grounds for appeal. List your appeal for each criteria you have questioned or disputed through consecutive section.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Checkbox 
                  id="new-evidence"
                  onCheckedChange={(checked) => handleGroundChange('new-evidence', checked)}
                />
                <Label htmlFor="new-evidence" className="text-sm text-gray-700 leading-relaxed">
                  New Evidence Not Previously Available: Attach any new documents, testimony, or digital records that post-dated original case.
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox 
                  id="procedural-error"
                  onCheckedChange={(checked) => handleGroundChange('procedural-error', checked)}
                />
                <Label htmlFor="procedural-error" className="text-sm text-gray-700 leading-relaxed">
                  Procedural Error: Explain any violations of platform process, such as improper issue adherence or inequitable actions.
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox 
                  id="bias-misconduct"
                  onCheckedChange={(checked) => handleGroundChange('bias-misconduct', checked)}
                />
                <Label htmlFor="bias-misconduct" className="text-sm text-gray-700 leading-relaxed">
                  Bias/ Misconduct or Skil Detect the administrators with fairness; conflict of interests; or rules violated by peers.
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox 
                  id="incorrect-identification"
                  onCheckedChange={(checked) => handleGroundChange('incorrect-identification', checked)}
                />
                <Label htmlFor="incorrect-identification" className="text-sm text-gray-700 leading-relaxed">
                  Incorrect Identification / Mistaken Target: Detect the flaws your identity or record was falsely linked.
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox 
                  id="legal-regulation"
                  onCheckedChange={(checked) => handleGroundChange('legal-regulation', checked)}
                />
                <Label htmlFor="legal-regulation" className="text-sm text-gray-700 leading-relaxed">
                  Legal Regulation Overlooking Platform Verdict: Attach proof of formal court resolution conflicting with platform records.
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox 
                  id="other"
                  onCheckedChange={(checked) => handleGroundChange('other', checked)}
                />
                <Label htmlFor="other" className="text-sm text-gray-700 leading-relaxed">
                  Other: (Explain Below)
                </Label>
              </div>
            </div>

            <div className="mt-4">
              <Label className="text-sm font-medium text-gray-700">Clearly state Ful List Detils for tt appeal</Label>
              <div className="text-xs text-gray-500 mt-1">More Lis = Impartent - Easy</div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Supporting Materials */}
        <Card className="mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-red-600 text-lg">
              <span className="text-red-500">📎</span>
              SECTION 2: Supporting Materials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 mb-4">
              Upload supporting documents or media files (Max file size: .PDF, .JPEG, .JPG, .PNG, .PNG, .DOCX, .PNG)
            </p>
            <p className="text-xs text-gray-500 mb-4">Maximum file size limit: 10 MB</p>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-4">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <Label htmlFor="file-upload" className="cursor-pointer">
                <span className="text-sm text-blue-600 hover:text-blue-700">Choose File</span>
                <span className="text-sm text-gray-500 ml-2">or drag and drop</span>
              </Label>
              <Input
                id="file-upload"
                type="file"
                multiple
                className="hidden"
                onChange={handleFileUpload}
                accept=".pdf,.jpeg,.jpg,.png,.docx"
              />
            </div>

            {files.length > 0 && (
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                    <span className="text-sm text-gray-700">{file.name}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                      className="text-red-600 hover:text-red-700"
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Section 3: Written Justification */}
        <Card className="mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-red-600 text-lg">
              <span className="text-red-500">✍️</span>
              SECTION 3: Written Justification
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 mb-4">
              Provide detailed description explaining the discrepancy and why you feel the prior decisions are incorrect or contradict the relevant policy/law.
            </p>
            
            <Textarea
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
              placeholder="Write your justification here..."
              className="min-h-[150px] w-full"
            />
          </CardContent>
        </Card>

        {/* Section 4: Review Option */}
        <Card className="mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-red-600 text-lg">
              <span className="text-red-500">💭</span>
              SECTION 4: Review Option
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 mb-4">Please select the appropriate option.</p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="expedited"
                  name="review-option"
                  value="expedited"
                  checked={reviewOption === 'expedited'}
                  onChange={(e) => setReviewOption(e.target.value)}
                  className="w-4 h-4 text-red-600"
                />
                <Label htmlFor="expedited" className="text-sm text-gray-700">
                  Expedited (Advanced) max 3 business days
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="regular"
                  name="review-option"
                  value="regular"
                  checked={reviewOption === 'regular'}
                  onChange={(e) => setReviewOption(e.target.value)}
                  className="w-4 h-4 text-red-600"
                />
                <Label htmlFor="regular" className="text-sm text-gray-700">
                  Regular (economy) estimate 14 calendar days (approximately 10 business days)
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="default"
                  name="review-option"
                  value="default"
                  checked={reviewOption === 'default'}
                  onChange={(e) => setReviewOption(e.target.value)}
                  className="w-4 h-4 text-red-600"
                />
                <Label htmlFor="default" className="text-sm text-gray-700">
                  Default (standard)
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Declaration & Submission */}
        <Card className="mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-red-600 text-lg">
              <span className="text-red-500">⚠️</span>
              SECTION 5: Declaration & Submission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Label className="text-sm font-medium text-gray-700 block mb-2">
                Declaration Under Penalty of Perjury:
              </Label>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                I declare and affirm this is accurate to all the best information available or provided. I declare that the information in this Appeal Request form is true and accurate to the best of my knowledge. I understand that knowingly providing false information may result in rejection of my appeal, platform account suspension and other consequences.
              </p>
            </div>

            <div className="mb-4">
              <Label htmlFor="digital-signature" className="text-sm font-medium text-gray-700">
                Digital Signature (Your full legal name):
              </Label>
              <Input 
                id="digital-signature"
                type="text"
                placeholder="Enter your full legal name"
                className="mt-1"
              />
            </div>

            <div className="mb-4">
              <Label className="text-sm font-medium text-gray-700">Appeal Fee: $89.00</Label>
              <p className="text-xs text-gray-500 mt-1">**Case-Guide-Filed</p>
            </div>

            {/* Important Notice */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-red-800 mb-2">Important Notice:</p>
                  <ul className="text-red-700 space-y-1 text-xs">
                    <li>• Appeal Limited received all appeal/s is been filled to be sure No choice for a cause. You may not receive a detailed Fair access to represent per that petition.</li>
                    <li>• As an important filing time <strong>within 30 days</strong> if the initial decision date.</li>
                    <li>• Case filing to business days.</li>
                    <li>• If the document are received through online provide much above - <strong>Submit Appeal</strong> and timeqaery by business.</li>
                    <li>• Only in a Statement is a judicial Notice, the office is a Direct to Order will remain filing a request to the Criminal panel.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-base font-medium"
                size="lg"
              >
                Pay & Submit Appeal
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AppealRequestForm;