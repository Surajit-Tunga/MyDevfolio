import React, { useEffect, useState } from 'react';
import { activitiesData } from './constant/index.js';

const Activities = ({ onDone }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  // Convert each activity to a formatted string with title and description
  const intro = activitiesData
    .map((item) => `~$ ${item.title}\n  ${item.description}\n`)
    .join('\n');

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
    <div className="mx-3 my-1">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-yellow-400">Activities</h2>
      
      <p className="text-base text-white sm:text-lg leading-relaxed whitespace-pre-wrap">
        {text}
      </p>
    </div>
  );
};

export default Activities;
