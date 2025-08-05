import React from 'react'
import { aboutData } from './constant/index.js';

const Hobbies = () => {
  return (
    <div>
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
  )
}

export default Hobbies
