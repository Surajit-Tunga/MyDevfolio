import React, { useEffect, useRef, useState } from 'react';
import { aboutData } from '../constant/index.js';

const Education = ({ onDone }) => {
  const fields = ['institution', 'degree', 'score', 'year'];

  const [animatedData, setAnimatedData] = useState(
    aboutData.education.map(() => ({
      institution: '',
      degree: '',
      score: '',
      year: '',
    }))
  );

  const [currentStep, setCurrentStep] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const endRef = useRef(null);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const totalSteps = aboutData.education.length * fields.length;

    if (currentStep >= totalSteps) {
      if (onDone) onDone();
      return;
    }

    const eduIndex = Math.floor(currentStep / fields.length);
    const fieldKey = fields[currentStep % fields.length];
    const fullText = aboutData.education[eduIndex][fieldKey];

    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setAnimatedData(prev => {
          const updated = [...prev];
          updated[eduIndex] = {
            ...updated[eduIndex],
            [fieldKey]: updated[eduIndex][fieldKey] + fullText[charIndex],
          };
          return updated;
        });
        setCharIndex(prev => prev + 1);
      }, 25);
      return () => clearTimeout(timeout);
    } else {
      setCharIndex(0);
      setCurrentStep(prev => prev + 1);
    }
  }, [charIndex, currentStep, onDone]);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [animatedData]);

  const isCurrentField = (eduIndex, fieldKey) => {
    const stepEdu = Math.floor(currentStep / fields.length);
    const stepField = fields[currentStep % fields.length];
    return eduIndex === stepEdu && fieldKey === stepField;
  };

  return (
    <div className="mx-3 my-1">
      <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mt-3 mb-4">
        Education
      </h2>

      <div className="space-y-3 font-mono">
        {animatedData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-6"
          >
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-yellow-400 flex items-center gap-2">
                {edu.institution && <span className="text-green-600">~$</span>}
                {edu.institution}
                {isCurrentField(index, 'institution') && cursorVisible && <span className="text-yellow-400">|</span>}
              </h3>
              <p className="text-sm sm:text-base text-yellow-200">
                {edu.degree}
                {isCurrentField(index, 'degree') && cursorVisible && <span className="text-yellow-200">|</span>}
              </p>
              <p className="text-sm text-white">
                {edu.score}
                {isCurrentField(index, 'score') && cursorVisible && <span className="text-white">|</span>}
              </p>
            </div>
            <span className="text-sm text-white sm:text-base mt-1 sm:mt-0">
              {edu.year}
              {isCurrentField(index, 'year') && cursorVisible && <span className="text-white">|</span>}
            </span>
          </div>
        ))}
        <span ref={endRef} className="inline-block w-px h-px align-top pb-10" />
      </div>
    </div>
  );
};

export default Education;
