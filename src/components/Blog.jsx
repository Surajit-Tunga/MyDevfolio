import React, { useEffect, useState, useRef } from 'react';
import { journeyData } from '../constant/index';

const Blog = ({ onDone }) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentTypedTitle, setCurrentTypedTitle] = useState('');
  const [currentTypedText, setCurrentTypedText] = useState('');
  const [displayedEvents, setDisplayedEvents] = useState([]);

  const endRef = useRef(null);

  const formatBody = (event) => {
    return (
      `On ${event.date}, I attended ${event.eventName} organized by ${event.organizedBy}.\n` +
      `Here my role was ${event.role}.\n` +
      `Position: ${event.position}\n` +
      `${event.description}\n\n`
    );
  };

  useEffect(() => {
    if (currentEventIndex < journeyData.length) {
      const currentEvent = journeyData[currentEventIndex];
      const fullTitle = currentEvent.eventName;
      const fullBody = formatBody(currentEvent);

      if (currentTypedTitle.length < fullTitle.length) {
        const timeout = setTimeout(() => {
          setCurrentTypedTitle((prev) => prev + fullTitle[currentTypedTitle.length]);
        }, 50);
        return () => clearTimeout(timeout);
      } else if (charIndex < fullBody.length) {
        const timeout = setTimeout(() => {
          setCurrentTypedText((prev) => prev + fullBody[charIndex]);
          setCharIndex(charIndex + 1);
        }, 15);
        return () => clearTimeout(timeout);
      } else {
        const completedEvent = {
          ...currentEvent,
          typedTitle: currentTypedTitle,
          typedText: currentTypedText,
        };
        setDisplayedEvents((prev) => [...prev, completedEvent]);

        setCurrentTypedTitle('');
        setCurrentTypedText('');
        setCharIndex(0);
        setCurrentEventIndex(currentEventIndex + 1);
      }
    } else {
      if (onDone) onDone();
    }
  }, [charIndex, currentEventIndex, currentTypedTitle, currentTypedText, onDone]);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [currentTypedTitle, currentTypedText]);

  return (
    <div className="mx-3 my-1">
      <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-6 text-yellow-400">My Journey Blog</h2>

      <div className="mt-4 space-y-3">
        {displayedEvents.map((event, index) => (
          <div key={index}>
            <h3 className="text-yellow-200 font-bold text-base sm:text-lg">
              <span className="text-green-600">~$ </span>{event.typedTitle}
            </h3>
            <pre className="whitespace-pre-wrap text-white text-sm leading-relaxed">
              {event.typedText}
            </pre>
          </div>
        ))}

        {currentEventIndex < journeyData.length && (
          <div>
            <h3 className="text-yellow-100 font-bold text-base sm:text-lg">
              <span className="text-green-600">~$ </span>{currentTypedTitle}
            </h3>
            <pre className="whitespace-pre-wrap text-white text-sm leading-relaxed">
              {currentTypedText}
            </pre>
          </div>
        )}

        {/* Auto-scroll target */}
        <div ref={endRef} className="w-px h-px inline-block" />
      </div>
    </div>
  );
};

export default Blog;
