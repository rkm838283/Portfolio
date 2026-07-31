import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
  FaJava,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiTensorflow,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  {
    name: "C++",
    icon: <SiCplusplus />,
    color: "text-blue-400",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "text-yellow-400",
  },
  {
    name: "Java",
    icon: <FaJava />,
    color: "text-red-500",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-300",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-500",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "text-gray-300",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-400",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow />,
    color: "text-orange-400",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-red-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-slate-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="glass group rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-slate-700 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] transition-all duration-300"
            >
              <div
                className={`text-6xl ${skill.color} mb-5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6`}
              >
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
