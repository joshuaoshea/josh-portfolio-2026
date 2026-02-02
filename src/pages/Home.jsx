import React from 'react';
import Hero from '../components/Hero';
import CaseStudies from '../components/CaseStudies';
import CustomCursor from '../components/CustomCursor';

const Home = () => {
  return (
    <>
      <CustomCursor />
      <Hero />
      <CaseStudies />
      {/* Spacer to ensure footer reveal works */}
      <div style={{ height: '200px' }}></div>
    </>
  );
};

export default Home;
