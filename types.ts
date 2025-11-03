import type React from 'react';

export interface Service {
  // Fix: Import React types and use React.ReactNode for component types to resolve "Cannot find namespace 'JSX'" error.
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  avatarUrl: string;
}

export interface PortfolioItem {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
}

export interface QuoteRequest {
  name: string;
  email: string;
  details: string;
  file?: File;
}

export interface QuoteResponse {
  estimatedCost: string;
  turnaroundTime: string;
  notes: string[];
}
