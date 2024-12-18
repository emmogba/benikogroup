import React from 'react';
import { Calendar, User } from 'lucide-react';
import Hero from '../components/shared/Hero';
import SectionContainer from '../components/shared/SectionContainer';

export default function Blog() {
  const blogPosts = [
    {
      title: 'Innovation in Construction: The Future of Building',
      excerpt: 'Exploring the latest technologies and methodologies in modern construction...',
      date: '2024-03-15',
      author: 'John Smith',
      category: 'Engineering',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e'
    },
    {
      title: 'Sustainable Agriculture in Nigeria',
      excerpt: 'How Food Basket Republic is revolutionizing the agricultural sector...',
      date: '2024-03-10',
      author: 'Sarah Johnson',
      category: 'Agriculture',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854'
    },
    {
      title: 'The Rise of Digital Transportation',
      excerpt: "Cab Connect's impact on urban mobility and transportation...",
      date: '2024-03-05',
      author: 'Michael Brown',
      category: 'Transportation',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d'
    }
  ];

  return (
    <div className="pt-16">
      <Hero
        title="Our Blog"
        subtitle="Stay updated with the latest news and insights from Beniko Group"
        backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
        gradientFrom="gray-900"
        gradientTo="gray-800"
      />

      <SectionContainer background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 
                       transition-transform duration-200"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-indigo-600 mb-2">{post.category}</div>
                <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}