import React from 'react';
import { Award, Shield, Camera, Users, Star, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Award, title: 'Licensed Commercial Pilot', description: 'Fully certified for commercial operations' },
    { icon: Shield, title: '100+ Safe Flights', description: 'Zero incidents, maximum safety' },
    { icon: Camera, title: '4K Professional Quality', description: 'Cinema-grade equipment and techniques' },
    { icon: Users, title: '50+ Happy Clients', description: 'Trusted by businesses across St. Louis' }
  ];

  const certifications = [
    'Licensed Remote Pilot Certificate',
    'DJI Certified Pilot Program',
    'Professional Liability Insurance',
    'Equipment Coverage Insurance'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About ArchView Aerials</h1>
              <p className="text-xl leading-relaxed mb-8">
                Founded in 2024, ArchView Aerials emerged from a passion for aerial cinematography 
                and a vision to help St. Louis businesses tell their stories from breathtaking new perspectives. 
                We specialize in professional drone videography and FPV photography that elevates brands 
                and captures moments that matter.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="text-lg">4.9/5 Client Rating</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Professional drone equipment"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Aerial cinematography in action"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ArchView Aerials was born from the recognition that traditional photography and videography, 
                while valuable, often missed the full story. We saw an opportunity to help businesses, 
                real estate professionals, and event organizers showcase their work from angles that 
                were previously impossible or prohibitively expensive.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Starting with cutting-edge DJI technology and a commitment to safety-first operations, 
                we've quickly established ourselves as St. Louis's premier aerial cinematography service. 
                Our licensed operations ensure every flight meets the highest safety and legal standards.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                What sets us apart is our focus on storytelling. We don't just capture aerial footage – 
                we craft visual narratives that connect with audiences and drive results for our clients.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Our Credentials</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ArchView Aerials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology, professional expertise, and creative vision 
              to deliver results that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <achievement.icon className="w-12 h-12 text-sky-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Equipment</h2>
            <p className="text-xl text-gray-600">
              State-of-the-art DJI technology ensures the highest quality footage and safe operation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">DJI Avata 2 - FPV Specialist</h3>
              <img
                src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="DJI Avata 2 FPV Drone"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>4K/60fps HDR recording</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Advanced obstacle sensing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Immersive FPV capabilities</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Perfect for indoor flythroughs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">DJI Mini 4 Pro - Versatile Workhorse</h3>
              <img
                src="https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="DJI Mini 4 Pro"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>4K HDR video recording</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>48MP aerial photography</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>34-minute flight time</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Omnidirectional obstacle sensing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-2xl font-light max-w-4xl mx-auto leading-relaxed">
              To revolutionize visual storytelling through innovative aerial cinematography, 
              helping our clients capture perspectives that inspire, engage, and drive meaningful results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Safety First</h3>
                <p className="text-sky-100">
                  Every flight is meticulously planned with strict adherence to regulations and safety protocols.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Creative Excellence</h3>
                <p className="text-sky-100">
                  We blend technical precision with artistic vision to create compelling visual narratives that resonate.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Client Success</h3>
                <p className="text-sky-100">
                  Your success drives our passion. We're committed to delivering results that not only meet but exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area & Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Serving St. Louis & Beyond</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Based in St. Louis, Missouri, we proudly serve a 30-mile radius including surrounding counties. 
              Our local expertise combined with professional-grade equipment ensures exceptional results 
              for every project, from intimate residential properties to large commercial developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">30+</div>
              <div className="text-gray-600">Mile Service Radius</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">24hr</div>
              <div className="text-gray-600">Average Response Time</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">100%</div>
              <div className="text-gray-600">Licensed Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how professional aerial videography can elevate your next project and 
            help you tell your story from a whole new perspective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sky-700 transition-colors"
            >
              Schedule Consultation
            </a>
            <a
              href="/portfolio"
              className="bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;