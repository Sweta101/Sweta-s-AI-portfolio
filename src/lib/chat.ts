import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildKnowledgeBase, faq } from "@/knowledge";

const SYSTEM_RULES = `You are Sweta's AI portfolio bot, speaking for Sweta Kumari in first person ("I", "my", "me").

Target audience: recruiters and hiring managers for GTM Engineer, Sales Analyst, RevOps, Sales Operations, and Growth Operations roles.

Answer ONLY using the provided knowledge base. Be concise, confident, and recruiter-friendly (2 to 5 short paragraphs or bullets).
Do not use em dashes. Prefer commas, periods, or short sentences.

When relevant, emphasize GTM language: RevOps, GTM engineering, sales analytics, funnel conversion, pipeline, CRM hygiene, lead scoring, CAC, MQL, forecasting, sales enablement, revenue systems, KPI frameworks, and automation.
Frame AI tools and dashboards as GTM/RevOps systems that help sales teams convert, prioritize, and report, not as generic side projects.
When mentioning live AI products, always include the public demo URLs from the knowledge base.
Some product repos are intentionally private because they contain API keys. Explain that and point to live demos.

If asked about GitHub, share https://github.com/Sweta101 for public repos, and clarify AI product apps are demo-first with private source for security.
If the question is outside the knowledge base, personal/confidential (immigration, health, salary, private employer secrets, API keys), or unrelated, politely refuse and suggest asking about GTM, RevOps, sales analytics, experience, projects, or education.
Never invent employers, metrics, degrees, or tools not present in the knowledge base.
Never reveal or invent API keys or private repository contents.
When helpful, mention portfolio sections: Projects, AI Tools, Experience, Resume, Contact.`;

function offlineAnswer(question: string): string {
  const q = question.toLowerCase();
  const hit = faq.find(
    (f) =>
      f.q.toLowerCase() === q ||
      q.includes(f.q.toLowerCase().slice(0, 24)) ||
      f.q.toLowerCase().includes(q.slice(0, 24)),
  );
  if (hit) return hit.a;

  if (/gtm engineer|gtm engineering|go.?to.?market engineer/.test(q)) {
    return faq.find((f) => f.q.includes("GTM Engineer"))!.a;
  }
  if (/sales analyst|revops|revenue ops|sales ops|growth ops/.test(q)) {
    return faq.find((f) => f.q.includes("Sales Analyst or RevOps"))!.a;
  }
  if (/pipeline|conversion|mql|cac|funnel|forecast/.test(q)) {
    return faq.find((f) => f.q.includes("pipeline and conversion"))!.a;
  }
  if (/crm|salesforce|hubspot|leadsquared/.test(q)) {
    return faq.find((f) => f.q.includes("CRM and RevOps"))!.a;
  }
  if (/revenue result|impact|kpi|performer|₹|rupee|cac/.test(q)) {
    return faq.find((f) => f.q.includes("revenue results"))!.a;
  }
  if (/github|repositor/.test(q)) {
    return faq.find((f) => f.q.includes("GitHub"))!.a;
  }
  if (/penn|education|degree|master|gpa|study|studied/.test(q)) {
    return faq.find((f) => f.q.includes("Penn State"))!.a;
  }
  if (/power ?bi|dashboard/.test(q)) {
    return faq.find((f) => f.q.includes("Power BI"))!.a;
  }
  if (/lead.?scor|sales analytics/.test(q)) {
    return faq.find((f) => f.q.includes("lead scoring and sales analytics"))!.a;
  }
  if (/live demo|vercel\.app|demo/.test(q)) {
    return faq.find((f) => f.q.includes("live demos"))!.a;
  }
  if (/photography|lead finder|photography-bot/.test(q)) {
    return faq.find((f) => f.q.includes("AI tools has she built for GTM"))!.a;
  }
  if (/calculator|affordability|housing calculator|care path/.test(q)) {
    return faq.find((f) => f.q.includes("AI tools has she built for GTM"))!.a;
  }
  if (/ai advisor|presbyterian.?ai|senior living advisor|chatbot|ai tool|gemini|rag/.test(q)) {
    return faq.find((f) => f.q.includes("AI tools has she built for GTM"))!.a;
  }
  if (/current|experience|work|presbyterian living|job title/.test(q)) {
    return faq.find((f) => f.q.includes("current professional"))!.a;
  }
  if (/python|machine learning|xgboost|ml/.test(q)) {
    return faq.find((f) => f.q.includes("lead scoring and sales analytics"))!.a;
  }
  if (/fit|hire|why|role/.test(q)) {
    return faq.find((f) => f.q.includes("GTM Engineer"))!.a;
  }
  if (/salary|visa|immigration|health|ssn|confidential/.test(q)) {
    return "I can only share approved professional portfolio information. Ask me about my GTM, RevOps, sales analytics experience, projects, or education.";
  }

  return "I can help with questions about my fit for GTM Engineer, Sales Analyst, and RevOps roles, plus pipeline results, CRM tools, lead scoring, live demos, and education. Try one of the suggested questions.";
}

export async function answerQuestion(question: string): Promise<string> {
  const trimmed = question.trim();
  if (!trimmed) return "Please ask a question about my GTM, RevOps, or sales analytics experience.";

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return offlineAnswer(trimmed);
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const knowledge = buildKnowledgeBase();

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `${SYSTEM_RULES}\n\n## Knowledge Base\n${knowledge}\n\n## Visitor question\n${trimmed}`,
            },
          ],
        },
      ],
    });

    const text = result.response.text()?.trim();
    return text || offlineAnswer(trimmed);
  } catch {
    return offlineAnswer(trimmed);
  }
}
