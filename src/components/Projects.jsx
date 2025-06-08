import image2 from "/src/Pythoninterface.png";
import image1 from "/src/E-commerceinterface.png";
import image3 from "/src/Weatherinterface.png";
import image4 from "/src/Donationinterface.png";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: image1,
    title: "E-commerce Website",
    description: "A modern and stylish e-commerce platform designed specifically for women, offering a curated range of fashion, beauty, and lifestyle products. It provides a seamless shopping experience with user-friendly navigation, filtering, and secure checkout features.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwindcss"],
  },

  {
    image: image2,
    title: "Countdown Timer & Stopwatch",
    description: "A GUI-based desktop application that allows users to set a countdown timer or run a stopwatch. Displays time updates in real-time and shows a Time's up popup when the countdown ends.",
    technologies: ["Python(Tkinter)"],
  },

  {
  image: image3,
  title: "Weather App",
  description: "A responsive frontend web application that fetches and displays real-time weather updates for any location using a weather API. The app features a clean UI and displays temperature, humidity, and other conditions.",
  technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
},

{
  image: image4,
  title: "Donation Website",
  description: "A full-stack donation platform built using the MERN stack, integrated with Stripe for secure and seamless payment processing. It allows users to contribute to causes through an intuitive frontend and manages transactions and data on the backend.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
},

]

const ScrollReveal = ({children}) => {
  return (
    <motion.div 
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({project}) => {
  return (
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img src={project.image} alt="" className="h-full w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"/>
      <div className="flex flex-col gap-5">

        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {
            project.technologies.map((tech,index) => (
              <span key={index} className="rounded-lg bg-black p-3">{tech}</span>
            ))
          }
        </div>
      </div>
    </div>
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
      <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project}/>
          ))
        }
      </div>
      
    </div>
  )
}

export default Projects
