import React, { useState } from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Blog from './Blog';

const RightDiv = () => {
  const [activeTab, setActiveTab] = useState('About');

  const renderSection = () => {
    switch (activeTab) {
      case 'About':
        return <About />;
      case 'Skills':
        return <Skills />;
      case 'Projects':
        return <Projects />;
      case 'Blog':
        return <Blog />;
      default:
        return null;
    }
  };

  return (
    <div className="relative bg-gray-900 text-gray-100 border-2 border-blue-900 rounded-xl p-4 h-full overflow-y-auto shadow-[0_0_10px_#1e3a8a] scroll-hidden">
      {/* Sticky Nav */}
      <div className="sticky top-0 z-10 mb-6">
        <div className="flex justify-center lg:justify-end">
          <div className="flex gap-2 backdrop-blur-md bg-white/10 px-3 py-1 rounded-md shadow-md">
            {['About', 'Skills', 'Projects', 'Blog'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs px-2 py-1 rounded-md font-medium transition-all duration-200
                  ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-blue-300 hover:bg-blue-700 hover:text-white'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div>{renderSection()}</div>
    </div>
  );
};

export default RightDiv;
