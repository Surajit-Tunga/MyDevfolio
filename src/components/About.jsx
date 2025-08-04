import React from 'react';
import { aboutData } from './constant/index.js';

const About = () => {
  return (
    <div className="text-gray-100 px-3 py-6 sm:px-10 sm:py-10 max-w-4xl mx-auto">
      {/* About Me */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">About Me</h2>
      <p className="mb-8 text-base sm:text-lg text-gray-300 leading-relaxed">
        {aboutData.intro}
      </p>

      {/* Education */}
      <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">Education</h2>
      <div className="space-y-5 mb-10">
        {aboutData.education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-4"
          >
            <div>
              <h3 className="text-base sm:text-lg font-semibold">{edu.institution}</h3>
              <p className="text-sm sm:text-base text-gray-400">{edu.degree}</p>
              <p className="text-sm text-gray-400">Score: {edu.score}</p>
            </div>
            <span className="text-sm text-gray-300 sm:text-base mt-2 sm:mt-0">{edu.year}</span>
          </div>
        ))}
      </div>

      {/* Activities */}
      <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">Things I Build & Explore</h2>
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 mb-10">
        {aboutData.activities.map((activity, index) => (
          <div
            key={index}
            className="bg-gray-800 p-3 sm:p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-base sm:text-lg font-semibold text-white">{activity.title}</h3>
            <p className="text-sm sm:text-base text-gray-400 mt-1">{activity.description}</p>
          </div>
        ))}
      </div>

      {/* Hobbies */}
      <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">Hobbies</h2>
      <div className="bg-gray-800 p-3 sm:p-4 rounded-xl shadow">
        <h3 className="text-base sm:text-lg font-semibold text-white">{aboutData.extra.title}</h3>
        <p className="text-sm sm:text-base text-gray-400 mt-1">{aboutData.extra.description}</p>
        {aboutData.extra.profile && (
          <a
            href={aboutData.extra.profile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-sm sm:text-base mt-2 inline-block hover:text-blue-600 transition-colors duration-200"

          >
            Wanna Play?
          </a>
        )}
      </div>
    </div>
  );
};

export default About;
