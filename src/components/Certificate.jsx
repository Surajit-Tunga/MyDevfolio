import React, { useEffect, useState, useRef } from 'react';
import { certificates } from './constant/index';

const Certificate = ({ onDone }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentTypedText, setCurrentTypedText] = useState('');
  const [displayedCertificates, setDisplayedCertificates] = useState([]);
  const scrollRef = useRef(null);

  const formatCertificate = (cert) => {
    return `${cert.courseName} (${cert.issuer})\n`;
  };

  useEffect(() => {
    if (currentIndex < certificates.length) {
      const currentCert = certificates[currentIndex];
      const fullText = formatCertificate(currentCert);

      if (charIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setCurrentTypedText((prev) => prev + fullText[charIndex]);
          setCharIndex(charIndex + 1);
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
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      if (onDone) onDone();
    }
  }, [charIndex, currentIndex, currentTypedText, onDone]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentTypedText]);

  return (
    <div ref={scrollRef} className="mx-3 my-1">
      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 text-yellow-400 text-left">
        Certificates
      </h2>

      <div className="text-white text-sm sm:text-base leading-relaxed space-y-2">
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

        {/* Current certificate typing */}
        {currentIndex < certificates.length && (
          <div className="whitespace-pre-wrap text-white">{currentTypedText}</div>
        )}
      </div>
    </div>
  );
};

export default Certificate;
