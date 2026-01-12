import React from 'react';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Topbar />
      <main>
        <Hero />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
