import React, { useEffect, useRef, useState } from 'react';
import { aboutData } from '../constant/index.js';

const Hobbies = ({ onDone }) => {
  const fullText = `${aboutData.extra.title}: ${aboutData.extra.description}`;
  const playTextFull = 'Wanna Play?';

  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  const [playText, setPlayText] = useState('');
  const [playIndex, setPlayIndex] = useState(0);

  const endRef = useRef(null);

  // Typing main hobby line
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  // Typing "Wanna Play?" only after main text is done
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

  return (
    <div className="mx-3 my-1">
      <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-4 text-yellow-400">Hobbies</h2>

      <p className="text-base text-white sm:text-lg leading-relaxed whitespace-pre-wrap font-mono">
        <span className="text-green-600">~$ </span>
        <span>{typedText}</span>
        {index < fullText.length && <span className="animate-pulse">|</span>}
      </p>

      {/* Wanna Play animation */}
      <div className="mt-1">
        <a
          href={aboutData.extra.profile}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 transition-colors duration-200 underline font-mono"
        >
          {playText}
          {index >= fullText.length && playIndex < playTextFull.length && (
            <span className="animate-pulse">|</span>
          )}
        </a>
      </div>

      <div ref={endRef} className="inline-block w-px h-px align-top pb-10"  />
    </div>
  );
};

export default Hobbies;
