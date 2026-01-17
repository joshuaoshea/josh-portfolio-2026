import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CaseStudySidebar = () => {
  const [activeSection, setActiveSection] = useState('summary');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'back', label: 'BACK', isBack: true },
    { id: 'summary', label: 'Summary' },
    { id: 'solution', label: 'Solution' },
    { id: 'discovery', label: 'Discovery' },
    { id: 'ideation', label: 'Ideation' },
    { id: 'research', label: 'Research' },
    { id: 'impact', label: 'Impact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections
        .filter(s => !s.isBack)
        .map(section => ({
          id: section.id,
          element: document.getElementById(section.id)
        }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const activeSectionLabel = sections.find(s => s.id === activeSection)?.label || 'Summary';

  return (
    <>
      {/* Mobile Navigation */}
      <div className="lg:hidden sticky top-[90px] bg-white z-40 border-b border-[rgba(50,64,79,0.15)] -mx-6 md:-mx-12 px-6 md:px-12 mb-6">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-full py-4 flex items-center justify-between text-primary"
        >
          <span className="text-base font-medium font-manrope">{activeSectionLabel}</span>
          <svg
            className={`w-5 h-5 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {mobileMenuOpen && (
          <nav className="pb-4 space-y-2 border-t border-[rgba(50,64,79,0.1)] pt-2">
            <Link
              to="/#work"
              className="block py-2 text-[#65707b] text-sm font-normal font-manrope hover:text-primary transition-colors"
            >
              BACK
            </Link>
            {sections.filter(s => !s.isBack).map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left py-2 text-base font-normal font-manrope transition-colors ${
                  activeSection === section.id ? 'text-primary font-medium' : 'text-primary hover:opacity-70'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-[112px] flex-shrink-0">
        <nav className="sticky top-[120px] flex flex-col gap-2.5">
          {sections.map((section) => (
            section.isBack ? (
              <Link
                key={section.id}
                to="/#work"
                className="text-[#65707b] text-sm font-normal font-manrope leading-[1.25] hover:text-primary transition-colors cursor-pointer"
              >
                {section.label}
              </Link>
            ) : (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-left text-base font-normal font-manrope leading-[1.25] transition-colors cursor-pointer ${
                  activeSection === section.id ? 'text-primary font-medium' : 'text-primary hover:opacity-70'
                }`}
              >
                {section.label}
              </button>
            )
          ))}
        </nav>
      </aside>
    </>
  );
};

export default CaseStudySidebar;
