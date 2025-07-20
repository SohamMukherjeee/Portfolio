// src/data/projectsData.js

import summup from "../assets/160_1x_shots_so.png";
import housyF from "../assets/511_1x_shots_so.png";
import NewsX from "../assets/329_1x_shots_so.png";
import HttpServer from "../assets/20_1x_shots_so.png";
const projects = [
  {
    title: "SummUp",
    slug: "summup",
    description:
      "An AI-powered article summarizer built with React and Firebase.",
    image: summup,
    techStack: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Firebase",
      "ExpressJS",
      "NodeJS",
      "Daisy UI",
      "Hugging Face",
      "FireStore",
    ],
    link: "https://summup.heysoham.xyz",
    githubLink: "https://github.com/SohamMukherjeee/summUP",
    isLive: true,
    longDescription: "This is a full description of the SummUp project...",
    projectPoints: [
      "Built a SaaS-based single-page app that summarizes news articles using AI, enhancing reading efficiency by over 70%.",
      "Crafted a responsive UI with React, Tailwind CSS, and styled-components; scored 95 in Accessibility and 85+ in Performance (Lighthouse).",
      "Implemented backend using Node.js, Express.js, and Readability for content parsing; used BART-large-CNN model for AI summarization via Hugging Face.",
      "Integrated Firebase Auth with Google Sign-In and Firestore for storing user-specific summaries, with TTL auto-deletion after 5 days.",
      "Enabled summary sharing through unique links using Firestore document IDs and route rewrites in React Router.",
    ],
  },
  {
    title: "Housy",
    slug: "housy",
    description: "Wildlife camera shop built with Shopware 6.",
    image: housyF,
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "Cloudinary",
    ],
    link: "https://housy-frontend.onrender.com/",
    githubLink: "https://github.com/SohamMukherjeee/HousY",
    isLive: true,
    longDescription:
      "This is a full description of the Wild-Kamera.com project...",
    projectPoints: [
      "Built a full stack real estate marketplace where users can browse, list and manage property listings with secure authentication and personalized dashboards",
      "Designed a responsive front-end using React and Tailwind CSS, achieving 98 Performance, 91 Accessibility and 0 CLS in Lighthouse audits for fast, smooth UX across devices",
      "Developed backend with Node.js, Express.js, and MongoDB to support full CRUD operations for properties,users, and search-based routing by location and pin code",
      "Integrated Firebase Authentication to manage user sessions securely and implemented protected client routes based on auth state",
      "Enabled direct Google Meet scheduling between buyers and property owners, with automatic Google Calendar booking integration to confirm dates in real time",
    ],
  },
  {
    title: "Simple HTTP Server",
    slug: "simple-http-server",
    description: "A lightweight multithreaded HTTP server",
    image: HttpServer,
    techStack: ["Java", "Unit Testing", "RFC 7230", "RFC 7232"],
    link: "https://github.com/SohamMukherjeee/HTTP-SERVER",
    githubLink: "https://github.com/SohamMukherjeee/HTTP-SERVER",
    isLive: false,
    longDescription: "A lightweight multithreaded HTTP server",
    projectPoints: [
      "Built a lightweight multithreaded HTTP server in Java using low-level Socket programming, capable of handling multiple concurrent client requests efficiently",
      "Implemented standards-compliant HTTP request parsing (RFC 7230–7232) and dynamic server configuration loading using Jackson-based JSON parsing",
    ],
  },
  {
    title: "NewsX",
    slug: "newsx",
    description: "A minimalist frontend-focused news website",
    image: NewsX, // make sure to import the image
    techStack: [
      "React",
      "React Router",
      "Tailwind CSS",
      "GSAP",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "NewsAPI",
    ],
    link: "https://news-x-ashy.vercel.app/",
    githubLink: "https://github.com/SohamMukherjeee/NewsX",
    isLive: true,
    longDescription:
      "A minimalist and responsive news website fetching real-time headlines using NewsAPI, built with a focus on clean UI and smooth routing.",
    projectPoints: [
      "Developed a responsive frontend news portal using React, styled with Tailwind CSS and DaisyUI for a clean and accessible UI",
      "Integrated NewsAPI to fetch and display real-time top headlines across various categories",
      "Implemented seamless client-side routing with React Router for a fluid navigation experience",
      "Built a simple Node.js + Express backend for secure API key handling and deployment on Vercel",
    ],
  },
];

export default projects;
