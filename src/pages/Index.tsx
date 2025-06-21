import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SpeakersSection from '@/components/SpeakersSection';
import CountdownSection from '@/components/CountdownSection';
import SponsorsSection from '@/components/SponsorsSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = window.innerHeight;

      setIsScrolled(scrollTop > 100);
      setIsHeroSection(scrollTop < heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-tedx-dark text-white">
      <Navbar isScrolled={isScrolled} isHeroSection={isHeroSection} />
      
      <main>
        <HeroSection />
        <SpeakersSection />
        <CountdownSection />
        <SponsorsSection />
        <TeamSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
