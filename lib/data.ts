import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import DM from "@/public/images/digital.webp";
import DSC from "@/public/images/course.webp";
import Coin from "@/public/images/coin.webp";
import Clean from "@/public/images/clean.jpg";
import Watch from "@/public/images/go-watch.webp";
import HKI from "@/public/images/hki.webp";
import Weather from "@/public/images/weatcher.webp";
import QR from "@/public/images/QR.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const educationsData = [
  {
    title: "Multistudi High School",
    location: "Software Engineering, Batam",
    description:
      "Completed grade 12 at Multistudi High School with a strong foundation in software engineering, including a deep understanding of software development principles, algorithms, and their applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "Politeknik Negeri Batam",
    location: "Software Engineering, Batam",
    description:
      "I am currently pursuing a Diploma in Software Engineering at Politeknik Negeri Batam. I have completed 3 semesters. In addition, I am working on real projects at university, where I collaborate with a team of talented developers on exciting projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2025",
  },
];

export const experiencesData = [
  {
    title: "Web Designer (Part Time)",
    location: "PT. Amanah Inti Utama, Batam",
    description:
      "Revamped the web application's UI/UX by optimizing responsiveness and design as a web designer",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
  },
  {
    title: "Front-End Developer",
    location: "PT. Panca Teknologi Nusantara, Batam",
    description:
      "Working on the frontend of the web application using ReactJS, and Material UI & TailwindCss.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer (College Project with real Client)",
    location: "Politeknik Negeri, Batam ",
    description: "Working on the Fullstack of the web application",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Digital Store",
    completed: true,
    description: "🛍️ Digital Store: for shop. yea, that's it",
    tags: [
      "React",
      "Next.js",
      "MonggoDb",
      "Tailwind",
      "TRPC",
      "Stripe",
      "Payload",
    ],
    imageUrl: DM,
    demoUrl: null,
    codeUrl: "https://github.com/Rayyks/digital-mart",
  },
  {
    title: "DSC (Udemy Clone)",
    completed: true,
    description: "🌐 DSC: Learning 😊",
    tags: [
      "React",
      "Next.js",
      "MySql",
      "Tailwind",
      "Prisma",
      "Stripe",
      "Mux",
      "Clerk",
    ],
    imageUrl: DSC,
    demoUrl: null,
    codeUrl: "https://github.com/Rayyks/DSCourse",
  },
  {
    title: "CoinInfo",
    completed: true,
    description:
      "Coin Info: Web app for crypto and NFTs. View graphs, add to cart after login/signup.🪙💰",
    tags: ["React", "Firebase", "Recharts", "Tailwind"],
    imageUrl: Coin,
    demoUrl: "https://coininfo-df5e0.web.app/",
    codeUrl: "https://github.com/Rayyks/Coin_Info",
  },
  {
    title: "Clean.In",
    completed: false,
    description:
      "Simplify laundry with our Mobile App! Streamline your routine, say goodbye to hassles, and embrace convenience. 🧺📱",
    tags: ["Flutter", "Dart", "MySql", "Laravel"],
    imageUrl: Clean,
    demoUrl: null,
    codeUrl: "https://github.com/Rayyks/CLEAN.IN ",
  },
  {
    title: "Qr code attendance",
    completed: true,
    description:
      "Student attendance application using qr code to facilitate the attendance process.📅✅",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySql"],
    imageUrl: QR,
    demoUrl: null,
    codeUrl: "https://github.com/Rayyks/absensi-qr-mahasiswa",
  },
  {
    title: "Go Watch",
    completed: true,
    description:
      "Built a movie app with React JS: search, view details, check ratings. Save favorites using browser's local memory. 🎬🔍🌟",
    tags: ["React", "SCSS", "IMDB API"],
    imageUrl: Watch,
    demoUrl: "https://movie-rayyks.vercel.app/",
    codeUrl: "https://github.com/Rayyks/go-watch",
  },
  {
    title: "Sentra HKI",
    completed: true,
    description:
      "Sentra HKI Web App: Effortless copyright services for artists. Create, secure, manage intellectual assets. Register/login for submissions. 🎨📝🔐",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: HKI,
    demoUrl: null,
    codeUrl: "https://github.com/Rayyks/last_hope_hki_ig",
  },
  {
    title: "My Weather",
    completed: true,
    description:
      "Just useless project tbh, and yeah. This just for seing a weather from all location in this world🌍☁️",
    tags: ["React", "CSS", "Open Weather API"],
    imageUrl: Weather,
    demoUrl: "https://weather-appss.vercel.app/",
    codeUrl: "https://github.com/Rayyks/weather-app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MySql",
  "Redux",
  "GraphQL",
  "Recharts",
  "Laravel",
  "Material UI",
  "PHP",
  "GSAP",
  "Framer Motion",
] as const;
