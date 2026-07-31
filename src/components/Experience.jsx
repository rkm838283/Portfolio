import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";

const experiences = [
  {
    icon: <FaGraduationCap />,
    title: "M.Tech in Computer Science",
    organization: "National Institute of Technology Calicut",
    duration: "2025 – Present",
    description:
      "Pursuing M.Tech in Computer Science with a focus on Artificial Intelligence, Machine Learning, and Full Stack Development.",
  },
  {
    icon: <FaCode />,
    title: "Full Stack Developer",
    organization: "Personal Projects",
    duration: "2024 – Present",
    description:
      "Developed multiple full-stack applications using React, Node.js, Express, MongoDB, and REST APIs.",
  },
  {
    icon: <FaBriefcase />,
    title: "Machine Learning Developer",
    organization: "Research & Academic Projects",
    duration: "2024 – Present",
    description:
      "Built AI solutions including Fake News Detection and Brain Tumor Detection using TensorFlow, CNNs, and OpenCV.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section bg-slate-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Experience</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-6">
            My academic journey and software development experience.
          </p>
        </motion.div>

        <div className="relative mt-20">
          {/* Timeline Line */}

          <div className="absolute left-6 top-0 bottom-0 w-1 bg-cyan-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="relative md:pl-20"
              >
                {/* Icon */}

                <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xl shadow-lg">
                  {item.icon}
                </div>

                {/* Card */}

                <div className="glass rounded-2xl p-8 card-hover">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>

                      <p className="text-cyan-400 mt-2">{item.organization}</p>
                    </div>

                    <span className="text-gray-400 mt-4 md:mt-0">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-gray-300 mt-6 leading-8">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
