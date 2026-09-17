import { FaGithub, FaLinkedin, FaArrowUp, FaHeart } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>

      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Left */}

          <div>
            <h2 className="text-3xl font-bold text-cyan-400">Rohit Maurya</h2>

            <p className="text-gray-400 mt-3">
              Full Stack Developer • AI Enthusiast • M.Tech CSE @ NIT Calicut
            </p>
          </div>

          {/* Center */}

          <div className="flex gap-6 text-3xl mt-6">
            <a
              href="https://github.com/rkm838283"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rohit-maurya-5940a7231/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Right */}

          <div className="flex justify-center md:justify-end">
            <button
              onClick={() => scroll.scrollToTop()}
              className="bg-cyan-500 hover:bg-cyan-600 p-4 rounded-full shadow-lg transition duration-300 hover:scale-110"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Rohit Maurya. Built with React, Tailwind CSS &
            Framer Motion
            <FaHeart className="text-red-500 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
}
