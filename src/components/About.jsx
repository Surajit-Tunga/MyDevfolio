import React, { useEffect, useState } from 'react';
import { aboutData } from './constant/index.js';

const About = ({ onDone }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const intro = aboutData.intro;

  useEffect(() => {
    if (index < intro.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + intro[index]);
        setIndex(index + 1);
      }, 20);
      return () => clearTimeout(timeout);
    } else {
      if (onDone) onDone(); // Notify parent when done
    }
  }, [index, intro, onDone]);

  return (
    <div className="mx-3 my-1 ">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-500">About Me</h2>
      <p className="text-base text-white sm:text-lg leading-relaxed whitespace-pre-wrap">{text}</p>
    </div>
  );
};

export default About;
