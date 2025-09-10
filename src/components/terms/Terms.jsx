import React from 'react';

const TermsOfService = () => {
  return (
    <div className=" mx-auto px-6 py-12 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Terms Of Service</h1>
        <p className="text-gray-600 text-sm">
          <span className="font-medium">Effective Date:</span> [Insert Date]
        </p>
      </div>

      {/* Introduction */}
      <div className="mb-8">
        <p className="text-gray-700 text-sm leading-relaxed">
          This Terms of Service Agreement ("Agreement") is a legally binding contract between you ("User," "you," or "your") and Glass File ("Platform," "we," "our," or "us"). By accessing or using the Platform, including but not limited to submitting materials, participating in juror reviews, or browsing content, you agree to be bound by these terms.
        </p>
      </div>

      {/* Section 1 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-red-600 text-center mb-4">
          1. ACCOUNT REGISTRATION AND ELIGIBILITY
        </h2>
        <div className="space-y-3">
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">1.</span>
            <span>At least 18 years old, and Legally capable of entering into binding contracts to use the Platform.</span>
          </div>
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">2.</span>
            <span>You must complete identity verification as required by Platform protocols. False or misleading information may result in account suspension, termination, or legal referral.</span>
          </div>
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">3.</span>
            <span>Users submitting any content or allegations to the Platform must also agree to the separate User Submission Terms and Conditions.</span>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-red-600 text-center mb-4">
          2. SERVICES PROVIDED
        </h2>
        <div className="space-y-3">
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">1.</span>
            <span>The Platform facilitates user-submitted reports, juror-based review mechanisms, and access to verified public behavioral records.</span>
          </div>
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">2.</span>
            <span>The Platform does not offer legal advice, representation, or enforcement authority. All information provided is for public knowledge and accountability.</span>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-red-600 text-center mb-4">
          3. USER RESPONSIBILITIES
        </h2>
        <div className="space-y-3">
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">1.</span>
            <span>You agree to use the Platform in compliance with all applicable laws and regulations.</span>
          </div>
          <div className="text-sm text-gray-700">
            <div className="flex mb-2">
              <span className="mr-3 font-medium">2.</span>
              <span>You will not:</span>
            </div>
            <div className="ml-6 space-y-1">
              <div className="flex">
                <span className="mr-3">•</span>
                <span>Submit false, defamatory, harassing, or unlawful content;</span>
              </div>
              <div className="flex">
                <span className="mr-3">•</span>
                <span>Impersonate others or create fraudulent accounts;</span>
              </div>
              <div className="flex">
                <span className="mr-3">•</span>
                <span>Access or attempt to access accounts or information not belonging to you.</span>
              </div>
            </div>
          </div>
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">3.</span>
            <span>You are solely responsible for your submissions, including statements made under penalty of perjury.</span>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-red-600 text-center mb-4">
          4. JUROR PARTICIPATION
        </h2>
        <div className="space-y-3">
          <div className="text-sm text-gray-700">
            <div className="flex mb-2">
              <span className="mr-3 font-medium">1.</span>
              <span>Users enrolled, or requesting to be enrolled, as a Juror on the platform must complete the following to participate in case reviews:</span>
            </div>
            <div className="ml-6 space-y-1">
              <div className="flex">
                <span className="mr-3">•</span>
                <span>onboarding;</span>
              </div>
              <div className="flex">
                <span className="mr-3">•</span>
                <span>testing;</span>
              </div>
              <div className="flex">
                <span className="mr-3">•</span>
                <span>background checks</span>
              </div>
            </div>
          </div>
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">2.</span>
            <span>Jurors agree to remain impartial, report conflicts of interest, and recuse themselves when necessary.</span>
          </div>
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">3.</span>
            <span>Voting, justifications, and verdicts must be based solely on the materials presented.</span>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-red-600 text-center mb-4">
          5. FEES AND PAYMENTS
        </h2>
        <div className="space-y-3">
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">1.</span>
            <span>Some Platform services require the payment of fees. Fee structures will be disclosed at point of service.</span>
          </div>
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">2.</span>
            <span>All payments are non-refundable unless explicitly stated otherwise or required by law.</span>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-red-600 text-center mb-4">
          6. CONTENT OWNERSHIP AND LICENSE
        </h2>
        <div className="space-y-3">
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">1.</span>
            <span>You retain ownership of content you submit but grant the Platform a perpetual, irrevocable, non-exclusive license to use, display, store, and process such content for Platform purposes.</span>
          </div>
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">2.</span>
            <span>You waive any moral rights to submitted content to the fullest extent permissible by law.</span>
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-red-600 text-center mb-4">
          7. TERMINATION AND SUSPENSION
        </h2>
        <div className="space-y-3">
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">1.</span>
            <span>We reserve the right to suspend, restrict, or terminate your access to the Platform at our sole discretion for violations of these Terms, law, or ethics.</span>
          </div>
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">2.</span>
            <span>You may terminate your account at any time. Requests for data deletion will be honored in accordance with our Privacy Policy.</span>
          </div>
        </div>
      </div>

      {/* Section 8 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-red-600 text-center mb-4">
          8. DISCLAIMERS AND LIMITATIONS OF LIABILITY
        </h2>
        <div className="space-y-3">
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">1.</span>
            <span>The Platform is provided on an "as-is" and "as-available" basis. We do not guarantee the accuracy, completeness, or reliability of content.</span>
          </div>
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">2.</span>
            <span>The Platform disclaims all liability for any damages resulting from use, misuse, or reliance on Platform content or services.</span>
          </div>
        </div>
      </div>

      {/* Section 9 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-red-600 text-center mb-4">
          9. DISPUTE RESOLUTION AND GOVERNING LAW
        </h2>
        <div className="space-y-3">
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">1.</span>
            <span>This Agreement shall be governed by and construed in accordance with the laws of the State of Arizona.</span>
          </div>
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">2.</span>
            <span>Any disputes shall be resolved through binding arbitration or the appropriate courts of Pima County, Arizona.</span>
          </div>
        </div>
      </div>

      {/* Section 10 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-red-600 text-center mb-4">
          10. MODIFICATIONS TO TERMS
        </h2>
        <div className="space-y-3">
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">1.</span>
            <span>We reserve the right to update or revise these Terms at any time.</span>
          </div>
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">2.</span>
            <span>Continued use of the Platform following notification of changes constitutes acceptance.</span>
          </div>
        </div>
      </div>

      {/* Section 11 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-red-600 text-center mb-4">
          11. AGREEMENT
        </h2>
        <div className="space-y-3">
          <div className="flex text-sm text-gray-700">
            <span className="mr-3 font-medium">1.</span>
            <span>By using this Platform, you affirm that you have read, understood, and agreed to be bound by this Terms of Service Agreement.</span>
          </div>
        </div>
      </div>

      {/* Section 12 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-red-600 text-center mb-4">
          12. CONTACT INFORMATION
        </h2>
        <div className="text-sm text-gray-700 mb-4">
          <p className="mb-2">Questions about this Agreement may be directed to:</p>
        </div>
        <div className="text-sm text-gray-700 space-y-1">
          <p className="font-medium">Legal Compliance Department</p>
          <p>Glass File</p>
          <p>Email: Terms@[PlatformName].org</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;