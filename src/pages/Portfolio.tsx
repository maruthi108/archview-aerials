import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'real-estate', name: 'Real Estate' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'events', name: 'Events' },
    { id: 'inspections', name: 'Inspections' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Luxury Home Showcase',
      category: 'real-estate',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: '$2.5M waterfront property with stunning aerial photography',
      client: 'Premier Realty Group'
    },
    {
      id: 2,
      title: 'Corporate Headquarters',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Professional aerial photography showcasing modern architecture',
      client: 'TechCorp Solutions'
    },
    {
      id: 3,
      title: 'Wedding Celebration',
      category: 'events',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Beautiful aerial ceremony photography with romantic lighting',
      client: 'Private Client'
    },
    {
      id: 4,
      title: 'Commercial Roof Inspection',
      category: 'inspections',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Detailed aerial inspection photography and documentation',
      client: 'Midwest Property Management'
    },
    {
      id: 5,
      title: 'Historic Estate Tour',
      category: 'real-estate',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Architectural aerial photography of century-old estate',
      client: 'Heritage Properties'
    },
    {
      id: 6,
      title: 'Manufacturing Facility',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Industrial aerial photography showcasing facility capabilities',
      client: 'Gateway Manufacturing'
    },
    {
      id: 7,
      title: 'Residential Development',
      category: 'real-estate',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'New construction aerial photography for marketing materials',
      client: 'Sunset Homes'
    },
    {
      id: 8,
      title: 'Corporate Event',
      category: 'events',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Professional event aerial photography capturing the full scope',
      client: 'Business Excellence Awards'
    },
    {
      id: 9,
      title: 'Shopping Center',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Retail complex aerial photography for leasing portfolio',
      client: 'Metro Properties'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our latest aerial photography projects across real estate, 
            commercial, and event photography in the St. Louis area.
          </p>
        </div>
      </section>

      {/* Featured Work Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Photography</h2>
            <p className="text-xl text-gray-600">
              Professional aerial photography that captures your vision from above
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Luxury Real Estate Aerial Photography"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Luxury Real Estate</h3>
                <p className="text-gray-200">$2.5M Property Aerial Photography</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Commercial Development Aerial Photography"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Commercial Development</h3>
                <p className="text-gray-200">Corporate Headquarters Photography</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Project Gallery</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    activeCategory === category.id
                      ? 'bg-sky-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-semibold">Photos</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{project.client}</span>
                    <button className="text-sky-600 hover:text-sky-700 transition-colors flex items-center text-sm font-medium">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Gallery
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Photography Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional aerial photography for every need, from real estate marketing to commercial documentation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Estate</h3>
              <p className="text-gray-600 text-sm">Property showcases that sell homes faster</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Commercial</h3>
              <p className="text-gray-600 text-sm">Business and facility documentation</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Events</h3>
              <p className="text-gray-600 text-sm">Memorable aerial event photography</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inspections</h3>
              <p className="text-gray-600 text-sm">Detailed aerial inspection photography</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
            "The aerial photography from ArchView Aerials helped our $2.5M listing sell in just 5 days. 
            The quality and professionalism exceeded all expectations."
          </blockquote>
          <div className="text-lg">
            <div className="font-semibold">Jennifer Martinez</div>
            <div className="text-sky-200">Senior Real Estate Agent, Premier Realty Group</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Capture Your Vision?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create stunning aerial photography that showcases your property, business, or event from the perfect angle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sky-700 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;