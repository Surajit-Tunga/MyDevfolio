import React from 'react'
import { certificates } from './constant/index';

const Certificate = () => {
  return (
    <div>
            <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 text-white text-left">
        Certificates
      </h2>

      <div className="scroll-hidden overflow-x-auto whitespace-nowrap px-1 py-2">
      <div className="flex gap-3 sm:gap-4">
      {certificates.map((cert, idx) => {
      const CardContent = (
        <>
          <img
            src={cert.image}
            alt={cert.courseName}
            className="w-full h-32 sm:h-40 object-cover rounded-t-2xl"
          />
          <div className="p-3 sm:p-4">
            <h4 className="text-blue-600 font-semibold text-sm sm:text-md truncate">
              {cert.courseName}
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 truncate">{cert.issuer}</p>
          </div>
        </>
      );

      return (
        <div
          key={idx}
          className="bg-gray-800 rounded-2xl shadow-md overflow-hidden w-[220px] sm:w-[260px] flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
        >
          {cert.url ? (
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              {CardContent}
            </a>
          ) : (
            CardContent
          )}
        </div>
      );
    })}
  </div>
      </div>
    </div>
  )
}

export default Certificate
