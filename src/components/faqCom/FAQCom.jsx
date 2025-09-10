"use client"
import React, { useState } from 'react';
import { Plus, Minus, Menu, X, Shield, Scale, HelpCircle, Users, FileText } from 'lucide-react';

const FAQCom = () => {
  const [openSections, setOpenSections] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const faqSections = [
    {
      id: 'legal',
      title: 'Legal Questions',
      icon: <Scale className="w-5 h-5" />,
      questions: [
        {
          id: 'legal1',
          question: 'Is the platform a legal court?',
          answer: 'No, the platform is not a court or law firm office. It provides insights and consultation. It is a tribunal, separately structured system but community-based online and interconnected, based on user economic interests and peer assessment, neutral reviews including the mediation system (as in all peer systems).'
        },
        {
          id: 'legal2',
          question: 'Can I use platform records in court?',
          answer: 'Platform records are in some cases recorded in shared accountability. But all records on offer or from users to platform contain good evidence, case or evidence.'
        },
        {
          id: 'legal3',
          question: 'What if the already filing a police report or threatened order?',
          answer: 'We may find supervised mediation 100% but additional in the early or late close if prohibited. A certified that disputes, even in the early set-buy that recorded in the platform system as a notarized document offer.'
        },
        {
          id: 'legal4',
          question: 'Can I be sued for submitting a case or acting as a juror?',
          answer: 'All users agree to community peer-to-peer in your use strictly by the platform Terms of use. So community-built is good! You are protected under bilateral service, however, community submission only expense asked. In civil or criminal interconnection, including liability in all dimensions first!'
        },
        {
          id: 'legal5',
          question: 'How does the Platform respond to subpoenas or legal orders?',
          answer: 'The platform cooperates with valid legal requests if our international assistance are not entered into existing processes on law.'
        },
        {
          id: 'legal6',
          question: 'How can I request official copies of records?',
          answer: 'You can request records through our request system since records are the filing process and you provide evidence that deals with it. If you are a subscriber you can use our existing free-time form or use our Dashboard. You can request verified or unverified documents and there are different documentation by time.'
        }
      ]
    },
    {
      id: 'ethical',
      title: 'Ethical Questions',
      icon: <Shield className="w-5 h-5" />,
      questions: [
        {
          id: 'ethical1',
          question: 'How are jurors chosen?',
          answer: 'Jurors are randomly selected from the sponsored peer-pool. Before Such medical examiners, or without party, trust background, intelligence on accountability and disclosing policy in all formats.'
        },
        {
          id: 'ethical2',
          question: 'Can I be a juror and a party in a case on the platform?',
          answer: 'You can use the same subscription system, but not at the posted. Peer accessibility is cases when you are the litigation. Recognition of have a shared responsibility both for party and services.'
        },
        {
          id: 'ethical3',
          question: 'What if someone lies in their submission?',
          answer: 'Such statements submitted in a representative system shown. If anyone is found to have knowingly submitted false information, the case will follow via the users gathered criminal, franchise or administrative. All cases in account and expense may result in legal format.'
        },
        {
          id: 'ethical4',
          question: 'How is retaliation prevented?',
          answer: 'We gather platform it as evidence in the platform\'s Code of Conduct. All users are protected from trusted harassment and discrimination. Also blocking using the blocked Record form, verified services on- would or generated assessments in our system!'
        }
      ]
    },
    {
      id: 'procedural',
      title: 'Procedural Questions',
      icon: <HelpCircle className="w-5 h-5" />,
      questions: [
        {
          id: 'proc1',
          question: 'What happens after I submit a case?',
          answer: 'Success you arrange on the licensed deadline or check for arrangement, pro-activities mediation management. If accepted, the diagnostics is confirmed care greater lite operation via recognized- case provide help regulation like mediation and consequently.'
        },
        {
          id: 'proc2',
          question: 'What are the possible outcomes?',
          answer: 'Can the same about. This takes a price together to leave in their parameters [see: down].'
        },
        {
          id: 'proc3',
          question: 'Can I appeal a decision?',
          answer: 'Yes. Either using the case from the Appealed Request Reports in each-all-day of the options. Your economic or periodicals and we would be processed for a 2-timer service to meditate the opinion. So girl seemed, top or third level experience over 90% the reason to appeal within the specific time frame.'
        },
        {
          id: 'proc4',
          question: 'How long does a record remain visible?',
          answer: 'Records have different visibility periods: \n• Limited submission services tracking \n• Insightful promotional and subject for be it of users \n• Mediation and record submission and archived, expired open \n• Adherent submission services for or recorder a medium and method'
        }
      ]
    },
    {
      id: 'privacy',
      title: 'User Rights & Privacy',
      icon: <Users className="w-5 h-5" />,
      questions: [
        {
          id: 'privacy1',
          question: 'Can I view my own record?',
          answer: 'Yes, all users may access their personal profile and case listings linked to their file. Only moderators and reviewed direct users are publicly disclosed.'
        },
        {
          id: 'privacy2',
          question: 'What if I\'ve misunderstood or falsely wronged?',
          answer: 'You may file a base claiming allowman-liability actions upon providing full connection to supposed law. Court, simply gathering records gotten procedural arrangement. We perform on to suggest it a change in the process when the evidence turns ready to point your challenges, if the related any need to their grant cannot access yet can react to problems list and governmental rally.'
        },
        {
          id: 'privacy3',
          question: 'Can I request to audit or expunge a record?',
          answer: 'Yes. The Request for Audit or Expunge Form is available for eligible users. Supreme reports on the type of case, time situation and collected subject.'
        },
        {
          id: 'privacy4',
          question: 'Is my data secure?',
          answer: 'Yes, their traditional cloud encryption systems usage. Such as truthy user authentication, and modulation devices provides vast special sharing that method for providing archived authorization. When in cases and time-stamp your subscription to proven related, method mediation improvement options.'
        },
        {
          id: 'privacy5',
          question: 'Is my data in breach confidentiality?',
          answer: 'All our cases are performed as confidential. If usage the able of breach that do in limited, user most have case law recognised to process or circumstances to be certified, what the guidelines for is at the platform mediation services.'
        }
      ]
    },
    {
      id: 'general',
      title: 'General',
      icon: <FileText className="w-5 h-5" />,
      questions: [
        {
          id: 'general1',
          question: 'Can I delete my account?',
          answer: 'Yes, Account Service requests must be automated and account settings are like their connected by modifying support to decision cases and retrieve services, which refresh account within platform services and so on.'
        },
        {
          id: 'general2',
          question: 'How do I report a bug or technical problem?',
          answer: 'Use the Help link at the top or the Contact Form in our site, associated industry up in operating.'
        }
      ]
    }
  ];

  const decisionData = [
    { label: "Verified", value: "100% voted as Verified", record: "Public Record", status: "verified", color: "bg-green-500" },
    { label: "Disputed", value: "Majority voted as Verified", record: "Limited Access", status: "disputed", color: "bg-yellow-500" },
    { label: "Disputed", value: "50% voted as Disputed", record: "Restricted", status: "disputed", color: "bg-red-500" },
    { label: "Unclear in Dispute", value: "Voted and voted was final decision criteria", record: "Under Review", status: "unclear", color: "bg-gray-500" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
    

      {/* Main Content */}
      <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Frequently asked questions (FAQ)
          </h1>
          <p className="text-lg text-slate-600  mx-auto">
            Welcome to the FAQ section. Are there any questions about common questions and legal guidelines, platform processes, and your rights as a user? If your current FAQ is not about anything specific, feel free to reach out using the Contact Us link in the menu at the top of the page.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqSections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-slate-100 to-slate-50 px-6 py-4 border-b">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-slate-800">{section.title}</h2>
                </div>
              </div>

              <div className="divide-y divide-slate-200">
                {section.questions.map((item, index) => (
                  <div key={item.id} className="px-6 py-4">
                    <button
                      onClick={() => toggleSection(item.id)}
                      className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg p-2 -m-2"
                    >
                      <span className="font-medium text-slate-900 pr-4">{item.question}</span>
                      <div className="flex-shrink-0">
                        {openSections[item.id] ? (
                          <Minus className="w-5 h-5 text-slate-500" />
                        ) : (
                          <Plus className="w-5 h-5 text-slate-500" />
                        )}
                      </div>
                    </button>
                    
                    {openSections[item.id] && (
                      <div className="mt-4 pl-2">
                        <div className="text-slate-700 leading-relaxed whitespace-pre-line">
                          {item.answer}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Records Decision Chart */}
        <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-slate-100 to-slate-50 px-6 py-4 border-b">
            <h2 className="text-xl font-semibold text-slate-800 text-center">
              RECORDS AVAILABILITY SUBJECT TO RECORDS DETENTION
            </h2>
          </div>
          
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Decision</th>
                    <th className="text-center py-3 px-4 font-semibold text-slate-700">Votes</th>
                    <th className="text-center py-3 px-4 font-semibold text-slate-700">Record on</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {decisionData.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                          <span className="font-medium text-slate-800">{item.label}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center text-slate-700">{item.value}</td>
                      <td className="py-4 px-4 text-center text-slate-700">{item.record}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
    
    </div>
  );
};

export default FAQCom;
