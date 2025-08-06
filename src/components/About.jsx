import React, { useEffect, useRef, useState } from 'react';
import { aboutData } from '../constant/index';

const About = ({ onDone, scrollRef }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const intro = aboutData.intro;

  const endRef = useRef(null);

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

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [text]);

  return (
    <div className="mx-3 my-5 ">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-yellow-400">About Me</h2>
      <p className="text-base pb-5 text-white sm:text-lg leading-relaxed whitespace-pre-wrap">
        <span className="text-green-600">~$ </span>
        {text}
        <span ref={endRef} className="inline-block w-px h-px align-top pb-10" />
      </p>
    </div>
  );
};

export default About;
