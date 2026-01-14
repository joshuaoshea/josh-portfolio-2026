// Portfolio Content Configuration
// Edit this file to customize your portfolio content

export const personalInfo = {
  name: "JOSH O'SHEA",
  title: "PRODUCT DESIGNER",
  tagline: "I'm Josh, a product designer blending technical experience with a strategic & data-driven design approach.",
  location: "Dublin",
  email: "hello@joshoshea.com",
  availableForWork: true
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/joshoshea/",
  instagram: "https://instagram.com/yourprofile",
  cv: "#cv" // Update with actual CV link
};

export const experience = [
  {
    company: "Zendesk",
    role: "Product Designer",
    period: "2023 - NOW"
  },
  {
    company: "Genesys",
    role: "Product Designer",
    period: "2021 - 2023"
  },
  {
    company: "SAP",
    role: "UX Researcher & Designer",
    period: "2020 - 2021"
  }
];

export const caseStudies = [
  {
    company: "ZENDESK",
    title: "Unifying Post-Call Intelligence Across Zendesk Voice Platform",
    description: "I led the design for a single, dynamic post-call experience that replaced fragmented comments across all voice call types. The system unified AI transcription, summarization, and multi-channel playback while scaling to support future voice, video and AI Agent workflows",
    tags: ["0 TO 1 DESIGN", "AGENTIC AI", "CCASS"],
    metrics: [
      { value: "1.1%", label: "ATC CONVERSION" },
      { value: "62%", label: "OVERALL SATISFACTION" }
    ],
    bgColor: "#b1d1f6",
    image: null,
    link: "#"
  },
  {
    company: "ZENDESK",
    title: "Deflecting High-Volume Calls with AI Voice Agents",
    description: "This project focused on enabling call centers to offload routine inquiries to AI without sacrificing control or service quality. I designed admin tools for agent setup, live call monitoring, human takeover, and post-call training to continuously improve AI performance.",
    tags: ["0 TO 1 DESIGN", "AGENTIC AI"],
    metrics: [
      { value: "1.1%", label: "ATC CONVERSION" },
      { value: "62%", label: "OVERALL SATISFACTION" }
    ],
    bgColor: "#b1aaec",
    image: null,
    link: "#"
  },
  {
    company: "GENESYS",
    title: "Simplifying Digital Channel Deployment Across Genesys",
    description: "I led the design of a unified digital channel setup experience that streamlines configuration and deployment for admins. The solution replaced fragmented workflows and created a repeatable model for scaling additional channels starting with Web Messenger as the test case.",
    tags: ["0 TO 1 DESIGN"],
    metrics: [
      { value: "1.1%", label: "ATC CONVERSION" },
      { value: "62%", label: "OVERALL SATISFACTION" }
    ],
    bgColor: "#d8ecaa",
    image: null,
    link: "#"
  }
];
