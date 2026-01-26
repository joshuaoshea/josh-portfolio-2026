import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import CaseStudySidebar from '../components/CaseStudySidebar';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { caseStudies } from '../constants/portfolio';

const CaseStudyPage = () => {
  const { id } = useParams();
  const goalCard1 = useScrollAnimation({ threshold: 0.2 });
  const goalCard2 = useScrollAnimation({ threshold: 0.2 });

  // Flowchart zoom state
  const [isFlowchartZoomed, setIsFlowchartZoomed] = React.useState(false);

  // Solution image animations
  const solutionImg1 = useScrollAnimation({ threshold: 0.2 });
  const solutionImg2 = useScrollAnimation({ threshold: 0.2 });
  const solutionImg4 = useScrollAnimation({ threshold: 0.2 });
  const solutionImg5 = useScrollAnimation({ threshold: 0.2 });

  // Find the case study data based on the ID
  const caseStudyData = caseStudies.find(cs => cs.id === id);

  // If case study not found, redirect to home
  if (!caseStudyData || !caseStudyData.pageData) {
    return <Navigate to="/" replace />;
  }

  const caseStudy = caseStudyData.pageData;
  const heroImagePath = `/images/case-studies/${id.replace('-digital-channels', '').replace('zendesk-', '')}/hero.png`;
  
  // For Zendesk case studies, use workshop-findings image in Discovery section
  const gapAnalysisPath = id.includes('zendesk')
    ? `/images/case-studies/zendesk/workshop-findings.png`
    : `/images/case-studies/${id.replace('-digital-channels', '').replace('zendesk-', '')}/gap-analysis.png`;
  
  // For Zendesk case studies, use special workshop-findings image in Research section
  const researchInsightsPath = id.includes('zendesk') 
    ? `/images/case-studies/zendesk/workshop-findings.png`
    : `/images/case-studies/${id.replace('-digital-channels', '').replace('zendesk-', '')}/research-insights.png`;
  
  // Extract company name for solution images folder
  const companyFolder = id.includes('genesys') ? 'genesys' : id.includes('zendesk') ? 'zendesk' : '';
  const solutionBasePath = `/images/case-studies/${companyFolder}`;

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
                {caseStudyData.title}
              </h1>
            </div>

            {/* Hero Image */}
            <div className="rounded-lg p-6 md:p-8 lg:p-[31px] mb-8 md:mb-12 lg:mb-[40px]" style={{ backgroundColor: caseStudyData.bgColor }}>
              <img 
                src={heroImagePath}
                alt={`${caseStudyData.company} - Hero Image`}
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
                        {caseStudy.summaryExtended}
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
                  <div className="rounded-lg p-6 md:p-8 lg:p-[34px]" style={{ backgroundColor: caseStudyData.bgColor }}>
                    <img 
                      ref={solutionImg1.ref}
                      src={`${solutionBasePath}/solution-1.png`}
                      alt="Solution overview"
                      className={`rounded-lg w-full h-auto transition-all duration-700 ease-out ${
                        solutionImg1.isVisible 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-110'
                      }`}
                    />
                  </div>
                  
                  <div className="rounded-lg p-6 md:p-8 lg:p-[34px]" style={{ backgroundColor: caseStudyData.bgColor }}>
                    <div 
                      ref={solutionImg2.ref}
                      className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 transition-all duration-700 ease-out ${
                        solutionImg2.isVisible 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-110'
                      }`}
                    >
                      <img 
                        src={`${solutionBasePath}/solution-2.png`}
                        alt="Solution detail 1"
                        className="rounded-lg w-full h-auto"
                      />
                      <img 
                        src={`${solutionBasePath}/solution-3.png`}
                        alt="Solution detail 2"
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
                    <div className="rounded-lg p-6 md:p-8 lg:p-[34px] overflow-hidden" style={{ backgroundColor: caseStudyData.bgColor }}>
                      <img 
                        ref={solutionImg4.ref}
                        src={`${solutionBasePath}/solution-4.png`}
                        alt="Solution detail 3"
                        className={`rounded-lg w-full h-auto transition-all duration-700 ease-out ${
                          solutionImg4.isVisible 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-110'
                        }`}
                      />
                    </div>
                    <div className="rounded-lg p-6 md:p-8 lg:p-[34px] overflow-hidden" style={{ backgroundColor: caseStudyData.bgColor }}>
                      <img 
                        ref={solutionImg5.ref}
                        src={`${solutionBasePath}/solution-5.png`}
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
                <div className="inline-flex items-center gap-2 bg-[#FF5500] rounded-full px-4 py-2.5 mb-4">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="4.25" stroke="#FDF7F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9L12.25 12.25" stroke="#FDF7F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#FDF7F2] text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px]">
                    DISCOVERY
                  </span>
                </div>
                
                <h2 className="text-primary text-2xl md:text-3xl lg:text-[32px] font-medium font-manrope leading-[1.45] tracking-[0.64px] mb-4 md:mb-6">
                  {caseStudy.discoveryTitle}
                </h2>
                
                <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
                  <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px]">
                  {caseStudy.discoveryDescription}
                </p>
                  {caseStudy.discoveryDescriptionExtended && (
                    <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px]">
                      {caseStudy.discoveryDescriptionExtended}
                    </p>
                  )}
                </div>

                <h3 className="text-primary text-xl md:text-2xl font-medium font-manrope leading-[1.45] tracking-[0.48px] mb-4 md:mb-6">
                  Workshop Results
                </h3>

                {/* Workshop Results Image */}
                <div className="bg-[rgba(239,239,239,0.75)] rounded-lg p-6 md:p-8 lg:p-[15px] min-h-[300px] lg:min-h-[472px] flex items-center justify-center mb-6 md:mb-8">
                  <img 
                    src={gapAnalysisPath}
                    alt="Workshop results and analysis"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                {/* Discovery Insights Cards - 2 Column Layout */}
                <div className="flex flex-col lg:flex-row gap-4 md:gap-5">
                  {/* Left Column - First 3 cards */}
                  <div className="flex-1 space-y-4 md:space-y-[17px]">
                    {caseStudy.discoveryInsights.slice(0, 3).map((insight, index) => (
                      <div key={index} className="bg-[#FEFAF6] border border-[#DEDEDE] rounded-lg p-4 md:p-5 lg:p-[19px] transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg cursor-pointer">
                        <p className="text-[#65707b] text-xs md:text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px] mb-2 md:mb-3">
                          {insight.title}
                        </p>
                        <p className="text-primary text-sm md:text-base font-normal font-manrope leading-[1.65] tracking-[0.32px]">
                          {insight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Right Column - Last 3 cards */}
                  <div className="flex-1 space-y-4 md:space-y-[17px]">
                    {caseStudy.discoveryInsights.slice(3, 6).map((insight, index) => (
                      <div key={index + 3} className="bg-[#FEFAF6] border border-[#DEDEDE] rounded-lg p-4 md:p-5 lg:p-[19px] transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg cursor-pointer">
                        <p className="text-[#65707b] text-xs md:text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px] mb-2 md:mb-3">
                          {insight.title}
                        </p>
                        <p className="text-primary text-sm md:text-base font-normal font-manrope leading-[1.65] tracking-[0.32px]">
                          {insight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Ideation Section */}
              <section id="ideation" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#FF5500] rounded-full px-4 py-2.5 mb-4">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 2.5C5.067 2.5 3.5 4.067 3.5 6C3.5 7.2 4.1 8.25 5 8.9V10C5 10.55 5.45 11 6 11H8C8.55 11 9 10.55 9 10V8.9C9.9 8.25 10.5 7.2 10.5 6C10.5 4.067 8.933 2.5 7 2.5Z" stroke="#FDF7F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.5 11.5H8.5" stroke="#FDF7F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#FDF7F2] text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px]">
                    IDEATION
                  </span>
                </div>
                
                <h2 className="text-primary text-2xl md:text-3xl lg:text-[32px] font-medium font-manrope leading-[1.45] tracking-[0.64px] mb-4 md:mb-6">
                  Taking a holistic system thinking approach
                </h2>
                
                <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
                  <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px]">
                    Designing the experience as a system, rather than as a single screen helped surface dependencies, reduce downstream risk, and create a more scalable foundation.
                  </p>
                  <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px]">
                    I began by mapping user flows for agents, supervisors, and QA roles to understand how a unified post-call experience needed to work across permissions, responsibilities, and services. These flows clarify ownership, identify key integration points, and align on which cross-functional teams needed to collaborate.
                  </p>
                </div>

                {/* Flow Diagram */}
                {caseStudy.flowDiagram && (
                  <>
                    <div 
                      className="bg-[rgba(239,239,239,0.75)] rounded-lg py-[15px] flex items-center justify-center mb-6 md:mb-8 min-h-[300px] lg:min-h-[633px] cursor-zoom-in group"
                      onClick={() => setIsFlowchartZoomed(true)}
                    >
                      <div className="relative w-full px-4">
                        <img 
                          src={caseStudy.flowDiagram}
                          alt="User flow diagram showing system architecture"
                          className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Magnify Icon Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center rounded-lg">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#32404f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M21 21L16.65 16.65" stroke="#32404f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M11 8V14M8 11H14" stroke="#32404f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Zoomed Modal */}
                    {isFlowchartZoomed && (
                      <div 
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
                        onClick={() => setIsFlowchartZoomed(false)}
                      >
                        {/* Close Button */}
                        <button
                          onClick={() => setIsFlowchartZoomed(false)}
                          className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
                          aria-label="Close zoom"
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#32404f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>

                        {/* Zoomed Image */}
                        <img
                          src={caseStudy.flowDiagram}
                          alt="User flow diagram showing system architecture - Full size"
                          className="max-w-full max-h-full object-contain"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    )}
                  </>
                )}

                {/* Early Ideation heading and text */}
                <h3 className="text-primary text-xl md:text-2xl font-medium font-manrope leading-[1.45] tracking-[0.48px] mb-4 md:mb-6">
                  Early Ideation
                </h3>

                <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
                  <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px]">
                    Using the flows as a foundation, I explored low-fidelity layouts and interaction patterns, then created an early interactive prototype using Figma Make to quickly test structure, hierarchy, and access models.
                  </p>
                </div>

                {/* Wireframe Images - Static Display or Interactive Prototype */}
                <div className="space-y-2">
                  {caseStudy.ideationImages && caseStudy.ideationImages.map((image, index) => (
                    <React.Fragment key={index}>
                      {/* Wireframe image or prototype */}
                      <div className="bg-[rgba(239,239,239,0.75)] rounded-lg py-[15px] flex flex-col gap-[10px] items-center min-h-[300px] lg:min-h-[501px]">
                        {!image.prototypeUrl && (
                          <p className="text-primary text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px]">
                            {index + 1}. {image.caption || image.alt}
                          </p>
                        )}
                        <div className="flex items-center justify-center px-4 w-full">
                          {image.prototypeUrl ? (
                            // Render interactive Figma prototype
                            <iframe 
                              src={image.prototypeUrl}
                              className="w-full rounded-lg border-0"
                              style={{ height: '750px' }}
                              allowFullScreen
                              title={image.alt}
                            />
                          ) : (
                            // Render static image
                            <img 
                              src={image.src}
                              alt={image.alt}
                              className="max-w-full h-auto object-contain rounded-lg"
                            />
                          )}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </section>

              {/* Research Section - Early Access Program */}
              <section id="research" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#FF5500] rounded-full px-4 py-2.5 mb-4">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.75 10.5V3.5C1.75 2.94772 2.19772 2.5 2.75 2.5H11.25C11.8023 2.5 12.25 2.94772 12.25 3.5V10.5C12.25 11.0523 11.8023 11.5 11.25 11.5H2.75C2.19772 11.5 1.75 11.0523 1.75 10.5Z" stroke="#FDF7F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#FDF7F2] text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px]">
                    DISCOVERY
                  </span>
                </div>
                
                <h2 className="text-primary text-2xl md:text-3xl lg:text-[32px] font-medium font-manrope leading-[1.45] tracking-[0.64px] mb-4 md:mb-6">
                  {caseStudy.researchTitle}
                </h2>
                
                <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
                  <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px]">
                    {caseStudy.researchDescription}
                  </p>
                </div>

                <h3 className="text-primary text-xl md:text-2xl font-medium font-manrope leading-[1.45] tracking-[0.48px] mb-4 md:mb-6">
                  {caseStudy.researchSubheading}
                </h3>

                <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px] mb-6 md:mb-8">
                  {caseStudy.researchExtendedDescription}
                </p>

                <h3 className="text-primary text-xl md:text-2xl font-medium font-manrope leading-[1.45] tracking-[0.48px] mb-6 md:mb-8">
                  {caseStudy.researchImpactTitle}
                </h3>

                {/* Impact Metrics - 2 columns grid, 3rd card aligns with first column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-[15px] md:gap-y-[15px]">
                  {caseStudy.researchMetrics && caseStudy.researchMetrics.map((metric, index) => (
                    <div key={index} className="bg-[#FEFAF6] border border-[#DEDEDE] rounded-lg p-4 md:p-5 lg:p-[19px] flex flex-col justify-center min-h-[146px]">
                      <p className="text-primary text-4xl md:text-5xl lg:text-[64px] font-normal font-manrope leading-[1.65] tracking-[1.28px] mb-2 md:mb-3">
                        {metric.value}
                      </p>
                      <p className="text-[#65707b] text-xs md:text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px]">
                        {metric.label}
                      </p>
                    </div>
                  ))}
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
