import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PRODUCTS } from "../constants";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Construct the system instruction with inventory context
const inventoryContext = PRODUCTS.map(p => 
  `- ${p.name} (${p.category}): Wholesale ₹${p.priceWholesale}/${p.unit} (MRP ₹${p.priceMRP}).`
).join('\n');

const SYSTEM_INSTRUCTION = `
You are the intelligent sales assistant for 'Sri Bhagwati Traders', a reputed wholesale business in Begum Bazar, Hyderabad run by Trilok and Om Prakash Ramawath.
Your goal is to assist shop owners and bulk buyers in finding products, calculating costs, and suggesting items.

Contact Information:
- Trilok Ramawath: 9346994172
- Om Prakash Ramawath: 7013084492
- Location: Shop No. 15-8-123, Begum Bazar, Hyderabad.

Here is our current wholesale inventory:
${inventoryContext}

Rules:
1. Always be polite, professional, and concise.
2. If a user asks for a price, quote the Wholesale price.
3. If a user asks about items not in the list, politely say we don't stock them yet but can arrange them on special request.
4. If a user wants to calculate a total (e.g., "Cost for 100kg Rice"), do the math accurately based on the inventory prices.
5. Emphasize the savings (difference between MRP and Wholesale) when appropriate.
6. Keep answers short (under 100 words) unless a detailed list is requested.
7. If asked for contact details, provide the numbers for Trilok (9346994172) and Om Prakash (7013084492).
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server. Please check your internet connection or try again later.";
  }
};