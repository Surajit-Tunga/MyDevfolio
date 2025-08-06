import React, { useEffect, useRef, useState } from 'react';
import { activitiesData } from '../constant/index.js';

const Activities = ({ onDone }) => {
  const [typedLines, setTypedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const endRef = useRef(null);

  const allLines = activitiesData.flatMap((item) => [
    { text: item.title, type: 'title' },
    { text: item.description, type: 'desc' },
    { text: '', type: 'blank' },
  ]);

  useEffect(() => {
    if (lineIndex < allLines.length) {
      const currentText = allLines[lineIndex].text;
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 20);
        return () => clearTimeout(timeout);
      } else {
        setTypedLines((prev) => [...prev, { ...allLines[lineIndex], text: currentLine }]);
        setCurrentLine('');
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }
    } else {
      if (onDone) onDone();
    }
  }, [charIndex, lineIndex, currentLine, allLines, onDone]);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [typedLines]);

  return (
    <div className="mx-3 my-1">
      <h2 className="text-2xl sm:text-3xl font-bold pt-2 mb-4 text-yellow-400">Activities</h2>
      <div className="text-base text-white sm:text-lg leading-relaxed whitespace-pre-wrap">
        {typedLines.map((line, idx) => {
          if (line.type === 'title') {
            return (
              <p key={idx} className="text-yellow-200 font-semibold">
                <span className="text-green-600">~$ </span>{line.text}
              </p>
            );
          } else if (line.type === 'desc') {
            return (
              <p key={idx} className="text-white pl-5">
                {line.text}
              </p>
            );
          } else {
            return <br key={idx} />;
          }
        })}

        {currentLine && (
          <p className={allLines[lineIndex]?.type === 'title' ? 'text-yellow-200 font-semibold' : 'text-white pl-2'}>
            {allLines[lineIndex]?.type === 'title' && <span className="text-green-600">~$ </span>}
            {currentLine}
            <span className="animate-pulse">|</span>
          </p>
        )}

        <span ref={endRef} className="inline-block w-px h-px align-top pb-8" />
      </div>
    </div>
  );
};

export default Activities;
