import React, { useState } from 'react';
import { roadmapSteps, getColorClasses } from '../../data/content';

const CurvedServicesRoadmap = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section id='services-roadmap' className="max-w-6xl mx-auto px-6 py-24 overflow-hidden">
      <div className="text-center mb-20">
        <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
          Our Process
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-4">
          Services Roadmap
        </h2>
        <p className="text-stone-600 max-w-2xl mx-auto">
          A seamless journey from finding the right clients to delivering exceptional support.
        </p>
      </div>

      <div className="relative">
        {/* Desktop Curved Path (Hidden on Mobile) */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-full -z-10 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
             {/* This path creates a large "S" wave through the center */}
            <path 
              d="M500,0 C500,200 850,200 850,400 C850,600 150,600 150,800 C150,1000 500,1000 500,1200" 
              stroke="#e2e8f0" 
              strokeWidth="4" 
              strokeDasharray="12 12"
            />
          </svg>
        </div>

        {/* Mobile Vertical Line */}
        <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-stone-200 -z-10"></div>

        <div className="space-y-24 md:space-y-0">
          {roadmapSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={step.id}
                className={`relative flex flex-col md:flex-row items-center justify-between gap-8 md:mb-[-40px] ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 z-20`}>
                  <div
                    className={`bg-white rounded-3xl p-8 shadow-xl border-t-4 transition-all duration-500
                        ${activeStep === step.id ? 'scale-105 ring-1 ring-stone-200' : 'hover:scale-102'}
                        ${getColorClasses(step.color, 'border')}`}
                  >
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4
                        ${getColorClasses(step.color, 'bgLight')} ${getColorClasses(step.color, 'text')}`}>
                      Phase {step.id}
                    </div>

                    <h3 className="text-2xl font-bold text-stone-800 mb-3">{step.title}</h3>
                    <p className="text-stone-600 mb-4 leading-relaxed">{step.description}</p>

                    <div className={`overflow-hidden transition-all duration-500 ${activeStep === step.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <ul className="space-y-3 pt-4 border-t border-stone-100">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-stone-600">
                            <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${getColorClasses(step.color, 'bg')}`} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                      className={`mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${getColorClasses(step.color, 'text')}`}
                    >
                      {activeStep === step.id ? 'Close Details' : 'View Details'}
                      <span className={`transition-transform duration-300 ${activeStep === step.id ? 'rotate-180' : ''}`}>↓</span>
                    </button>
                  </div>
                </div>

                {/* Floating Node (The Anchor Point) */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-30">
                  <div className={`relative group`}>
                    {/* Pulsing Aura */}
                    <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${getColorClasses(step.color, 'bg')}`}></div>
                    
                    <button
                      onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                      className={`relative w-14 h-14 md:w-20 md:h-20 rounded-full bg-white shadow-2xl flex items-center justify-center 
                          transition-all duration-500 group-hover:scale-110 border-4 border-white
                          ${activeStep === step.id ? getColorClasses(step.color, 'bg') : 'bg-white'}`}
                    >
                      <step.icon className={`w-6 h-6 md:w-8 md:h-8 transition-colors duration-300 ${activeStep === step.id ? 'text-white' : getColorClasses(step.color, 'text')}`} />
                    </button>
                    
                    {/* Index Label */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-stone-800 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                      0{index + 1}
                    </div>
                  </div>
                </div>

                {/* Desktop Spacer */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CurvedServicesRoadmap;