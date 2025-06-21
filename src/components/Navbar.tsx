import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
  isHeroSection: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, isHeroSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isHeroSection
          ? 'bg-transparent'
          : isScrolled
          ? 'top-4 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4'
          : 'w-full px-4'
      }`}
    >
      <div
        className={`transition-all duration-500 ${
          isHeroSection ? 'bg-transparent px-6 py-4' : 'glass-morph rounded-2xl px-6 py-3'
        } flex items-center ${isHeroSection ? 'justify-start' : 'justify-between'}`}
      >
        {/* Logo (scroll to HeroSection) */}
        <a
          href="#hero"
          className={`transition-all duration-500 ${
            isHeroSection
              ? 'text-2xl font-bold'
              : isScrolled
              ? 'text-lg font-bold'
              : 'text-xl font-bold'
          }`}
        >
          <span className="text-tedx-red">TEDx</span>
          <span className="text-white">CUSAT</span>
        </a>

        {/* Desktop Links */}
        {!isHeroSection && (
          <div className="hidden md:flex space-x-6">
            {['Speakers', 'Sponsors', 'Team', 'Tickets'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white relative group transition-colors duration-200"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tedx-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        )}

        {/* Mobile Hamburger */}
        {!isHeroSection && (
          <div className="md:hidden z-50">
            <button
              className="flex flex-col justify-center items-center w-8 h-8 relative"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
            >
              <div
                className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-white my-1 transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {!isHeroSection && isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md text-white px-6 py-4 space-y-4 rounded-b-xl">
          {['Speakers', 'Sponsors', 'Team', 'Tickets'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg text-white/90 hover:text-white transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
