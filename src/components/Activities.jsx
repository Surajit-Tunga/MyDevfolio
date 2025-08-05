import React from 'react'
import { aboutData } from './constant/index.js';

const Activities = () => {
  return (
    <div>
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
    </div>
  )
}

export default Activities
