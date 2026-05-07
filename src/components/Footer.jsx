import { motion } from "framer-motion";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <motion.div
        className="footer-content"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Branding */}
          <div
            className="flex flex-col leading-tight cursor-pointer"
            onClick={() => handleScroll("Home")}
          >
            <h1 className="text-xl font-bold text-[var(--ad-text)] tracking-wider">
              ADAMS
            </h1>
            <span className="text-sm text-[var(--ad-text-muted)]">
              Full Stack Developer
            </span>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
            </ul>
          </div>
          {/* Socials */}

          <div>
            <h3 className="footer-title">Socials</h3>
            <ul className="footer-links">
              <li className="flex items-center gap-2">
                <FaGithub size={16} /> Github
              </li>
              <li className="flex items-center gap-2">
                <FaInstagram size={16} /> Instagram
              </li>
              <li className="flex items-center gap-2">
                <FaXTwitter size={16} /> Twitter
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedinIn size={16} /> LinkedinIn
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} ADAMS. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}
