
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-light text-dark font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Testimonials />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
