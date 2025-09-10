import React from 'react';

const FeePolicyOverview = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
          Fee Policy (Overview)
        </h1>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
          Submissions to Glass File require a processing fee to support the platform's core operations. These fees are non-refundable and distributed among operational areas to maintain impartiality, confidentiality, and integrity.
        </p>
      </div>

      {/* Fee Breakdown Table Section */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-red-600 text-center mb-6">
          Fee Breakdown By Submission Type
        </h2>
        
        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Type</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700">Administration Fund</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700">Moderator Fund</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700">Jury Fund</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700">Site Fund</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700">Documents Fund</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700 bg-yellow-50">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Standard Case</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$12.50</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$5.00</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$7.50</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$10.00</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$10.00</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-bold bg-yellow-50">$45.00</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Expedited Case</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$25.00</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$10.00</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$15.00</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$10.00</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$10.00</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-bold bg-yellow-50">$70.00</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Protection Order</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$10.00</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$5.00</td>
                <td className="border border-gray-300 px-4 py-3 text-center">——</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$10.00</td>
                <td className="border border-gray-300 px-4 py-3 text-center">——</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-bold bg-yellow-50">$25.00</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Appeal</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$10.00</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$5.00</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$5.00</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$10.00</td>
                <td className="border border-gray-300 px-4 py-3 text-center">——</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-bold bg-yellow-50">$30.00</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Records Request</td>
                <td className="border border-gray-300 px-4 py-3 text-center">——</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$5.00</td>
                <td className="border border-gray-300 px-4 py-3 text-center">——</td>
                <td className="border border-gray-300 px-4 py-3 text-center">$10.00</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-sm">$2.50 per document</td>
                <td className="border border-gray-300 px-4 py-3 text-center font-bold bg-yellow-50">Varies</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile/Tablet Card View */}
        <div className="lg:hidden space-y-4">
          {[
            {
              type: "Standard Case",
              fees: { admin: "$12.50", moderator: "$5.00", jury: "$7.50", site: "$10.00", docs: "$10.00", total: "$45.00" }
            },
            {
              type: "Expedited Case", 
              fees: { admin: "$25.00", moderator: "$10.00", jury: "$15.00", site: "$10.00", docs: "$10.00", total: "$70.00" }
            },
            {
              type: "Protection Order",
              fees: { admin: "$10.00", moderator: "$5.00", jury: "——", site: "$10.00", docs: "——", total: "$25.00" }
            },
            {
              type: "Appeal",
              fees: { admin: "$10.00", moderator: "$5.00", jury: "$5.00", site: "$10.00", docs: "——", total: "$30.00" }
            },
            {
              type: "Records Request",
              fees: { admin: "——", moderator: "$5.00", jury: "——", site: "$10.00", docs: "$2.50 per document", total: "Varies" }
            }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-gray-800">{item.type}</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Administration:</span>
                  <span className="font-medium">{item.fees.admin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Moderator:</span>
                  <span className="font-medium">{item.fees.moderator}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Jury:</span>
                  <span className="font-medium">{item.fees.jury}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Site:</span>
                  <span className="font-medium">{item.fees.site}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Documents:</span>
                  <span className="font-medium">{item.fees.docs}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="text-gray-800 font-semibold">Total:</span>
                  <span className="font-bold text-lg bg-yellow-100 px-2 py-1 rounded">{item.fees.total}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage of Funds Section */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-red-600 text-center mb-6">
          Usage Of Funds
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm md:text-base text-gray-700">
                <span className="font-semibold">Moderator Fund:</span> Supports Initial Case Review And Content Moderation.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm md:text-base text-gray-700">
                <span className="font-semibold">Jury Fund:</span> Incentivizes Independent Juror Participation.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm md:text-base text-gray-700">
                <span className="font-semibold">Site Fund:</span> Covers Operational Expenses And Platform Security.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm md:text-base text-gray-700">
                <span className="font-semibold">Documents Fund:</span> Supports Generation And Storage Of Official Forms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Notes Section */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
        <h2 className="text-xl md:text-2xl font-bold text-red-600 text-center mb-4">
          Additional Notes
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
          Glass File does not offer fee waivers or accept donations to preserve platform neutrality and reduce spam and scam. All actions are subject to authentication and fee verification. By submitting a case, you agree to these terms and funding allocations.
        </p>
      </div>
    </div>
  );
};

export default FeePolicyOverview;
