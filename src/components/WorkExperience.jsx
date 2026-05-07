import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [lineHeight, setLineHeight] = useState(0);
  const dotRefs = useRef([]);
  useEffect(() => {
    if (activeIndex >= 0 && dotRefs.current[activeIndex]) {
      const dot = dotRefs.current[activeIndex];
      const timeline = dot.closest(".timeline");

      const dotRect = dot.getBoundingClientRect();
      const timelineRect = timeline.getBoundingClientRect();

      const dotCenter = dotRect.top - timelineRect.top + dotRect.height / 2;

      setLineHeight(dotCenter);
    }
  }, [activeIndex]);
  const data = [
    {
      role: "Freelance Developer",
      company: "Fiverr",
      duration: "2023 — Present",
      location: "Remote",
      points: [
        "Built custom websites and web apps for global clients",
        "Delivered scalable and high-performance solutions",
        "Worked across SaaS, law, real estate, and e-commerce",
        "Handled full project lifecycle from design to deployment",
      ],
      tools: "React, Laravel, Tailwind, MongoDB, Firebase",
    },
    {
      role: "Full Stack Developer",
      company: "FreshMind web Agency",
      duration: "2024 — Present",
      location: "Remote",
      points: [
        "Developed scalable applications for multiple clients",
        "Optimized backend architecture and performance",
        "Maintained and upgraded production systems",
        "Collaborated on deployments and system design",
      ],
      tools: "Next.js, Vue, Supabase, Cloudinary, Bootstrap",
    },
    {
      role: "Freelance Developer",
      company: "Fiverr",
      duration: "2023 — Present",
      location: "Remote",
      points: [
        "Built custom websites and web apps for global clients",
        "Delivered scalable and high-performance solutions",
        "Worked across SaaS, law, real estate, and e-commerce",
        "Handled full project lifecycle from design to deployment",
      ],
      tools: "React, Laravel, Tailwind, MongoDB, Firebase",
    },
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        {/* HEADER */}
        <div className="portfolio-header">
          <span className="portfolio-tag">-Experience-</span>

          <h2>
            Work & <span>Impact</span>
          </h2>

          <p>
            A track record of building scalable, secure, and high-performing
            digital products across industries.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="timeline">
          {/* ACTIVE GLOW LINE */}
          <div
            className="timeline-active-line"
            style={{
              height: `${lineHeight}px`,
            }}
          />

          {data.map((item, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* DOT */}
              <div
                ref={(el) => (dotRefs.current[i] = el)}
                className={`timeline-dot ${activeIndex >= i ? "active" : ""}`}
              />

              {/* CARD */}
              <div className="timeline-card">
                {/* TOP */}
                <div className="exp-top">
                  <span>{item.duration}</span>
                  <span>{item.location}</span>
                </div>

                {/* TITLE */}
                <h3>{item.role}</h3>
                <p className="exp-company">{item.company}</p>

                <div className="exp-divider" />

                {/* LIST */}
                <ul className="exp-list">
                  {item.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>

                {/* TOOLS */}
                <div className="exp-tools">
                  <span>Tools:</span>
                  <p>{item.tools}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
