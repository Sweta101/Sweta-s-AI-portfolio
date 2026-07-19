# Ask Sweta AI Portfolio

Deep navy product-style portfolio with an grounded "Ask Sweta AI" chatbot.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Required | Purpose |
|---|---|---|
| `GEMINI_API_KEY` | Optional | Powers Ask Sweta AI via Gemini. Without it, the bot uses curated FAQ/keyword fallbacks. |
| `GITHUB_TOKEN` | Optional | Higher GitHub API rate limits for the live repo feed. |
| `NEXT_PUBLIC_FORMSPREE_ID` | Optional | Contact form endpoint id from Formspree. |

Get a Gemini key: https://aistudio.google.com/apikey

## Add your resume PDF

Place your resume at:

```
public/resume/Sweta_Kumari_Resume.pdf
```

The Resume page and download buttons will pick it up automatically.

## Deploy on Vercel

1. Push this repo to GitHub (`sweta-ai-portfolio`).
2. Import the project in Vercel.
3. Add `GEMINI_API_KEY` (and optional `GITHUB_TOKEN`) in project env vars.
4. Deploy.

## Stack

Next.js · TypeScript · Tailwind CSS · Framer Motion · Gemini · GitHub REST API
