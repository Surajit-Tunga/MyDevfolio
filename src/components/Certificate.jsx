import React, { useEffect, useRef, useState } from 'react';
import { certificates } from '../constant/index';

const Certificate = ({ onDone }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentTypedText, setCurrentTypedText] = useState('');
  const [displayedCertificates, setDisplayedCertificates] = useState([]);
  const endRef = useRef(null); // Auto-scroll target

  const formatCertificate = (cert) => {
    return `${cert.courseName} (${cert.issuer})\n`;
  };

  // Typing effect
  useEffect(() => {
    if (currentIndex < certificates.length) {
      const currentCert = certificates[currentIndex];
      const fullText = formatCertificate(currentCert);

      if (charIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setCurrentTypedText((prev) => prev + fullText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 20);
        return () => clearTimeout(timeout);
      } else {
        setDisplayedCertificates((prev) => [
          ...prev,
          {
            ...currentCert,
            typedText: currentTypedText,
          },
        ]);
        setCurrentTypedText('');
        setCharIndex(0);
        setCurrentIndex((prev) => prev + 1);
      }
    } else {
      if (onDone) onDone();
    }
  }, [charIndex, currentIndex, currentTypedText, onDone]);

  // Scroll on new character typed
  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [currentTypedText]);

  return (
    <div className="mx-3 my-1">
      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 text-yellow-400 text-left">
        Certificates
      </h2>

      <div className="text-white text-sm sm:text-base leading-relaxed space-y-2">
        {/* Render completed certificates */}
        {displayedCertificates.map((cert, idx) => (
          <div key={idx}>
            {cert.url ? (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white"
              >
                {cert.typedText}
              </a>
            ) : (
              <p>{cert.typedText}</p>
            )}
          </div>
        ))}

        {/* Currently typing */}
        {currentIndex < certificates.length && (
          <div className="whitespace-pre-wrap text-white">{currentTypedText}</div>
        )}

        {/* Scroll anchor */}
        <span ref={endRef} className="inline-block w-px h-px align-top pb-10" />
      </div>
    </div>
  );
};

export default Certificate;
