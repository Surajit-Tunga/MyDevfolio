import React, { useEffect, useRef, useState } from 'react';
import { activitiesData } from '../constant/index.js';

const Activities = ({ onDone }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const endRef = useRef(null); // For scroll tracking

  // Format activity data
  const intro = activitiesData
    .map((item) => `~$ ${item.title}\n  ${item.description}\n`)
    .join('\n');

  // Typing animation
  useEffect(() => {
    if (index < intro.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + intro[index]);
        setIndex((prev) => prev + 1);
      }, 20);
      return () => clearTimeout(timeout);
    } else {
      if (onDone) onDone();
    }
  }, [index, intro, onDone]);

  // Auto-scroll to the bottom as text grows
  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [text]);

  return (
    <div className="mx-3 my-1">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-yellow-400">Activities</h2>
      <p className="text-base text-white sm:text-lg leading-relaxed whitespace-pre-wrap">
        {text}
        <span ref={endRef} className="inline-block w-px h-px align-top pb-10" />
      </p>
    </div>
  );
};

export default Activities;
