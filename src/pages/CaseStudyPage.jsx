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

                {/* Discovery Insights Cards - Horizontal Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {caseStudy.discoveryInsights.map((insight, index) => (
                    <div key={index} className="bg-[#FEFAF6] border border-[#DEDEDE] rounded-lg p-4 md:p-5 lg:p-[19px] min-h-[146px] transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg cursor-pointer">
                      <p className="text-[#65707b] text-xs md:text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px] mb-2 md:mb-3">
                        {insight.title}
                      </p>
                      <p className="text-primary text-sm md:text-base font-normal font-manrope leading-[1.65] tracking-[0.32px]">
                        {insight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Ideation Section */}
              <section id="ideation" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#FF5500] rounded-full px-4 py-2.5 mb-4">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_95_53263)">
                      <path d="M22.8532 1.14801C22.1733 0.469212 21.2519 0.0879517 20.2912 0.0879517C19.3305 0.0879517 18.409 0.469212 17.7292 1.14801L1.46517 17.412C0.999419 17.8751 0.63013 18.426 0.378666 19.0328C0.127202 19.6396 -0.00144539 20.2902 0.000167569 20.947V23C0.000167569 23.2652 0.105524 23.5196 0.293061 23.7071C0.480597 23.8947 0.734951 24 1.00017 24H3.05317C3.70993 24.0019 4.36054 23.8734 4.96732 23.6221C5.57411 23.3708 6.12502 23.0017 6.58817 22.536L22.8532 6.27101C23.5317 5.59121 23.9127 4.66998 23.9127 3.70951C23.9127 2.74905 23.5317 1.82782 22.8532 1.14801V1.14801ZM5.17417 21.122C4.61017 21.6823 3.84813 21.9977 3.05317 22H2.00017V20.947C1.99916 20.5529 2.07632 20.1625 2.2272 19.7985C2.37809 19.4344 2.59968 19.1039 2.87917 18.826L15.2222 6.48301L17.5222 8.78302L5.17417 21.122ZM21.4382 4.85701L18.9322 7.36401L16.6322 5.06901L19.1392 2.56201C19.2902 2.41132 19.4694 2.29185 19.6666 2.21042C19.8638 2.129 20.0751 2.0872 20.2884 2.08744C20.5018 2.08767 20.713 2.12992 20.91 2.21178C21.107 2.29363 21.286 2.41349 21.4367 2.56451C21.5874 2.71553 21.7068 2.89476 21.7883 3.09195C21.8697 3.28914 21.9115 3.50044 21.9112 3.71378C21.911 3.92713 21.8688 4.13833 21.7869 4.33535C21.705 4.53236 21.5852 4.71132 21.4342 4.86201L21.4382 4.85701Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_95_53263">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[#FDF7F2] text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px]">
                    IDEATION
                  </span>
                </div>
                
                <h2 className="text-primary text-2xl md:text-3xl lg:text-[32px] font-medium font-manrope leading-[1.45] tracking-[0.64px] mb-4 md:mb-6">
                  {caseStudy.ideationTitle}
                </h2>
                
                <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
                  <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px]">
                    {caseStudy.ideationDescription}
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

                {/* Early Ideation heading and text (appears after flow diagram if present) */}
                {caseStudy.ideationSubheading && (
                  <>
                    <h3 className="text-primary text-xl md:text-2xl font-medium font-manrope leading-[1.45] tracking-[0.48px] mb-4 md:mb-6">
                      {caseStudy.ideationSubheading}
                    </h3>

                    {caseStudy.ideationExtendedDescription && (
                      <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
                        <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px]">
                          {caseStudy.ideationExtendedDescription}
                        </p>
                      </div>
                    )}
                  </>
                )}

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

              {/* Research Section */}
              {caseStudy.researchTitle && (
                <section id="research" className="scroll-mt-24">
                  <div className="inline-flex items-center gap-2 bg-[#FF5500] rounded-full px-4 py-2.5 mb-4">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_97_11295)">
                        <path d="M20 0C18.9391 0 17.9217 0.421427 17.1716 1.17157C16.4214 1.92172 16 2.93913 16 4C16 4.26522 16.1054 4.51957 16.2929 4.70711C16.4804 4.89464 16.7348 5 17 5C17.2652 5 17.5196 4.89464 17.7071 4.70711C17.8946 4.51957 18 4.26522 18 4C18 3.46957 18.2107 2.96086 18.5858 2.58579C18.9609 2.21071 19.4696 2 20 2C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V15.026C21.1396 14.3642 20.0855 14.0037 19 14C18.1812 14.0004 17.375 14.2018 16.6523 14.5866C15.9295 14.9714 15.3124 15.5279 14.855 16.207C14.484 15.8251 14.0402 15.5215 13.5498 15.3141C13.0594 15.1068 12.5324 15 12 15C11.4676 15 10.9406 15.1068 10.4502 15.3141C9.95977 15.5215 9.51595 15.8251 9.145 16.207C8.68762 15.5279 8.07045 14.9714 7.34771 14.5866C6.62498 14.2018 5.8188 14.0004 5 14C3.91453 14.0037 2.86039 14.3642 2 15.026V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2C4.53043 2 5.03914 2.21071 5.41421 2.58579C5.78929 2.96086 6 3.46957 6 4C6 4.26522 6.10536 4.51957 6.29289 4.70711C6.48043 4.89464 6.73478 5 7 5C7.26522 5 7.51957 4.89464 7.70711 4.70711C7.89464 4.51957 8 4.26522 8 4C8 2.93913 7.57857 1.92172 6.82843 1.17157C6.07828 0.421427 5.06087 0 4 0C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4L0 19C0 20.3261 0.526784 21.5979 1.46447 22.5355C2.40215 23.4732 3.67392 24 5 24C6.32608 24 7.59785 23.4732 8.53553 22.5355C9.47322 21.5979 10 20.3261 10 19C10 18.4696 10.2107 17.9609 10.5858 17.5858C10.9609 17.2107 11.4696 17 12 17C12.5304 17 13.0391 17.2107 13.4142 17.5858C13.7893 17.9609 14 18.4696 14 19C14 20.3261 14.5268 21.5979 15.4645 22.5355C16.4021 23.4732 17.6739 24 19 24C20.3261 24 21.5979 23.4732 22.5355 22.5355C23.4732 21.5979 24 20.3261 24 19V4C24 2.93913 23.5786 1.92172 22.8284 1.17157C22.0783 0.421427 21.0609 0 20 0V0ZM5 22C4.40666 22 3.82664 21.8241 3.33329 21.4944C2.83994 21.1648 2.45542 20.6962 2.22836 20.1481C2.0013 19.5999 1.94189 18.9967 2.05764 18.4147C2.1734 17.8328 2.45912 17.2982 2.87868 16.8787C3.29824 16.4591 3.83279 16.1734 4.41473 16.0576C4.99667 15.9419 5.59987 16.0013 6.14805 16.2284C6.69623 16.4554 7.16476 16.8399 7.49441 17.3333C7.82405 17.8266 8 18.4067 8 19C8 19.7956 7.68393 20.5587 7.12132 21.1213C6.55871 21.6839 5.79565 22 5 22ZM19 22C18.4067 22 17.8266 21.8241 17.3333 21.4944C16.8399 21.1648 16.4554 20.6962 16.2284 20.1481C16.0013 19.5999 15.9419 18.9967 16.0576 18.4147C16.1734 17.8328 16.4591 17.2982 16.8787 16.8787C17.2982 16.4591 17.8328 16.1734 18.4147 16.0576C18.9967 15.9419 19.5999 16.0013 20.1481 16.2284C20.6962 16.4554 21.1648 16.8399 21.4944 17.3333C21.8241 17.8266 22 18.4067 22 19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_97_11295">
                          <rect width="24" height="24" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-[#FDF7F2] text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px]">
                      RESEARCH
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

                  {/* Conditional rendering based on case study type */}
                  {/* For Zendesk: Show subheading, extended description, and metrics */}
                  {caseStudy.researchSubheading && (
                    <>
                      <h3 className="text-primary text-xl md:text-2xl font-medium font-manrope leading-[1.45] tracking-[0.48px] mb-4 md:mb-6">
                        {caseStudy.researchSubheading}
                      </h3>

                      <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px] mb-6 md:mb-8">
                        {caseStudy.researchExtendedDescription}
                      </p>

                      <h3 className="text-primary text-xl md:text-2xl font-medium font-manrope leading-[1.45] tracking-[0.48px] mb-6 md:mb-8">
                        {caseStudy.researchImpactTitle}
                      </h3>

                      {/* Impact Metrics - 3 columns grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-[15px] md:gap-y-[15px]">
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
                    </>
                  )}

                  {/* For Genesys: Show research insights image and cards */}
                  {caseStudy.researchInsights && (
                    <>
                      {/* Research Insights Image */}
                      {researchInsightsPath && (
                        <div className="bg-[rgba(239,239,239,0.75)] rounded-lg p-6 md:p-8 lg:p-[15px] min-h-[300px] lg:min-h-[472px] flex items-center justify-center mb-6 md:mb-8">
                          <img 
                            src={researchInsightsPath}
                            alt="Research insights and findings"
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                      )}

                      {/* Research Insights Cards - Horizontal Layout */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                        {caseStudy.researchInsights.map((insight, index) => (
                          <div key={index} className="bg-[#FEFAF6] border border-[#DEDEDE] rounded-lg p-4 md:p-5 lg:p-[19px] min-h-[146px] transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg cursor-pointer">
                            <p className="text-[#65707b] text-xs md:text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px] mb-2 md:mb-3">
                              {insight.title}
                            </p>
                            <p className="text-primary text-sm md:text-base font-normal font-manrope leading-[1.65] tracking-[0.32px]">
                              {insight.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </section>
              )}

              {/* Impact Section */}
              {caseStudy.impactTitle && (
                <section id="impact" className="scroll-mt-24">
                  <div className="inline-flex items-center gap-2 bg-[#FF5500] rounded-full px-4 py-2.5 mb-4">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 2.5L8.5 5.5L11.5 6L9.25 8.25L9.75 11.25L7 9.75L4.25 11.25L4.75 8.25L2.5 6L5.5 5.5L7 2.5Z" stroke="#FDF7F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[#FDF7F2] text-sm font-medium font-manrope leading-[1.45] tracking-[0.28px]">
                      IMPACT
                    </span>
                  </div>
                  
                  <h2 className="text-primary text-2xl md:text-3xl lg:text-[32px] font-medium font-manrope leading-[1.45] tracking-[0.64px] mb-4 md:mb-6">
                    {caseStudy.impactTitle}
                  </h2>
                  
                  <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
                    <p className="text-primary text-base md:text-lg lg:text-xl font-normal font-manrope leading-normal tracking-[0.4px]">
                      {caseStudy.impactDescription}
                    </p>
                  </div>

                  {/* Impact Metrics - 3 columns on large screens */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-[15px] md:gap-y-[15px]">
                    {caseStudy.impactMetrics && caseStudy.impactMetrics.map((metric, index) => (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
