import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaPython, FaGitAlt, FaGithub, FaDocker, FaJava, FaRegCircle,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiDjango, SiVite,
  SiNumpy, SiPandas, SiScikitlearn, SiMysql,
  SiExpress
} from 'react-icons/si';

const techStack = {
  'Programming Languages': [
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <FaJs />, name: 'JavaScript' },
  ],
  'Frontend': [
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3Alt />, name: 'CSS' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <SiVite />, name: 'Vite' },
  ],
  'Backend': [
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiDjango />, name: 'Django' },
    { icon: <SiExpress />, name: 'Express.js' },
  ],
  'Database': [
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiMysql />, name: 'MySQL' },
  ],
  'Gen AI': [
    { name: 'LangChain' },
    { name: 'LangGraph' },
    { name: 'OpenAI' },
    { name: 'Gemini' },
    { name: 'Pinecone' },
    { name: 'ChromaDB' },
    { name: 'RAG' },
  ],
  'Data Science & ML': [
    { icon: <SiNumpy />, name: 'NumPy' },
    { icon: <SiPandas />, name: 'Pandas' },
    { name: 'Matplotlib' },
    { icon: <SiScikitlearn />, name: 'Scikit-Learn' },
  ],
  'DevOps & Tools': [
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <FaDocker />, name: 'Docker' },
  ]
};

const TechStack = () => {
  return (
    <section className="mx-3 my-1">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-left">
        Technologies Explored by Me
      </h2>

      <div className="grid gap-8 lg:grid-cols-2">
        {Object.entries(techStack).map(([category, tools]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-blue-600 mb-3">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-800 text-sm px-3 py-1.5 rounded-lg shadow hover:scale-105 transition-transform"
                >
                  <span className="text-blue-300 text-base">
                    {tool.icon ? tool.icon : <FaRegCircle />}
                  </span>
                  <span className="text-gray-200">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
