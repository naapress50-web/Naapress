
import React from 'react';
import type { PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  { id: 1, imageUrl: 'https://picsum.photos/seed/print1/600/400', category: 'Branding', title: 'Corporate Identity Pack' },
  { id: 2, imageUrl: 'https://picsum.photos/seed/print2/600/400', category: 'Marketing', title: 'Event Flyers & Posters' },
  { id: 3, imageUrl: 'https://picsum.photos/seed/print3/600/400', category: 'Signage', title: 'Large Format Banners' },
  { id: 4, imageUrl: 'https://picsum.photos/seed/print4/600/400', category: 'Apparel', title: 'Custom T-Shirt Print' },
  { id: 5, imageUrl: 'https://picsum.photos/seed/print5/600/400', category: 'Packaging', title: 'Product Box Design' },
  { id: 6, imageUrl: 'https://picsum.photos/seed/print6/600/400', category: 'Branding', title: 'Minimalist Business Cards' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-dark">Our Work</h2>
          <p className="text-lg text-gray-500 mt-2">A glimpse into some of our favorite projects.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map(item => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex flex-col justify-end p-6">
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-secondary font-semibold text-sm">{item.category}</p>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
