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
  cv: "https://drive.google.com/file/d/1VGlzpgqcOMWC-Spd_KQfCMwzn88opjyg/view?usp=sharing"
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
      { value: "+3%", label: "INCREASE IN POST-CALL AI ADOPTION" },
      { value: "15%", label: "REDUCTION IN QA TIME" }
    ],
    bgColor: "#b1d1f6",
    hoverColor: "#FBEDE6",
    hoverBorderColor: "#E8D5C8",
    image: null,
    video: "/videos/work/UVC_Home.mp4",
    link: "#",
    // Case Study Page Data
    pageData: {
      category: "AI-POWERED VOICE INTELLIGENCE",
      type: "AI & Unification",
      role: "Lead Designer",
      collaborators: "Product Management, Engineering, Design Systems.",
      timeline: "Q3 - Q4 2025 (Beta)",
      summary: "I led the design of a unified post-call comment experience across the Zendesk Voice platform. Multiple voice solutions such as native Voice, Voice TPE, AI Voice Agents, and Contact Center were generating differing post-call comments, creating an inconsistent experience to review calls and extract insights reliably.",
      summaryExtended: "I redesigned the post-call comment into a single, dynamic experience that adapts to different call types while supporting AI-generated summaries, transcriptions, and richer post-call workflows.",
      outcome: "The result was a consistent, scalable post-call experience that improved clarity, reduced fragmentation across voice products, and bridges the gap for feature parity.",
      businessGoal: "Supported OKR to grow voice customers by 5% by improving the consistency, clarity, and perceived maturity of the Voice platform—reducing friction for adoption and strengthening AI feature readiness,",
      userImpact: "Reduced time and effort required for agents and supervisors to review tickets by centralizing call data. This enabled faster call comprehension and  easier validation of AI insights.",
      discoveryTitle: "Defining the problem and workshopping a path forward",
      discoveryDescription: "To align on a path forward, I ran a cross-functional workshop with Product, Engineering, Design, and Research to evaluate the existing experience and identifyng ke gaps in the experience that needed to support.",
      discoveryDescriptionExtended: "A key constraint was accommodating both a Twilio-based voice solution and a AWS-based solution without exposing technical differences to users. This was due to a recent acquisition leading to additional considerations for the voice product.",
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
      ideationDescription: "I explored design concepts through user flows and wireframes, grounded in research supplied by our UXR team and insights from competitive analysis. These explorations helped define requirements for a flexible, scalable post-call system that could adapt to different call types.",
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
      researchDescription: "This work was part of a high priority integration and delivered under a tight timeline. To balance platform stability with research speed, we launched the redesigned experience through an Early Access Program (EAP), allowing customers to opt in and use it in production while we continued to iterate.",
      researchSubheading: "Goal of Early Access",
      researchExtendedDescription: "The Early Access Program (EAP) is being used to validate both experience quality and business impact by combining usage data with ongoing customer interviews. This approach allows us to safely test the unified post-call experience in production, reduce the risk of premature platform standardization, and inform the roadmap toward a GA release planned for 2026.",
      researchImpactTitle: "Impact Observed Through Ongoing Early Access Program",
      researchMetrics: [
        { value: "+3%", label: "INCREASE IN POST-CALL AI ADOPTION" },
        { value: "15%", label: "REDUCTION IN QA TIME" }
      ]
    }
  },
  {
    id: "zendesk-embedded-voice",
    company: "ZENDESK",
    title: "Embedded Voice — Designing Real-Time Calling for the Web",
      description: "An embedded voice experience that lets customers move from web messaging to live voice support without breaking context.",
    tags: ["0 TO 1 DESIGN", "WEB RTC"],
    metrics: [
      { value: "87%", label: "OVERALL USER SATISFACTION" },
      { value: "18%", label: "REDUCTION IN FTR" }
    ],
    bgColor: "#b1aaec",
    hoverColor: "#FBF9E6",
    hoverBorderColor: "#E8E5C8",
    image: null,
    video: "/videos/case-studies/zendesk-embedded-voice/embedded_voice_hero.mp4",
    link: "#",
    // Case Study Page Data
    pageData: {
      category: "EMBEDDED VOICE & REAL-TIME CALLING",
      type: "Web Messenger",
      role: "Lead Designer",
      collaborators: "Product Management, Engineering, Design Systems.",
      timeline: "Q1-Q2 2023",
      summary: "Embedded Voice enables end users to start a real-time voice call directly from a website using Zendesk Messenger.",
      summaryExtended: "Delivered as a one-quarter MVP, the project addressed urgent enterprise demand while laying the groundwork for video calling over Voice. I led the design of the experience across admin setup, end-user entry points, and agent workflows, partnering closely with Product and Engineering to scope a phased release that balanced speed, quality, and long-term extensibility.",
      outcome: "Enabled real-time voice support on the web while creating a future-proof foundation for multimodal customer conversations.",
      businessGoal: "Expanded Zendesk Voice into web-based use cases, unlocking immediate enterprise value while establishing a scalable foundation for future capabilities such as video calling.",
      userImpact: "Enabled customers to transition from web browsing to live voice support in a single, familiar flow—reducing friction and preserving context.",
      discoveryTitle: "Understanding the competitive landscape and best practices to be applied.",
      discoveryDescription: "To shape Embedded Voice, I reviewed how messaging platforms, contact-center suites, and communications APIs approach browser-based calling and chat-to-voice escalation. While implementations differed, consistent patterns emerged across the market.",
      discoveryDescriptionExtended: null,
      discoveryInsights: [
        {
          title: "INSIGHT #1",
          description: "Voice works best as an escalation from messaging\nLeading products embed voice within existing conversations to preserve context, rather than treating it as a separate channel or entry point."
        },
        {
          title: "INSIGHT #2",
          description: "WebRTC constraints must be designed for, not hidden\nSuccessful experiences account for browser support, permissions, and network variability through clear states, staged prompts, and fallback paths."
        },
        {
          title: "INSIGHT #3",
          description: "Adoption depends on simple, familiar admin models\nCompetitors that reuse existing routing and configuration patterns reduce setup friction and scale more effectively than highly customized solutions."
        }
      ],
      designPrinciple: "Design voice as a purposeful extension of messaging, grounded in familiar patterns, constrained by real-world reliability, and introduced only when it adds clear user value.",
      ideationTitle: "Ideation: Translating Designs into Requirements",
      ideationDescription: "Early ideation focused on exploring multiple concepts in parallel while pressure-testing them against technical feasibility and delivery timelines. Working closely with Product, I evaluated which concepts could realistically ship within an MVP.",
      ideationDescriptionExtended: "Given the complexity of introducing real-time voice into an existing messaging surface, concepts were shaped by what could be built safely and reliably within a single quarter, grounding design decisions in reality rather than idealised solutions.",
      flowDiagram: null,
      ideationSubheading: null,
      ideationExtendedDescription: null,
      ideationImages: [
        {
          src: "/images/case-studies/zendesk-embedded-voice/user-flows-enduser.png",
          alt: "User flows end user",
          caption: null
        },
        {
          src: "/images/case-studies/zendesk-embedded-voice/agent-flow.png",
          alt: "Agent flow",
          caption: null
        },
        {
          src: "/images/case-studies/zendesk-embedded-voice/admin-flow.png",
          alt: "Admin flow",
          caption: null,
          subheading: "Designing with accessibility in mind",
          description: "Concepts were reviewed with the Accessibility team to validate key flows such as call entry points, permission states, and in-call controls. This ensured accessibility considerations informed design decisions from the outset rather than being addressed later."
        },
        {
          src: "/images/case-studies/zendesk-embedded-voice/a11y-spec.png",
          alt: "Accessibility specification",
          caption: null,
          subheading: "From Ideation to Phased Delivery",
          description: "These designs directly informed requirements and user story creation. I collaborated with Product to define phased outcomes and map what was required for each release window, culminating in a shared Jira user story map that aligned design intent, engineering scope, and delivery sequencing."
        },
        {
          src: "/images/case-studies/zendesk-embedded-voice/jira.png",
          alt: "Jira user story map",
          caption: null
        }
      ],
      researchTitle: "MVP Impact and Product Future",
      researchDescription: "Following the initial launch, the project was deprioritised, but as of 2025 it has been reprioritised in response to growing demand—primarily to support the introduction of video calling.",
      researchSubheading: null,
      researchExtendedDescription: null,
      researchImpactTitle: "Impact reported from user testing",
      researchMetrics: [
        { value: "87%", label: "OVERALL USER SATISFACTION" },
        { value: "18%", label: "REDUCTION IN FTR" }
      ],
      solutionEndUserTitle: "End-user experience",
      solutionEndUserDescription: "Users can start a voice call directly from Messenger or from a Embedded API on the customer website. This removes the need to switch channels or leave the website. The experience prioritises clarity, availability, and a seamless transition from chat to real-time support.",
      solutionAdminTitle: "Admin Experience",
      solutionAdminDescription: "We introduced a new web-based line type that gives admins the same level of control and routing flexibility as existing PSTN voice lines. "
    }
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
