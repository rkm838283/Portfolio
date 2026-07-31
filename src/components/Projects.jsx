import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Inventory Tracking System",
    description:
      "A full-stack inventory management system with authentication, product management, stock monitoring, and dashboard analytics.",
    image: "/projects/inventory.png",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/YOUR_USERNAME/inventory-tracking-system",
    demo: "https://your-demo-link.vercel.app",
  },
  {
    title: "Fake News Detection",
    description:
      "Deep learning application that classifies fake and real news using EfficientNet and modern machine learning techniques.",
    image: "/projects/fakenews.png",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
    github: "https://github.com/YOUR_USERNAME/fake-news-detection",
    demo: "#",
  },
  {
    title: "Brain Tumor Detection",
    description:
      "AI-based brain tumor detection system using CNN models for MRI image classification with high accuracy.",
    image: "/projects/braintumor.png",
    technologies: ["Python", "TensorFlow", "CNN", "OpenCV"],
    github: "https://github.com/YOUR_USERNAME/brain-tumor-detection",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section bg-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 mt-6">
            Some of the projects I have built using modern technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="glass rounded-3xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 py-3 rounded-xl transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
