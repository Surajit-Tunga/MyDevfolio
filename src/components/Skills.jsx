import React, { useEffect, useState } from 'react';
import { techStack } from '../constant/index';

const TechStack = ({ onDone }) => {
  const [displayedCategories, setDisplayedCategories] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typedCategory, setTypedCategory] = useState('');
  const [visibleTechs, setVisibleTechs] = useState([]);
  const [techIndex, setTechIndex] = useState(0);

  const currentCategory = techStack[currentCategoryIndex];

  useEffect(() => {
    if (currentCategoryIndex >= techStack.length) {
      onDone && onDone();
      return;
    }

    if (charIndex < currentCategory.category.length) {
      const timeout = setTimeout(() => {
        setTypedCategory((prev) => prev + currentCategory.category[charIndex]);
        setCharIndex(charIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (techIndex < currentCategory.technologies.length) {
      const timeout = setTimeout(() => {
        setVisibleTechs((prev) => [...prev, currentCategory.technologies[techIndex]]);
        setTechIndex(techIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedCategories((prev) => [
          ...prev,
          { title: currentCategory.category, items: visibleTechs },
        ]);
        setCurrentCategoryIndex(currentCategoryIndex + 1);
        setCharIndex(0);
        setTypedCategory('');
        setVisibleTechs([]);
        setTechIndex(0);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, techIndex, currentCategoryIndex]);

  return (
    <div className="text-white font-mono text-lg space-y-4 p-4">
      {/* Already typed categories */}
      {displayedCategories.map((cat, idx) => (
        <div key={idx}>
          <div className="text-yellow-400 font-semibold mb-1">  <span  className="text-green-600">~$ </span>{cat.title}</div>
          <ul className="ml-4 list-disc">
            {cat.items.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Currently typing category */}
      {currentCategoryIndex < techStack.length && (
        <div>
          <div className="text-yellow-200 font-semibold mb-1"><span className="text-green-600">~$ </span>{typedCategory}</div>
          <ul className="ml-4 list-disc">
            {visibleTechs.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TechStack;
