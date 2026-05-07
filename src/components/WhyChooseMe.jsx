import { motion } from "framer-motion";
import {
  FaChartLine,
  FaBolt,
  FaLayerGroup,
  FaBriefcase,
  FaRocket,
} from "react-icons/fa";

import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: <FaChartLine />,
    title: "Results That Matter",
    text: "I build websites focused on conversion and real business growth — not just design.",
  },
  {
    icon: <FaBolt />,
    title: "Fast & Reliable",
    text: "Quick delivery, clear communication, and no disappearing mid-project.",
  },
  {
    icon: <FaLayerGroup />,
    title: "End-to-End Execution",
    text: "From idea to launch, I handle everything so you don’t have to manage multiple people.",
  },
  {
    icon: <FaBriefcase />,
    title: "Real Experience",
    text: "Worked with SaaS, agencies, real estate, and more — I understand business needs.",
  },
  {
    icon: <FaRocket />,
    title: "Built to Scale",
    text: "Fast, optimized, and scalable builds designed for long-term growth.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="why-section">
      <div className="why-container">
        {/* HEADER */}
        <SectionHeader
          tag="-Why Choose Me-"
          title="What You Get"
          highlight="Working With Me"
          text="More than just a developer — I bring strategy, execution, and reliability to help your business grow online."
        />

        {/* CARDS */}
        <div className="why-grid">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="why-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="why-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="#contact" className="why-btn">
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
