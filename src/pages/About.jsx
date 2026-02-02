import React, { useState } from 'react';

const About = () => {
  const [imageErrors, setImageErrors] = useState({
    zendesk: false,
    genesys: false,
    sap: false
  });

  const handleImageError = (company) => {
    setImageErrors(prev => ({ ...prev, [company]: true }));
  };

  return (
    <div className="bg-[#fdf7f2] min-h-screen pt-[90px]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[50px]">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-[72px] items-start pt-[75px] pb-0">
          <div className="flex flex-col font-manrope font-normal gap-[7px] items-start leading-[1.25] w-full lg:w-[730px]">
            <p className="text-[18px] text-[rgba(50,64,79,0.75)]">DIA DHUIT</p>
            <p className="text-[#32404f] text-[32px] md:text-[42px] lg:text-[52px] leading-[1.25]">
              I'm a designer who builds, a photographer who explores, and a gamer who never stops chasing the next adventure.
            </p>
          </div>
          <div className="h-[450px] w-full lg:w-[450px] shrink-0 rounded-lg overflow-hidden flex items-end">
            <img 
              src="/images/about/profileimg.png" 
              alt="Josh O'Shea" 
              className="w-full h-auto max-h-full object-contain object-bottom -mt-[11px] -mb-[11px] pl-[62px] mr-0 -ml-[73px]"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.style.backgroundColor = '#d9d9d9';
              }}
            />
          </div>
        </div>

        {/* About me Section */}
        <div className="flex flex-col gap-[20px] mb-[80px]">
          <div className="flex flex-col gap-[8px] w-full">
            <div className="flex items-start pr-[10px] py-[10px]">
              <p className="font-manrope font-medium leading-[1.45] text-[#32404f] text-[28px] md:text-[32px] tracking-[0.64px]">
                About me
              </p>
            </div>
            <div className="flex flex-col gap-[11px] items-start justify-center font-manrope font-normal leading-normal text-[#32404f] text-[18px] md:text-[20px] tracking-[0.4px] max-w-[1097px]">
              <div className="mb-4">
                <p className="mb-4">
                  I'm a product designer with 6+ years of experience working on enterprise solutions. I am particularly interested in exploring how people interact with emerging technology, and how thoughtful design can make complex systems feel effortless. That curiosity started early, growing up in rural Ireland and watching sci-fi shows like Star Trek with my grandfather where futuristic interfaces made the impossible feel intuitive.
                </p>
                <p>
                  Now based in Dublin, I've spent the past three years at Zendesk designing AI-powered, voice-first experiences, with a focus on humanising AI and building trust through interaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Companies Section */}
        <div className="flex flex-col gap-[19px] mb-[80px]">
          <div className="flex flex-col gap-[19px] w-full">
            <div className="flex items-start pr-[10px] py-[10px]">
              <div className="font-manrope font-medium leading-[1.45] text-[#32404f] text-[28px] md:text-[32px] tracking-[0.64px]">
                <p className="mb-0">I solve complex problems for industry </p>
                <p>leading companies.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-[20px] items-center">
              {/* Zendesk Logo */}
              <div className="bg-[#fefaf6] border-[#dedede] border-[0.898px] border-solid flex h-[186.537px] items-center justify-center px-[9.346px] py-[7.476px] rounded-[33.644px] w-full sm:w-[351.393px]">
                <div className="h-[135.405px] w-[222.665px] flex items-center justify-center">
                  {!imageErrors.zendesk ? (
                    <img 
                      src="/images/about/zendesklogo.png" 
                      alt="Zendesk" 
                      className="max-w-full max-h-full object-contain"
                      onError={() => handleImageError('zendesk')}
                    />
                  ) : (
                    <p className="text-[#32404f] text-2xl font-bold font-geist">ZENDESK</p>
                  )}
                </div>
              </div>
              {/* Genesys Logo */}
              <div className="bg-[#fefaf6] border-[#dedede] border-[0.898px] border-solid flex h-[186.537px] items-center justify-center px-[9.346px] py-[7.476px] rounded-[33.644px] w-full sm:w-[351.393px]">
                <div className="h-[111.399px] w-[222.798px] flex items-center justify-center">
                  {!imageErrors.genesys ? (
                    <img 
                      src="/images/about/genesys.png" 
                      alt="Genesys" 
                      className="max-w-full max-h-full object-contain"
                      onError={() => handleImageError('genesys')}
                    />
                  ) : (
                    <p className="text-[#32404f] text-2xl font-bold font-geist">GENESYS</p>
                  )}
                </div>
              </div>
              {/* SAP Logo */}
              <div className="bg-[#fefaf6] border-[#dedede] border-[0.898px] border-solid flex h-[186.537px] items-center justify-center px-[9.346px] py-[7.476px] rounded-[33.644px] w-full sm:w-[351.393px]">
                <div className="h-[110.258px] w-[222.837px] flex items-center justify-center">
                  {!imageErrors.sap ? (
                    <img 
                      src="/images/about/sap.png" 
                      alt="SAP" 
                      className="max-w-full max-h-full object-contain"
                      onError={() => handleImageError('sap')}
                    />
                  ) : (
                    <p className="text-[#32404f] text-2xl font-bold font-geist">SAP</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Design Method Section */}
        <div className="flex flex-col gap-[8px] pb-[100px]">
          <div className="flex flex-col gap-[8px] w-full">
            <div className="flex items-start pr-[10px] py-[10px]">
              <p className="font-manrope font-medium leading-[1.45] text-[#32404f] text-[28px] md:text-[32px] tracking-[0.64px]">
                My Design Method
              </p>
            </div>
            <div className="flex flex-col items-start justify-center max-w-[1097px]">
              <div className="flex flex-col lg:flex-row gap-[32px] items-start">
                {/* Quote */}
                <div className="font-manrope font-normal leading-normal text-[#32404f] text-[18px] md:text-[20px] tracking-[0.4px] w-full lg:w-[395px]">
                  <p className="mb-4">
                    "My design approach is rooted in curiosity—understanding how people navigate tools, ideas, and environments. I rely on data to challenge assumptions and anchor decisions in observable behaviour."
                  </p>
                </div>
                {/* Skills, Tools, Technology Columns */}
                <div className="flex flex-col sm:flex-row gap-[40px] items-start w-full lg:w-auto">
                  {/* Skills Column */}
                  <div className="flex flex-col items-start w-full sm:w-[236px]">
                    <div className="flex flex-col gap-[10px] items-start justify-center leading-[1.25] text-[#32404f] text-[18px] md:text-[20px]">
                      <p className="font-manrope font-normal" style={{ fontWeight: 600 }}>Skills</p>
                      <div className="flex flex-col font-manrope font-normal gap-[10px] items-start">
                        <p>Interaction design</p>
                        <p>User research</p>
                        <p>Workshopping</p>
                        <p>Product strategy</p>
                        <p>Visual design</p>
                        <p>Prototyping</p>
                        <p>Accessibility</p>
                        <p>Front-end development</p>
                      </div>
                    </div>
                  </div>
                  {/* Tools Column */}
                  <div className="flex flex-col items-start w-full sm:w-[236px]">
                    <div className="flex flex-col gap-[10px] items-start justify-center leading-[1.25] text-[#32404f] text-[18px] md:text-[20px]">
                      <p className="font-manrope font-normal" style={{ fontWeight: 600 }}>Tools</p>
                      <div className="flex flex-col font-manrope font-normal gap-[10px] items-start">
                        <p>Figma</p>
                        <p>Adobe After Effects</p>
                        <p>Adobe Premier Pro</p>
                        <p>Cursor</p>
                        <p>Framer</p>
                        <p>Claude</p>
                      </div>
                    </div>
                  </div>
                  {/* Technology Column */}
                  <div className="flex flex-col items-start w-full sm:w-[236px]">
                    <div className="flex flex-col gap-[10px] items-start justify-center leading-[1.25] text-[#32404f] text-[18px] md:text-[20px]">
                      <p className="font-manrope font-normal" style={{ fontWeight: 600 }}>Technology</p>
                      <div className="flex flex-col font-manrope font-normal gap-[10px] items-start">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Javascript</p>
                        <p>Typescript</p>
                        <p>React</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
