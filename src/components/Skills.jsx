import { BiLogoJavascript, BiLogoTailwindCss, BiLogoNodejs, BiLogoReact, BiLogoHtml5 } from "react-icons/bi";
import { SiMongodb, SiCss3, SiExpress, SiRedux, SiFirebase } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import { motion } from "framer-motion";

const technicalSkills = [
  { icon: <BiLogoHtml5 />, color: "text-orange-600", name: "HTML5" },
  { icon: <SiCss3 />, color: "text-blue-700", name: "CSS3" },
  { icon: <BiLogoJavascript />, color: "text-yellow-600", name: "JavaScript" },
  { icon: <BiLogoReact />, color: "text-blue-400", name: "React.js" },
  { icon: <SiRedux />, color: "text-purple-500", name: "Redux" },
  { icon: <BiLogoTailwindCss />, color: "text-cyan-300", name: "Tailwind CSS" },
  { icon: <BiLogoNodejs />, color: "text-green-700", name: "Node.js" },
  { icon: <SiExpress />, color: "text-yellow-300", name: "Express.js" },
  { icon: <SiMongodb />, color: "text-green-500", name: "MongoDB" },
  { icon: <SiFirebase />, color: "text-amber-500", name: "Firebase" },
  { icon: <MdApi />, color: "text-teal-400", name: "REST APIs" },
  { icon: <FaGithub />, color: "text-orange-400", name: "Github" },
];

const securitySkills = [
  "Web Application Security",
  "Threat Analysis",
  "SOC / Blue Team Basics",
  "Incident Response Basics",
  "Networking & Linux Fundamentals",
  "Burp Suite",
  "Wireshark",
  "CTF Competitions",
  "Cyber Laws (Basics)",
];

const analyticsSkills = [
  "Power BI",
  "Excel",
  "SQL",
  "Python",
  "Dashboard Design",
  "Data Cleaning",
];

const coreStrengths = [
  "Debugging",
  "Root Cause Analysis",
  "Requirement Gathering",
  "Stakeholder Coordination",
  "Cross-team Communication",
  "Problem Solving",
];

const ScrollReveal = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
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

const TagCard = ({ title, skills }) => (
  <div className="rounded-2xl border border-indigo-600 focus:outline-none bg-black/50 p-4 backdrop-blur-md h-full">
    <h2 className="mb-6 text-center text-2xl font-medium text-gray-200">
      {title}
    </h2>

    <div className="flex flex-wrap justify-center gap-3">
      {skills.map((skill, index) => (
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
);

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

      <div className="grid w-full max-w-[1000px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Development */}
        <ScrollReveal>
          <div className="rounded-2xl border border-indigo-600 focus:outline-none bg-black/50 p-4 backdrop-blur-md h-full">
            <h2 className="mb-6 text-center text-2xl font-medium text-gray-200">
              Development
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

                  <span className="text-sm text-gray-400 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Security */}
        <ScrollReveal>
          <TagCard title="Security" skills={securitySkills} />
        </ScrollReveal>

        {/* Analytics */}
        <ScrollReveal>
          <TagCard title="Analytics" skills={analyticsSkills} />
        </ScrollReveal>

        {/* Core Strengths (full width on desktop) */}
        <ScrollReveal className="lg:col-span-3">
          <TagCard title="Core Strengths" skills={coreStrengths} />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Skills;