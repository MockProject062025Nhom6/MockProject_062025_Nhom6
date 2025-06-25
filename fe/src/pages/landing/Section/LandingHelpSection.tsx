import React from 'react';
import { Shield, Users, FileText} from 'lucide-react';
import { Button } from '@/components/ui/button';


interface HelpOption {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const HelpSection: React.FC = () => {
  const helpOptions: HelpOption[] = [
    {
      icon: <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />,
      title: "Tell us what happened.",
      description: "Report incidents and help us serve better."
    },
    {
      icon: <Users className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />,
      title: "Your contribution & our mission.",
      description: "Community partnership makes us stronger."
    },
    {
      icon: <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />,
      title: "Protect yourself and others.",
      description: "Safety resources and prevention tips."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className=" mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
          How You Can Help?
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {helpOptions.map((option, index) => (
            <div key={index} className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex justify-center mb-4 sm:mb-6">
                {option.icon}
              </div>
              <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
            File A Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;