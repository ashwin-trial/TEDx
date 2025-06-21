
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold">
                <span className="text-tedx-red">TEDx</span>
                <span className="text-white">CUSAT</span>
              </h3>
              <p className="text-white text-sm">2025</p>
            </div>
            <p className="text-tedx-gray mb-4 max-w-md">
              Ideas Worth Spreading – Engineered for Tomorrow. Join us for an unforgettable experience of innovation, inspiration, and transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-tedx-gray hover:text-tedx-red transition-colors duration-300">
                Twitter
              </a>
              <a href="#" className="text-tedx-gray hover:text-tedx-red transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="text-tedx-gray hover:text-tedx-red transition-colors duration-300">
                LinkedIn
              </a>
              <a href="#" className="text-tedx-gray hover:text-tedx-red transition-colors duration-300">
                YouTube
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#speakers" className="text-tedx-gray hover:text-white transition-colors duration-300">Speakers</a></li>
              <li><a href="#sponsors" className="text-tedx-gray hover:text-white transition-colors duration-300">Sponsors</a></li>
              <li><a href="#team" className="text-tedx-gray hover:text-white transition-colors duration-300">Team</a></li>
              <li><a href="#tickets" className="text-tedx-gray hover:text-white transition-colors duration-300">Tickets</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-tedx-gray">
              <p>CUSAT Campus</p>
              <p>Kochi, Kerala</p>
              <p>India - 682022</p>
              <p className="text-white">contact@tedxcusat.com</p>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="glass-morph rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <h5 className="text-tedx-red font-semibold mb-1">Date</h5>
              <p className="text-white">December 10, 2025</p>
            </div>
            <div>
              <h5 className="text-tedx-red font-semibold mb-1">Time</h5>
              <p className="text-white">9:00 AM - 6:00 PM</p>
            </div>
            <div>
              <h5 className="text-tedx-red font-semibold mb-1">Venue</h5>
              <p className="text-white">CUSAT Main Auditorium</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-tedx-gray text-sm mb-2">
            © 2025 TEDxCUSAT – All Rights Reserved
          </p>
          <p className="text-tedx-gray text-xs">
            This independent TEDx event is operated under license from TED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
