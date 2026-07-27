export type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  type: "full-time" | "internship" | "academic";
  previousRoles?: string[];
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "presbyterian-living",
    title: "Sales Analyst",
    company: "Presbyterian Living",
    location: "Skokie, IL",
    start: "January 2026",
    end: "Present",
    type: "full-time",
    highlights: [
      "Integrated CRM, occupancy, marketing, and referral data into automated Power BI dashboards for executive leadership.",
      "Engineered predictive lead scoring architectures to increase sales velocity.",
      "Developed live AI products including the Presbyterian AI Advisor (https://presbyterian-ai-advisor.vercel.app/) and Senior Housing Affordability Calculator (https://senior-housing-calculator.vercel.app/).",
      "Designed sales funnel reporting and KPI frameworks.",
      "Automated workflows using Python, Power BI, and Excel, reducing manual effort.",
      "Awarded the Day One Plus Award for AI-powered business solutions.",
    ],
  },
  {
    id: "select-medical",
    title: "IT Business Analyst Intern",
    company: "Select Medical",
    location: "Mechanicsburg, PA",
    start: "May 2025",
    end: "August 2025",
    type: "internship",
    highlights: [
      "Automated IRS 1099 reporting using SQL and Excel VBA, reducing processing time by 40%.",
      "Analyzed travel vendor performance leading to a 25% reduction in travel costs.",
      "Consolidated 90+ financial datasets into a standardized dataset for forecasting.",
    ],
  },
  {
    id: "penn-state-gta",
    title: "Graduate Teaching Assistant",
    company: "Pennsylvania State University",
    location: "University Park, PA",
    start: "August 2024",
    end: "May 2025",
    type: "academic",
    highlights: [
      "Supported capstone courses in Marketing Strategy, Supply Chain Strategy (UG), and Strategic Management (MBA).",
      "Reviewed over 260 student submissions, including case studies from Harvard and Stanford.",
    ],
  },
  {
    id: "upgrad",
    title: "Sales and Strategy Manager",
    company: "upGrad",
    location: "Bangalore, KA",
    start: "September 2021",
    end: "July 2024",
    type: "full-time",
    previousRoles: [
      "Learning Consultant",
      "Senior Learning Consultant",
      "Principal Learning Consultant",
    ],
    highlights: [
      "Promoted 4 times in approximately 2 years.",
      "Scaled a new business vertical from ₹0 to ₹70 Cr via KPI frameworks and data-driven sales strategies.",
      "Three-time Highest Revenue Performer.",
      "Reduced lead response times by 82% and Customer Acquisition Cost (CAC) by 38%.",
      "Improved Marketing Qualified Lead (MQL) conversion by 20% via forecasting models.",
      "Increased payment recovery rates from 58% to 95% in one quarter.",
      "Managed an 11-member sales team.",
    ],
  },
  {
    id: "simplilearn",
    title: "Senior Inside Sales Manager",
    company: "Simplilearn",
    location: "Bangalore, KA",
    start: "July 2021",
    end: "August 2021",
    type: "full-time",
    highlights: [
      "Focused on consultative sales for technology education programs.",
      "Achieved a 35% improvement in customer satisfaction through personalized recommendations and discovery conversations.",
      "Managed CRM data quality, pipeline hygiene, and forecasting accuracy.",
    ],
  },
  {
    id: "mycaptain",
    title: "Sales and Operations Executive",
    company: "MyCaptain",
    location: "Bangalore, KA",
    start: "June 2020",
    end: "June 2021",
    type: "full-time",
    highlights: [
      "Scaled a nationwide student ambassador program across 100+ colleges, increasing lead generation 5x.",
      "Built Google Sheets dashboards and automated workflows, reducing manual effort by 40%.",
      "Recognized as Highest Revenue Performer.",
    ],
  },
];
