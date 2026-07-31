import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiTensorflow } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg font-semibold">👋 Hello, I'm</p>

          <h1 className="text-6xl md:text-7xl font-extrabold mt-3 leading-tight">
            Rohit
            <br />
            <span className="gradient-text">Maurya</span>
          </h1>

          <div className="text-2xl mt-6 font-semibold text-gray-300 h-12">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "AI Engineer",
                2000,
                "M.Tech @ NIT Calicut",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 mt-8 text-lg leading-8 max-w-xl">
            I build modern web applications, AI solutions, and scalable backend
            systems. Passionate about solving real-world problems using
            full-stack development and machine learning.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View Projects
              <FaArrowRight />
            </a>

            <a
              href="/resume.pdf"
              className="btn-outline flex items-center gap-2"
            >
              <FaDownload />
              Resume
            </a>
          </div>

          <div className="flex gap-6 mt-10 text-3xl">
            <a href="https://github.com/YOUR_USERNAME">
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>

            <a href="https://linkedin.com/in/YOUR_USERNAME">
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-4 gap-6 mt-14">
            <div>
              <h2 className="text-3xl font-bold text-cyan-400">20+</h2>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">1500+</h2>
              <p className="text-gray-400 text-sm">Problems</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">5+</h2>
              <p className="text-gray-400 text-sm">Research</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">2+</h2>
              <p className="text-gray-400 text-sm">Years</p>
            </div>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-40"></div>

            <img
              src="/profile.png"
              alt="Profile"
              className="relative w-96 rounded-full border-4 border-cyan-400 shadow-2xl"
            />

            {/* Floating Icons */}

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-10 top-20 glass p-4 rounded-xl text-cyan-400 text-4xl"
            >
              <FaReact />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-8 top-10 glass p-4 rounded-xl text-green-400 text-4xl"
            >
              <FaNodeJs />
            </motion.div>

            <motion.div
              animate={{ y: [-12, 12, -12] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -left-12 bottom-16 glass p-4 rounded-xl text-yellow-400 text-4xl"
            >
              <FaPython />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute right-0 bottom-8 glass p-4 rounded-xl text-green-500 text-4xl"
            >
              <SiMongodb />
            </motion.div>

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/2 -right-16 glass p-4 rounded-xl text-orange-400 text-4xl"
            >
              <SiTensorflow />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
