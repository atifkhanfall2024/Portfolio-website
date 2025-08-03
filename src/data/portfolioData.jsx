import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaNodeJs, FaDatabase, FaCode, FaHtml5, FaCss3Alt, FaWordpress, FaFigma } from 'react-icons/fa'; // Example icons
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, SiTypescript, SiCplusplus, SiPython } from 'react-icons/si'; // More specific tech icons

export const personalInfo = {
  name: "M Atif khan",
  title: "Full Stack Developer (MERN)",
  email: "muhammadatifkhan0906@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-atif-khan-183217319/",
  github: "https://github.com/atifkhanfall2024",
  resumeLink: "/Muhammad Atif khan Resume.pdf", // Make sure your resume is in public/
  bio: "Innovative Full Stack Developer passionate about creating seamless and impactful web solutions. Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments.",
  shortBio: "I build things for the web." // For Hero section
};

export const education = [
  {
    institution: "UET Peshawar",
    degree: "Bachelor in Computer Science",
    duration: "September 2022 – September 2026",
    score: "CGPA: 3.5/4",
  },
  {
    institution: "Capital Degree College",
    degree: "Class 12th",
    duration: "April 2019 - May 2021",
    score: "96.5%",
  },
  {
    institution: "Warsak Public School",
    degree: "Class 10th",
    duration: "April 2017 - May 2018",
    score: "85.17%",
  },
];

export const projects = [
  {
    title: "DEV Connect",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description: "Dev Connect is a full-stack developer platform featuring real-time communication via WebSockets and secure payment gateway integration. It uses task scheduling, email notifications, and job queues to manage large-scale operations efficiently. The app is deployed on AWS, built for backend performance and real-world scalability.",
    date: "June 2025 – July 2025",
    githubLink: "https://github.com/atifkhanfall2024/DevConnect", // Replace with actual link
    liveLink: 'http://51.20.42.63/', // Replace with actual link if available
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "Complaints-Tracking-Resolver",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description: "Complaints Tracking Resolver is a web-based system designed to register, monitor, and resolve user complaints efficiently. It supports automated status updates, email notifications, and admin panel controls for faster resolution. Built for transparency and accountability, it's ideal for organizations managing high complaint volumes.",
  
    githubLink: "https://github.com/atifkhanfall2024/Complaints-tracking", // Replace with actual link
    liveLink: "https://even.vercel.app/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "Netflix-Gpt",
    tech: ["React JS", "firebase" , 'Gemini Api'],
    description: "Netflix GPT is an AI-powered movie and series recommender that suggests content based on user preferences using GPT-based algorithms. It features a sleek interface, dynamic search, and real-time content filtering. Built for entertainment lovers, it enhances user experience with personalized recommendations.",
   // date: "Feb 2025 – Present",
    githubLink: "https://github.com/atifkhanfall2024/Netflex-GPT",
   
    category: "Reactjs Firebase",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "Coinbase Healthblock",
    tech: ["React JS", "Node JS", "Solidity", "Web 3" , 'MetaMask'],
    description: "HealthBlock Coinbase is a blockchain-based medical record management system that ensures secure, transparent, and tamper-proof health data storage. It leverages Coinbase blockchain technology to give patients full control over their medical records. Designed for privacy and trust, it brings innovation to healthcare data handling.",
  
    githubLink: "https://github.com/atifkhanfall2024/Coinbase-HealthBlock",
   
    category: "Blockchain",
    icon: <SiFirebase size={24} className="text-accent-1"/>
  },
  {
    title: "Facial Emotion Detection",
    tech: ["React.js", "Node.js", "MongoDB" , 'Python' , 'OpenCV'],
    description: "Facial Emotion Detection is an AI-based system that analyzes facial expressions in real-time to identify human emotions like happiness, anger, and sadness. It uses computer vision and machine learning models for accurate emotion recognition. Ideal for applications in security, education, and user experience enhancement.",
    //date: "Jan 2025 – Present",
    githubLink: "https://github.com/atifkhanfall2024/Facial_Emotion_detection", // Replace with actual link
    liveLink: null,
    category: "Face Detection",
    icon: <FaDatabase size={24} className="text-accent-1"/>
  },
];

export const skills = {
  languages: [
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    // { name: "TypeScript", icon: <SiTypescript /> }, // Add if you use it
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "SQL", icon: <FaDatabase /> },
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    // You are using it!
   
  ],
  toolsAndPlatforms: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <FaCode /> }, // Or a more specific icon
    { name: "Postman", icon: <FaCode /> }, // Placeholder icon
    { name: "Google Cloud Platform", icon: <FaCode /> }, // Placeholder icon
  ],
  coreCompetencies: [
    "Problem Solving",
    "Presentations",
    "Oratory",
    "Team Leadership",
    "Event Hosting",
    "Agile Methodologies"
  ]
};

export const leadershipAndInvolvement = [
  {
    role: "Junior MERN Stack Developer",
    organization: "Hamhib Coders",
    duration: "September 2024 – Present",
    points: [
      "Worked as a Junior MERN Stack Developer at HamHib Coders, contributing to real-time web applications using MongoDB, Express.js, React, and Node.js. Gained hands-on experience in REST APIs, authentication, and scalable backend systems.",
    ],
  },
  {
    role: "Web Dev Team Lead",
    organization: "Hiba Skills Academy",
    duration: "July 2025 – Present",
    points: [
      "Served as Web Team Lead at Hiba Skills Academy, guiding students through real-world web development projects and modern tech stacks. Led a team to design, develop, and deploy responsive websites while mentoring on best coding practices.",
    ],
  },
  {
    role: "Team Lead Of Web Dev",
    organization: "UET Computer Cell Society",
    duration: "Sept 2024 - febuary 2025",
    points: [
      "Led the Web Development team at Computer Cell, UET Society, overseeing the creation and maintenance of dynamic websites for campus events and initiatives. Mentored junior developers and ensured timely delivery of high-quality, scalable web solutions.",
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};