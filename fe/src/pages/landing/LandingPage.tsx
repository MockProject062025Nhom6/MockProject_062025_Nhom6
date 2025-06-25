import React from 'react';
import { Header } from './Header/LandingHeader';
import { HeroSection } from './Section/LandingHeroSection';
import { HelpSection } from './Section/LandingHelpSection';
import { ProgramsSection } from './Section/LandingProgramsSection';
import { Footer } from './Footer/LandingFooter';


const LandingPage: React.FC = () => {
  return (
    <div className=" bg-white">
      <Header />
      <HeroSection />
      <HelpSection />
      <ProgramsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;