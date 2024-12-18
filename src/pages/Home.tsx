import React from 'react';
import { ArrowRight, Building2, Users, Award, Globe, HardHat, Briefcase, Paintbrush } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/home/ScrollAnimation';
import TeamMember from '../components/home/TeamMember';

export default function Home() {
  const services = [
    {
      title: 'Engineering & Construction',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=60',
      description: 'Professional engineering and construction services'
    },
    {
      title: 'Paint Solutions',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=60',
      description: 'Premium paint products and services'
    },
    {
      title: 'Cab Connect',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=60',
      description: 'Transportation solutions'
    },
    {
      title: 'Agriculture',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=60',
      description: 'Agricultural solutions'
    }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=60',
      icon: Briefcase
    },
    {
      name: 'Sarah Johnson',
      role: 'Engineering Director',
      image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=800&q=60',
      icon: HardHat
    },
    {
      name: 'Michael Brown',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=60',
      icon: Building2
    },
    {
      name: 'Emily Davis',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=60',
      icon: Paintbrush
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=60"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <ScrollAnimation animation="slide-up">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Building Tomorrow's Infrastructure Today
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Beniko Group delivers excellence in engineering, construction, and innovative solutions
                across Nigeria.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 
                         text-white rounded-md transition-colors duration-200"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slide-up">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={index} animation={index % 2 === 0 ? "slide-left" : "slide-right"}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 
                             transition-transform duration-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slide-up">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollAnimation key={index} animation="zoom-in">
                <TeamMember {...member} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '500+', label: 'Projects Completed' },
              { number: '100+', label: 'Expert Team' },
              { number: '5', label: 'States Coverage' }
            ].map((stat, index) => (
              <ScrollAnimation key={index} animation="zoom-in">
                <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slide-up">
            <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                name: 'Construction Partners',
                description: 'Leading construction firms across Nigeria'
              },
              {
                icon: Globe,
                name: 'Global Suppliers',
                description: 'International material and equipment suppliers'
              },
              {
                icon: Award,
                name: 'Quality Certifiers',
                description: 'International standard certification bodies'
              }
            ].map((partner, index) => (
              <ScrollAnimation key={index} animation="slide-up">
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <partner.icon className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="slide-up">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-indigo-100 mb-8">
              Contact us today to discuss how we can help bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white 
                       hover:bg-white hover:text-indigo-600 rounded-md transition-colors duration-200"
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}