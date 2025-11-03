
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Get Your Quote',
      description: 'Use our AI-powered form to describe your project and get an instant, transparent quote.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h3m-3-10l-1.5-1.5a2.828 2.828 0 00-4 0L2 12l5.5 5.5a2.828 2.828 0 004 0L17 12l-1.5-1.5m0 0l-1.5 1.5" /></svg>
    },
    {
      number: 2,
      title: 'Upload Your Design',
      description: 'Easily upload your print-ready files. Our team will perform a free pre-flight check.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
    },
    {
      number: 3,
      title: 'Print & Deliver',
      description: 'We get to work printing your order with top-quality materials and deliver it right to your door.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-2h8a1 1 0 001-1zM21 11V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2" /></svg>
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-dark">How It Works</h2>
          <p className="text-lg text-gray-500 mt-2">A simple process from idea to delivery.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 relative">
          {/* Dashed line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-300 transform -translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-sm z-10">
              <div className="bg-primary rounded-full h-24 w-24 flex items-center justify-center shadow-lg mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">{step.number}. {step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
