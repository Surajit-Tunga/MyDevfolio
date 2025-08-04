import React from 'react';
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
  return (
    <div className="bg-gray-900 text-gray-100 border-2 border-blue-900 rounded-2xl p-6 h-full shadow-[0_0_15px_#1e3a8a] flex flex-col justify-center overflow-y-auto scrollbar-none">
      {/* Profile Section */}
      <div className="flex flex-col items-center space-y-4">
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
          className="bg-blue-600 hover:bg-blue-700 hover:shadow-md text-white px-3 py-1.5 rounded text-xs transition duration-200"
        >
          Resume
        </a>
      </div>

      {/* Contact Info */}
      <div className="mt-10 space-y-5 text-sm">
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
      <div className="mt-6 flex justify-center gap-6 text-blue-400 text-2xl">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="hover:text-blue-500 hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="hover:text-blue-500 hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="hover:text-blue-500 hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="hover:text-blue-500 hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default LeftDiv;
