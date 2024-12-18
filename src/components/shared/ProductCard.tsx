import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ProductCard({ image, title, description }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 
                   transition-transform duration-200">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}