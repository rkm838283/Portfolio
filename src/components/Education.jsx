import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

const education = [
  {
    degree: "M.Tech in Computer Science",
    institute: "National Institute of Technology Calicut",
    duration: "2025 – Present",
    score: "CGPA: 8.38",
    icon: <FaUniversity />,
  },
  {
    degree: "B.Tech in Computer Science",
    institute: "Rajkiya Engineering College Kannauj, Uttar Pradesh",
    duration: "2020 – 2024",
    score: "CGPA: 8.38",
    icon: <FaUniversity />,
  },
  {
    degree: "Class XII",
    institute: "RBMJ, Jaunpur, Uttar Pradesh",
    duration: "2019",
    score: "Percentage: 90.8%",
    icon: <FaSchool />,
  },
  {
    degree: "Class X",
    institute: "RBMJ, Jaunpur, Uttar Pradesh",
    duration: "2017",
    score: "CGPA: 10",
    icon: <FaSchool />,
  },
];

export default function Education() {
  return (
    <section id="education" className="section bg-slate-900">
      <div className="container-custom">
        {/* Heading */}
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
            My academic journey and educational background.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="mt-20 space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
              }}
              className="glass rounded-3xl p-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                {/* Degree + Institute */}
                <div className="flex items-center gap-5">
                  <div className="bg-cyan-500 p-4 rounded-full text-2xl text-white">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.degree}
                    </h3>

                    <p className="text-cyan-400 mt-2">{item.institute}</p>
                  </div>
                </div>

                {/* Duration + Score */}
                <div className="mt-5 md:mt-0 md:text-right">
                  <p className="text-gray-300">{item.duration}</p>

                  <p className="text-cyan-400 font-semibold mt-2">
                    {item.score}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
