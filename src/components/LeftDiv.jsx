import React, { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';
import pp from '../assets/pp.jpg';

const LeftDiv = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-900 text-gray-100 border-2 border-blue-900 rounded-2xl p-4 h-full shadow-[0_0_15px_#1e3a8a] overflow-hidden transition-all duration-300">
      {/* === LARGE SCREENS (unchanged) === */}
      <div className="hidden lg:flex flex-col items-center space-y-3 justify-center h-full">
        <img
          src={pp}
          alt="Surajit Tunga"
          className="w-36 h-36 rounded-lg border-2 border-blue-600 shadow-md object-cover"
        />
        <h1 className="text-2xl font-semibold text-white tracking-wide">
          Surajit Tunga
        </h1>
        <p className="text-sm text-blue-300 text-center">
          Full Stack Developer · Exploring GenAI & ML
        </p>
        <a
          href="/resume.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs transition duration-200"
        >
          Resume
        </a>

        {/* Email + Phone */}
        <div className="mt-6 text-sm space-y-4 w-full">
          <hr className="border-gray-700" />
          {/* Email */}
        <div>
          <div className="flex items-center gap-2 text-blue-400">
            <FaEnvelope />
            <span className='text-gray-500'>Email</span>
          </div>
          <a
            href="mailto:surajittunga2005@gmail.com"
            className="text-blue-400 hover:text-blue-500 ml-6 block mt-1"
          >
            surajittunga2005@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div>
          <div className="flex items-center gap-2 text-blue-400">
            <FaPhone />
            <span className='text-gray-500'>Phone</span>
          </div>
          <a
            href="tel:+918972195682"
            className="text-blue-400 hover:text-blue-500 ml-6 block mt-1"
          >
            +91 8972195682
          </a>
        </div>
          <hr className="border-gray-700" />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-5 text-blue-400 text-xl pt-2">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-blue-500 transition" />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:text-blue-500 transition" />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-blue-500 transition" />
          </a>
        </div>
      </div>

      {/* === SMALL SCREENS === */}
      {/* Top Row: Photo, Name, Role, Resume Button */}
      <div className=" lg:hidden flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={pp}
            alt="Surajit Tunga"
            className="w-14 h-14 rounded-lg border-2 border-blue-600 shadow-md object-cover"
          />
          <div>
            <h1 className="text-base font-semibold text-white">Surajit Tunga</h1>
            <p className="text-xs text-blue-300">Full Stack Developer</p>
          </div>
        </div>
        <a
          href="/Surajit_Tunga_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
        >
          Resume
        </a>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-700" />

      {/* Bottom Row: Contact Left, Social Right */}
      <div className="flex items-center justify-between">
        {/* Left: Email & Phone */}
        <div className="flex gap-4 text-blue-400 text-lg">
          <a href="mailto:surajittunga2005@gmail.com" title="Email">
            <FaEnvelope className="hover:text-blue-500 transition" />
          </a>
          <a href="tel:+918972195682" title="Call">
            <FaPhone className="hover:text-blue-500 transition" />
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-blue-400 text-lg">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-blue-500 transition" />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:text-blue-500 transition" />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-blue-500 transition" />
          </a>
        </div>
      </div>
      

  </div>
  );
};

export default LeftDiv;
