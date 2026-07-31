import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <span className="text-cyan-400">Rohit</span>
          <span className="text-white">.</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-70}
              className="cursor-pointer text-gray-300 hover:text-cyan-400 transition"
            >
              {item.name}
            </Link>
          ))}

          <a
            href="/resume.pdf"
            className="px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 transition"
          >
            Resume
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>
        </nav>

        {/* Mobile Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-70}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b border-slate-800 cursor-pointer hover:text-cyan-400"
            >
              {item.name}
            </Link>
          ))}

          <div className="p-6">
            <a
              href="/resume.pdf"
              className="block text-center bg-cyan-500 py-3 rounded-lg"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
