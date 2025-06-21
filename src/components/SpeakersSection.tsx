import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Speaker {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Mohanlal",
    title: "Actor",
    description: "Mohanlal is a legendary Indian actor whose work has shaped Malayalam cinema for over four decades.",
    image: "/images/speakers/mohanlal.png"
  },
  {
    id: 2,
    name: "Mammootty",
    title: "Actor",
    description: "Mammootty is a celebrated Indian actor and producer, renowned for his powerful roles and lasting influence on Malayalam cinema",
    image: "/images/speakers/mammootty.png"
  },
  {
    id: 3,
    name: "Suriya",
    title: "Actor",
    description: "Suriya is a leading Indian actor, producer, and philanthropist known for his impactful roles and dedication to social causes",
    image: "/images/speakers/surya.png"
  },
  {
    id: 4,
    name: "Rajinikanth",
    title: "Actor",
    description: "Rajinikanth is a legendary Indian actor and cultural icon, celebrated for his charismatic screen presence and enduring influence on cinema.",
    image: "/images/speakers/rajinikanth.png"
  }
];

const SpeakersSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSpeaker = () => {
    setCurrentIndex((prev) => (prev + 1) % speakers.length);
  };

  const prevSpeaker = () => {
    setCurrentIndex((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  // Autoplay with pause on hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextSpeaker();
    }, 7000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="speakers" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-tedx-red">Visionary</span> <span className="text-white">Speakers</span>
          </motion.h2>
          <motion.p
            className="text-tedx-gray text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Meet the innovators, pioneers, and thought leaders who will share their groundbreaking ideas.
          </motion.p>
        </div>

        {/* Speaker Card */}
        <div className="relative max-w-3xl mx-auto w-full -mt-4 md:-mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -100) {
                  nextSpeaker();
                } else if (info.offset.x > 100) {
                  prevSpeaker();
                }
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative group rounded-2xl overflow-hidden h-[360px] md:h-[420px] shadow-xl transition-all duration-500 cursor-grab active:cursor-grabbing select-none"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src={speakers[currentIndex].image}
                  alt={speakers[currentIndex].name}
                  className="w-full h-full object-cover filter grayscale transition-all duration-500 group-hover:scale-105 pointer-events-none"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent">
                <div className="transition-all duration-500">
                  {/* Name & Title stay fixed at bottom */}
                  <div className="mb-2">
                    <h3 className="text-white text-xl md:text-2xl font-bold">{speakers[currentIndex].name}</h3>
                    <p className="text-tedx-red font-medium text-sm md:text-base">{speakers[currentIndex].title}</p>
                  </div>

                  {/* Description animates in on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                    transition={{ duration: 0.4 }}
                    className="text-white text-sm md:text-base max-w-md"
                  >
                    {speakers[currentIndex].description}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation & Indicators */}
          <div className="flex flex-col items-center mt-8 space-y-4">
            <div className="flex space-x-6">
              <button
                onClick={prevSpeaker}
                className="p-2 rounded-full border border-white/30 hover:border-tedx-red/50 hover:scale-110 transition-all duration-300 group"
                aria-label="Previous speaker"
              >
                <ArrowLeft className="w-5 h-5 text-white group-hover:text-tedx-red" />
              </button>
              <button
                onClick={nextSpeaker}
                className="p-2 rounded-full border border-white/30 hover:border-tedx-red/50 hover:scale-110 transition-all duration-300 group"
                aria-label="Next speaker"
              >
                <ArrowRight className="w-5 h-5 text-white group-hover:text-tedx-red" />
              </button>
            </div>

            <div className="flex justify-center mt-2 space-x-2">
              {speakers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-tedx-red scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to speaker ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
