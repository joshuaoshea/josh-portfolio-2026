import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CaseStudyPage from './pages/CaseStudyPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Outer wrapper for scrolling */}
      <div style={{ paddingBottom: '600px' }}>
        {/* Main content - sits above fixed footer */}
        <div 
          className="relative min-h-screen"
          style={{ 
            backgroundColor: '#FDF7F2',
            zIndex: 10
          }}
        >
          <Topbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/case-study/:id" element={<CaseStudyPage />} />
            </Routes>
          </main>
        </div>
      </div>
      
      {/* Fixed footer behind content - reveals as you scroll */}
      <Footer />
    </Router>
  );
}

export default App;
