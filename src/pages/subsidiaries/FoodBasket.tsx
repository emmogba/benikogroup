
import { Wheat, Truck, Factory, Store } from 'lucide-react';

export default function FoodBasket() {
  const services = [
    {
      icon: Wheat,
      title: 'Agricultural Products',
      description: 'Connecting farmers with consumers across Nigeria.'
    },
    {
      icon: Factory,
      title: 'Processing',
      description: 'Modern rice and garri processing facilities.'
    },
    {
      icon: Truck,
      title: 'Distribution',
      description: 'Nationwide delivery of agricultural products.'
    },
    {
      icon: Store,
      title: 'Supply Chain',
      description: 'Complete agricultural supply chain solutions.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-green-900 to-green-700">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
            alt="Food Basket Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Food Basket Republic</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Bridging the gap between farmers and consumers
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
                <service.icon className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1568569350062-ebfa3cb195df',
                title: 'Premium Rice',
                description: 'Locally processed, high-quality rice'
              },
              {
                image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399',
                title: 'Garri Products',
                description: 'Traditional and fortified varieties'
              },
              {
                image: 'https://images.unsplash.com/photo-1533292725127-8e8c501da0fa',
                title: 'Fertilizers',
                description: 'Agricultural inputs and supplies'
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