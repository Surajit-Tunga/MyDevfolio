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
      `${event.description}\n`
    );
  };

  useEffect(() => {
    if (currentEventIndex < journeyData.length) {
      const currentEvent = journeyData[currentEventIndex];
      const fullTitle = currentEvent.eventName;
      const fullBody = formatBody(currentEvent);

      if (currentTypedTitle.length < fullTitle.length) {
        const timeout = setTimeout(() => {
          setCurrentTypedTitle((prev) => prev + fullTitle[prev.length]);
        }, 50);
        return () => clearTimeout(timeout);
      } else if (charIndex < fullBody.length) {
        const timeout = setTimeout(() => {
          setCurrentTypedText((prev) => prev + fullBody[charIndex]);
          setCharIndex((prev) => prev + 1);
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
        setCurrentEventIndex((prev) => prev + 1);
      }
    } else {
      if (onDone) onDone();
    }
  }, [charIndex, currentEventIndex, currentTypedTitle, currentTypedText, onDone]);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [currentTypedTitle, currentTypedText, displayedEvents]);

  return (
    <div className="mx-3 my-1">
      <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-6 text-yellow-400">My Journey Blog</h2>

      <div className="mt-4 space-y-5">
        {displayedEvents.map((event, index) => (
          <div key={index}>
            <h3 className="text-yellow-200 font-bold text-base sm:text-lg">
              <span className="text-green-600">~$ </span>{event.typedTitle}
            </h3>
            <pre className="whitespace-pre-wrap text-white text-sm leading-relaxed">
              {event.typedText}
            </pre>
            {event.link && (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline text-sm"
              >
                View More
              </a>
            )}
          </div>
        ))}

        {currentEventIndex < journeyData.length && (
          <div>
            <h3 className="text-yellow-200 font-bold text-base sm:text-lg">
              <span className="text-green-600">~$ </span>
              {currentTypedTitle}
              {currentTypedTitle.length < journeyData[currentEventIndex].eventName.length && (
                <span className="animate-pulse">|</span>
              )}
            </h3>
            <pre className="whitespace-pre-wrap text-white text-sm leading-relaxed">
              {currentTypedText}
              {currentTypedTitle.length === journeyData[currentEventIndex].eventName.length &&
                charIndex < formatBody(journeyData[currentEventIndex]).length && (
                  <span className="animate-pulse">|</span>
              )}
            </pre>
          </div>
        )}

        <div ref={endRef} className="w-px h-px inline-block" />
      </div>
    </div>
  );
};

export default Blog;
