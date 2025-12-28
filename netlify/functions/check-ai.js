import { GoogleGenerativeAI } from "@google/generative-ai";

export async function handler(event) {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: "Method Not Allowed",
      };
    }

    const body = JSON.parse(event.body || "{}");
    const userText = body.text?.toLowerCase();

    if (!userText) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "No input provided" }),
      };
    }

    // ---------- HARD SAFETY RULES (EXPLICIT LOGIC) ----------
    const restrictedKeywords = [
      "treat my wound",
      "medical advice",
      "medicine dosage",
      "legal advice",
      "law",
      "suicide",
      "self harm",
      "kill myself",
      "emergency"
    ];

    for (const keyword of restrictedKeywords) {
      if (userText.includes(keyword)) {
        return {
          statusCode: 200,
          body: JSON.stringify({
            status: "DO NOT USE AI",
            advice:
              "This task involves medical, legal, or safety-critical decisions. AI should not be used. Please consult a qualified professional.",
            tool: "Human Expert / Professional Help",
          }),
        };
      }
    }

    // ---------- AI AUDIT (GEMINI) ----------
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
You are an AI auditor.
Analyze the following task and decide whether AI should be used.

Classify it into ONE of the following:
1. SAFE TO USE AI
2. ONLY USE SLIGHT AI ASSISTANCE
3. DO NOT USE AI

Then give:
- Short advice explaining why
- A recommended tool or approach

Respond ONLY in valid JSON:
{
  "status": "",
  "advice": "",
  "tool": ""
}

Task:
"${userText}"
`;

    const result = await model.generateContent(prompt);

    const responseText = result.response
      .text()
      .replace(/```json|```/g, "")
      .trim();

    let parsed;
    try {
      parsed = JSON.parse(responseText);
    } catch {
      parsed = {
        status: "ONLY USE SLIGHT AI ASSISTANCE",
        advice: responseText,
        tool: "General AI Assistance",
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(parsed),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: "ERROR",
        advice: "AI auditor failed. Please try again later.",
        tool: "N/A",
      }),
    };
  }
}
