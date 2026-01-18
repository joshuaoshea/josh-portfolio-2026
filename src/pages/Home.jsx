import React from 'react';
import Hero from '../components/Hero';
import CaseStudies from '../components/CaseStudies';

const Home = () => {
  return (
    <>
      <Hero />
      <CaseStudies />
      {/* Spacer to ensure footer reveal works */}
      <div style={{ height: '200px' }}></div>
    </>
  );
};

export default Home;
