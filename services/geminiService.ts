
import { GoogleGenAI, Type } from "@google/genai";
import type { QuoteResponse } from '../types';

const getGeminiService = () => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

const quoteResponseSchema = {
  type: Type.OBJECT,
  properties: {
    estimatedCost: {
      type: Type.STRING,
      description: "A price range for the printing job, e.g., '$250 - $350'.",
    },
    turnaroundTime: {
      type: Type.STRING,
      description: "An estimated time to complete the job, e.g., '5-7 business days'.",
    },
    notes: {
      type: Type.ARRAY,
      description: "A list of clarifying questions or important notes for the customer.",
      items: {
        type: Type.STRING,
      },
    },
  },
  required: ['estimatedCost', 'turnaroundTime', 'notes'],
};

export const generateQuote = async (projectDetails: string): Promise<QuoteResponse> => {
  const ai = getGeminiService();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are an expert printing press estimator. A customer has requested a quote. Provide an estimated cost, turnaround time, and any clarifying questions or notes. Here are the project details: "${projectDetails}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: quoteResponseSchema,
      },
    });

    const jsonString = response.text.trim();
    const parsedResponse = JSON.parse(jsonString) as QuoteResponse;
    
    // Basic validation
    if (!parsedResponse.estimatedCost || !parsedResponse.turnaroundTime || !Array.isArray(parsedResponse.notes)) {
        throw new Error("Invalid response format from Gemini API");
    }

    return parsedResponse;

  } catch (error) {
    console.error("Error generating quote from Gemini API:", error);
    throw new Error("Failed to generate a quote. Please check the project details and try again.");
  }
};
