import React from 'react';
import { aboutData } from './constant/index.js';

const About = () => {
  return (
    <div className="mx-3 my-1" >
      {/* About Me */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">About Me</h2>
      <p className="mb-8 text-base sm:text-lg text-gray-300 leading-relaxed">
        {aboutData.intro}
      </p>
    </div>
  );
};

export default About;
