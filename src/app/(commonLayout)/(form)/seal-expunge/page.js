"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon, FileText, Upload } from 'lucide-react';

const SealExpungeForm = () => {
  const [dateOfRecord, setDateOfRecord] = useState();
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [requestType, setRequestType] = useState('');
  const [legalBasis, setLegalBasis] = useState([]);
  
  const handleRecordChange = (recordId, checked) => {
    if (checked) {
      setSelectedRecords([...selectedRecords, recordId]);
    } else {
      setSelectedRecords(selectedRecords.filter(id => id !== recordId));
    }
  };

  const handleLegalBasisChange = (basisId, checked) => {
    if (checked) {
      setLegalBasis([...legalBasis, basisId]);
    } else {
      setLegalBasis(legalBasis.filter(id => id !== basisId));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
    

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {/* Title Section */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Request to Seal or Expunge a Record</CardTitle>
                    <p className="text-gray-600 text-sm mt-1">
                      Fill out this form to ask to seal or expunge a criminal record, or to 
                      correct errors on a criminal record.
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Personal Information */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h3 className="font-medium">Parties & Case Information</h3>
                </div>
                <div>
                  <Label htmlFor="court-info">Court and Docket</Label>
                  <Input id="court-info" placeholder="" className="mt-1" />
                </div>
              </CardContent>
            </Card>

            {/* Section 1: Record Details */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">SECTION 1: Record Details</CardTitle>
                <p className="text-sm text-gray-600">Check the boxes for the record</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  'Allegation Report',
                  'Arrest Form / FBI Report',
                  'Allegation for Disposition / JJCR Results',
                  'Child Protective / CPS Record',
                  'Witness / VOP Report',
                  'Substance Conviction under N.J.S.A. Record',
                  'Conditional Discharge Entry',
                  'Disorderly Persons (M) and/or Municipal Summon (s)(M)',
                  'Specific Individual Violation',
                  'Sealed Record',
                  'Court Violation / Sentencing'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`record-${index}`}
                      checked={selectedRecords.includes(`record-${index}`)}
                      onCheckedChange={(checked) => handleRecordChange(`record-${index}`, checked)}
                    />
                    <Label htmlFor={`record-${index}`} className="text-sm">{item}</Label>
                  </div>
                ))}
                
                <div className="mt-6">
                  <p className="text-sm text-gray-600 mb-4">
                    If you are requesting to expunge charges as eligible for sealing to expungement and multiple DISORDERLY PERSON/MUNICIPAL case, applications in respect of individual 
                    effective cases.
                  </p>
                  
                  <div>
                    <Label htmlFor="additional-info">Additional Information</Label>
                    <Textarea id="additional-info" className="mt-1" />
                  </div>
                </div>

                <div className="mt-6">
                  <Label>Date of Record Entry or Conviction</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full mt-1 justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateOfRecord ? dateOfRecord.toLocaleDateString() : "MM / DD / YY"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={dateOfRecord}
                        onSelect={setDateOfRecord}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Type of Request */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">SECTION 2: Type Of Request</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={requestType} onValueChange={setRequestType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="seal" id="seal" />
                    <Label htmlFor="seal">Seal the Record. (Type the justification)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="expunge" id="expunge" />
                    <Label htmlFor="expunge">Expunge the Record (permanent deletion)</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Section 3: Legal or Procedural Basis */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">SECTION 3: Legal Or Procedural Basis For Request</CardTitle>
                <p className="text-sm text-gray-600">
                  State if this is the reason(s) and provide additional detail in other description section.
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  'I was charged but not convicted because the charge was dismissed',
                  'I plead guilty to and was found guilty of the offense (indictable offense)',
                  'I received a conditional discharge under the "Conditional Discharge Statute" and I am eligible for the Record pursuant to the law in favor of the client',
                  'This was a case involving a controlled dangerous substance (CDS) in a jurisdiction where Recreational Marijuana was legal',
                  'The record was expunged or sealed',
                  'I was incorrectly charged for a Clean expungement case',
                  'I was incorrectly charged for a DEF expungement case',
                  'I received an UNSPECIFIED TYPE AND DISORDERLY and/or Disorderly Disposition not regarding a city',
                  'I was only VICTIM of the crime and therefore not disqualified',
                  'Other disability'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Checkbox 
                      id={`legal-${index}`}
                      checked={legalBasis.includes(`legal-${index}`)}
                      onCheckedChange={(checked) => handleLegalBasisChange(`legal-${index}`, checked)}
                      className="mt-1"
                    />
                    <Label htmlFor={`legal-${index}`} className="text-sm leading-relaxed">{item}</Label>
                  </div>
                ))}
                
                <div className="mt-4">
                  <Label htmlFor="other-explanation">Other explanation:</Label>
                  <Textarea id="other-explanation" className="mt-1" />
                </div>

                <div className="mt-6">
                  <Label className="text-sm font-medium">Submit Supporting Documentation</Label>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">Choose File</Button>
                      <span className="text-sm text-gray-500">No file chosen</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">Choose File</Button>
                      <span className="text-sm text-gray-500">No file chosen</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Statement of Request */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">SECTION 4: Statement Of Request</CardTitle>
                <p className="text-sm text-gray-600">
                  I state that I want to seal or expunge or correct my record based on what I have chosen in SECTION 1 - 3
                  outlined above. I understand that any intentionally false or misleading statements may subject me to criminal penalties.
                </p>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="statement">Personal Signature</Label>
                  <Textarea id="statement" className="mt-1" />
                </div>
              </CardContent>
            </Card>

            {/* Section 5: Declaration & Signature */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">SECTION 5: Declaration & Signature</CardTitle>
                <p className="text-sm text-gray-600">
                  I hereby certify that the information in this form is true and accurate to the best of my knowledge. I understand that 
                  any intentionally false or misleading information may subject me to criminal penalties pursuant to N.J.S.A. 2C:28-2 Perjury.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="print-signature">Public Signature</Label>
                  <Input id="print-signature" placeholder="Your full name here..." className="mt-1" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="today" />
                    <Label htmlFor="today">Today</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="signature-day" />
                    <Label htmlFor="signature-day">Signature Day</Label>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-medium text-red-800 mb-2">Final Warning</h4>
                  <p className="text-sm text-red-700">
                    KNOWINGLY MAKING A MATERIALLY FALSE STATEMENT ON THIS FORM IS A 4TH DEGREE CRIME. N.J.S.A. 2C:28-2 makes knowingly 
                    making a materially false statement in any government document a crime punishable by up to 18 months in prison and a fine of up to $10,000, 
                    or both. Answering this information is voluntary.
                  </p>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                  Submit Request For Review
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Submission SOP</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">New Jersey Law Includes Expanded Record</p>
                
                <div>
                  <Label className="text-sm font-medium">Requesting Party</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="self-request" />
                      <Label htmlFor="self-request" className="text-sm">Self-request</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="parent" />
                      <Label htmlFor="parent" className="text-sm">Parent</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="legal-rep" />
                      <Label htmlFor="legal-rep" className="text-sm">Legal Representative/Legal Authority</Label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Full legal name</Label>
                  <Input className="mt-1" placeholder="Your full name" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default SealExpungeForm;