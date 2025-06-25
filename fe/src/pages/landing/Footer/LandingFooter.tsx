import React from 'react';
import { Search, Shield, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FooterSection {
  title: string;
  links: string[];
}

export const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Directory of City Agencies",
      links: ["Notify NYC", "NYC Mobile Apps", "NYC.gov", "Open Data"]
    },
    {
      title: "Contact NYC Government",
      links: ["311 Service", "Sitemap", "Maps", "Contact Us"]
    },
    {
      title: "City Employees",
      links: ["City Record", "Resident Toolkit", "Employee Portal", "Benefits"]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className=" mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* NYC Search Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">NYC</span>
            </div>
            
            <div className="flex gap-2 mb-4">
              <Input
                placeholder="Search NYC.gov"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 text-sm flex-1"
              />
              <Button variant="secondary" size="sm" className="px-3">
                <Search className="w-4 h-4 text-white" />
              </Button>
            </div>
            
            <div className="space-y-2 text-xs sm:text-sm text-gray-400">
              <p>
                <strong className="text-white">City of New York</strong><br/>
                © 2025 All rights reserved
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
            <p>The City of New York • Official Website</p>
          </div>
          <div className="flex gap-4 text-xs sm:text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Phone className="w-4 h-4 inline mr-1" />
              311
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Emergency: 911
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;