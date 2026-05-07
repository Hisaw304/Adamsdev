import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // premium easing
    },
  },
};

export default function SectionHeader({ tag, title, highlight, text }) {
  return (
    <motion.div
      className="portfolio-header"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.span className="portfolio-tag" variants={item}>
        {tag}
      </motion.span>

      <motion.h2 variants={item}>
        {title} <span>{highlight}</span>
      </motion.h2>

      <motion.p variants={item}>{text}</motion.p>
    </motion.div>
  );
}
