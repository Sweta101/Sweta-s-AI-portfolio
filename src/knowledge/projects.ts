export type ProjectTag =
  | "AI"
  | "Machine Learning"
  | "Power BI"
  | "Tableau"
  | "SQL"
  | "Python"
  | "PostgreSQL"
  | "TimescaleDB"
  | "Business Analytics"
  | "Sales and GTM Analytics"
  | "Automation"
  | "Next.js";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  featured: boolean;
  category: "ai-tools" | "analytics" | "ml" | "automation";
  tags: ProjectTag[];
  problem: string;
  objective: string;
  role: string;
  tools: string[];
  dataSources: string;
  architecture: string;
  process: string[];
  challenges: string[];
  optimization: string[];
  results: string[];
  learned: string[];
  github?: string;
  /** True when source is private (e.g. contains API keys) but a public demo exists. */
  githubPrivate?: boolean;
  demo?: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "ai-senior-living-advisor",
    title: "Presbyterian AI Advisor",
    shortDescription:
      "Live AI conversational assistant that helps families explore Independent Living, Assisted Living, Memory Care, and Skilled Nursing options based on their needs.",
    featured: true,
    category: "ai-tools",
    tags: ["AI", "Next.js", "Automation", "Sales and GTM Analytics"],
    problem:
      "Families researching senior living face fragmented information, slow response times, and unclear care-level guidance - creating friction before a tour or lead conversion.",
    objective:
      "Build a conversational AI platform that assesses care needs, recommends appropriate living options, and supports guided discovery for Presbyterian Living communities.",
    role: "Product builder & AI engineer - designed UX, prompt/RAG flows, care-option guidance, and demo conversation experience.",
    tools: [
      "Next.js",
      "TypeScript",
      "Gemini",
      "Vercel",
      "Prompt Engineering",
      "RAG",
      "Cursor AI",
    ],
    dataSources:
      "Curated senior living knowledge covering Independent Living, Assisted Living, Memory Care, and Skilled Nursing guidance.",
    architecture:
      "Visitor chat UI → Next.js API → Gemini with grounded knowledge / RAG → personalized care-option recommendations and guided follow-up questions.",
    process: [
      "Defined discovery questions and care-need assessment flows.",
      "Built grounded responses so the assistant stays on-domain.",
      "Added suggested prompts (daily help, memory concerns, independence, nursing care).",
      "Shipped a public demo on Vercel for families and stakeholders to try.",
    ],
    challenges: [
      "Keeping answers accurate and on-domain without fabricating community details.",
      "Balancing conversational warmth with structured care-level guidance.",
    ],
    optimization: [
      "Prompt constraints and knowledge grounding for safer replies.",
      "Suggested questions to reduce cold-start friction.",
    ],
    results: [
      "Shipped a live product demo at https://presbyterian-ai-advisor.vercel.app/",
      "Combined conversational AI and care-option guidance into one engagement experience.",
      "Source repository remains private because it contains API keys; the public demo is the portfolio showcase.",
    ],
    learned: [
      "Grounded LLM apps outperform open-ended chat for business use cases.",
      "Product UX and knowledge design matter as much as model choice.",
    ],
    githubPrivate: true,
    demo: "https://presbyterian-ai-advisor.vercel.app/",
    year: "2026",
  },
  {
    slug: "senior-housing-calculator",
    title: "Senior Housing Affordability Calculator",
    shortDescription:
      "Interactive affordability and Life Plan Care Path calculator for Chicagoland senior living communities - modeling rent, income, net worth, entrance fees, and care transitions.",
    featured: true,
    category: "ai-tools",
    tags: ["Business Analytics", "Next.js", "Sales and GTM Analytics", "Automation"],
    problem:
      "Families and advisors struggle to model whether senior housing is affordable across care transitions (Independent Living → Assisted Living → Memory Care → Skilled Nursing).",
    objective:
      "Give families and sales teams a transparent calculator for monthly rent, income allocation, net worth, entrance fees, and multi-stage care-path affordability.",
    role: "Designed the calculator UX, financial assumptions model, market inputs, and Life Plan Care Path timeline logic.",
    tools: [
      "Next.js",
      "TypeScript",
      "Vercel",
      "Financial modeling",
      "CareScout / public market rent benchmarks",
    ],
    dataSources:
      "Public market rent benchmarks (e.g. CareScout), Presbyterian Living community fee ranges, and user-entered income / net worth / entrance fee assumptions.",
    architecture:
      "Market + household inputs → rent / income / net-worth assumptions → Life Plan Care Path stages → projected affordability until assets are depleted.",
    process: [
      "Built market inputs for Chicagoland Life Plan communities (Lake Forest Place, The Moorings, Westminster Place, Ten Twenty Grove).",
      "Modeled monthly rent, income growth, liquidation cost, and investment yield assumptions.",
      "Added Life Plan Care Path timelines (long-term IL, rehab & return, progressive care).",
      "Deployed a public interactive calculator on Vercel.",
    ],
    challenges: [
      "Making complex fee and care-transition math understandable for non-finance users.",
      "Separating public market benchmarks from personalized community fee quotes.",
    ],
    optimization: [
      "Preset care-level fee tiers and quick care-path templates.",
      "User guide / glossary / methodology for transparency.",
    ],
    results: [
      "Live tool at https://senior-housing-calculator.vercel.app/",
      "Supports sales and family conversations with scenario-based affordability modeling.",
      "Source remains private (API / environment secrets); public demo is available for portfolio review.",
    ],
    learned: [
      "Decision-support tools convert analytics into sales-ready conversations.",
      "Clear assumptions and methodology build trust in financial models.",
    ],
    githubPrivate: true,
    demo: "https://senior-housing-calculator.vercel.app/",
    year: "2026",
  },
  {
    slug: "senior-living-lead-scoring",
    title: "Senior Living Lead Scoring",
    shortDescription:
      "Predictive model that scores new leads, surfaces revival opportunities, estimates conversion probability, and recommends unit types.",
    featured: true,
    category: "ml",
    tags: ["Machine Learning", "Python", "Power BI", "Sales and GTM Analytics"],
    problem:
      "Sales teams needed a consistent way to prioritize inbound senior living leads and revive potentially lost opportunities.",
    objective:
      "Classify lead conversion probability (High / Medium / Low) and feed scores into executive dashboards for sales prioritization.",
    role: "Built feature engineering, XGBoost classification, and dashboard integration for sales prioritization.",
    tools: ["Python", "XGBoost", "Pandas", "Power BI"],
    dataSources:
      "Behavioral and demographic CRM / lead attributes for senior living prospects.",
    architecture:
      "Feature-engineered lead dataset → XGBoost classifier → scored tiers → Power BI executive dashboards.",
    process: [
      "Engineered behavioral and demographic features.",
      "Trained XGBoost model for conversion probability tiers.",
      "Integrated scores into sales prioritization dashboards.",
    ],
    challenges: [
      "Handling sparse or uneven lead activity signals.",
      "Making model outputs actionable for non-technical sales users.",
    ],
    optimization: [
      "Tiered High/Medium/Low outputs for operational simplicity.",
      "Dashboard surfaces for revival and unit-type recommendations.",
    ],
    results: [
      "Enabled faster sales velocity through prioritized outreach.",
      "Supported executive visibility into pipeline quality.",
    ],
    learned: [
      "Predictive scores only create value when embedded in daily sales workflows.",
    ],
    year: "2026",
  },
  {
    slug: "streampulse",
    title: "StreamPulse",
    shortDescription:
      "TimescaleDB and PostgreSQL media analytics project using hypertables, time-series queries, query plans, diagnostics, and Grafana dashboards.",
    featured: true,
    category: "analytics",
    tags: ["PostgreSQL", "TimescaleDB", "SQL", "Business Analytics"],
    problem:
      "Media analytics workloads need efficient time-series storage and diagnostics for high-volume event data.",
    objective:
      "Design a TimescaleDB/PostgreSQL analytics stack with hypertables, performant queries, and Grafana visibility.",
    role: "Designed schema/hypertables, time-series queries, query-plan diagnostics, and Grafana dashboards.",
    tools: ["PostgreSQL", "TimescaleDB", "SQL", "Grafana"],
    dataSources: "Media streaming / event time-series data.",
    architecture:
      "PostgreSQL + TimescaleDB hypertables → analytical SQL → query plan diagnostics → Grafana dashboards.",
    process: [
      "Modeled hypertables for time-series media events.",
      "Wrote analytical queries and inspected query plans.",
      "Built Grafana dashboards for operational monitoring.",
    ],
    challenges: [
      "Balancing retention, compression, and query performance.",
    ],
    optimization: [
      "Used TimescaleDB patterns for efficient time-bucket analytics.",
    ],
    results: [
      "Demonstrated production-style time-series analytics engineering skills.",
    ],
    learned: [
      "Database design and diagnostics are core to trustworthy analytics platforms.",
    ],
    github: "https://github.com/Sweta101",
    year: "2025",
  },
  {
    slug: "senior-living-executive-analytics",
    title: "Senior Living Executive Analytics",
    shortDescription:
      "Power BI dashboards combining CRM, sales, marketing, referral, occupancy, and operational information for executive decision-making.",
    featured: true,
    category: "analytics",
    tags: ["Power BI", "Sales and GTM Analytics", "Business Analytics", "SQL"],
    problem:
      "Leadership lacked a unified view across CRM, occupancy, marketing, and referral performance.",
    objective:
      "Automate executive KPI reporting with interactive drill-downs across the GTM funnel.",
    role: "Designed data model, KPI framework, and Power BI executive dashboards.",
    tools: ["Power BI", "SQL", "CRM Analytics", "Excel"],
    dataSources:
      "CRM, occupancy, marketing, referral, and operational datasets.",
    architecture:
      "Integrated source data → modeled measures/KPIs → Power BI executive dashboards with drill-downs.",
    process: [
      "Mapped funnel and occupancy KPIs with stakeholders.",
      "Integrated multi-source datasets into a reporting model.",
      "Built automated executive dashboards.",
    ],
    challenges: [
      "Aligning definitions across sales, marketing, and operations.",
    ],
    optimization: [
      "Automated refresh and KPI frameworks to reduce manual reporting.",
    ],
    results: [
      "Gave leadership a single pane for funnel conversion, attribution, and sales performance.",
    ],
    learned: [
      "KPI clarity and stakeholder alignment unlock dashboard adoption.",
    ],
    year: "2026",
  },
  {
    slug: "photography-lead-finder",
    title: "Photography Lead Finder",
    shortDescription:
      "Live AI tool that finds recent public posts where people are asking for photographers near a location, filters by category/time, and exports or saves leads to Google Sheets.",
    featured: true,
    category: "automation",
    tags: ["AI", "Automation", "Next.js", "Business Analytics"],
    problem:
      "Finding timely photography outreach opportunities manually is slow, noisy, and hard to organize by location and category.",
    objective:
      "Automate discovery of public photographer-request posts, filter by relevance, and capture qualified leads for outreach.",
    role: "Built the end-to-end product - search UX, lead discovery logic, category filters, export flows, and Google Sheets save.",
    tools: [
      "Next.js",
      "TypeScript",
      "Vercel",
      "Google APIs",
      "AI filtering",
      "Google Sheets",
      "Excel export",
    ],
    dataSources:
      "Recent public posts where people request photographers, filtered by location, time range, and category (corporate, events, wedding, family, etc.).",
    architecture:
      "Location + time + category inputs → public post discovery → relevance filtering → copy/export/Excel/Google Sheets capture.",
    process: [
      "Built location and time-range search (past 7 / 14 / 30 days).",
      "Added category filters for corporate, events, proposal, wedding, family, and general photography.",
      "Enabled copy results, Excel export, and Save to Google Sheets.",
      "Deployed a public demo on Vercel.",
    ],
    challenges: [
      "Reducing false positives in opportunity detection.",
      "Keeping API credentials secure while shipping a public demo.",
    ],
    optimization: [
      "Category and time-range filters before export.",
      "Private GitHub repo to protect Google API keys; public Vercel demo for portfolio sharing.",
    ],
    results: [
      "Live tool at https://photography-bot.vercel.app/",
      "Compressed manual prospecting into an automated lead-finding loop.",
      "Source repository is private due to Google API keys; recruiters can evaluate the live product.",
    ],
    learned: [
      "Ship the demo publicly and keep secrets in private repos / server env vars.",
      "Small automation products can still demonstrate strong AI + ops skills.",
    ],
    githubPrivate: true,
    demo: "https://photography-bot.vercel.app/",
    year: "2025",
  },
  {
    slug: "yelp-business-health",
    title: "Yelp Business Health Prediction",
    shortDescription:
      "Machine-learning and customer-experience analysis for predicting restaurant performance and investment potential.",
    featured: true,
    category: "ml",
    tags: ["Machine Learning", "Python", "Business Analytics"],
    problem:
      "Investors and operators need signals of restaurant health beyond raw ratings.",
    objective:
      "Predict business health / performance potential from Yelp-related features and customer experience signals.",
    role: "Built ML pipeline and customer-experience analysis for performance prediction.",
    tools: ["Python", "Machine Learning", "Pandas"],
    dataSources: "Yelp business and review-related features.",
    architecture:
      "Feature engineering → predictive models → interpretation of business health signals.",
    process: [
      "Prepared business and review features.",
      "Trained predictive models for health/performance outcomes.",
      "Interpreted drivers relevant to investment potential.",
    ],
    challenges: [
      "Noisy text/review signals and class imbalance risks.",
    ],
    optimization: [
      "Focused on interpretable business drivers alongside accuracy.",
    ],
    results: [
      "Showcased applied ML for real-world business evaluation use cases.",
    ],
    learned: [
      "Domain framing turns ML metrics into business decisions.",
    ],
    github: "https://github.com/Sweta101",
    year: "2024",
  },
  {
    slug: "heart-disease-prediction",
    title: "Heart Disease Prediction",
    shortDescription:
      "Classification and clustering on the Cleveland dataset with models up to 92% accuracy.",
    featured: false,
    category: "ml",
    tags: ["Machine Learning", "Python"],
    problem:
      "Clinicians and analysts need interpretable risk stratification from structured clinical features.",
    objective:
      "Compare Logistic Regression, Decision Tree, Random Forest, and SVM, plus KMeans risk groups.",
    role: "Built, evaluated, and compared multiple ML models and clustering approaches.",
    tools: ["Python", "scikit-learn"],
    dataSources: "Cleveland heart disease dataset.",
    architecture: "Preprocessing → supervised classifiers + KMeans → evaluation.",
    process: [
      "Trained multiple classifiers and evaluated performance.",
      "Applied KMeans to uncover hidden risk groups.",
    ],
    challenges: ["Balancing accuracy with interpretability."],
    optimization: ["Compared multiple algorithms rather than a single model."],
    results: ["Achieved up to 92% accuracy on evaluated models."],
    learned: ["Model comparison is essential for trustworthy predictions."],
    github: "https://github.com/Sweta101",
    year: "2024",
  },
  {
    slug: "divvy-bike-share",
    title: "Divvy Bike-Share Visualization",
    shortDescription:
      "Tableau analysis of 2018 Divvy data joined with weather and station datasets for operations insights.",
    featured: false,
    category: "analytics",
    tags: ["Tableau", "Business Analytics"],
    problem:
      "Bike-share operators need visibility into usage patterns, peak times, and top stations.",
    objective:
      "Uncover usage patterns to support bike placement and operations decisions.",
    role: "Joined datasets and built Tableau dashboards for management insights.",
    tools: ["Tableau"],
    dataSources: "2018 Divvy bike-share, weather, and station datasets.",
    architecture: "Joined operational datasets → Tableau dashboards.",
    process: [
      "Joined weather and station data with trip activity.",
      "Built dashboards for busy times and top stations.",
    ],
    challenges: ["Integrating heterogeneous geospatial and temporal sources."],
    optimization: ["Focused dashboards on actionable placement decisions."],
    results: ["Provided management-ready views of usage and station demand."],
    learned: ["Contextual joins (e.g., weather) enrich operational analytics."],
    github: "https://github.com/Sweta101",
    year: "2024",
  },
  {
    slug: "churn-prediction",
    title: "Customer Churn Prediction",
    shortDescription:
      "Churn modeling with SMOTE, hyperparameter tuning, and SHAP interpretability using Gradient Boosting and XGBoost.",
    featured: false,
    category: "ml",
    tags: ["Machine Learning", "Python"],
    problem:
      "Customer retention teams need early warning signals for likely churners.",
    objective:
      "Build interpretable churn models that handle class imbalance and explain drivers.",
    role: "Feature engineering, imbalance handling, model tuning, and SHAP analysis.",
    tools: ["Python", "XGBoost", "SHAP", "SMOTE"],
    dataSources: "Customer behavioral and account features.",
    architecture:
      "Feature engineering → imbalance handling → boosted models → SHAP explanations.",
    process: [
      "Handled class imbalance with SMOTE / scale_pos_weight.",
      "Tuned Gradient Boosting and XGBoost models.",
      "Used SHAP for interpretability.",
    ],
    challenges: ["Severe class imbalance and explanation needs for business users."],
    optimization: ["Combined resampling/weighting with SHAP storytelling."],
    results: ["Delivered predictive and interpretable churn insights."],
    learned: ["Interpretability is required for retention interventions."],
    github: "https://github.com/Sweta101",
    year: "2024",
  },
  {
    slug: "boston-housing",
    title: "Boston Housing Price Modeling",
    shortDescription:
      "Data-adaptive housing price modeling comparing linear, Gaussian process, and neural network regression with 10-fold CV.",
    featured: false,
    category: "ml",
    tags: ["Machine Learning", "Python"],
    problem:
      "Housing price prediction benefits from comparing flexible model families under rigorous validation.",
    objective:
      "Compare Multiple Linear Regression, Gaussian Process Regression, and Neural Network Regression with 10-fold CV.",
    role: "Implemented comparative regression framework and cross-validation evaluation.",
    tools: ["Python", "Machine Learning"],
    dataSources: "Boston housing dataset.",
    architecture: "Model family comparison under 10-fold cross-validation.",
    process: [
      "Implemented multiple regression approaches.",
      "Evaluated with 10-fold cross-validation.",
    ],
    challenges: ["Avoiding overfitting on a classic tabular dataset."],
    optimization: ["Used cross-validation for fair model comparison."],
    results: ["Demonstrated rigorous comparative predictive modeling."],
    learned: ["Validation design is as important as algorithm choice."],
    github: "https://github.com/Sweta101",
    year: "2024",
  },
  {
    slug: "blinkit-powerbi",
    title: "Blinkit Sales Power BI Dashboard",
    shortDescription:
      "Interactive Power BI dashboard analyzing Blinkit sales, demographics, and product preferences.",
    featured: false,
    category: "analytics",
    tags: ["Power BI", "Business Analytics"],
    problem:
      "Sales and retention decisions need clear views of revenue, demographics, and product preference trends.",
    objective:
      "Identify key trends to improve sales performance and customer retention.",
    role: "Designed interactive Power BI dashboard and insight narrative.",
    tools: ["Power BI"],
    dataSources: "Blinkit sales and customer insight datasets.",
    architecture: "Sales data model → interactive Power BI visuals → insight storytelling.",
    process: [
      "Modeled revenue and demographic measures.",
      "Built interactive visuals for product preferences.",
    ],
    challenges: ["Turning many metrics into a decision-focused dashboard."],
    optimization: ["Prioritized retention and revenue drivers in the layout."],
    results: ["Enabled data-driven sales and retention discussions."],
    learned: ["Dashboard hierarchy should mirror business questions."],
    year: "2024",
  },
  {
    slug: "gtm-funnel-intelligence",
    title: "GTM Funnel Intelligence Dashboard",
    shortDescription:
      "Executive dashboards tracking marketing attribution, funnel conversion, and sales performance with automated KPI reporting.",
    featured: true,
    category: "analytics",
    tags: ["Power BI", "SQL", "Sales and GTM Analytics"],
    problem:
      "GTM leaders needed attribution, conversion, and sales performance in one interactive reporting layer.",
    objective:
      "Automate KPI reporting with interactive drill-down reports for decision-making.",
    role: "Built CRM analytics model and executive Power BI reporting.",
    tools: ["Power BI", "SQL", "CRM Analytics"],
    dataSources: "Marketing attribution, funnel, and sales CRM data.",
    architecture:
      "CRM/SQL sources → KPI model → Power BI executive dashboards.",
    process: [
      "Defined funnel and attribution KPIs.",
      "Automated reporting and drill-downs.",
    ],
    challenges: ["Attribution consistency across channels."],
    optimization: ["Interactive drill-downs for faster root-cause analysis."],
    results: ["Supported executive GTM decision-making with automated KPIs."],
    learned: ["Funnel definitions must be shared before dashboard polish."],
    year: "2025",
  },
];

export const projectTags: ProjectTag[] = [
  "AI",
  "Machine Learning",
  "Power BI",
  "Tableau",
  "SQL",
  "Python",
  "PostgreSQL",
  "TimescaleDB",
  "Business Analytics",
  "Sales and GTM Analytics",
  "Automation",
  "Next.js",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
