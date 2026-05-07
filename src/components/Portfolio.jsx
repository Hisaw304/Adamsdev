import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { useRef } from "react";
import project7 from "../assets/project7.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";
import project10 from "../assets/project10.png";

const projects = [
  {
    title: "Law Firm Website",
    stack: "React • Tailwind • Sanity",
    desc: "A high-converting website designed for legal professionals, featuring a dynamic blog for daily news updates, and focused on trust, clarity, and lead generation.",
    img: project5,
    link: "#",
    featured: true,
  },
  {
    title: "Booking & Dance Class Website",
    stack: "Next.js • Tailwind • Node.js",
    desc: "An interactive platform for dance classes with class scheduling, booking functionality, and responsive design for seamless access with secure payment integration system using stripe.",
    img: project9,
    link: "#",
  },
  {
    title: "Prediction Website with Database",
    stack: "React • Tailwind • Supabase",
    desc: "A prediction platform where admins publish games and users view them on the frontend, featuring recent match history and a newsletter system for daily updates.",
    img: project10,
    link: "#",
  },
  {
    title: "Construction Website",
    stack: "Next.js • CSS • JS • Tailwind",
    desc: "A sleek and modern construction website designed to convert visitors into clients.",
    img: project4,
    link: "#",
  },
  {
    title: "Baking Website",
    stack: "React • Tailwind • Node.js",
    desc: "A visually appealing website for a baking business featuring product showcases, custom orders, and a smooth user experience.",
    img: project8,
    link: "#",
    featured: true,
  },
  {
    title: "Portfolio Website",
    stack: "React • Tailwind",
    desc: "A personal portfolio built with performance and design in mind.",
    img: project7,
    link: "#",
  },
  {
    title: "Real Estate Platform",
    stack: "Next.js • Firebase • Tailwind",
    desc: "A modern platform for property listings with filtering, clean UI, and mobile-first experience.",
    img: project2,
    link: "#",
  },
  {
    title: "SaaS Dashboard",
    stack: "React • API • Charts",
    desc: "A clean analytics dashboard with data visualization and intuitive user flows.",
    img: project3,
    link: "#",
  },

  {
    title: "E-commerce Store",
    stack: "Next.js • Stripe • MongoDB",
    desc: "A scalable e-commerce store with payment integration and modern UI.",
    img: project6,
    link: "#",
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
      {/* Heading */}

      <SectionHeader
        tag="-Portfolio-"
        title="My Past"
        highlight="Projects"
        text="A selection of projects where design meets performance, built to help
          businesses grow and stand out online."
      />

      {/* Cards */}
      <div className="portfolio-stack">
        {projects.map((project, i) => {
          const start = i * 0.15;
          const end = start + 0.4;

          // const y = useTransform(scrollYProgress, [0, 1], [0, -i * 40]);

          return (
            <motion.div
              key={i}
              style={{
                "--i": i,
                zIndex: i,
              }}
              className={`portfolio-card ${project.featured ? "featured" : ""}`}
            >
              {/* LEFT */}
              <div className="portfolio-left">
                <h3>{project.title}</h3>
                <p className="stack">{project.stack}</p>
                <p className="desc">{project.desc}</p>

                <a href={project.link} className="view-btn">
                  View Project →
                </a>
              </div>

              {/* RIGHT */}
              <a href={project.link} className="portfolio-image">
                <img src={project.img} alt={project.title} />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
