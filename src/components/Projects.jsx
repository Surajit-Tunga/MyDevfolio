import React from 'react';
import { projects } from './constant/index';

const Projects = () => {
  return (
    <div className="mx-3 my-1">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">My Projects</h2>

      <div className="grid mt-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6  px-2 sm:px-4 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden
              shadow-[3px_3px_6px_rgba(96,165,250,0.15)]
              hover:shadow-[3px_3px_12px_rgba(96,165,250,0.3)]
              transition-transform duration-300 hover:scale-[1.03]
              p-3 sm:p-4 flex flex-col justify-between"
          >
            {/* Project Title and Description */}
            <div>
              <h3 className="text-base sm:text-lg text-blue-500 font-bold mb-1 sm:mb-2">
                {project.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 leading-snug">
                {project.description}
              </p>
            </div>

            {/* Bottom Row: Explore Button + Tech Stack */}
            <div className="flex justify-between items-end mt-auto pt-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1 rounded-full border border-blue-500 text-blue-400
                  hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                🔗 Explore
              </a>

              <div className="flex gap-2 sm:gap-3">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
