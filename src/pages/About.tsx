import React from 'react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
            alt="About Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-center">About Beniko Group</h1>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Beniko Group has established itself as a leading force in Nigeria's construction,
                engineering, and service sectors. With years of experience and a commitment to
                excellence, we've built a reputation for delivering high-quality solutions across
                multiple industries.
              </p>
              <p className="text-gray-600">
                Our diverse portfolio spans engineering, construction, paint manufacturing,
                transportation services, and agricultural solutions, making us a one-stop destination
                for various business needs.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122"
                alt="Company Overview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for excellence in every project we undertake.'
              },
              {
                title: 'Innovation',
                description: 'Embracing new technologies and methods to deliver better solutions.'
              },
              {
                title: 'Integrity',
                description: 'Operating with honesty and transparency in all our dealings.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}