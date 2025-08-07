import React, { useEffect, useRef, useState } from 'react';
import { aboutData } from '../constant/index.js';

const Hobbies = ({ onDone }) => {
  const title = aboutData.extra.title;
  const description = aboutData.extra.description;
  const fullText = `${title}: ${description}`;
  const playTextFull = 'Wanna Play?';

  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  const [playText, setPlayText] = useState('');
  const [playIndex, setPlayIndex] = useState(0);

  const endRef = useRef(null);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  useEffect(() => {
    if (index >= fullText.length && playIndex < playTextFull.length) {
      const timeout = setTimeout(() => {
        setPlayText((prev) => prev + playTextFull.charAt(playIndex));
        setPlayIndex((prev) => prev + 1);
      }, 60);
      return () => clearTimeout(timeout);
    } else if (playIndex >= playTextFull.length) {
      onDone?.();
    }
  }, [index, playIndex, playTextFull, onDone]);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [typedText, playText]);

  // Determine dynamic split point
  const colonIndex = typedText.indexOf(':');
  const typedTitle = colonIndex !== -1 ? typedText.slice(0, colonIndex) : typedText;
  const typedDesc = colonIndex !== -1 ? typedText.slice(colonIndex) : '';

  return (
    <div className="mx-3 my-1">
      <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-4 text-yellow-400">Hobbies</h2>

      <p className="text-base text-white sm:text-lg leading-relaxed whitespace-pre-wrap font-mono">
        <span className="text-green-600">~$ </span>
        <span className="text-yellow-200">{typedTitle}</span>
        <span>{typedDesc}</span>
        {index < fullText.length && <span className="animate-pulse">|</span>}
      </p>

      <div className="mt-1">
        <a
          href={aboutData.extra.profile}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 transition-colors duration-200 underline font-mono"
        >
          {playText}
          {index >= fullText.length && playIndex < playTextFull.length && (
            <span className="animate-pulse"> |</span>
          )}
        </a>
      </div>

      <div ref={endRef} className="inline-block w-px h-px align-top pb-10" />
    </div>
  );
};

export default Hobbies;
