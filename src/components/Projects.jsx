import image1 from "/src/UrbanShiftersinterface.png";
import image2 from "/src/Restaurantinterface.png";
import image3 from "/src/E-commerceinterface.png";
import image4 from "/src/Donationinterface.png";
import image5 from "/src/RockPaperScissorsGame.png";
import image6 from "/src/Weatherinterface.png";
import image7 from "/src/Pythoninterface.png";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: image1,
    title: "UrbanShifters",
    description: "An innovative urban mobility platform that connects users with sustainable transportation options, enabling efficient commute planning and real-time updates. The platform offers an intuitive interface, location-based services, and a smooth booking experience to promote eco-friendly travel choices.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwindcss", "Cloudinary"],
    github: "https://github.com/Shrutirawat27/UrbanShifters_Frontend",
    demo: "https://urban-shifters-frontend.vercel.app/"
  },

  {
    image: image2,
    title: "Restaurant Website",
    description: "A visually appealing and responsive restaurant website that showcases the brand’s menu, ambiance, and services. Designed to enhance user engagement, it features an interactive menu display, image gallery, and contact section for a complete dining experience.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwindcss", "Cloudinary"],
    github: "https://github.com/Shrutirawat27/Restaurant-Frontend",
    demo: "https://restaurant-frontend-gray-mu.vercel.app/"
  },

  {
    image: image3,
    title: "E-commerce Website",
    description: "A modern and stylish e-commerce platform designed specifically for women, offering a curated range of fashion, beauty, and lifestyle products. It provides a seamless shopping experience with user-friendly navigation, filtering, and secure checkout features.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwindcss", "Cloudinary"],
    github: "https://github.com/Shrutirawat27/Ecommerce-Frontend",
    demo: "https://ecommerce-frontend-xi-dun.vercel.app/"
  },

   {
    image: image4,
    title: "Donation Website",
    description: "A full-stack donation platform built using the MERN stack, integrated with Stripe for secure and seamless payment processing. It allows users to contribute to causes through an intuitive frontend and manages transactions and data on the backend.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwindcss", "Cloudinary"],
    github: "https://github.com/Shrutirawat27/Donation-Frontend",
    demo: "https://donation-frontend-eight.vercel.app/"
  },

  {
    image: image5,
    title: "Rock Paper Scissors Game",
    description: "A fun and interactive web-based Rock-Paper-Scissors game built using core web technologies. The game allows users to play against the computer with real-time score updates, smooth animations, and responsive design for an engaging user experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Shrutirawat27/Rock_Paper_Scissors",
    demo: "https://rock-paper-scissors-beta-ruby.vercel.app/"
  },

  {
    image: image6,
    title: "Weather App",
    description: "A responsive frontend web application that fetches and displays real-time weather updates for any location using a weather API. The app features a clean UI and displays temperature, humidity, and other conditions.",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    github: "https://github.com/Shrutirawat27/WeatherApp",
    demo: "https://weather-app-nu-blue-21.vercel.app/"
  },

   {
    image: image7,
    title: "Countdown Timer & Stopwatch",
    description: "A GUI-based desktop application that allows users to set a countdown timer or run a stopwatch. Displays time updates in real-time and shows a Time's up popup when the countdown ends.",
    technologies: ["Python(Tkinter)"],
    github: "https://github.com/Shrutirawat27/Stopwatch",
    demo: ""
  }

]

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img src={project.image} alt="" className="h-full w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" />
        <div className="flex flex-col gap-5">

          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {
              project.technologies.map((tech, index) => (
                <span key={index} className="rounded-lg bg-black p-3">{tech}</span>
              ))
            }
          </div>

          <div className="flex gap-5 pt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-800 px-4 py-2 text-sm hover:bg-gray-700 transition-colors"
              >
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm hover:bg-blue-500 transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>

        </div>
      </div>
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <div id="projects" className="pt-24 pb-20 flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-light text-white md:text-6xl">My Projects</motion.h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </div>

    </div>
  )
}

export default Projects
