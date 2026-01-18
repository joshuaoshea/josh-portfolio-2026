import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CaseStudyPage from './pages/CaseStudyPage';

export const HoverContext = createContext();

function AppContent() {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [pageHoverColor, setPageHoverColor] = useState('#FDF7F2');
  const location = useLocation();

  // Check if we're on a case study page
  const isCaseStudyPage = location.pathname.includes('/case-study/');

  return (
    <HoverContext.Provider value={{ isCardHovered, setIsCardHovered, pageHoverColor, setPageHoverColor }}>
      <ScrollToTop />
      {/* Outer wrapper for scrolling */}
      <div style={{ paddingBottom: '600px' }}>
        {/* Main content - sits above fixed footer */}
        <div 
          className="relative min-h-screen"
          style={{ 
            backgroundColor: (isCardHovered && !isCaseStudyPage) ? pageHoverColor : '#FDF7F2',
            zIndex: 10,
            transition: 'background-color 0.4s ease-out'
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
    </HoverContext.Provider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
