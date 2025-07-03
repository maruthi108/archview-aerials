import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Camera, Shield, Star, ChevronRight } from 'lucide-react';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const services = [
    {
      icon: Camera,
      title: 'Real Estate Tours',
      description: 'Stunning aerial property showcases that sell homes faster'
    },
    {
      icon: Camera,
      title: 'FPV Photography',
      description: 'Immersive aerial photography with unique perspectives'
    },
    {
      icon: Award,
      title: 'Commercial Photos',
      description: 'Professional brand photography from unique aerial angles'
    },
    {
      icon: Shield,
      title: 'Inspections',
      description: 'Safe, detailed roof and structural aerial photography'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Elevate Your Story
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light leading-relaxed">
            Expert Drone & FPV Photography in St. Louis
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Licensed Pilot | 4K Photography | FPV Perspectives | Real Estate, Events, and Commercial Projects
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sky-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/portfolio"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20 flex items-center justify-center"
            >
              <Camera className="w-5 h-5 mr-2" />
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Aerial Photography</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From real estate showcases to commercial documentation, we deliver stunning aerial photography 
              that elevates your brand and captures your vision from above.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
                <service.icon className="w-12 h-12 text-sky-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sky-700 transition-colors"
            >
              View All Services
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Photography</h2>
            <p className="text-xl text-gray-600">See our latest aerial photography work</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Luxury Real Estate Aerial Photography"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Luxury Real Estate</h3>
                <p className="text-gray-200">$2.5M Property Photography</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Commercial Development Photography"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Commercial Development</h3>
                <p className="text-gray-200">Corporate Headquarters Photography</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View Full Portfolio
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-sky-400 mb-2">100+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-400 mb-2">100%</div>
              <div className="text-gray-300">Licensed Operations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-400 mb-2">4.9★</div>
              <div className="text-gray-300">Client Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-400 mb-2">30mi</div>
              <div className="text-gray-300">Service Radius</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-sky-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Elevate Your Project?</h2>
          <p className="text-xl text-sky-100 mb-8 leading-relaxed">
            Get professional aerial photography that makes your property, event, or business stand out from the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-sky-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <Link
              to="/services"
              className="bg-sky-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sky-800 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;