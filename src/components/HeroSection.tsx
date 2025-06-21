import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <div id="hero" className="w-full h-screen flex items-center justify-center">
      <div className="relative w-[90vw] h-[75vh] md:w-[85vw]">

        {/* Book Tickets Button */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
          <Button className="border border-white text-white px-6 md:px-14 py-3 md:py-6 rounded-full text-lg md:text-xl font-bold hover:bg-white hover:text-black transition-all duration-300">
            Book Tickets
          </Button>
        </div>

        {/* ---- Mobile View: Bottom Left Title & Bottom Right Date ---- */}
        <div className="md:hidden">
          {/* Title & Slogan (Bottom Left) */}
          <div className="absolute bottom-6 left-6 text-left z-20">
            <h1 className="text-red-600 text-2xl font-bold leading-tight drop-shadow-md">
              Resonance:
            </h1>
            <p className="text-white text-sm font-medium mt-1 drop-shadow">
              Voices That Echo Beyond Time.
            </p>
          </div>

          {/* Date (Bottom Right) */}
          <div className="absolute bottom-6 right-6 text-white text-center z-20 leading-none">
            <div className="flex flex-col items-center scale-[1.15]">
              <span className="text-sm font-semibold text-red-500 tracking-widest">DEC</span>
              <span className="text-3xl font-extrabold text-white">10</span>
            </div>
          </div>
        </div>

        {/* ---- Desktop View: Keep Existing Layout ---- */}

        {/* Title Text */}
        <div className="hidden md:block absolute bottom-12 right-12 z-20 text-left">
          <h1 className="text-red-600 text-5xl font-bold leading-tight drop-shadow-md">
            Resonance:
          </h1>
          <p className="text-white text-xl font-medium mt-2 drop-shadow">
            Voices That Echo Beyond Time.
          </p>
        </div>

        {/* Calendar Date */}
        <div className="hidden md:block absolute bottom-12 left-12 z-20 text-white text-center leading-none">
          <div className="flex flex-col items-center scale-[1.4]">
            <span className="text-xl font-semibold text-red-500 tracking-widest">DEC</span>
            <span className="text-5xl font-extrabold text-white">10</span>
          </div>
        </div>

        {/* Video Container with Top-Left Curved Cutout */}
        <div
          className="w-full h-full overflow-hidden"
          style={{
            clipPath: `path("M 0.12 0 
                          H 1 
                          V 1 
                          H 0 
                          V 0.12 
                          A 0.12 0.12 0 0 1 0.12 0 
                          Z")`,
            WebkitClipPath: `path("M 0.12 0 
                                   H 1 
                                   V 1 
                                   H 0 
                                   V 0.12 
                                   A 0.12 0.12 0 0 1 0.12 0 
                                   Z")`,
            borderRadius: '60px',
            backgroundColor: 'black',
          }}
        >
          <div className="w-full h-full scale-[1.19] transition-transform duration-500">
            <video
              src="/images/hero/5.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
