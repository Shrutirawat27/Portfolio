import { useState } from "react";
import image9 from "/src/assets/YuvaSaverainterface.png";
import image8 from "/src/assets/TripKartinterface.png";
import image7 from "/src/assets/Restaurantinterface.png";
import image6 from "/src/assets/E-commerceinterface.png";
import image5 from "/src/assets/UrbanShiftersinterface.png";
import image4 from "/src/assets/Donationinterface.png";
import image3 from "/src/assets/RockPaperScissorsGame.png";
import image2 from "/src/assets/Weatherinterface.png";
import image1 from "/src/assets/Pythoninterface.png";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: image9,
    title: "Yuva Savera Website",
    description: "Yuva Savera is a simple and user-friendly web platform focused on youth empowerment, featuring clean sections for awareness content and community engagement, designed for easy access across all devices.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwindcss", "Cloudinary"],
    demo: "https://yuva-saveraaa.vercel.app/",
  },

  {
    image: image8,
    title: "TripKart – Travel Booking Platform",
    description: "A responsive and user-friendly travel booking website offering organized categories for flights, hotels, trains, buses, cabs, and holiday packages, with seamless navigation and real-time data integration for a smooth user experience.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Firebase", "Cloud Firestore", "React Router", "Vercel"],
    demo: "https://tripkart-nine.vercel.app/",
  },

  {
    image: image7,
    title: "Restaurant Website",
    description: "A visually appealing and responsive restaurant website that showcases the brand’s menu, ambiance, and services with interactive sections.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwindcss", "Cloudinary"],
    demo: "https://www.zaika.us.com/",
  },

  {
    image: image6,
    title: "E-commerce Website",
    description: "A modern and stylish e-commerce platform designed specifically for women, offering a seamless shopping experience with secure checkout.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwindcss", "Cloudinary"],
    demo: "https://herstyle-ecommerce.vercel.app/",
  },

  {
    image: image5,
    title: "Packers & Movers Website",
    description: "UrbanShifters is a responsive Packers & Movers website that offers a clean homepage, service categories like home shifting, office relocation, and vehicle transport, along with an easy inquiry system.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwindcss", "Cloudinary"],
    demo: "https://urban-shifters.vercel.app/",
  },

  {
    image: image4,
    title: "Donation Website",
    description: "A full-stack donation platform built using the MERN stack, integrated with Stripe for secure payment processing.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwindcss", "Cloudinary"],
    demo: "https://donatezone.vercel.app/",
  },

  {
    image: image3,
    title: "Rock Paper Scissors Game",
    description: "A fun and interactive web-based Rock-Paper-Scissors game built using core web technologies.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://rock-paper-scissors-beta-ruby.vercel.app/",
  },

  {
    image: image2,
    title: "Weather App",
    description: "A responsive frontend web application that fetches and displays real-time weather updates using an API.",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    demo: "https://weather-app-nu-blue-21.vercel.app/",
  },

  {
    image: image1,
    title: "Countdown Timer & Stopwatch",
    description: "A GUI-based desktop application allowing users to run a stopwatch or countdown timer with real-time updates.",
    technologies: ["Python (Tkinter)"],
    demo: "",
  },
];

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}>
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"/>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black px-3 py-2 text-sm">
                {tech}
              </span>
            ))}
          </div>

          {project.demo && (
            <div className="pt-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm transition-colors hover:bg-blue-500">
                Live Demo
              </a>
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  const INITIAL_COUNT = 4;
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projectsData
    : projectsData.slice(0, INITIAL_COUNT);

  return (
    <div
      id="projects"
      className="pt-24 pb-20 flex min-h-screen w-full flex-col items-center gap-16 p-4 md:px-14 md:py-24">
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-3xl font-light text-white md:text-5xl">
          My Projects
        </motion.h1>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {projectsData.length > INITIAL_COUNT && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 px-3 py-2 text-white transition-all hover:scale-105">
          {showAll ? "Show Less Projects" : "Show More Projects"}
        </button>
      )}
    </div>
  );
};

export default Projects;