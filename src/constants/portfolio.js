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
    id: "zendesk-voice-intelligence",
    company: "ZENDESK",
    title: "Unifying Post-Call Intelligence Across Zendesk Voice Platform",
    description: "I led the design for a single, dynamic post-call experience that replaced fragmented comments across all voice call types. The system unified AI transcription, summarization, and multi-channel playback while scaling to support future voice, video and AI Agent workflows",
    tags: ["0 TO 1 DESIGN", "AGENTIC AI", "CCASS"],
    metrics: [
      { value: "1.1%", label: "ATC CONVERSION" },
      { value: "62%", label: "OVERALL SATISFACTION" }
    ],
    bgColor: "#b1d1f6",
    hoverColor: "#FBEDE6",
    hoverBorderColor: "#E8D5C8",
    image: null,
    link: "#",
    // Case Study Page Data
    pageData: {
      category: "AI-POWERED VOICE INTELLIGENCE",
      type: "AI & Unification",
      role: "Lead Designer",
      collaborators: "Product Management, Engineering, Design Systems.",
      timeline: "Q3 - Q4 2025 (Beta)",
      summary: "I led the design of a unified post-call intelligence experience across the Zendesk Voice platform. Multiple voice solutions such as native Voice, Voice TPE, AI Voice Agents, and Contact Center were generating differing post-call comments, creating an inconsistent experience to review calls and extract insights reliably.",
      summaryExtended: "I redesigned the post-call comment into a single, dynamic experience that adapts to different call types while supporting AI-generated summaries, transcriptions, and richer post-call workflows.",
      outcome: "The result was a consistent, scalable post-call experience that improved clarity, reduced fragmentation across voice products, and bridge the gap for feature parity.",
      businessGoal: "Supported OKR to grow voice customers by 5% by improving the consistency, clarity, and perceived maturity of the Voice platform—reducing friction for adoption and strengthening AI feature readiness,",
      userImpact: "Reduced time and effort required for agents and supervisors to review by centralizing call data. This enabled faster call comprehension and  easier validation of AI insights.",
      discoveryTitle: "Defining the problem and workshopping a path forward",
      discoveryDescription: "To align on a path forward, I ran a cross-functional workshop with Product, Engineering, Design, and Research to evaluate the existing experience and identify what a unified post-call comment needed to support.",
      discoveryDescriptionExtended: "A key constraint was accommodating both Twilio-based voice solutions and the AWS-based Contact Center product without exposing technical differences to users. This was due to a recent acquisition leading to additional considerations for the voice product.",
      discoveryInsights: [
        {
          title: "CORE FOCUS #1",
          description: "Permissions, compliance needs, and data retention requirements varied greatly per role."
        },
        {
          title: "CORE FOCUS #2",
          description: "Transcripts and recordings were difficult to scan, search, and validate against audio."
        },
        {
          title: "CORE FOCUS #3",
          description: "Core information was surfaced inconsistently across call types, increasing cognitive load."
        },
        {
          title: "CORE FOCUS #4",
          description: "AI-generated summaries lacked transparency, editability, and clear hierarchy."
        },
        {
          title: "CORE FOCUS #5",
          description: "Experience needed to scale and be adaptable to AWS and Twillio."
        },
        {
          title: "CORE FOCUS #6",
          description: "Creating an experience to encourage adoption of Post-Call AI by achieving x% YoY growth."
        }
      ],
      ideationTitle: "Designing a unified post-call intelligence framework",
      ideationDescription: "I explored design concepts through user flows and wireframes, grounded in research with customer success teams and insights from competitive analysis. These explorations helped define requirements for a flexible, scalable post-call system that could adapt to different voice channel types.",
      flowDiagram: "/images/case-studies/zendesk/Flowchart_resized.png",
      ideationSubheading: "Early Ideation",
      ideationExtendedDescription: "Using the flows as a foundation, I explored low-fidelity layouts and interaction patterns, then created an early interactive prototype using Figma Make to quickly test structure, hierarchy, and access models.",
      ideationImages: [
        {
          src: "/images/case-studies/zendesk/lo-fi-2.png",
          alt: "Low-fidelity wireframe 2",
          caption: "UNIFIED INTELLIGENCE FRAMEWORK",
          prototypeUrl: "https://fake-kiosk-20828764.figma.site"
        }
      ],
      researchTitle: "Researching Through an Early Access Program",
      researchDescription: "This work was part of the Local Measure integration and delivered under a tight timeline. To balance platform stability with research speed, we launched the redesigned experience through an Early Access Program (EAP), allowing customers to opt in and use it in production while we continued to iterate.",
      researchSubheading: "Goal of Early Access",
      researchExtendedDescription: "The Early Access Program (EAP) is being used to validate both experience quality and business impact by combining usage data with ongoing customer interviews. This approach allows us to safely test the unified post-call experience in production, reduce the risk of premature platform standardization, and inform the roadmap toward a GA release planned for 2026.",
      researchImpactTitle: "Impact Observed Through Ongoing Early Access Program",
      researchMetrics: [
        { value: "+3%", label: "INCREASE IN POST-CALL AI ADOPTION" },
        { value: "15%", label: "REDUCTION IN QA TIME" },
        { value: "81%", label: "OVERALL SATISFACTION" }
      ]
    }
  },
  {
    id: "zendesk-ai-voice-agents",
    company: "ZENDESK",
    title: "Deflecting High-Volume Calls with AI Voice Agents",
    description: "This project focused on enabling call centers to offload routine inquiries to AI without sacrificing control or service quality. I designed admin tools for agent setup, live call monitoring, human takeover, and post-call training to continuously improve AI performance.",
    tags: ["0 TO 1 DESIGN", "AGENTIC AI"],
    metrics: [
      { value: "1.1%", label: "ATC CONVERSION" },
      { value: "62%", label: "OVERALL SATISFACTION" }
    ],
    bgColor: "#b1aaec",
    hoverColor: "#FBF9E6",
    hoverBorderColor: "#E8E5C8",
    image: null,
    link: "#"
  },
  {
    id: "genesys-digital-channels",
    company: "GENESYS",
    title: "Simplifying Digital Channel Deployment Across Genesys",
    description: "I led the design of a unified digital channel setup experience that streamlines configuration and deployment for admins. The solution replaced fragmented workflows and created a repeatable model for scaling additional channels starting with Web Messenger as the test case.",
    tags: ["0 TO 1 DESIGN"],
    metrics: [
      { value: "42%", label: "REDUCTION IN SETUP TIME" },
      { value: "17%", label: "REDUCTION IN ADMIN ERROR" }
    ],
    bgColor: "#d8ecaa",
    hoverColor: "#E6F0FB",
    hoverBorderColor: "#C2D6E8",
    image: "/images/work/genesys-digital-channels.png",
    link: "#",
    // Case Study Page Data
    pageData: {
      category: "PLATFORM UNIFICATION",
      type: "Web App Unification",
      role: "Lead Designer",
      collaborators: "Product Management, UX Research Engineering, Design Systems.",
      timeline: "Q3-Q4 2022",
      summary: "I led the design of a unified digital channel setup experience at Genesys. Consistent feedback from Admins suggested that our setup experience was disjointed making it difficult to manage at scale.",
      summaryExtended: "I evaluated existing digital channel setup experiences to design a centralized, reusable framework that replaced fragmented, channel-specific workflows, using Web Messenger as the proof of concept.",
      outcome: "The outcome was a more intuitive, consistent deployment experience that improved admin efficiency, reduced cognitive load, and enabled customers to scale there digital offerings faster.",
      businessGoal: "Enable scalable digital channel growth by replacing fragmented setup workflows supporting faster channel launches and targeting 5% year-over-year increase in digital channel adoption.",
      userImpact: "Reduced time and effort for admins to configure and deploy digital channels by simplifying setup flows, minimizing errors, and lowering the cognitive load required to launch and manage.",
      discoveryTitle: "Understanding the current state and competitive gaps",
      discoveryDescription: "I mapped the existing digital channel setup experience and conducted a competitive analysis across seven enterprise CCaaS platforms to identify usability gaps and structural weaknesses. This work highlighted where fragmented workflows and inconsistent patterns put Genesys at a disadvantage, directly informing the design principles going forward.",
      discoveryInsights: [
        {
          title: "INSIGHT #1",
          description: "Genesys' fragmented product experience limits visibility of digital channel capabilities, putting it at a disadvantage compared to competitors with more centralized and discoverable offerings."
        },
        {
          title: "INSIGHT #2",
          description: "Compared to competitors, Genesys makes flow customization harder for non-technical users, forcing them to accept unnecessary complexity to achieve the flexibility they need."
        },
        {
          title: "INSIGHT #3",
          description: "Competitors that offer hands-on, learn-by-doing onboarding better communicate product value upfront, while Genesys relies on experiences that delay understanding of what's possible."
        }
      ],
      ideationTitle: "Early Ideation: Translating Research into Structure",
      ideationDescription: "I explored early concepts through information architecture and low-fidelity wireframes, grounded in collaborative research with the UX research team and insights from prior competitive and gap analysis. These explorations helped define high-level requirements and user stories, aligning early solutions to validated admin needs and market expectations.",
      flowDiagram: null, // Add path to flow diagram image when available
      ideationSubheading: null, // Optional: can add a subheading if needed
      ideationExtendedDescription: null, // Optional: can add extended description if needed
      ideationImages: [
        {
          src: "/images/case-studies/genesys/lo-fi-1.png",
          alt: "Low-fidelity wireframe 1",
          caption: "LANDING PAGE DESIGNS"
        },
        {
          src: "/images/case-studies/genesys/lo-fi-2.png",
          alt: "Low-fidelity wireframe 2",
          caption: "SETUP EXPERIENCE"
        }
      ],
      researchTitle: "Validating Direction Through Customer Research",
      researchDescription: "I validated early concepts through interviews with 10 customers, focusing on usage patterns, unmet needs, and the operational impact of proposed solutions. The findings provided confidence in the chosen direction and highlighted opportunities to further simplify setup and deployment.",
      researchInsights: [
        {
          title: "LACK OF VISIBILITY LIMITS CONFIDENCE",
          description: "Power users struggle to monitor the health and activity of live digital channels, making performance tracking and reporting inefficient."
        },
        {
          title: "TESTING CRITICAL BEFORE LAUNCH",
          description: "Admins need a live preview or sandbox environment to confidently test configurations before deploying to production."
        },
        {
          title: "UNCLEAR DEPLOYMENT STATES",
          description: "Without a centralized view that clearly distinguishes draft, live, and at-risk deployments, admins find it difficult to manage channels at scale."
        },
        {
          title: "EXPLORATION DRIVES ADOPTION",
          description: "Admins want plug-and-play templates to quickly experiment with digital channels and understand their potential value."
        },
        {
          title: "PRE-LAUNCH REVIEW BUILDS TRUST",
          description: "A detailed review mode is essential for admins to validate configurations and catch issues before deployment."
        },
        {
          title: "FLEXIBILITY BEYOND LAUNCH",
          description: "Admins expect to evolve deployments over time, adding functionality without having to recreate channels from scratch."
        }
      ],
      impactTitle: "Measured Impact and Path Forward",
      impactDescription: "Insights from a post–early access program with admins confirmed reductions in setup effort and errors. Future work focuses on expanding the framework to additional channels, strengthening setup review, and improving real-time preview for the messenger widget.",
      impactMetrics: [
        { value: "42%", label: "REDUCTION IN SETUP TIME" },
        { value: "+5%", label: "INCREASED YOY ADOPTION (DIGITAL CHANNELS)" },
        { value: "17%", label: "REDUCTION IN ADMIN ERROR" }
      ]
    }
  }
];
