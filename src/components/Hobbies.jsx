import React, { useEffect, useRef, useState } from 'react';
import { aboutData } from '../constant/index.js';

const Hobbies = ({ onDone }) => {
  const fullText = `${aboutData.extra.title}: ${aboutData.extra.description}`;
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const endRef = useRef(null); // For smooth scroll

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 30); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      onDone?.(); // Optional callback
    }
  }, [index, fullText, onDone]);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [typedText]);

  return (
    <div className="mx-3 my-1">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-yellow-400">Hobbies</h2>

      <p className="text-base text-white sm:text-lg leading-relaxed whitespace-pre-wrap font-mono">
        <span className="text-green-600">~$ </span>
        <span>{typedText}</span>
        {index < fullText.length && <span className="animate-pulse">|</span>}
        <span ref={endRef} className="inline-block w-px h-px align-top pb-10" />
      </p>

      {index >= fullText.length && aboutData.extra.profile && (
        <div className="mt-2">
          <a
            href={aboutData.extra.profile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-colors duration-200 underline"
          >
            Wanna Play?
          </a>
        </div>
      )}
    </div>
  );
};

export default Hobbies;
