import { type LucideIcon } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  icon: LucideIcon;
}

export default function TeamMember({ name, role, image, icon: Icon }: TeamMemberProps) {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <div className="flex items-center text-gray-300">
          <Icon className="h-4 w-4 mr-2" />
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
}