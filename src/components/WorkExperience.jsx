import { useLayoutEffect, useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [lineHeight, setLineHeight] = useState(0);

  const sectionRef = useRef(null);
  const dotRefs = useRef([]);

  useEffect(() => {
    if (activeIndex >= 0 && dotRefs.current[activeIndex]) {
      const dot = dotRefs.current[activeIndex];
      const timeline = dot.closest(".timeline");

      if (!timeline) return;

      const dotRect = dot.getBoundingClientRect();
      const timelineRect = timeline.getBoundingClientRect();

      const dotCenter = dotRect.top - timelineRect.top + dotRect.height / 2;

      setLineHeight(dotCenter);
    }
  }, [activeIndex]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".timeline-item");

      if (!items.length) return;

      gsap.from(items, {
        opacity: 0,
        y: 60,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".timeline",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const data = [
    {
      role: "Freelance Developer",
      company: "Fiverr",
      duration: "2022 — Present",
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
  ];

  return (
    <section className="experience-section" ref={sectionRef}>
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
            <div
              key={i}
              className="timeline-item"
              onClick={() => setActiveIndex(i)}
            >
              {/* DOT */}
              <div
                ref={(el) => {
                  dotRefs.current[i] = el;
                }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
