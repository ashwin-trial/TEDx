import React from 'react';

interface Sponsor {
  id: number;
  logo: string;
  colSpan: number;
  rowSpan: number;
  scaleClass?: string;
}

const sponsors: Sponsor[] = [
  { id: 1, logo: '/images/sponsors/1.png', colSpan: 1, rowSpan: 1, scaleClass: 'scale-[1.2]' },
  { id: 2, logo: '/images/sponsors/2.png', colSpan: 1, rowSpan: 1 },
  { id: 3, logo: '/images/sponsors/3.png', colSpan: 2, rowSpan: 1, scaleClass: 'scale-[1.3]' },
  { id: 4, logo: '/images/sponsors/4.png', colSpan: 1, rowSpan: 1, scaleClass: 'scale-[1.7]' },
  { id: 5, logo: '/images/sponsors/5.png', colSpan: 2, rowSpan: 1, scaleClass: 'scale-[1.7]' },
  { id: 6, logo: '/images/sponsors/6.png', colSpan: 1, rowSpan: 1, scaleClass: 'scale-[1.5]' },
  { id: 7, logo: '/images/sponsors/7.png', colSpan: 2, rowSpan: 1, scaleClass: 'scale-[2.1]' },
  { id: 8, logo: '/images/sponsors/8.png', colSpan: 1, rowSpan: 1, scaleClass: 'scale-[1.6]' },
  { id: 9, logo: '/images/sponsors/9.png', colSpan: 1, rowSpan: 1, scaleClass: 'scale-[1.5]' },
];

const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-tedx-red">Sponsors</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Honoring the partners who power our journey.
          </p>
        </div>

        {/* Grid */}
        <div
          className={`
            grid gap-4 mx-auto
            w-full sm:max-w-[500px]
            grid-cols-2
            md:grid-cols-4 md:grid-rows-3 md:w-[850px] md:h-[450px] md:max-w-none
          `}
        >
          {sponsors.map((sponsor) => {
            const colDesktop = `md:col-span-${sponsor.colSpan}`;
            const rowDesktop = `md:row-span-${sponsor.rowSpan}`;

            return (
              <div
                key={sponsor.id}
                className={`
                  col-span-1 ${colDesktop} ${rowDesktop}
                  glass-morph
                  flex items-center justify-center 
                  p-4 rounded-xl group 
                  transition-all duration-300 
                  hover:scale-105 bg-black
                `}
              >
                <img
                  src={sponsor.logo}
                  alt={`Sponsor ${sponsor.id}`}
                  className={`
                    w-full h-full
                    object-contain
                    grayscale group-hover:grayscale-0 
                    opacity-70 group-hover:opacity-100 
                    transition duration-500 
                    max-h-[60px] md:max-h-[85%]
                    ${sponsor.scaleClass ?? ''}
                  `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
