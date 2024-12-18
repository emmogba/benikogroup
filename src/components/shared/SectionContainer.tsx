import React, { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

export default function SectionContainer({
  children,
  className = '',
  background = 'white'
}: SectionContainerProps) {
  const bgColor = background === 'white' ? 'bg-white' : 'bg-gray-50';
  
  return (
    <section className={`py-16 ${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}