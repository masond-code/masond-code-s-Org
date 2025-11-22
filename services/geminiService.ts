import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

/**
 * Generates an atmospheric image for the mall using the Nano Banana model (gemini-2.5-flash-image).
 */
export const generateMallImage = async (prompt: string): Promise<string | null> => {
  if (!apiKey) {
    console.warn("API Key not found. Skipping AI generation.");
    return null;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `High quality, photorealistic architectural render of a roblox bloxburg mall, ${prompt}, warm lighting, 4k resolution, architectural photography style`,
          },
        ],
      },
    });

    // Iterate through parts to find the image
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString: string = part.inlineData.data;
          return `data:image/png;base64,${base64EncodeString}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};