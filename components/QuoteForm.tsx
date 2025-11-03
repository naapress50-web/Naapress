
import React, { useState } from 'react';
import { generateQuote } from '../services/geminiService';
import type { QuoteResponse } from '../types';

const QuoteForm: React.FC = () => {
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [quote, setQuote] = useState<QuoteResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!details.trim()) {
      setError("Please describe your printing needs.");
      return;
    }

    setLoading(true);
    setError(null);
    setQuote(null);

    try {
      const result = await generateQuote(details);
      setQuote(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const QuoteResult = () => (
    <div className="mt-8 p-6 bg-blue-50 border-2 border-primary border-dashed rounded-lg">
      <h3 className="text-2xl font-bold text-primary mb-4">Your Instant Quote</h3>
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-gray-700">Estimated Cost:</p>
          <p className="text-2xl font-bold text-dark">{quote?.estimatedCost}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Turnaround Time:</p>
          <p className="text-lg text-dark">{quote?.turnaroundTime}</p>
        </div>
        {quote?.notes && quote.notes.length > 0 && (
          <div>
            <p className="font-semibold text-gray-700">Notes & Questions:</p>
            <ul className="list-disc list-inside text-dark space-y-1 mt-1">
              {quote.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="quote" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-dark">Get an Instant AI-Powered Quote</h2>
            <p className="text-lg text-gray-500 mt-2">
              Describe your project below. Be as specific as you can (e.g., "500 double-sided business cards, glossy finish, on heavy cardstock").
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-2xl">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="details" className="sr-only">Project Details</label>
                <textarea
                  id="details"
                  rows={6}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="e.g., 1000 A5 flyers, full color, 150gsm paper..."
                  disabled={loading}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto bg-secondary text-dark font-bold py-4 px-12 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center mx-auto"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating Quote...
                    </>
                  ) : 'Generate Quote'}
                </button>
              </div>
            </form>
            {error && <div className="mt-4 text-center text-red-600 bg-red-100 p-3 rounded-lg">{error}</div>}
            {quote && <QuoteResult />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
