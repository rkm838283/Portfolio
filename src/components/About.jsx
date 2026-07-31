import { motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode, FaBrain, FaCode } from "react-icons/fa";

const stats = [
  {
    icon: <FaLaptopCode size={30} />,
    value: "15+",
    title: "Projects",
  },
  {
    icon: <FaCode size={30} />,
    value: "500+",
    title: "DSA Problems",
  },
  {
    icon: <FaBrain size={30} />,
    value: "10+",
    title: "Technologies",
  },
  {
    icon: <FaUserGraduate size={30} />,
    value: "M.Tech",
    title: "NIT Calicut",
  },
];

export default function About() {
  return (
    <section id="about" className="section bg-slate-900">
      <div className="container-custom">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            I am an M.Tech Computer Science student at
            <span className="text-cyan-400 font-semibold"> NIT Calicut</span>,
            passionate about building intelligent software using Artificial
            Intelligence, Full Stack Development, and modern web technologies.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Who am I?</h3>

            <p className="text-gray-300 leading-8 mb-6">
              I enjoy designing and developing scalable web applications,
              machine learning models, and solving challenging algorithmic
              problems.
            </p>

            <p className="text-gray-300 leading-8 mb-6">
              My interests include Artificial Intelligence, Machine Learning,
              React, Node.js, MongoDB, and Cloud Computing.
            </p>

            <p className="text-gray-300 leading-8">
              I continuously improve my skills through personal projects,
              research, and competitive programming.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    rotate: 1,
                  }}
                  className="glass rounded-2xl p-8 text-center card-hover"
                >
                  <div className="text-cyan-400 flex justify-center mb-5">
                    {item.icon}
                  </div>

                  <h2 className="text-4xl font-bold mb-2">{item.value}</h2>

                  <p className="text-gray-400">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
