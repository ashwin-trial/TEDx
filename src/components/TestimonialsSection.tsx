
import React from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
  year: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "TEDxCUSAT opened my eyes to possibilities I never imagined. The speakers were phenomenal and the energy was infectious.",
    author: "Rajesh Kumar",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    year: "2024"
  },
  {
    id: 2,
    quote: "An inspiring day that changed my perspective on innovation and entrepreneurship. Can't wait for the next one!",
    author: "Meera Nair",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b693?auto=format&fit=crop&w=150&h=150",
    year: "2024"
  },
  {
    id: 3,
    quote: "The perfect blend of technology, creativity, and human connection. TEDxCUSAT is a must-attend event.",
    author: "David Wilson",
    role: "Design Strategist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
    year: "2023"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">What</span> <span className="text-tedx-red">Attendees Say</span>
          </h2>
          <p className="text-tedx-gray text-lg max-w-2xl mx-auto">
            Hear from past participants about their transformative TEDx experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="glass-morph rounded-2xl p-6 hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                {/* Quote marks */}
                <div className="text-6xl text-tedx-red/20 font-serif absolute -top-4 -left-2">"</div>
                
                <div className="relative z-10">
                  <p className="text-white leading-relaxed mb-6 text-lg italic">
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-tedx-red/30"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.author}</h4>
                      <p className="text-tedx-gray text-sm">{testimonial.role}</p>
                      <p className="text-tedx-red text-xs">TEDxCUSAT {testimonial.year}</p>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-tedx-red/5 via-transparent to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-tedx-gray">
            Join hundreds of innovators, thinkers, and changemakers at TEDxCUSAT 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
