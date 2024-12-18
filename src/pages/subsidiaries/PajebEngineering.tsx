import React from 'react';
import { Building2, Ruler, HardHat, FileText } from 'lucide-react';

export default function PajebEngineering() {
  const services = [
    {
      icon: Building2,
      title: 'Engineering & Design',
      description: 'Professional architectural and engineering design services for all types of structures.'
    },
    {
      icon: HardHat,
      title: 'Construction',
      description: 'Expert construction services with focus on quality and timely delivery.'
    },
    {
      icon: Ruler,
      title: 'Surveying',
      description: 'Comprehensive surveying services including quantity surveying and land surveying.'
    },
    {
      icon: FileText,
      title: 'Consultancy',
      description: 'Professional consultancy services for construction and engineering projects.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
            alt="Engineering Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pajeb Engineering</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Leading the way in construction and engineering excellence across Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <service.icon className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1590644365607-1c5a5535c869',
                title: 'Highway Construction',
                description: 'Major highway construction project in Lagos'
              },
              {
                image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
                title: 'Commercial Complex',
                description: 'Modern office complex development'
              },
              {
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
                title: 'Residential Development',
                description: 'Luxury residential project'
              }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 
                         transition-transform duration-200"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}