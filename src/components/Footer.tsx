import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="w-8 h-8 text-sky-400" />
              <span className="text-2xl font-bold">ArchView Aerials</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Professional drone videography and FPV photography services in St. Louis, Missouri. 
              Licensed pilot delivering cinematic aerial content for real estate, events, and commercial projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-sky-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-sky-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-sky-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-sky-400 transition-colors">Contact</Link></li>
              <li><Link to="/booking" className="text-gray-300 hover:text-sky-400 transition-colors">Book Now</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-sky-400" />
                <span className="text-gray-300">(314) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-sky-400" />
                <span className="text-gray-300">archviewaerials@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span className="text-gray-300">St. Louis, Missouri</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ArchView Aerials. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">Terms & Conditions</a>
              <span className="text-gray-400">Licensed Operations</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;