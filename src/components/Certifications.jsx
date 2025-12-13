import { useState } from "react";
import { motion } from "framer-motion";
import deloitteImg from "/src/assets/certifications/Data_Analytics_Forage.png";
import apoorvCTFImg from "/src/assets/certifications/ApoorvCTF_Certificate.jpg";
import codeCraftersImg from "/src/assets/certifications/Code Crafters 2.0 Hackathon.jpg";
import cyberFundamentalsImg from "/src/assets/certifications/Palo_alto1(cybersecurity fundamentals).jpg";
import googleAIImg from "/src/assets/certifications/Coursera AI Essentials.jpg";
import googleCyberImg from "/src/assets/certifications/finalcertificate.jpg";
import ethicalHackingImg from "/src/assets/certifications/EthicalHacking.jpg";
import mobileWebDevImg from "/src/assets/certifications/WebDev.jpg";
import rajniTechImg from "/src/assets/certifications/Web_Developer_Intern.jpg";
import siesInternImg from "/src/assets/certifications/Full Stack.jpg";
import ifutureImg from "/src/assets/certifications/IFuture.jpg";

const certificationsData = [
  {
    title: "Mobile & Web Development App SDP",
    issuer: "SIESGST",
    type: "Internship",
    year: "2024",
    description: "Hands-on experience in building responsive applications and improving development skills.",
    image: mobileWebDevImg,
    link: mobileWebDevImg
  },

  {
    title: "Web Developer Intern",
    issuer: "Rajni Tech Foundation",
    type: "Internship",
    year: "2025",
    description: "Worked with IT and marketing teams to build and optimize digital platforms for a social-tech NGO.",
    image: rajniTechImg,
    link: rajniTechImg
  },

  {
    title: "Full-Stack Web & Mobile App Development Intern",
    issuer: "SIESGST",
    type: "Internship",
    year: "2025",
    description: "Built a real-time E-Commerce platform during a 2-month in-house internship.",
    image: siesInternImg,
    link: siesInternImg
  },

  {
    title: "Ethical Hacking SDP",
    issuer: "SIESGST",
    type: "Internship",
    year: "2024",
    description: "Practical exposure to hacking techniques, tools, and threat analysis.",
    image: ethicalHackingImg,
    link: ethicalHackingImg
  },

  {
    title: "Cloud Intern",
    issuer: "iFuture Technologies Pvt. Ltd",
    type: "Internship",
    year: "2025",
    description: "Gained hands-on experience in Microsoft Server Management and private cloud deployment.",
    image: ifutureImg,
    link: ifutureImg
  },  

  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    type: "Course",
    year: "2025",
    description: "Hands-on experience solving real business problems using Tableau and Excel.",
    image: deloitteImg,
    link: deloitteImg
  },

  {
    title: "Cybersecurity Fundamentals",
    issuer: "Palo Alto Networks",
    type: "Course",
    year: "2024",
    description: "Gained essential knowledge of core concepts and best practices for digital security.",
    image: cyberFundamentalsImg,
    link: cyberFundamentalsImg
  },

  {
    title: "Google AI Essentials",
    issuer: "Google",
    type: "Course",
    year: "2024",
    description: "Built a foundation in AI concepts and real-world applications across industries.",
    image: googleAIImg,
    link: googleAIImg
  },

  {
    title: "Google Cybersecurity",
    issuer: "Google",
    type: "Course",
    year: "2024",
    description: "Gained foundational knowledge in cybersecurity principles, threat detection, and risk management.",
    image: googleCyberImg,
    link: googleCyberImg
  },

  {
    title: "Apoorv 2025 Capture The Flag (CTF)",
    issuer: "IIIT Kottayam Cyber Security Club",
    type: "Competition",
    year: "2025",
    description: "Participated in a challenging cybersecurity competition to sharpen problem-solving skills.",
    image: apoorvCTFImg,
    link: apoorvCTFImg
  },

  {
    title: "Code Crafters 2.0 Hackathon",
    issuer: "Coding Club, SCOE",
    type: "Competition",
    year: "2025",
    description: "Collaborated and built innovative solutions in a competitive coding environment.",
    image: codeCraftersImg,
    link: codeCraftersImg
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

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? certificationsData.length : 3;

  return (
    <div
      id="certifications"
      className="pt-24 pb-20 w-full min-h-screen flex flex-col items-center gap-14 px-4 md:px-14">
      <ScrollReveal>
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-3xl font-light text-white md:text-5xl">
            Certifications & Internships
        </motion.h1>
      </ScrollReveal>

      <div className="grid w-full max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificationsData.slice(0, itemsToShow).map((item, index) => (
          <ScrollReveal key={index}>
            <div className="flex flex-col h-full min-h-[380px] rounded-2xl border border-gray-700 bg-black/50 p-4 backdrop-blur-md text-white">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-2 w-full rounded-xl h-[180px] object-contain md:object-cover transition-transform md:hover:scale-105"/>
              </a>

              <span className="text-xs uppercase tracking-wide text-pink-400">
                {item.type}
              </span>

              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>

              <p className="mt-2 text-sm text-gray-400 flex-grow">
                {item.description}
              </p>

              <div className="mt-3 flex justify-between text-sm text-gray-400">
                <span>{item.issuer}</span>
                <span>{item.year}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {certificationsData.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="rounded-md bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2 text-white font-medium hover:scale-105 transition">
          {showAll ? "Show Less" : "Load More"}
        </button>
      )}
    </div>
  );
};

export default Certifications;