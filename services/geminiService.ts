import { GoogleGenAI, Type, FunctionDeclaration, Tool, Content, Part } from "@google/genai";
import { searchPhones, comparePhones, getPhoneDetails, MOCK_PHONES } from './phoneData';
import { Phone } from '../types';

// --- 1. Initialize Client ---
// NOTE: In a real app, never expose API keys on the client.
// For this demo, we assume process.env.API_KEY is available.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

// --- 2. Define Tools ---

const searchPhonesTool: FunctionDeclaration = {
  name: 'searchPhones',
  description: 'Search for a list of mobile phones based on budget, brand, or features. Returns multiple options.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      query: {
        type: Type.STRING,
        description: 'General search terms like "good camera", "gaming", "compact".',
      },
      minPrice: {
        type: Type.NUMBER,
        description: 'Minimum budget in INR.',
      },
      maxPrice: {
        type: Type.NUMBER,
        description: 'Maximum budget in INR.',
      },
      brands: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: 'List of preferred brands (e.g., Samsung, Apple, Pixel).',
      },
    },
  },
};

const getPhoneDetailsTool: FunctionDeclaration = {
  name: 'getPhoneDetails',
  description: 'Get detailed specifications for ONE specific phone model. Use this when the user asks about a specific phone or says "tell me more about this one".',
  parameters: {
    type: Type.OBJECT,
    properties: {
      modelName: {
        type: Type.STRING,
        description: 'The exact or partial name of the phone (e.g., "Pixel 8", "S24 Ultra").',
      },
    },
    required: ['modelName'],
  },
};

const comparePhonesTool: FunctionDeclaration = {
  name: 'comparePhones',
  description: 'Compare technical specifications of 2 or 3 specific phone models.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      modelNames: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: 'Exact or partial names of the phones to compare (e.g., ["Pixel 8a", "OnePlus 12R"]).',
      },
    },
    required: ['modelNames'],
  },
};

const getPhoneListTool: FunctionDeclaration = {
    name: 'getAvailableBrands',
    description: 'Get a list of all available brands in the inventory.',
    parameters: {
        type: Type.OBJECT,
        properties: {},
    }
}

const tools: Tool[] = [
  {
    functionDeclarations: [searchPhonesTool, getPhoneDetailsTool, comparePhonesTool, getPhoneListTool],
  },
];

// --- 3. System Instruction ---

const SYSTEM_INSTRUCTION = `
You are MobileGenie, an expert AI sales assistant for mobile phones in India.
Your goal is to help users discover, compare, and select the best phone for their needs from your inventory.

**INVENTORY & DATA RULES:**
1. You have access to a specific inventory of phones via tools.
2. **NEVER** recommend a phone that is not returned by these tools. 
3. Prices are in Indian Rupees (₹).

**TOOL USAGE RULES (CRITICAL):**
1. **General Discovery**: If the user asks generally (e.g., "Suggest phones under 30k"), use \`searchPhones\`.
2. **Specific Details**: If the user asks about a *specific* phone (e.g., "Tell me more about the S24", "Show me details of that phone", "I like the first one"), use \`getPhoneDetails\`. **DO NOT** use \`searchPhones\` for single specific requests, as it returns a list.
3. **Comparison**: If the user asks to compare 2 or more, use \`comparePhones\`.

**BEHAVIOR & TONE:**
1. Be helpful, objective, and concise.
2. Use a friendly, professional, sales-assistant tone.
3. Explain *why* you are recommending a phone.

**OUTPUT FORMAT:**
1. When tools return data, summarize it in the text response.
2. The UI renders cards automatically based on tool results.
   - If \`getPhoneDetails\` is used, the UI will show just that one phone card.
   - If \`searchPhones\` is used, the UI will show a carousel.
`;

// --- 4. Chat Logic ---

export interface ToolResultPayload {
  type: 'product-list' | 'comparison';
  data: Phone[];
}

export const sendMessageToGemini = async (
  history: Content[],
  message: string
): Promise<{ text: string; toolResult?: ToolResultPayload }> => {
  
  // 1. Construct the full content including the new user message
  const contents: Content[] = [
    ...history,
    { role: 'user', parts: [{ text: message }] }
  ];

  try {
    // 2. First Turn: Call the model
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: tools,
      }
    });

    // 3. Check for Function Calls
    const functionCalls = response.functionCalls;
    
    if (functionCalls && functionCalls.length > 0) {
        const call = functionCalls[0];
        const { name, args, id } = call;
        
        let toolOutput: any;
        let payload: ToolResultPayload | undefined;

        // Execute Client-Side Logic
        if (name === 'searchPhones') {
            const phones = searchPhones(
                args.query as string, 
                args.minPrice as number, 
                args.maxPrice as number, 
                args.brands as string[]
            );
            toolOutput = phones;
            if (phones.length > 0) {
                payload = { type: 'product-list', data: phones };
            } else {
                toolOutput = "No phones found matching criteria.";
            }
        } else if (name === 'getPhoneDetails') {
            const phone = getPhoneDetails(args.modelName as string);
            if (phone) {
                toolOutput = phone;
                // We send a single item list to render a single card
                payload = { type: 'product-list', data: [phone] };
            } else {
                toolOutput = "Phone not found in inventory.";
            }
        } else if (name === 'comparePhones') {
            const phones = comparePhones(args.modelNames as string[]);
            toolOutput = phones;
            if (phones.length > 0) {
                payload = { type: 'comparison', data: phones };
            } else {
                toolOutput = "Could not find specified phones.";
            }
        } else if (name === 'getAvailableBrands') {
             const brands = Array.from(new Set(MOCK_PHONES.map(p => p.brand)));
             toolOutput = brands;
        }

        // 4. Second Turn: Send tool response back to model
        const modelTurn = response.candidates?.[0]?.content;
        if (!modelTurn) {
            return { text: "Error: Model response missing content for tool call." };
        }

        // Construct the FunctionResponse part
        const functionResponsePart: Part = {
            functionResponse: {
                name: name,
                response: { result: toolOutput },
                id: id
            }
        };

        // Call model again with history + model_turn + function_response
        const secondResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [
                ...contents,
                modelTurn,
                { role: 'user', parts: [functionResponsePart] }
            ],
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                tools: tools,
            }
        });

        return {
            text: secondResponse.text || "",
            toolResult: payload
        };
    }

    // Text only response
    return { text: response.text || "" };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "I'm sorry, I encountered an error while processing your request. Please try again." };
  }
};