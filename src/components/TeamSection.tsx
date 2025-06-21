import React from 'react';
import Carousel from './Carousel';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Meet Our </span>
            <span className="text-tedx-red">Team</span>
          </h2>
          <p className="text-tedx-gray text-lg max-w-2xl mx-auto">
            The passionate individuals working tirelessly to bring you an unforgettable experience.
          </p>
        </div>

        {/* Team Carousel */}
        <div className="relative h-[350px] flex justify-center items-center">
          <Carousel
            baseWidth={600}
            autoplay
            autoplayDelay={3000}
            pauseOnHover
            loop
            round={false}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
