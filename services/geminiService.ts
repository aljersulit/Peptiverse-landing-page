import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if key exists to avoid runtime crashes on empty env, 
// though the component handles the UI state for missing keys.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, but the AI service is currently unavailable. Please contact support directly.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: `You are the AI Assistant for 'Peptiverse', a reputable business selling Peptide Tirzepatide (injectable). 
        Your goal is to be helpful, professional, and reassuring.
        
        Key Information to use:
        - Product: Tirzepatide (GLP-1/GIP receptor agonist).
        - Usage: Weekly injection.
        - Diet Advice: High protein, plenty of water, fiber-rich foods.
        - Avoid: Greasy/fried foods, high sugar, excessive alcohol (can cause nausea).
        - Disclaimer: Always advise users to consult their healthcare provider for medical advice. You are an informational guide, not a doctor.
        
        Keep answers concise (under 3 sentences where possible) and friendly.`,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the knowledge base right now. Please try again later.";
  }
};
