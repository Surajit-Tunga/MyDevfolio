export const aboutData = {
  intro: `I am a passionate web developer with experience in building dynamic and responsive web applications. My journey in tech started with a curiosity for how things work, leading me to explore various programming languages and frameworks. I enjoy tackling challenges and continuously learning new skills to enhance my craft.`,

  education: [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "Guru Nanak Institute of Technology",
      year: "2027",
      score: "8.5 SGPA"
    },
    {
      degree: "Higher Secondary",
      institution: "Balichak BH Institution",
      year: "2021",
      score: "76%"
    },
    {
      degree: "Secondary",
      institution: "Jamna Ramkrishna Vivekananda Pathamandir",
      year: "2019",
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
    profile: "https://www.chess.com/member/your-username"
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
