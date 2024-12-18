import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  iconColor = "text-indigo-600"
}: ServiceCardProps) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <Icon className={`h-10 w-10 ${iconColor} mb-4`} />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}