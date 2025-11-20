import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { BUSINESS_INFO, SERVICES, PACKAGES } from "../constants";

const SYSTEM_INSTRUCTION = `
You are "ZulqarBot", a helpful and professional virtual assistant for ZULQAR COMPUTERS.
Owner: ${BUSINESS_INFO.owner}
Location: ${BUSINESS_INFO.address}
Contact: ${BUSINESS_INFO.phone} / WhatsApp: ${BUSINESS_INFO.whatsapp}

Your goal is to assist customers with inquiries about:
${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

Pricing Context:
${PACKAGES.map(p => `- ${p.name}: ${p.price}`).join('\n')}

Guidelines:
1. Be polite, concise, and professional.
2. If a user asks for a specific price not listed, suggest they contact via WhatsApp.
3. Emphasize "Sir ZULQAR's" 4+ years of experience.
4. You can provide basic tech tips but always recommend bringing the device in for a checkup for hardware issues.
5. Respond in English or Urdu (Roman Urdu is acceptable if the user uses it).
6. Keep answers short (under 100 words unless detailed instruction is needed).
`;

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    // Safety check for process to prevent ReferenceError in some browser environments
    let apiKey = '';
    try {
        if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
            apiKey = process.env.API_KEY;
        }
    } catch (e) {
        console.warn("Could not access environment variables");
    }

    if (!apiKey) {
        console.warn("API Key not found");
        return null;
    }
    client = new GoogleGenAI({ apiKey: apiKey });
  }
  return client;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const ai = getClient();
  if (!ai) return "I'm sorry, I'm currently offline. Please contact Sir Zulqar directly on WhatsApp.";

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        maxOutputTokens: 200,
      }
    });

    return response.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting right now. Please try WhatsApp.";
  }
};