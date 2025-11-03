
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "The quality is consistently outstanding. Our marketing materials have never looked better. The team is responsive and always delivers on time.",
    author: "Jane Doe",
    company: "Creative Solutions Inc.",
    avatarUrl: "https://picsum.photos/seed/avatar1/100/100",
  },
  {
    quote: "Naa Press transformed our branding with their incredible attention to detail. The instant quote feature is a game-changer for budgeting.",
    author: "John Smith",
    company: "Tech Innovators",
    avatarUrl: "https://picsum.photos/seed/avatar2/100/100",
  },
  {
    quote: "Fast, reliable, and professional. From custom t-shirts for our company event to last-minute banners, they always come through for us.",
    author: "Emily White",
    company: "Event Planners Co.",
    avatarUrl: "https://picsum.photos/seed/avatar3/100/100",
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-dark">What Our Clients Say</h2>
          <p className="text-lg text-gray-500 mt-2">We're proud to have happy customers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-light p-8 rounded-lg shadow-md flex flex-col">
              <div className="flex-grow">
                <svg className="h-10 w-10 text-primary mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.981 17.159c0-2.385-1.023-3.811-3.131-5.132-2.108-1.321-3.411-2.9-3.411-5.064 0-3.483 2.544-5.964 6.208-5.964 3.518 0 5.867 2.403 5.867 5.823 0 1.523-.629 2.868-1.574 3.999l-1.688 1.91-1.332-1.205c.605-.629 1.054-1.321 1.054-2.224 0-1.488-.992-2.622-2.385-2.622-1.424 0-2.353 1.103-2.353 2.515 0 1.777 1.135 3.018 2.324 3.931 2.224 1.714 3.842 3.25 3.842 5.901 0 3.737-2.435 6.42-6.38 6.42-3.811 0-6.239-2.544-6.239-6.271zM25.996 17.159c0-2.385-1.023-3.811-3.131-5.132-2.108-1.321-3.411-2.9-3.411-5.064 0-3.483 2.544-5.964 6.208-5.964 3.518 0 5.867 2.403 5.867 5.823 0 1.523-.629 2.868-1.574 3.999l-1.688 1.91-1.332-1.205c.605-.629 1.054-1.321 1.054-2.224 0-1.488-.992-2.622-2.385-2.622-1.424 0-2.353 1.103-2.353 2.515 0 1.777 1.135 3.018 2.324 3.931 2.224 1.714 3.842 3.25 3.842 5.901 0 3.737-2.435 6.42-6.38 6.42-3.811 0-6.239-2.544-6.239-6.271z" />
                </svg>
                <p className="text-gray-600 italic text-lg mb-6">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center mt-auto">
                <img className="w-16 h-16 rounded-full mr-4" src={testimonial.avatarUrl} alt={testimonial.author} />
                <div>
                  <p className="font-bold text-dark">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;