export const aboutData = {
  intro: `Currently pursuing a Bachelor's degree in Electronics and Communication Engineering from Guru Nanak Institute of Technology, Kolkata. I'm a MERN stack web developer with expertise in backend devlopment. I'm expanding my skillset in the Generative AI & ML. I have a strong foundation in Database Management Systems (DBMS) and Data Structures and Algorithms (DSA). I'm passionate about building innovative web applications and staying up-to-date with the latest technologies.`,

  education: [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "Guru Nanak Institute of Technology",
      year: "2023-2027",
      score: "8.5 SGPA"
    },
    {
      degree: "Higher Secondary",
      institution: "Balichak BH Institution",
      year: "2020-2021",
      score: "76%"
    },
    {
      degree: "Secondary",
      institution: "Jamna Ramkrishna Vivekananda Pathamandir",
      year: "2018-2019",
      score: "84%"
    }
  ],

  activities: [
    {
      title: "Full Stack Web Development",
      description: "Creating end-to-end web apps using MERN stack and modern frontend tools."
    },
    {
      title: "GenAI-Powered Tools",
      description: "Building intelligent asynchronous tools using Langchain, Gemini, and RAG."
    },
    {
      title: "Machine Learning",
      description: "Experimenting with data-driven models for image classification and forecasting."
    },
    {
      title: "Tech Project Leadership",
      description: "Leading collaborative tech projects with focus on design, performance, and deployment."
    }
  ],

  extra: {
    title: "Chess",
    description: "I enjoy playing chess during my free time. It sharpens my strategic thinking.",
    profile: "https://www.chess.com/member/Surajit_07"
  }
};

import dbms from '../../assets/dbms.jpg';
import Django from '../../assets/Django.jpg';


// constants/certificates.js
export const certificates = [
  {
    image:  dbms ,
    courseName: 'Introduction to Database Systems',
    issuer: 'NPTEL',
    url: 'https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs40/Course/NPTEL25CS40S64950366804325479.pdf',
  },
  {
    image:  Django ,
    courseName: 'Python with Django',
    issuer: 'Ardent Computech Ltd.',
    url: 'https://certificate.ardentsoftware.co.in/generate/147649',
  },
];

export const projects = [
  {
    name: "Airbnb Backend",
    description: "A complete backend for an Airbnb clone with user authentication, property management, and booking features.",
    link: "https://github.com/Surajit-Tunga/Complete_Backend/tree/main/airbnb",
    techStack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      // "https://upload.wikimedia.org/wikipedia/commons/2/27/Ejs_logo.png", // EJS
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" // TailwindCSS
    ]
  },
  {
    name: "Fest.io",
    description: "A festival management platform with event scheduling, ticketing, and user management.",
    link: "https://fest-io.vercel.app/",
    techStack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
    ]
  },
  {
    name: "Tic Tac Toe",
    description: "A simple tic-tac-toe game built with JS.",
    link: "https://surajit-tunga.github.io/Tic-Tac-toe/",
    techStack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ]
  }
];

import SBH1 from "../../assets/SBH1.jpg";
import SBH2 from "../../assets/SBH2.jpg";
import SBH3 from "../../assets/SBH3.jpg";
import SBH4 from "../../assets/SBH4.jpg";

import FOSET1 from "../../assets/FOSET1.jpg";
import FOSET2 from "../../assets/FOSET2.jpg";

import IHMMC1 from "../../assets/IHMMC1.jpg";
import IHMMC2 from "../../assets/IHMMC2.jpg";
import IHMMC3 from "../../assets/IHMMC3.jpg";

export const journeyData = [
  {
    eventName: "Smart Bengal Hackathon 2025",
    date: "April 2025",
    organizedBy: "RCC Institute of Information Technology",
    position: "Finalist",
    role: "Team Lead & Full Stack Developer",
    description: "Made an image processing project for phone detection in restricted zones.",
    images: [SBH1, SBH2, SBH3, SBH4],
  },
  {
    eventName: "Technical Paper Presentation",
    date: "April 2025",
    organizedBy: "Forum of Scientists, Engineers and Technologists (FOSET)",
    position: "Paper Presenter",
    role: "Team Lead",
    description: "Presented a paper on '5g-Enabled IoT'.",
    images: [FOSET1, FOSET2],
  },
  {
    eventName: "IHMMC 2025",
    date: "March 2025",
    organizedBy: "Asansol Engineering College",
    position: "Winner (10th Place)",
    role: "Team Lead & Model Maker",
    description: "Developed a speaking system for mute people using hand gestures.",
    images: [IHMMC1, IHMMC2, IHMMC3],
  },
];
