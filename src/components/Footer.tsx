
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Beniko Group</h3>
            <p className="text-sm">
              Leading the way in construction, engineering, and innovative solutions across Nigeria.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@benikogroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+234 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm hover:text-indigo-400">About Us</a></li>
              <li><a href="/services" className="text-sm hover:text-indigo-400">Our Services</a></li>
              <li><a href="/contact" className="text-sm hover:text-indigo-400">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-400"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-400"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-400"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Beniko Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}