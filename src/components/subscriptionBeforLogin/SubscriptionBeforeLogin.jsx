import React from 'react';
import { Check, X } from 'lucide-react';

const SubscriptionBeforeLogin = () => {

  const features = {
    freebie: [
      { text: "100+ of PNG & SVG Uploaded Pictures", included: true },
      { text: "Access to 4 Generation Details", included: true },
      { text: "Upload custom icons and fonts", included: false },
      { text: "Unlimited Sharing", included: false },
      { text: "Upload graphics & video in up to 4K", included: false },
      { text: "Unlimited Projects", included: false },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false }
    ],
    professional: [
      { text: "Unlimited Uploaded Pictures", included: true },
      { text: "Unlimited Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4K", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: true },
      { text: "Create teams to collaborate on designs", included: true }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            View Subscription{' '}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Prices
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Experience year-round comfort with our A-rated uPVC windows, designed to keep your 
            home warm in winter, cool in summer, and stylish every day.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Freebie Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Freebie</h3>
              <p className="text-gray-600 mb-6">
                Ideal for individuals who need quick access to basic features.
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-teal-500">$0</span>
                <span className="text-gray-500 ml-2">/ Free</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {features.freebie.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`rounded-full p-1 mt-0.5 ${
                    feature.included 
                      ? 'bg-teal-100 text-teal-600' 
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {feature.included ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <X className="w-4 h-4" />
                    )}
                  </div>
                  <span className={`text-sm ${
                    feature.included ? 'text-gray-700' : 'text-gray-400'
                  }`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full bg-teal-500 text-white py-4 px-6 rounded-xl font-semibold hover:bg-teal-600 transition-colors duration-300 shadow-md hover:shadow-lg">
              Purchase Now
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
            
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-teal-100 mb-6">
                Ideal for individuals who who need advanced features...
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold">$80</span>
                <span className="text-teal-200 ml-2">/ Yearly</span>
              </div>
            </div>

            <div className="space-y-4 mb-8 relative z-10">
              {features.professional.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-white/90">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full bg-white text-teal-600 py-4 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-md hover:shadow-lg relative z-10">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBeforeLogin;
