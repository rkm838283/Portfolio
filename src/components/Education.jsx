import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const education = [
  {
    degree: "M.Tech in Computer Science & Engineering",
    institute: "National Institute of Technology Calicut",
    duration: "2025 – Present",
    cgpa: "CGPA: --",
    description:
      "Specializing in Artificial Intelligence, Machine Learning, Full Stack Development, and Advanced Computer Science.",
    courses: [
      "Machine Learning",
      "Distributed Systems",
      "Computer Networks",
      "Database Management Systems",
      "Cloud Computing",
      "Artificial Intelligence",
    ],
  },
  {
    degree: "Bachelor's Degree",
    institute: "Your University",
    duration: "2021 – 2025",
    cgpa: "CGPA: --",
    description:
      "Built a strong foundation in programming, algorithms, software engineering, and databases.",
    courses: [
      "Data Structures",
      "Operating Systems",
      "OOP",
      "Computer Architecture",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="section bg-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 mt-6">
            My academic journey and relevant coursework.
          </p>
        </motion.div>

        <div className="mt-20 space-y-10">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
              }}
              className="glass rounded-3xl p-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-500 p-4 rounded-full text-2xl">
                    <FaUniversity />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">{item.degree}</h3>

                    <p className="text-cyan-400 mt-2">{item.institute}</p>
                  </div>
                </div>

                <div className="mt-5 md:mt-0 text-right">
                  <p className="text-gray-300">{item.duration}</p>

                  <p className="text-cyan-400 font-semibold mt-2">
                    {item.cgpa}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-gray-300 leading-8">{item.description}</p>

              <div className="mt-8">
                <h4 className="font-semibold text-xl mb-4 flex items-center gap-2">
                  <FaGraduationCap />
                  Relevant Coursework
                </h4>

                <div className="flex flex-wrap gap-3">
                  {item.courses.map((course) => (
                    <span
                      key={course}
                      className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
