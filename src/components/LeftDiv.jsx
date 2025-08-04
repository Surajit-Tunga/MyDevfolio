import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaDownload } from 'react-icons/fa';
import pp from '../assets/pp.jpg';

const LeftDiv = () => {
  return (
    <div className="bg-gray-900 text-gray-100 border-2 border-blue-900 rounded-xl p-4 h-full overflow-y-auto scroll-hidden shadow-[0_0_10px_#1e3a8a]">
      {/* Profile Section */}
      <div className="flex flex-col items-center space-y-3">
        <img
          src={pp}
          alt="Surajit Tunga"
          className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-md"
        />
        <h1 className="text-2xl font-bold text-white">Surajit Tunga</h1>
        <p className="text-sm text-blue-300 text-center">
          Full Stack Developer • GenAI & ML Enthusiast
        </p>
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition duration-200"
        >
          <FaDownload /> Download Resume
        </a>
      </div>

      {/* Contact Info */}
      <div className="mt-6 space-y-2">
        <hr className="border-gray-700" />
        <p className="text-sm">
          <span className="font-medium text-gray-400">Email: </span>
          <a href="mailto:abc@gmail.com" className="text-blue-400 hover:underline">
            abc@gmail.com
          </a>
        </p>
        <p className="text-sm">
          <span className="font-medium text-gray-400">Phone: </span>
          <a href="tel:+911234567890" className="text-blue-400 hover:underline">
            +91 12345 67890
          </a>
        </p>
        <hr className="border-gray-700" />
      </div>

      {/* Social Links */}
      <div className="mt-4 flex justify-center gap-5 text-2xl text-blue-400">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition" />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-blue-500 transition" />
        </a>
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="hover:text-blue-500 transition" />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-blue-500 transition" />
        </a>
      </div>
    </div>
  );
};

export default LeftDiv;
