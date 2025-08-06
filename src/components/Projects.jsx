import React, { useEffect, useRef, useState } from 'react';
import { projects } from '../constant/index';

const Projects = ({ onDone }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentTypedText, setCurrentTypedText] = useState('');
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const endRef = useRef(null); // For smooth scroll

  const formatProject = (project) => {
    return `${project.name}\n${project.description}\n\nExplore →\n`;
  };

  useEffect(() => {
    if (currentIndex < projects.length) {
      const currentProject = projects[currentIndex];
      const fullText = formatProject(currentProject);

      if (charIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setCurrentTypedText((prev) => prev + fullText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 20);
        return () => clearTimeout(timeout);
      } else {
        setDisplayedProjects((prev) => [
          ...prev,
          {
            ...currentProject,
            typedText: currentTypedText,
          },
        ]);
        setCurrentTypedText('');
        setCharIndex(0);
        setCurrentIndex((prev) => prev + 1);
      }
    } else {
      if (onDone) onDone();
    }
  }, [charIndex, currentIndex, currentTypedText, onDone]);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [currentTypedText]);

  return (
    <div className="mx-3 my-1">
      <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-6 text-yellow-400">My Projects</h2>

      <div className="text-white text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-wrap">
        {displayedProjects.map((project, index) => (
          <div key={index}>
            <p className="text-white">
              <span className="text-green-600">~$ </span>
              {project.typedText.replace('Explore →', '').trim()}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-colors duration-200 inline-block mt-1"
            >
              🔗 Explore
            </a>

            <div className="flex gap-2 mt-2">
              {project.techStack.map((icon, i) => (
                <img
                  key={i}
                  src={icon}
                  alt="tech"
                  className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                />
              ))}
            </div>
          </div>
        ))}

        {currentTypedText && (
          <div className="whitespace-pre-wrap text-white">
            <span className="text-green-600">~$ </span>
            {currentTypedText}
            <span className="animate-pulse">|</span>
          </div>
        )}

        {/* Auto-scroll anchor */}
        <span ref={endRef} className="inline-block w-px h-px align-top pb-10" />
      </div>
    </div>
  );
};

export default Projects;
