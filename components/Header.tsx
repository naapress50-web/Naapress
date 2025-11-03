
import React, { useState } from 'react';

const PrinterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7V9h6v3z" clipRule="evenodd" />
    <path d="M9 1a1 1 0 00-1 1v.054A4.002 4.002 0 005 6v1h10V6A4.002 4.002 0 0011 2.054V2a1 1 0 00-1-1zM4.5 9.5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-11z" />
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#quote', label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <PrinterIcon />
            <span className="text-2xl font-bold text-dark">Naa Press</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium">
                {link.label}
              </a>
            ))}
            <a href="#quote" className="bg-primary text-white font-bold py-2 px-4 rounded-full hover:bg-blue-800 transition-transform duration-300 ease-in-out transform hover:scale-105">
              Get a Quote
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark focus:outline-none">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium block text-center" onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#quote" className="bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-blue-800 transition-transform duration-300 ease-in-out transform hover:scale-105 text-center" onClick={() => setIsOpen(false)}>
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;