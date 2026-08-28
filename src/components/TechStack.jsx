import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../components/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // LEFT CARD
      gsap.from(".tech-card.approach", {
        opacity: 0,
        x: -60,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tech-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // RIGHT CARD
      gsap.from(".tech-card.stack", {
        opacity: 0,
        x: 60,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tech-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="tech-section" ref={sectionRef}>
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
          <div className="tech-card approach">
            <h3>Development Approach</h3>

            <div className="tech-divider" />

            <p>
              Every project starts with understanding the problem, the business
              goals, and the people using the product. I translate those
              requirements into a clear technical direction, choosing the right
              architecture and tools before development begins.
            </p>

            <p>
              I focus on building systems that are clean, maintainable, secure,
              and built to perform. From frontend architecture and API design to
              database structure and deployment, I make technical decisions with
              long-term reliability and scalability in mind.
            </p>

            <p>
              Development does not stop at launch. I continue to improve,
              optimize, debug, and evolve applications as requirements change,
              ensuring the product remains reliable as the business grows.
            </p>
          </div>

          {/* RIGHT - STACK */}
          <div className="tech-card stack">
            <h3>Tech Stack</h3>

            <div className="tech-divider" />

            <div className="tech-list">
              <span>React</span>
              <span>Next.js</span>
              <span>Vue.js</span>
              <span>Node.js</span>
              <span>Laravel</span>
              <span>JavaScript</span>
              <span>Supabase</span>
              <span>MongoDB</span>
              <span>Firebase</span>
              <span>Tailwind CSS</span>
              <span>Cloudinary</span>
              <span>REST APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
