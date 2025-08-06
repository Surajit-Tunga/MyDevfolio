import React, { useEffect, useRef, useState } from 'react';
import { aboutData } from '../constant/index.js';

const Education = ({ onDone }) => {
  const [animatedData, setAnimatedData] = useState(
    aboutData.education.map(() => ({
      institution: '',
      degree: '',
      score: '',
      year: ''
    }))
  );
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const endRef = useRef(null); // For auto-scroll

  const fields = ['institution', 'degree', 'score', 'year'];

  useEffect(() => {
    const totalFields = aboutData.education.length * fields.length;

    if (currentFieldIndex >= totalFields) {
      if (onDone) onDone();
      return;
    }

    const entryIndex = Math.floor(currentFieldIndex / fields.length);
    const fieldName = fields[currentFieldIndex % fields.length];
    const fullText = aboutData.education[entryIndex][fieldName];

    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setAnimatedData((prev) => {
          const updated = [...prev];
          updated[entryIndex] = {
            ...updated[entryIndex],
            [fieldName]: updated[entryIndex][fieldName] + fullText[charIndex]
          };
          return updated;
        });
        setCharIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timeout);
    } else {
      setCharIndex(0);
      setCurrentFieldIndex((prev) => prev + 1);
    }
  }, [charIndex, currentFieldIndex, onDone]);

  // Scroll into view when content updates
  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [animatedData]);

  return (
    <div className="mx-3 my-1">
      <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mt-3 mb-4">
        Education
      </h2>

      <div className="space-y-3 ">
        {animatedData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-4"
          >
            <div>
           <h3 className="text-base sm:text-lg font-semibold text-yellow-400 flex items-center gap-2">
             {edu.institution && <span className="text-green-600">~$</span>} {edu.institution}
           </h3>
              <p className="text-sm sm:text-base text-yellow-200">{edu.degree}</p>
              <p className="text-sm text-white">{edu.score}</p>
            </div>
            <span className="text-sm text-white sm:text-base mt-2 sm:mt-0">
              {edu.year}
            </span>
          </div>
        ))}
        {/* Auto-scroll anchor */}
        <span ref={endRef} className="inline-block w-px h-px align-top pb-9" />
      </div>
    </div>
  );
};

export default Education;
