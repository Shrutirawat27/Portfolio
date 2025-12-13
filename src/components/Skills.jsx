import { BiLogoJavascript, BiLogoTailwindCss, BiLogoNodejs, BiLogoReact, BiLogoHtml5 } from "react-icons/bi";
import { SiMongodb, SiCss3, SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const technicalSkills = [
  { icon: <BiLogoHtml5 />, color: "text-orange-600", name: "HTML5" },
  { icon: <SiCss3 />, color: "text-blue-700", name: "CSS3" },
  { icon: <BiLogoJavascript />, color: "text-yellow-600", name: "JavaScript" },
  { icon: <BiLogoReact />, color: "text-blue-400", name: "React.js" },
  { icon: <BiLogoNodejs />, color: "text-green-700", name: "Node.js" },
  { icon: <BiLogoTailwindCss />, color: "text-cyan-300", name: "Tailwind CSS" },
  { icon: <SiExpress />, color: "text-yellow-300", name: "Express.js" },
  { icon: <FaGithub />, color: "text-orange-400", name: "Github" },
  { icon: <SiMongodb />, color: "text-green-500", name: "MongoDB" },
];

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Leadership",
  "Communication",
  "Creativity",
  "Time Management",
  "Attention to details",
];

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

const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <div
      id="skills"
      className="pt-24 pb-24 flex min-h-[70vh] w-full flex-col items-center gap-12 px-4">
      {/* Heading */}
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-3xl font-light text-white md:text-5xl">
        Skills
      </motion.h1>

      <div className="grid w-full max-w-[1100px] grid-cols-1 gap-8 md:grid-cols-2">
        {/* Technical Skills */}
        <ScrollReveal>
          <div className="rounded-2xl border border-indigo-600 focus:outline-none bg-black/50 p-4 backdrop-blur-md h-full">
            <h2 className="mb-6 text-center text-2xl font-medium text-gray-200">
              Technical Skills
            </h2>

            <div className="grid grid-cols-3 gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 cursor-pointer">
                  <motion.div
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className={`text-[60px] ${skill.color}`}>
                    {skill.icon}
                  </motion.div>

                  <span className="text-sm text-gray-400">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Soft Skills */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl border border-indigo-600 focus:outline-none bg-black/50 p-4 backdrop-blur-md h-full">
            <h2 className="mb-6 text-center text-2xl font-medium text-gray-200">
              Soft Skills
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-full border border-gray-600 bg-black/40 px-6 py-2 text-sm text-gray-200 cursor-pointer">
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Skills;