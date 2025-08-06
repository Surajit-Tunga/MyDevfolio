import React, { useState, useEffect } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import pp from '../assets/pp.jpg';

const LeftDiv = () => {
  const texts = ['Full Stack Developer', 'Exploring GenAI & ML'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < texts[currentTextIndex].length) {
        setDisplayedText((prev) => prev + texts[currentTextIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setDisplayedText('');
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 1500); // Delay before switching
      }
    }, 100); // Typing speed

    return () => clearTimeout(timeout);
  }, [charIndex, currentTextIndex]);

  return (
    <div className="bg-black font-mono text-green-400 border-2 border-green-600 rounded-2xl p-4 h-full shadow-[0_0_10px_#22c55e] overflow-hidden transition-all duration-300">
      {/* === LARGE SCREENS === */}
      <div className="hidden lg:flex flex-col items-center space-y-3 justify-center h-full">
        <img
          src={pp}
          alt="Surajit Tunga"
          className="w-36 h-36 rounded-lg border-2 border-green-500 shadow-md object-cover"
        />
        <h1 className="text-2xl font-semibold text-white tracking-wide">
          Surajit Tunga
        </h1>
        <p className="text-sm text-yellow-400 text-center h-5 whitespace-nowrap">
          <span className="text-green-600">~$ </span>{displayedText}
          <span className="animate-pulse">|</span>
        </p>
        <a
          href="/resume.pdf"
          download
          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs transition duration-200"
        >
          Resume
        </a>

        <div className="mt-6 text-sm space-y-4 w-full">
          <hr className="border-green-700" />

          <div>
            <div className="flex items-center gap-2 text-yellow-800">
              <FaEnvelope />
              <span className="text-yellow-800">Email</span>
            </div>
            <a
              href="mailto:surajittunga2005@gmail.com"
              className="text-green-400 hover:text-green-300 ml-6 block mt-1"
            >
              surajittunga2005@gmail.com
            </a>
          </div>

          <div>
            <div className="flex items-center gap-2 text-yellow-800">
              <FaPhone />
              <span className="text-yellow-800">Phone</span>
            </div>
            <a
              href="tel:+918972195682"
              className="text-green-400 hover:text-green-300 ml-6 block mt-1"
            >
              +91 8972195682
            </a>
          </div>
          <hr className="border-green-700" />
        </div>

        <div className="flex justify-center gap-5 text-green-400 text-xl pt-2">
          <a href="https://www.linkedin.com/in/surajittunga" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-green-300 transition" />
          </a>
          <a href="https://github.com/surajit-tunga" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-green-300 transition" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100092186147999" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:text-green-300 transition" />
          </a>
          <a href="https://www.instagram.com/surajit.tunga/profilecard/?igsh=MnpqdzhsN3QzazR0" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-green-300 transition" />
          </a>
        </div>
      </div>

      {/* === SMALL SCREENS === */}
      <div className="lg:hidden flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={pp}
            alt="Surajit Tunga"
            className="w-14 h-14 rounded-lg border-2 border-green-500 shadow-md object-cover"
          />
          <div>
            <h1 className="text-base font-semibold text-white">Surajit Tunga</h1>
            <p className="text-xs text-yellow-400 h-4 whitespace-nowrap">
              <span className="text-green-600">~$ </span>{displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>
        <a
          href="/Surajit_Tunga_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs mb-auto bg-green-600 text-white px-1 py-1 rounded-md hover:bg-green-700 transition"
        >
          Resume
        </a>
      </div>

      <hr className="my-4 border-green-700" />

      <div className="flex items-center justify-between">
        <div className="flex gap-4 text-green-400 text-lg">
          <a href="mailto:surajittunga2005@gmail.com" title="Email">
            <FaEnvelope className="hover:text-green-300 transition" />
          </a>
          <a href="tel:+918972195682" title="Call">
            <FaPhone className="hover:text-green-300 transition" />
          </a>
        </div>

        <div className="flex gap-4 text-green-400 text-lg">
          <a href="https://www.linkedin.com/in/surajittunga" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-green-300 transition" />
          </a>
          <a href="https://github.com/surajit-tunga" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-green-300 transition" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100092186147999" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:text-green-300 transition" />
          </a>
          <a href="https://www.instagram.com/surajit.tunga/profilecard/?igsh=MnpqdzhsN3QzazR0" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-green-300 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftDiv;
