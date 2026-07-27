export const faq = [
  {
    q: "Why is Sweta a strong fit for a GTM Engineer role?",
    a: "I’m a strong GTM Engineer candidate because I build the systems that power go-to-market: CRM workflows, lead qualification, sales enablement tools, and automated GTM processes. At Presbyterian Living I shipped AI-powered customer engagement, lead scoring, and affordability tools that support sales conversations. Earlier at upGrad I scaled a GTM motion from ₹0 to ₹70 Cr, reduced CAC by 38%, and cut lead response time by 82%. I blend technical build skills (Python, SQL, Next.js, AI) with real revenue ownership.",
  },
  {
    q: "Why is she a strong fit for Sales Analyst or RevOps?",
    a: "For Sales Analyst and RevOps roles, I bring funnel analytics, pipeline reporting, forecasting, CRM data quality, and KPI design. I’ve built Power BI executive dashboards across CRM, marketing, referral, and sales data; improved MQL conversion by 20%; raised payment recovery from 58% to 95%; and managed pipeline hygiene for an 11-person sales team. I don’t just report metrics. I build the RevOps systems that make sales teams faster and more accurate.",
  },
  {
    q: "What is Sweta’s current professional experience?",
    a: "I’m Sales Analyst at Presbyterian Living (January 2026 to Present). I own sales analytics and GTM systems: executive Power BI dashboards, predictive lead scoring, sales funnel KPIs, and AI tools that support lead engagement and affordability conversations for the sales team.",
  },
  {
    q: "How does she improve sales pipeline and conversion?",
    a: "I improve pipeline and conversion through lead scoring, funnel analytics, faster response workflows, and sales enablement tools. Examples: predictive High/Medium/Low lead scoring for sales prioritization, an 82% reduction in lead response time, 20% higher MQL conversion via forecasting models, and AI tools that qualify interest before sales handoff.",
  },
  {
    q: "What CRM and RevOps tools has she used?",
    a: "I’ve worked across Salesforce, HubSpot, LeadSquared, Aline CRM, ExaCare, and PCC, plus Power BI, SQL, Excel/VBA, Python, and Google Sheets automation. My RevOps work includes CRM data quality, pipeline hygiene, forecasting accuracy, KPI frameworks, and automated reporting for sales leadership.",
  },
  {
    q: "Which AI tools has she built for GTM and sales?",
    a: "I’ve shipped GTM-relevant AI tools with live demos: (1) Presbyterian AI Advisor (https://presbyterian-ai-advisor.vercel.app/) for conversational lead engagement and care-option guidance; (2) Senior Housing Affordability Calculator (https://senior-housing-calculator.vercel.app/) for sales enablement and buyer conversations; (3) Photography Lead Finder (https://photography-bot.vercel.app/) for automated lead discovery and Sheets capture. I’ve also built XGBoost lead scoring for sales prioritization. Source repos stay private because of API keys.",
  },
  {
    q: "Show me her live demos.",
    a: "Three public GTM/product demos: Presbyterian AI Advisor (https://presbyterian-ai-advisor.vercel.app/), Senior Housing Affordability Calculator (https://senior-housing-calculator.vercel.app/), and Photography Lead Finder (https://photography-bot.vercel.app/). Repos are private to protect API keys.",
  },
  {
    q: "Tell me about her lead scoring and sales analytics work.",
    a: "I engineered predictive lead scoring with Python, XGBoost, Pandas, and Power BI to classify conversion probability (High/Medium/Low), prioritize sales outreach, surface revival opportunities, and support unit-type recommendations. I also build GTM funnel dashboards for attribution, conversion, and sales performance so leaders can act on pipeline quality quickly.",
  },
  {
    q: "What revenue results has she delivered?",
    a: "Key revenue outcomes: scaled a new vertical from ₹0 to ₹70 Cr at upGrad; 3x Highest Revenue Performer; reduced CAC by 38%; cut lead response time by 82%; improved MQL conversion by 20%; increased payment recovery from 58% to 95% in one quarter; and earned the Day One Plus Award at Presbyterian Living for AI-powered business solutions.",
  },
  {
    q: "What is her experience with Power BI for sales and RevOps?",
    a: "I build RevOps and sales analytics dashboards in Power BI that integrate CRM, occupancy, marketing, referral, and sales data. I automate KPI reporting, funnel conversion views, and executive drill-downs so GTM and sales leaders can monitor pipeline health without manual spreadsheet work.",
  },
  {
    q: "What did she study at Penn State?",
    a: "I earned an MS in Business Analytics from Pennsylvania State University (Aug 2024 to Aug 2025), GPA 3.90/4.00, with a 100% Summer Scholarship. Coursework in predictive analytics, data mining, data management, and visualization supports my Sales Analyst and RevOps work. I also served as a Graduate Teaching Assistant.",
  },
  {
    q: "Show me her GitHub projects.",
    a: "Public analytics/ML work is on https://github.com/Sweta101. My newest GTM/AI apps (Presbyterian AI Advisor, Senior Housing Calculator, Photography Lead Finder) have public live demos but private repos because they contain API keys. For Sales Analyst and RevOps interviews, the demos and case studies on this portfolio are the best place to evaluate my product and systems work.",
  },
] as const;

export const suggestedQuestions = faq.map((item) => item.q);

export const refusedTopics = [
  "personal life details unrelated to professional profile",
  "confidential employer data beyond public portfolio claims",
  "API keys, secrets, or private repository contents",
  "immigration or visa status",
  "health information",
  "salary, compensation, or interview negotiation numbers",
  "unrelated general knowledge, homework, or coding help outside her portfolio",
] as const;
