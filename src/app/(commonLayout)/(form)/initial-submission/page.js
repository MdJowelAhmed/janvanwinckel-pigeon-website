"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon, Upload, FileText } from "lucide-react";

const GlassFileForm = () => {
  const [initiatorDob, setInitiatorDob] = useState();
  const [respondentDob, setRespondentDob] = useState();
  const [filingType, setFilingType] = useState("");
  const [state, setState] = useState("");

  const [selectedFiles1, setSelectedFiles1] = useState(null);
  const [selectedFiles2, setSelectedFiles2] = useState(null);
  const [supportingLink, setSupportingLink] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleFileChange = (event, fileNumber) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      if (fileNumber === 1) {
        setSelectedFiles1(files[0]);
      } else {
        setSelectedFiles2(files[0]);
      }
    }
  };

  return (
    <div className="min-h-screen ">
      <div className="  w-full px-4 py-8">
        <div className="w-full">
          {/* Main Form */}
          <div className="w-full">
            <div className="my-12 bg-secondary">
              <div className="mb-6 container mx-auto  flex items-center justify-between bg-secondary gap-20">
              <div className="flex-1">
                <CardTitle className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl mb-2 text-secondary-foreground">
                  Initial Submission Form
                </CardTitle>
                <p className="text-gray-600 max-w-xl">
                  For respondents, legal guardians, advocates & verifiied
                  persons to make an appeal to the competent court.
                </p>
              </div>
              {/* Sidebar */}
              <div className=" flex-1">
                <div>
                  <CardHeader>
                    <CardTitle className="text-lg text-red-600 text-center">
                      State Of Residence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <Label htmlFor="state-select" className="mb-2">
                        What State do you reside in?
                      </Label>
                      <Select value={state} onValueChange={setState} className="mt-2">
                        <SelectTrigger className="w-4/5">
                          <SelectValue placeholder="California" />
                        </SelectTrigger>
                        <SelectContent className="w-full">
                          <SelectItem value="california">California</SelectItem>
                          <SelectItem value="texas">Texas</SelectItem>
                          <SelectItem value="florida">Florida</SelectItem>
                          <SelectItem value="new-york">New York</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </div>
              </div>
            </div>
            </div>

            {/* Information About The Initiator */}
           <div className="py-12 bg-secondary-foreground">
             <div className="container mx-auto">
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  Information About The Initiator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="initiator-first-name">First Name</Label>
                  <Input
                    id="initiator-first-name"
                    placeholder="John Doe Jr Max"
                  />
                </div>

                <div>
                  <Label htmlFor="initiator-middle-name">Middle Name</Label>
                  <Input
                    id="initiator-middle-name"
                    placeholder="Doe John Junior"
                  />
                </div>

                <div>
                  <Label htmlFor="initiator-last-name">Last Name</Label>
                  <Input
                    id="initiator-last-name"
                    placeholder="Doe John Junior"
                  />
                </div>

                <div>
                  <Label>Date of Birth</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {initiatorDob
                          ? initiatorDob.toLocaleDateString()
                          : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-6 h-16">
                      <Calendar
                        mode="single"
                        selected={initiatorDob}
                        onSelect={setInitiatorDob}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </CardContent>
            </div>
           </div>

            {/* Information About The Respondent */}
       <div className="py-16 bg-secondary">
             <div className="mb-6 container mx-auto">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">
                  Information About The Respondent
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="respondent-first-name">First Name</Label>
                  <Input
                    id="respondent-first-name"
                    placeholder="John Doe Jr Max"
                  />
                </div>

                <div>
                  <Label htmlFor="respondent-middle-name">Middle Name</Label>
                  <Input
                    id="respondent-middle-name"
                    placeholder="Doe John Junior"
                  />
                </div>

                <div>
                  <Label htmlFor="respondent-last-name">Last Name</Label>
                  <Input
                    id="respondent-last-name"
                    placeholder="Doe John Junior"
                  />
                </div>

                <div>
                  <Label>Date of Birth</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {respondentDob
                          ? respondentDob.toLocaleDateString()
                          : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={respondentDob}
                        onSelect={setRespondentDob}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label htmlFor="respondent-email">Respondents Email</Label>
                  <Input
                    id="respondent-email"
                    type="email"
                    placeholder="doe.john@email.com"
                  />
                </div>
              </CardContent>
            </div>
       </div>

            {/* Type Of Filing */}
        <div className="py-16 bg-secondary-foreground">
              <Card className="mb-6 container mx-auto">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">
                  Type Of Filing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={filingType} onValueChange={setFilingType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="jurisdiction" id="jurisdiction" />
                    <Label htmlFor="jurisdiction">Jurisdiction</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="procedural-issue"
                      id="procedural-issue"
                    />
                    <Label htmlFor="procedural-issue">Procedural Issue</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="subject-matter"
                      id="subject-matter"
                    />
                    <Label htmlFor="subject-matter">Subject Matter</Label>
                  </div>
                </RadioGroup>

                <div className="mt-6 space-y-4">
                  <div>
                    <Label htmlFor="what-happened">What happened?</Label>
                    <Textarea
                      id="what-happened"
                      placeholder="Allegation 1"
                      className="min-h-32"
                    />
                  </div>

                  <div>
                    <Label htmlFor="allegation-2">Allegation 2</Label>
                    <Textarea
                      id="allegation-2"
                      placeholder="Allegation 2"
                      className="min-h-32"
                    />
                  </div>
                </div>

                <Button className="mt-4 text-accent bg-primary hover:bg-primary-foreground">
                  Add Another Allegation
                </Button>
              </CardContent>
            </Card>
        </div>

            {/* Upload Evidence */}
            <div className="my-16 bg-secondary">
              <div className="mb-6 container mx-auto">
              <CardHeader className=''>
                <h3 className="text-lg text-red-600">
                  Upload Evidence
                </h3>
                <h4 className="mb-4">
                  Upload any documentation you believe supports your claim, including screenshots, messages, case submission links, etc.
                </h4>
              </CardHeader>
             <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-3">
          Upload File 1:
        </label>
        <div className="relative">
          <input
            type="file"
            id="file1"
            onChange={(e) => handleFileChange(e, 1)}
            className="hidden"
          />
          <label
            htmlFor="file1"
            className="flex items-center justify-between w-full px-4 py-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
          >
            <span className="text-gray-700">
              {selectedFiles1 ? selectedFiles1.name : 'Choose File'}
            </span>
            <span className="text-gray-500 text-sm">
              {selectedFiles1 ? '' : 'No file chosen'}
            </span>
          </label>
        </div>
      </div>

      {/* Upload File 2 */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-3">
          Upload File 2:
        </label>
        <div className="relative">
          <input
            type="file"
            id="file2"
            onChange={(e) => handleFileChange(e, 2)}
            className="hidden"
          />
          <label
            htmlFor="file2"
            className="flex items-center justify-between w-full px-4 py-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
          >
            <span className="text-gray-700">
              {selectedFiles2 ? selectedFiles2.name : 'Choose File'}
            </span>
            <span className="text-gray-500 text-sm">
              {selectedFiles2 ? '' : 'No file chosen'}
            </span>
          </label>
        </div>
      </div>

      {/* Optional Link */}
      <div className="mb-8">
        <label className="block text-gray-700 font-medium mb-3">
          Optional Link (e.g., Case ID or Submission URL):
        </label>
        <input
          type="text"
          value={supportingLink}
          onChange={(e) => setSupportingLink(e.target.value)}
          placeholder="Enter Your Supporting Link"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>

      {/* Declaration Section */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <h3 className="font-bold text-red-800 mb-3 text-lg">
          DECLARATION UNDER PENALTY OF PERJURY
        </h3>
        <p className="text-red-700 text-sm mb-4 leading-relaxed">
          I hereby declare and affirm in accordance with the laws of the jurisdiction(s) involved, UNDER PENALTY OF PERJURY, that the foregoing is true and accurate to the best of my knowledge.
        </p>
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="agree"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
            className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
          />
          <label htmlFor="agree" className="text-red-700 text-sm font-medium cursor-pointer">
            I Agree
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          disabled={!isAgreed}
          className={`px-8 py-3 rounded-md font-medium text-white transition-colors ${
            isAgreed 
              ? 'bg-red-600 hover:bg-red-700 cursor-pointer' 
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Submit Securely
        </button>
      </div>
      </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassFileForm;
