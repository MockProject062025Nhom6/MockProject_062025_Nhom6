import React from 'react';
import { Search, Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const navItems: NavItem[] = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Business', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Stats', href: '#' },
    { label: 'Policies', href: '#' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white text-sm">
        <div className="mx-auto px-4 py-2 flex justify-between items-center">
          <span className="text-xs sm:text-sm">NYC - New York City Police Department</span>
          <div className="flex gap-4 text-xs sm:text-sm">
            <span className="cursor-pointer hover:text-gray-300">English ▼</span>
            <span className="cursor-pointer hover:text-gray-300">Login</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">NYPD</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button className="text-white hover:text-gray-400" variant="ghost" size="sm">
              <Search className="w-4 h-4" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="ghost" size="sm" className="self-start text-white">
                <Search className="w-4 h-4 mr-2 text-white" />
                Search
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;