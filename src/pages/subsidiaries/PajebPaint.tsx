import React from 'react';
import { Paintbrush, Palette, Droplet, Building } from 'lucide-react';

export default function PajebPaint() {
  const services = [
    {
      icon: Paintbrush,
      title: 'Premium Paints',
      description: 'High-quality silk, matt, and emulsion paints for all surfaces.'
    },
    {
      icon: Palette,
      title: 'Color Solutions',
      description: 'Wide range of oil paint colors for every need.'
    },
    {
      icon: Droplet,
      title: 'Quality Putty',
      description: 'Professional-grade putty for perfect surface preparation.'
    },
    {
      icon: Building,
      title: 'Structure Services',
      description: 'Professional screeding and painting for all types of structures.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-blue-900 to-indigo-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f"
            alt="Paint Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pajeb Paint</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Premium quality paints and professional painting services
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

      {/* Products Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828',
                title: 'Premium Silk Paint',
                description: 'Luxurious finish for interior walls'
              },
              {
                image: 'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d',
                title: 'Exterior Paint',
                description: 'Weather-resistant formulations'
              },
              {
                image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f',
                title: 'Specialty Finishes',
                description: 'Unique textures and effects'
              }
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 
                         transition-transform duration-200"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}