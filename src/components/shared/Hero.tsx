import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  gradientFrom: string;
  gradientTo: string;
  height?: string;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  gradientFrom,
  gradientTo,
  height = "h-[50vh]"
}: HeroProps) {
  return (
    <section className={`relative ${height} bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}>
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={`${title} Hero`}
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}