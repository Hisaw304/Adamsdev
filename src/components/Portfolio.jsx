import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { useRef } from "react";
import project7 from "../assets/project7.png";
// import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";
import project10 from "../assets/project10.png";

const projects = [
  {
    title: "Booking & Dance Class Website",
    desc: "An interactive platform for dance classes with class scheduling, booking functionality, and responsive design for seamless access with secure payment integration system using stripe.",
    img: project9,
    link: "https://dxbstarsetm.com/",
  },
  {
    title: "Law Firm Website",
    desc: "A high-converting website designed for legal professionals, featuring a dynamic blog for daily news updates, and focused on trust, clarity, and lead generation.",
    img: project5,
    link: "https://www.seasidepartners.org/",
    featured: true,
  },
  {
    title: "Prediction Website with Database",
    desc: "A prediction platform where admins publish games and users view them on the frontend, featuring recent match history and a newsletter system for daily updates.",
    img: project10,
    link: "https://www.kickpredict.xyz/",
  },
  {
    title: "Construction Website",
    desc: "A sleek and modern construction website designed to convert visitors into clients.",
    img: project4,
    link: "https://apexconstruct.org/",
  },
  {
    title: "E-commerce Website",
    desc: "A modern e-commerce platform built for seamless online shopping, featuring product browsing, size selection, cart management, secure Paystack payments, order notifications, and responsive design for a smooth shopping experience across devices.",
    img: project6,
    link: "https://www.sikariteventures.biz/",
  },
  {
    title: "Baking Website",
    desc: "A visually appealing website for a baking business featuring product showcases, custom orders, and a smooth user experience.",
    img: project8,
    link: "https://everythingbybaliquity.vercel.app/",
    featured: true,
  },
  {
    title: "Portfolio Website",
    desc: "A personal portfolio built with performance and design in mind.",
    img: project7,
    link: "https://oladipupo.vercel.app/",
  },
  {
    title: "SaaS Application",
    desc: "A modern SaaS platform built for creators and businesses, featuring powerful online tools for image optimization, PDF utilities, file management, and productivity workflows.",
    img: project3,
    link: "https://freshmindstudio.vercel.app/",
  },
];

export default function Portfolio() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" className="portfolio-section" ref={ref}>
      <SectionHeader
        tag="-Portfolio-"
        title="My Past"
        highlight="Projects"
        text="A few of the projects I’ve worked on in the past, helping businesses build a stronger and more effective presence online."
      />

      <div className="portfolio-stack">
        {projects.map((project, i) => {
          return (
            <motion.div
              key={i}
              style={{
                "--i": i,
                zIndex: i,
              }}
              className={`portfolio-card ${project.featured ? "featured" : ""}`}
            >
              <div className="portfolio-left">
                <h3>{project.title}</h3>

                <p className="desc">{project.desc}</p>

                <a
                  href={project.link}
                  className="view-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>

              <a
                href={project.link}
                className="portfolio-image"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project.img} alt={project.title} />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
