import React from 'react';
import { Building2, Paintbrush, Car, Wheat } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Pajeb Engineering',
      icon: Building2,
      services: [
        'Engineering/Architectural Design',
        'Constructions',
        'Procurement/Project Management',
        'Consultancy',
        'Property Management and Development',
        'Highway/Structural Design and Construction',
        'Quantity Survey',
        'Surveying Design',
        'Printing of Design/Drawings',
        'Real Estate Development'
      ]
    },
    {
      title: 'Pajeb Paint',
      icon: Paintbrush,
      services: [
        'High Quality Silk Paint',
        'High Quality Matt Paint',
        'High Quality Emulsion Paint',
        'High Quality Putty',
        'High Quality Oil Paint',
        'Structure Screeding and Painting'
      ]
    },
    {
      title: 'Cab Connect',
      icon: Car,
      services: [
        'Ride Booking',
        'Car Rental Service',
        'Delivery Service'
      ]
    },
    {
      title: 'Food Basket Republic',
      icon: Wheat,
      services: [
        'Bridging Food Producers and Consumers',
        'Agricultural Products Supply',
        'Rice Processing',
        'Garri Processing',
        'Door-step Delivery',
        'Agricultural Contracts',
        'Fertilizer Sales/Distribution'
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1"
            alt="Services Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Our Services</h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] 
                         transition-transform duration-200"
              >
                <div className="flex items-center mb-6">
                  <service.icon className="h-8 w-8 text-indigo-600 mr-4" />
                  <h2 className="text-2xl font-bold">{service.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.services.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}