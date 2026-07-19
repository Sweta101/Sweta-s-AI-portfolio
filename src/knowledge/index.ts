import { profile } from "./profile";
import { experience } from "./experience";
import { education } from "./education";
import { skills } from "./skills";
import { awards } from "./awards";
import { projects } from "./projects";
import { faq, refusedTopics } from "./faq";

export {
  profile,
  experience,
  education,
  skills,
  awards,
  projects,
  faq,
  refusedTopics,
};

/** Full grounded knowledge string injected into the chatbot system prompt. */
export function buildKnowledgeBase(): string {
  const experienceBlock = experience
    .map((job) => {
      const roles = job.previousRoles?.length
        ? `\nPrevious roles: ${job.previousRoles.join(" → ")}`
        : "";
      return `### ${job.title} | ${job.company} (${job.start} – ${job.end}, ${job.location})${roles}\n${job.highlights.map((h) => `- ${h}`).join("\n")}`;
    })
    .join("\n\n");

  const educationBlock = education
    .map((ed) => {
      const honors = ed.honors.length ? `\nHonors: ${ed.honors.join("; ")}` : "";
      const courses = ed.coursework.length
        ? `\nCoursework: ${ed.coursework.join(", ")}`
        : "";
      return `### ${ed.degree} | ${ed.school} (${ed.start} – ${ed.end})\nGPA: ${ed.gpa}${honors}${courses}`;
    })
    .join("\n\n");

  const projectsBlock = projects
    .map(
      (p) =>
        `### ${p.title}\n${p.shortDescription}\nTools: ${p.tools.join(", ")}\nTags: ${p.tags.join(", ")}\nResults: ${p.results.join(" ")}\nLive demo: ${p.demo ?? "N/A"}\nGitHub: ${p.github ?? (p.githubPrivate ? "Private (contains API keys) - use live demo" : "N/A")}`,
    )
    .join("\n\n");

  const skillsBlock = Object.entries(skills)
    .map(([key, values]) => `${key}: ${values.join(", ")}`)
    .join("\n");

  const awardsBlock = awards
    .map((a) => `- ${a.title} - ${a.org} (${a.year}): ${a.detail}`)
    .join("\n");

  const faqBlock = faq.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n");

  return `
# Profile
Name: ${profile.name}
Location: ${profile.location}
Headline: ${profile.headline}
Tagline: ${profile.tagline}
Intro: ${profile.intro}
Personal story: ${profile.personalStory}
Professional story: ${profile.professionalStory}
Identity traits: ${profile.identityTraits.map((t) => `${t.label}: ${t.detail}`).join("; ")}
Proof points: ${profile.proofPoints.map((p) => `${p.value} ${p.label}`).join("; ")}
Summary: ${profile.summary}
Focus: ${profile.focusAreas.join(" · ")}
Target roles: ${profile.targetRoles.join("; ")}
Email: ${profile.email}
Phone: ${profile.phone}
LinkedIn: ${profile.linkedin}
GitHub: ${profile.github}
Career interests: ${profile.careerInterests.join("; ")}
Fit statement: ${profile.fitStatement}

# Experience
${experienceBlock}

# Education
${educationBlock}

# Projects
${projectsBlock}

# Skills
${skillsBlock}

# Awards
${awardsBlock}

# Approved FAQs
${faqBlock}

# Topics to refuse
${refusedTopics.map((t) => `- ${t}`).join("\n")}
`.trim();
}
