"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, MessageSquare } from 'lucide-react';
import FormDropdown from '@/components/FormDropdown';

const DashboardContainer = () => {
  const currentSubmissions = [
    {
      caseId: '#A2394B',
      respondent: 'M. Ray',
      status: 'Awaiting Juror Review 0 of 3 votes',
      lastActivity: 'June 16, 2025',
      statusType: 'pending'
    },
    {
      caseId: '#B11803',
      respondent: 'J. Doe',
      status: 'Notice Sent... Awaiting Response',
      lastActivity: 'June 15, 2025',
      statusType: 'notice'
    }
  ];

  const jurorStatus = [
    {
      caseId: '#A2394B',
      myVote: 'VP',
      jury: '3',
      progress: '2 of 3 votes',
      outcome: '——'
    },
    {
      caseId: '#B11803',
      myVote: '(Review)',
      jury: '3',
      progress: '1 of 3 votes',
      outcome: '——'
    }
  ];

  const submissionHistory = [
    {
      caseId: '#A2394B',
      respondent: 'P. Lee',
      outcome: 'LAND',
      appealed: 'Rejected (Insufficient Basis)',
      actions: ['View Records', 'Send Message']
    },
    {
      caseId: '#B11803',
      respondent: 'P. Lee',
      outcome: 'VP',
      appealed: 'Withdrawn by Initiator',
      actions: ['View Records', 'Send Message']
    },
    {
      caseId: '#B11803',
      respondent: 'P. Lee',
      outcome: 'VP',
      appealed: 'N/A',
      actions: ['View Records', 'Cancel', 'Send Message']
    },
    {
      caseId: '#B11803',
      respondent: 'P. Lee',
      outcome: 'N/A',
      appealed: 'No',
      actions: ['View Records', 'Cancel', 'Send Message']
    },
    {
      caseId: '#B11803',
      respondent: 'P. Lee',
      outcome: 'WON',
      appealed: 'No',
      actions: ['View Records', 'Cancel', 'Send Message']
    }
  ];

  const getOutcomeBadge = (outcome) => {
    const styles = {
      'LAND': 'bg-orange-100 text-orange-800 border-orange-200',
      'VP': 'bg-green-100 text-green-800 border-green-200',
      'WON': 'bg-red-100 text-red-800 border-red-200',
      'N/A': 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return styles[outcome] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getStatusBadge = (statusType) => {
    const styles = {
      'pending': 'bg-blue-100 text-blue-800 border-blue-200',
      'notice': 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    return styles[statusType] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className=" mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">User Dashboard</h1>
          <p className="text-gray-600 text-sm md:text-base">
            Welcome to your personal User Dashboard. Here you can manage active and past submissions, monitor juror voting, respond to platform notifications, and control your user obligations.
          </p>
        </div>

        {/* Current Submissions Overview */}
        <Card>
          <CardHeader className="bg-white border-b">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <CardTitle className="text-xl md:text-2xl font-bold text-red-600">
                CURRENT SUBMISSIONS OVERVIEW
              </CardTitle>
              <FormDropdown 
                buttonText="Start A New Submission" 
                buttonClassName="bg-red-600 hover:bg-red-700 text-white w-full md:w-auto"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="text-sm text-gray-600 p-4 border-b bg-gray-50">
              Displays all pending, in-review, or under-juror-evaluation submissions.
            </div>
            
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="text-left p-4 font-medium text-gray-700">Case ID</th>
                    <th className="text-left p-4 font-medium text-gray-700">Respondent</th>
                    <th className="text-left p-4 font-medium text-gray-700">Status</th>
                    <th className="text-left p-4 font-medium text-gray-700">Last Activity</th>
                    <th className="text-left p-4 font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentSubmissions.map((submission, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium text-blue-600">{submission.caseId}</td>
                      <td className="p-4">{submission.respondent}</td>
                      <td className="p-4">
                        <Badge className={getStatusBadge(submission.statusType)}>
                          {submission.status}
                        </Badge>
                      </td>
                      <td className="p-4">{submission.lastActivity}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4 p-4">
              {currentSubmissions.map((submission, index) => (
                <Card key={index} className="border">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-blue-600">{submission.caseId}</span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Respondent: </span>
                        <span>{submission.respondent}</span>
                      </div>
                      <div>
                        <Badge className={getStatusBadge(submission.statusType)}>
                          {submission.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-500">
                        Last Activity: {submission.lastActivity}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Juror Status Monitoring */}
        <Card>
          <CardHeader className="bg-white border-b">
            <CardTitle className="text-xl md:text-2xl font-bold text-red-600">
              JUROR STATUS MONITORING
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="text-sm text-gray-600 p-4 border-b bg-gray-50">
              Displays the status of juror evaluation for active submissions.
            </div>
            
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="text-left p-4 font-medium text-gray-700">Case ID</th>
                    <th className="text-left p-4 font-medium text-gray-700">My Vote</th>
                    <th className="text-left p-4 font-medium text-gray-700">Jury</th>
                    <th className="text-left p-4 font-medium text-gray-700">Progress</th>
                    <th className="text-left p-4 font-medium text-gray-700">Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {jurorStatus.map((status, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium text-blue-600">{status.caseId}</td>
                      <td className="p-4">{status.myVote}</td>
                      <td className="p-4">{status.jury}</td>
                      <td className="p-4">{status.progress}</td>
                      <td className="p-4">{status.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4 p-4">
              {jurorStatus.map((status, index) => (
                <Card key={index} className="border">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="font-medium text-blue-600">{status.caseId}</div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">My Vote: </span>
                          <span>{status.myVote}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Jury: </span>
                          <span>{status.jury}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Progress: </span>
                          <span>{status.progress}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Outcome: </span>
                          <span>{status.outcome}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Submission History & Record Status */}
        <Card>
          <CardHeader className="bg-white border-b">
            <CardTitle className="text-xl md:text-2xl font-bold text-red-600">
              SUBMISSION HISTORY & RECORD STATUS
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="text-sm text-gray-600 p-4 border-b bg-gray-50">
              <div className="font-semibold mb-2">Closed Cases:</div>
              Displays of all submissions that have been closed in accordance with Platform Policy and Record Retention.
            </div>
            
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="text-left p-4 font-medium text-gray-700">Case ID</th>
                    <th className="text-left p-4 font-medium text-gray-700">Respondent</th>
                    <th className="text-left p-4 font-medium text-gray-700">Outcome</th>
                    <th className="text-left p-4 font-medium text-gray-700">Appealed</th>
                    <th className="text-left p-4 font-medium text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {submissionHistory.map((record, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium text-blue-600">{record.caseId}</td>
                      <td className="p-4">{record.respondent}</td>
                      <td className="p-4">
                        <Badge className={getOutcomeBadge(record.outcome)}>
                          {record.outcome}
                        </Badge>
                      </td>
                      <td className="p-4 text-sm">{record.appealed}</td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-1">
                          {record.actions.map((action, actionIndex) => (
                            <Button 
                              key={actionIndex} 
                              size="sm" 
                              variant="outline"
                              className={`text-xs ${
                                action === 'View Records' ? 'bg-red-50 text-red-600 border-red-200' :
                                action === 'Cancel' ? 'bg-red-100 text-red-700 border-red-300' :
                                'bg-blue-50 text-blue-600 border-blue-200'
                              }`}
                            >
                              {action}
                            </Button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile/Tablet Cards */}
            <div className="lg:hidden space-y-4 p-4">
              {submissionHistory.map((record, index) => (
                <Card key={index} className="border">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-blue-600">{record.caseId}</span>
                        <Badge className={getOutcomeBadge(record.outcome)}>
                          {record.outcome}
                        </Badge>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Respondent: </span>
                        <span>{record.respondent}</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Appealed: </span>
                        <span className="text-sm">{record.appealed}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {record.actions.map((action, actionIndex) => (
                          <Button 
                            key={actionIndex} 
                            size="sm" 
                            variant="outline"
                            className={`text-xs ${
                              action === 'View Records' ? 'bg-red-50 text-red-600 border-red-200' :
                              action === 'Cancel' ? 'bg-red-100 text-red-700 border-red-300' :
                              'bg-blue-50 text-blue-600 border-blue-200'
                            }`}
                          >
                            {action}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardContainer;