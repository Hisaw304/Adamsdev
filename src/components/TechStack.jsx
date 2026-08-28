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
          </div>

          {/* RIGHT - STACK */}
          <div className="tech-card stack">
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
          </div>
        </div>
      </div>
    </section>
  );
}
