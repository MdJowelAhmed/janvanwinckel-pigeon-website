import React from 'react';
import { FileText, Shield, Users, Search, HelpCircle } from 'lucide-react';

const RelationshipArchive = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white py-16 ">
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Every pattern has a file.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A public archive of relationship conduct—documented, accessible, and preserved for awareness 
            and safety.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 ">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* File A Claim */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                File A Claim
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A verified user submits a claim with evidence 
                through our secure forms.
              </p>
            </div>

            {/* Moderate & Redact */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Moderate & Redact
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A trained moderator redacts all personal 
                information to ensure anonymity.
              </p>
            </div>

            {/* Jury Vote */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Jury Vote
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Anonymous jurors review the redacted evidence 
                and cast a blind vote on the outcome.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Section */}
      <div className="bg-red-50 py-16 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Search The Records */}
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                  <Search className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Search The Records
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Conduct reports on individuals — filed by 
                users, reviewed for patterns
              </p>
              <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200">
                View a Record
              </button>
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                How It Works
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Understand the filing process and 
                verification procedures
              </p>
              <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200">
                Learn the Process
              </button>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default RelationshipArchive;