import React from 'react';
import { useParams } from 'react-router-dom';
import CaseStudySidebar from '../components/CaseStudySidebar';
import IdeationCarousel from '../components/IdeationCarousel';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CaseStudyPage = () => {
  const { id } = useParams();
  const goalCard1 = useScrollAnimation({ threshold: 0.2 });
  const goalCard2 = useScrollAnimation({ threshold: 0.2 });

  // Solution image animations
  const solutionImg1 = useScrollAnimation({ threshold: 0.2 });
  const solutionImg2 = useScrollAnimation({ threshold: 0.2 });
  const solutionImg4 = useScrollAnimation({ threshold: 0.2 });
  const solutionImg5 = useScrollAnimation({ threshold: 0.2 });

  // Ideation wireframe images
  const ideationImages = [
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
  ];

  // This is placeholder data - in a real app, you'd fetch this based on the ID
  const caseStudy = {
    category: "PLATFORM UNIFICATION",
    title: "Simplifying Digital Channel Deployment Across Genesys",
    type: "Web App Unification",
    role: "Lead Designer",
    collaborators: "Product Management, UX Research Engineering, Design Systems.",
    timeline: "Q3-Q4 2022",
    summary: "I led the design of a unified digital channel setup experience at Genesys. Consistent feedback from Admins suggested that our setup experience was disjointed making it difficult to manage at scale.",
    outcome: "The outcome was a more intuitive, consistent deployment experience that improved admin efficiency, reduced cognitive load, and enabled customers to scale there digital offerings faster.",
    businessGoal: "Enable scalable digital channel growth by replacing fragmented setup workflows supporting faster channel launches and targeting 5% year-over-year increase in digital channel adoption.",
    userImpact: "Reduced time and effort for admins to configure and deploy digital channels by simplifying setup flows, minimizing errors, and lowering the cognitive load required to launch and manage."
  };

  return (
    <div className="min-h-screen pt-[90px]" style={{ backgroundColor: '#FDF7F2' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[50px] py-6 md:py-12 lg:py-[75px]">
        <div className="flex gap-8 lg:gap-[69px] items-start">
          {/* Sidebar Navigation */}
          <CaseStudySidebar />

          {/* Main Content Column */}
          <div className="flex-1 max-w-[978px] w-full min-w-0">
            {/* Title Section */}
            <div className="flex flex-col gap-2 md:gap-[7px] mb-6 md:mb-8 lg:mb-[33px]">
              <p className="text-[#65707b] text-sm font-normal font-manrope leading-[1.25]">
                {caseStudy.category}
              </p>
              <h1 className="text-primary text-3xl md:text-4xl lg:text-[52px] font-medium font-manrope leading-[40px] lg:leading-[65px]">
                {caseStudy.title}
              </h1>
            </div>

            {/* Hero Image */}
            <div className="bg-[#b1d1f6] rounded-lg p-6 md:p-8 lg:p-[31px] mb-8 md:mb-12 lg:mb-[40px]">
              <img 
                src="/images/case-studies/genesys/hero.png"
                alt="Genesys Digital Channel Deployment - Hero Image"
                className="rounded-lg w-full h-auto"
              />
            </div>

            {/* All Content Sections */}
            <div className="space-y-8 md:space-y-12 lg:space-y-[40px]">
              {/* Summary Section */}
              <section id="summary" className="scroll-mt-24">
                <div className="flex flex-col gap-2">
                  <h2 className="text-primary text-2xl md:text-3xl lg:text-[32px] font-medium font-manrope leading-[1.45] tracking-[0.64px] mb-4 md:mb-6">
                    Summary
                  </h2>
                  
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-[47px]">
                    {/* Left Column - Description */}
                    <div className="flex-1 space-y-4 md:space-y-5">
                      <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px]">
                        {caseStudy.summary}
                      </p>
                      <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px]">
                        I evaluated existing digital channel setup experiences to design a centralized, reusable framework that replaced fragmented, channel-specific workflows, using Web Messenger as the proof of concept.
                      </p>
                      
                      {/* Outcome */}
                      <div className="mt-6 md:mt-8">
                        <h3 className="text-primary text-xl md:text-2xl font-medium font-manrope leading-[1.45] tracking-[0.48px] mb-3 md:mb-4">
                          Outcome
                        </h3>
                        <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px]">
                          {caseStudy.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Right Column - Meta Info */}
                    <div className="lg:w-[360px] space-y-4 md:space-y-6">
                      <div>
                        <p className="text-[#65707b] text-sm md:text-base font-medium font-manrope leading-[1.45] tracking-[0.32px] mb-2">
                          TYPE
                        </p>
                        <p className="text-primary text-lg md:text-xl font-normal font-manrope leading-[1.65] tracking-[0.4px]">
                          {caseStudy.type}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-[#65707b] text-sm md:text-base font-medium font-manrope leading-[1.45] tracking-[0.32px] mb-2">
                          ROLE
                        </p>
                        <p className="text-primary text-lg md:text-xl font-normal font-manrope leading-[1.65] tracking-[0.4px]">
                          {caseStudy.role}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-[#65707b] text-sm md:text-base font-medium font-manrope leading-[1.45] tracking-[0.32px] mb-2">
                          COLLABORATORS
                        </p>
                        <p className="text-primary text-lg md:text-xl font-normal font-manrope leading-[1.65] tracking-[0.4px]">
                          {caseStudy.collaborators}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-[#65707b] text-sm md:text-base font-medium font-manrope leading-[1.45] tracking-[0.32px] mb-2">
                          TIMELINE
                        </p>
                        <p className="text-primary text-lg md:text-xl font-normal font-manrope leading-[1.65] tracking-[0.4px]">
                          {caseStudy.timeline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Goal Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
                  <div 
                    ref={goalCard1.ref}
                    className={`bg-[#FEFAF6] border border-[#F4EAE1] rounded-lg p-4 md:p-5 lg:p-[19px] 
                      transition-all duration-700 ease-out
                      hover:scale-105 hover:shadow-lg cursor-pointer
                      ${goalCard1.isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'}`}
                  >
                    <p className="text-[#65707b] text-xs md:text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px] mb-2 md:mb-3">
                      BUSINESS GOAL
                    </p>
                    <p className="text-primary text-sm md:text-base font-normal font-manrope leading-[1.65] tracking-[0.32px]">
                      {caseStudy.businessGoal}
                    </p>
                  </div>
                  
                  <div 
                    ref={goalCard2.ref}
                    className={`bg-[#FEFAF6] border border-[#F4EAE1] rounded-lg p-4 md:p-5 lg:p-[19px] 
                      transition-all duration-700 ease-out delay-150
                      hover:scale-105 hover:shadow-lg cursor-pointer
                      ${goalCard2.isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'}`}
                  >
                    <p className="text-[#65707b] text-xs md:text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px] mb-2 md:mb-3">
                      USER IMPACT
                    </p>
                    <p className="text-primary text-sm md:text-base font-normal font-manrope leading-[1.65] tracking-[0.32px]">
                      {caseStudy.userImpact}
                    </p>
                  </div>
                </div>
              </section>

              {/* Solution Section */}
              <section id="solution" className="scroll-mt-24">
                <h2 className="text-primary text-2xl md:text-3xl lg:text-[32px] font-medium font-manrope leading-[1.45] tracking-[0.64px] mb-6 md:mb-8">
                  Solution
                </h2>
                
                {/* Solution Images */}
                <div className="space-y-6 md:space-y-8">
                  <div className="bg-[#b1d1f6] rounded-lg p-6 md:p-8 lg:p-[34px]">
                    <img 
                      ref={solutionImg1.ref}
                      src="/images/case-studies/genesys/solution-1.png"
                      alt="Solution overview"
                      className={`rounded-lg w-full h-auto transition-all duration-700 ease-out ${
                        solutionImg1.isVisible 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-110'
                      }`}
                    />
                  </div>
                  
                  <div className="bg-[#b1d1f6] rounded-lg p-6 md:p-8 lg:p-[34px]">
                    <div 
                      ref={solutionImg2.ref}
                      className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 transition-all duration-700 ease-out ${
                        solutionImg2.isVisible 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-110'
                      }`}
                    >
                      <img 
                        src="/images/case-studies/genesys/solution-2.png"
                        alt="Solution detail 1"
                        className="rounded-lg w-full h-auto"
                      />
                      <img 
                        src="/images/case-studies/genesys/solution-3.png"
                        alt="Solution detail 2"
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
                    <div className="bg-[#b1d1f6] rounded-lg p-6 md:p-8 lg:p-[34px] overflow-hidden">
                      <img 
                        ref={solutionImg4.ref}
                        src="/images/case-studies/genesys/solution-4.png"
                        alt="Solution detail 3"
                        className={`rounded-lg w-full h-auto transition-all duration-700 ease-out ${
                          solutionImg4.isVisible 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-110'
                        }`}
                      />
                    </div>
                    <div className="bg-[#b1d1f6] rounded-lg p-6 md:p-8 lg:p-[34px] overflow-hidden">
                      <img 
                        ref={solutionImg5.ref}
                        src="/images/case-studies/genesys/solution-5.png"
                        alt="Solution detail 4"
                        className={`rounded-lg w-full h-auto transition-all duration-700 ease-out ${
                          solutionImg5.isVisible 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-110'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Discovery Section */}
              <section id="discovery" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#f8f8f8] rounded-full px-4 py-2.5 mb-4">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.75 10.5V3.5C1.75 2.94772 2.19772 2.5 2.75 2.5H11.25C11.8023 2.5 12.25 2.94772 12.25 3.5V10.5C12.25 11.0523 11.8023 11.5 11.25 11.5H2.75C2.19772 11.5 1.75 11.0523 1.75 10.5Z" stroke="#32404f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-primary text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px]">
                    DISCOVERY
                  </span>
                </div>
                
                <h2 className="text-primary text-2xl md:text-3xl lg:text-[32px] font-medium font-manrope leading-[1.45] tracking-[0.64px] mb-4 md:mb-6">
                  Understanding the current state and competitive gaps
                </h2>
                
                <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px] mb-6 md:mb-8">
                  I mapped the existing digital channel setup experience and conducted a competitive analysis across seven enterprise CCaaS platforms to identify usability gaps and structural weaknesses. This work highlighted where fragmented workflows and inconsistent patterns put Genesys at a disadvantage, directly informing the design principles going forward.
                </p>

                <h3 className="text-primary text-xl md:text-2xl font-medium font-manrope leading-[1.45] tracking-[0.48px] mb-4 md:mb-6">
                  Analysis Insights
                </h3>

                <div className="flex flex-col lg:flex-row gap-4 md:gap-5">
                  <div className="flex-1 space-y-4 md:space-y-[17px]">
                    <div className="bg-[#FEFAF6] border border-[#F4EAE1] rounded-lg p-4 md:p-5 lg:p-[19px] transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg cursor-pointer">
                      <p className="text-[#65707b] text-xs md:text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px] mb-2 md:mb-3">
                        INSIGHT #1
                      </p>
                      <p className="text-primary text-sm md:text-base font-normal font-manrope leading-[1.65] tracking-[0.32px]">
                        Genesys' fragmented product experience limits visibility of digital channel capabilities, putting it at a disadvantage compared to competitors with more centralized and discoverable offerings.
                      </p>
                    </div>
                    <div className="bg-[#FEFAF6] border border-[#F4EAE1] rounded-lg p-4 md:p-5 lg:p-[19px] transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg cursor-pointer">
                      <p className="text-[#65707b] text-xs md:text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px] mb-2 md:mb-3">
                        INSIGHT #2
                      </p>
                      <p className="text-primary text-sm md:text-base font-normal font-manrope leading-[1.65] tracking-[0.32px]">
                        Compared to competitors, Genesys makes flow customization harder for non-technical users, forcing them to accept unnecessary complexity to achieve the flexibility they need.
                      </p>
                    </div>
                    <div className="bg-[#FEFAF6] border border-[#F4EAE1] rounded-lg p-4 md:p-5 lg:p-[19px] transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg cursor-pointer">
                      <p className="text-[#65707b] text-xs md:text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px] mb-2 md:mb-3">
                        INSIGHT #3
                      </p>
                      <p className="text-primary text-sm md:text-base font-normal font-manrope leading-[1.65] tracking-[0.32px]">
                        Competitors that offer hands-on, learn-by-doing onboarding better communicate product value upfront, while Genesys relies on experiences that delay understanding of what's possible.
                      </p>
                    </div>
                  </div>
                  
                  <div className="lg:w-[491px] bg-[rgba(239,239,239,0.75)] rounded-lg min-h-[300px] lg:min-h-[472px] pl-4 md:pl-6 lg:pl-[15px] pt-4 md:pt-6 lg:pt-[15px] pb-4 md:pb-6 lg:pb-[15px] flex items-center justify-center">
                    <img 
                      src="/images/case-studies/genesys/gap-analysis.png"
                      alt="Gap analysis visual"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
              </section>

              {/* Ideation Section */}
              <section id="ideation" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#f8f8f8] rounded-full px-4 py-2.5 mb-4">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.75 10.5V3.5C1.75 2.94772 2.19772 2.5 2.75 2.5H11.25C11.8023 2.5 12.25 2.94772 12.25 3.5V10.5C12.25 11.0523 11.8023 11.5 11.25 11.5H2.75C2.19772 11.5 1.75 11.0523 1.75 10.5Z" stroke="#32404f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-primary text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px]">
                    IDEATION
                  </span>
                </div>
                
                <h2 className="text-primary text-2xl md:text-3xl lg:text-[32px] font-medium font-manrope leading-[1.45] tracking-[0.64px] mb-4 md:mb-6">
                  Early Ideation: Translating Research into Structure
                </h2>
                
                <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px] mb-6 md:mb-8">
                  I explored early concepts through information architecture and low-fidelity wireframes, grounded in collaborative research with the UX research team and insights from prior competitive and gap analysis. These explorations helped define high-level requirements and user stories, aligning early solutions to validated admin needs and market expectations.
                </p>

                <IdeationCarousel images={ideationImages} />
              </section>

              {/* Research Section */}
              <section id="research" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#f8f8f8] rounded-full px-4 py-2.5 mb-4">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.75 10.5V3.5C1.75 2.94772 2.19772 2.5 2.75 2.5H11.25C11.8023 2.5 12.25 2.94772 12.25 3.5V10.5C12.25 11.0523 11.8023 11.5 11.25 11.5H2.75C2.19772 11.5 1.75 11.0523 1.75 10.5Z" stroke="#32404f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-primary text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px]">
                    RESEARCH
                  </span>
                </div>
                
                <h2 className="text-primary text-2xl md:text-3xl lg:text-[32px] font-medium font-manrope leading-[1.45] tracking-[0.64px] mb-4 md:mb-6">
                  Validating Direction Through Customer Research
                </h2>
                
                <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px] mb-6 md:mb-8">
                  I validated early concepts through interviews with 10 customers, focusing on usage patterns, unmet needs, and the operational impact of proposed solutions. The findings provided confidence in the chosen direction and highlighted opportunities to further simplify setup and deployment.
                </p>

                <div className="bg-[rgba(239,239,239,0.75)] rounded-lg p-6 md:p-8 lg:p-[15px] min-h-[300px] lg:min-h-[472px] flex items-center justify-center mb-6 md:mb-8">
                  <img 
                    src="/images/case-studies/genesys/research-insights.png"
                    alt="Research findings and insights"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                <h3 className="text-primary text-xl md:text-2xl font-medium font-manrope leading-[1.45] tracking-[0.48px] text-center mb-4 md:mb-6">
                  Requirements gathering workshop with stakeholders
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {['FEATURE RATINGS', 'FEATURE RATINGS', 'FEATURE RATINGS'].map((title, index) => (
                    <div key={index} className="bg-[#FEFAF6] border border-[#F4EAE1] rounded-lg p-4 md:p-5 lg:p-[19px] transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg cursor-pointer">
                      <p className="text-[#65707b] text-xs md:text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px] mb-2 md:mb-3">
                        {title}
                      </p>
                      <p className="text-primary text-sm md:text-base font-normal font-manrope leading-[1.65] tracking-[0.32px]">
                        Companies included a varied number of feature ratings in their forms. Target: Includes three ratings and requires size-specific questions.
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Impact Section */}
              <section id="impact" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#f8f8f8] rounded-full px-4 py-2.5 mb-4">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.75 10.5V3.5C1.75 2.94772 2.19772 2.5 2.75 2.5H11.25C11.8023 2.5 12.25 2.94772 12.25 3.5V10.5C12.25 11.0523 11.8023 11.5 11.25 11.5H2.75C2.19772 11.5 1.75 11.0523 1.75 10.5Z" stroke="#32404f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-primary text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px]">
                    IMPACT
                  </span>
                </div>
                
                <h2 className="text-primary text-2xl md:text-3xl lg:text-[32px] font-medium font-manrope leading-[1.45] tracking-[0.64px] mb-4 md:mb-6">
                  Measured Impact and Path Forward
                </h2>
                
                <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px] mb-6 md:mb-8">
                  Insights from a post–early access program with admins confirmed reductions in setup effort and errors. Future work focuses on expanding the framework to additional channels, strengthening setup review, and improving real-time preview for the messenger widget.
                </p>

                <h3 className="text-primary text-xl md:text-2xl font-medium font-manrope leading-[1.45] tracking-[0.48px] mb-6 md:mb-8">
                  Overall impact for MVP
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                  <div className="bg-[#FEFAF6] border border-[#F4EAE1] rounded-lg p-4 md:p-5 lg:p-[19px]">
                    <p className="text-primary text-4xl md:text-5xl lg:text-[64px] font-normal font-manrope leading-[1.65] tracking-[1.28px] mb-3 md:mb-4">
                      42%
                    </p>
                    <p className="text-[#65707b] text-xs md:text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px]">
                      REDUCTION IN SETUP TIME
                    </p>
                  </div>
                  
                  <div className="bg-[#FEFAF6] border border-[#F4EAE1] rounded-lg p-4 md:p-5 lg:p-[19px]">
                    <p className="text-primary text-4xl md:text-5xl lg:text-[64px] font-normal font-manrope leading-[1.65] tracking-[1.28px] mb-3 md:mb-4">
                      +5%
                    </p>
                    <p className="text-[#65707b] text-xs md:text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px]">
                      INCREASED YOY ADOPTION (DIGITAL CHANNELS)
                    </p>
                  </div>
                  
                  <div className="bg-[#FEFAF6] border border-[#F4EAE1] rounded-lg p-4 md:p-5 lg:p-[19px]">
                    <p className="text-primary text-4xl md:text-5xl lg:text-[64px] font-normal font-manrope leading-[1.65] tracking-[1.28px] mb-3 md:mb-4">
                      17%
                    </p>
                    <p className="text-[#65707b] text-xs md:text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px]">
                      REDUCTION IN ADMIN ERROR
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
