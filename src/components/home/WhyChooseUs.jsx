import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Settings, Zap, Heart, Database } from 'lucide-react';
import Image from 'next/image';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Settings,
      title: "Real - Pedigree Calculate",
      description: "More insights available with live data & informative insights, delivered in real time to stay ahead of the curve.",
      bgColor: "bg-teal-500",
      iconBg: "bg-teal-50"
    },
    {
      icon: Zap,
      title: "First Racing Capability",
      description: "More insights available with live data & informative insights, delivered in real time to stay ahead of the curve.",
      bgColor: "bg-cyan-500",
      iconBg: "bg-cyan-50"
    },
    {
      icon: Heart,
      title: "Pedigree Guidelines",
      description: "More insights available with live data & informative insights, delivered in real time to stay ahead of the curve.",
      bgColor: "bg-slate-600",
      iconBg: "bg-slate-50"
    },
    {
      icon: Database,
      title: "All Records Reservation",
      description: "More insights available with live data & informative insights, delivered in real time to stay ahead of the curve.",
      bgColor: "bg-gray-700",
      iconBg: "bg-gray-50"
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-cyan-500">Choose Us?</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience year-round comfort with our A-rated uPVC windows, designed to keep your home warm in winter,
            cool in summer, and stylish every day.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features Section */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white/70 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Icon Container */}
                    <div className={`${feature.iconBg} p-3 rounded-lg relative`}>
                      <feature.icon className={`w-6 h-6 text-${feature.bgColor.split('-')[1]}-600`} />
                      {/* Small colored circle indicator */}
                      <div 
                        className={`absolute -top-1 -right-1 w-4 h-4 ${feature.bgColor} rounded-full flex items-center justify-center`}
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-cyan-500 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Image Section */}
          <div className="relative">
           

            <div>
                <Image
                    src="/assests/whyChoose.webp"
                    alt="Why Choose Us"
                    width={500}
                    height={500}
                />

            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-cyan-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-teal-100 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;