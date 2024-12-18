
import { Car, Clock, Package, Shield } from 'lucide-react';

export default function CabConnect() {
  const services = [
    {
      icon: Car,
      title: 'Ride Booking',
      description: 'Quick and reliable transportation at your fingertips.'
    },
    {
      icon: Clock,
      title: 'Car Rental',
      description: 'Flexible rental options for all your needs.'
    },
    {
      icon: Package,
      title: 'Delivery Service',
      description: 'Fast and secure delivery solutions.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Vetted drivers and secure transactions.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-yellow-900 to-yellow-700">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d"
            alt="Cab Connect Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cab Connect</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Your trusted partner for transportation and delivery services
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
                <service.icon className="h-10 w-10 text-yellow-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d',
                title: 'Professional Drivers',
                description: 'Experienced and vetted drivers'
              },
              {
                image: 'https://images.unsplash.com/photo-1593465678160-f99a8371fcf6',
                title: 'Modern Fleet',
                description: 'Well-maintained vehicles'
              },
              {
                image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745',
                title: 'Quick Delivery',
                description: 'Efficient delivery service'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 
                         transition-transform duration-200"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}