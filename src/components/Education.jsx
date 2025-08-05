import React from 'react'
import { aboutData } from './constant/index.js';

const Education = () => {
  return (
    <div>
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
    </div>
  )
}

export default Education
