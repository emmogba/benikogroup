import React from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [subsidiaryOpen, setSubsidiaryOpen] = React.useState(false);
  const location = useLocation();

  const subsidiaries = [
    { name: 'Pajeb Engineering', path: '/subsidiaries/pajeb-engineering' },
    { name: 'Pajeb Paint', path: '/subsidiaries/pajeb-paint' },
    { name: 'Cab Connect', path: '/subsidiaries/cab-connect' },
    { name: 'Food Basket Republic', path: '/subsidiaries/food-basket' }
  ];

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Subsidiaries', path: '#', hasDropdown: true },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">Beniko Group</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {mainLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setSubsidiaryOpen(true)}
                    onMouseLeave={() => setSubsidiaryOpen(false)}
                  >
                    <button className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                      {link.name}
                    </button>
                    {subsidiaryOpen && (
                      <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg py-1">
                        {subsidiaries.map((subsidiary) => (
                          <Link
                            key={subsidiary.path}
                            to={subsidiary.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                          >
                            {subsidiary.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`${
                      location.pathname === link.path
                        ? 'text-indigo-600'
                        : 'text-gray-600 hover:text-indigo-600'
                    } transition-colors duration-200`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {mainLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name}>
                  <button
                    onClick={() => setSubsidiaryOpen(!subsidiaryOpen)}
                    className="w-full text-left px-3 py-2 text-base text-gray-600"
                  >
                    {link.name}
                  </button>
                  {subsidiaryOpen && (
                    <div className="pl-4">
                      {subsidiaries.map((subsidiary) => (
                        <Link
                          key={subsidiary.path}
                          to={subsidiary.path}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-indigo-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {subsidiary.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'text-indigo-600'
                      : 'text-gray-600 hover:text-indigo-600'
                  } block px-3 py-2 text-base`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}