import React from 'react';
import CaseStudy from './CaseStudy';
import { caseStudies } from '../constants/portfolio';

const CaseStudies = () => {

  return (
    <section id="work" className="py-12 px-6 md:px-12 lg:px-[50px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Down Arrow */}
        <div className="flex flex-col items-center mb-8 gap-3">
          <p className="text-primary text-base font-normal font-manrope uppercase">Keep scrolling</p>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
            <path d="M20 10V30M20 30L30 20M20 30L10 20" stroke="#32404f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h2 className="text-primary text-2xl font-normal font-manrope mb-6">Case Studies</h2>
        
        <div className="flex flex-col gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} caseStudyId={study.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
