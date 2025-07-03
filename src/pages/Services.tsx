import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Play, Building, Heart, Shield, Construction, ChevronRight, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: 'Real Estate Drone Tours',
      description: 'Showcase properties with stunning aerial footage that sells homes 32% faster than traditional photography.',
      features: ['4K aerial photography', 'Twilight shoots', 'Virtual staging compatible', 'MLS-ready deliverables'],
      pricing: 'Starting at $199',
      popular: true
    },
    {
      icon: Play,
      title: 'FPV Indoor Flythroughs',
      description: 'Immersive first-person view tours that take viewers through every room with cinematic smoothness.',
      features: ['Seamless indoor navigation', 'One-take cinematography', 'Custom flight paths', 'Music synchronization'],
      pricing: 'Starting at $399',
      popular: false
    },
    {
      icon: Building,
      title: 'Commercial & Business Promos',
      description: 'Professional brand storytelling that showcases your business from unique aerial perspectives.',
      features: ['Brand story development', 'Multiple location shoots', 'Social media packages', 'Commercial licensing'],
      pricing: 'Starting at $599',
      popular: false
    },
    {
      icon: Heart,
      title: 'Event & Wedding Videography',
      description: 'Capture your special moments with breathtaking aerial footage that creates lasting memories.',
      features: ['Ceremony coverage', 'Reception highlights', 'Guest aerial shots', 'Same-day highlights reel'],
      pricing: 'Starting at $799',
      popular: false
    },
    {
      icon: Shield,
      title: 'Roof & Structural Inspections',
      description: 'Safe, detailed inspections that identify issues without putting anyone at risk.',
      features: ['High-resolution imaging', 'Thermal imaging available', 'Detailed reports', 'Insurance documentation'],
      pricing: 'Starting at $299',
      popular: false
    },
    {
      icon: Construction,
      title: 'Construction Progress Monitoring',
      description: 'Document your project\'s progress with consistent aerial documentation and time-lapse capabilities.',
      features: ['Regular scheduled flights', 'Progress comparisons', 'Time-lapse compilation', 'Stakeholder reports'],
      pricing: 'Starting at $499/month',
      popular: false
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-600 to-sky-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Professional Aerial Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            From real estate showcases to commercial storytelling, we deliver cinematic quality 
            that elevates your brand and captures your vision from above.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-sky-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Get Custom Quote
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 ${
                service.popular ? 'ring-2 ring-sky-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <service.icon className="w-12 h-12 text-sky-600 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-2xl font-bold text-sky-600 mt-1">{service.pricing}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    service.popular
                      ? 'bg-sky-600 text-white hover:bg-sky-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Equipment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the latest DJI technology to ensure the highest quality footage and safe operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">DJI Avata 2 - FPV Specialist</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>4K/60fps recording capability</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Advanced obstacle avoidance</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Smooth indoor navigation</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Cinematic flight modes</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">DJI Mini 4 Pro - Versatile Workhorse</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>4K HDR video recording</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>48MP aerial photography</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>34-minute flight time</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Omnidirectional obstacle sensing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">Simple, professional, and results-driven</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">We discuss your vision, timeline, and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">Flight planning, permits, and safety preparation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Production</h3>
              <p className="text-gray-600">Professional filming with cinematic techniques</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600">Edited, color-graded final deliverables</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and custom quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sky-700 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              to="/portfolio"
              className="bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;