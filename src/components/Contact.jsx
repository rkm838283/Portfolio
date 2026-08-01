import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_1fzfebt",
        "YOUR_TEMPLATE_ID",
        form.current,
        "template_k9vufee",
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="section bg-slate-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-6">
            Have an opportunity or project? Let's connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 mt-20">
          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 flex gap-5 items-center">
              <div className="text-cyan-400 text-3xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">rohit@example.com</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex gap-5 items-center">
              <div className="text-cyan-400 text-3xl">
                <FaPhone />
              </div>

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex gap-5 items-center">
              <div className="text-cyan-400 text-3xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">Kerala, India</p>
              </div>
            </div>

            <div className="flex gap-6 text-3xl mt-6">
              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/YOUR_USERNAME"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-slate-800 rounded-xl p-4 outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-slate-800 rounded-xl p-4 outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full bg-slate-800 rounded-xl p-4 outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Message"
              required
              className="w-full bg-slate-800 rounded-xl p-4 outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
