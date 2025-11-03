
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-dark leading-tight mb-6">
            High-Quality Printing, <span className="text-primary">Intelligently Delivered.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            From business cards to large format banners, we bring your vision to life with precision, speed, and unparalleled quality. Get an instant, AI-powered quote today.
          </p>
          <a
            href="#quote"
            className="inline-block bg-secondary text-dark font-bold py-4 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg"
          >
            Get an Instant Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
