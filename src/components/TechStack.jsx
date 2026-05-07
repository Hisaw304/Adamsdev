import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
export default function TechStack() {
  return (
    <section className="tech-section">
      <div className="tech-container">
        {/* HEADER */}
        <SectionHeader
          tag="-Expertise-"
          title="My Tech Stack &"
          highlight="Approach"
          text="A combination of modern technologies and a structured development process focused on performance, scalability, and security."
        />

        {/* GRID */}
        <div className="tech-grid">
          {/* LEFT - APPROACH */}
          <motion.div
            className="tech-card approach"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Development Approach</h3>

            <div className="tech-divider" />

            <p>
              I begin every project with a clear understanding of requirements,
              ensuring that business goals align with technical execution. From
              planning to deployment, I follow a structured workflow that
              prioritizes performance, scalability, and clean architecture.
            </p>

            <p>
              Security is a key part of my process. I implement best practices
              such as secure authentication, data validation, and protection
              against common vulnerabilities to ensure your application is safe
              and reliable.
            </p>

            <p>
              I also provide ongoing support, continuous improvements, and
              performance optimization to keep your product running smoothly as
              your business grows.
            </p>
          </motion.div>

          {/* RIGHT - STACK */}
          <motion.div
            className="tech-card stack"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Tech Stack</h3>

            <div className="tech-divider" />

            <div className="tech-list">
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Laravel</span>
              <span>MongoDB</span>
              <span>Tailwind CSS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
