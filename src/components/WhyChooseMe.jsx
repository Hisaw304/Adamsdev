import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaChartLine,
  FaBolt,
  FaLayerGroup,
  FaBriefcase,
  FaRocket,
} from "react-icons/fa";

import SectionHeader from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".why-card");

      gsap.from(cards, {
        opacity: 0,
        y: 40,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".why-cta", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-cta",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="why-section" ref={sectionRef}>
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
            <div className="why-card" key={i}>
              <div className="why-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="why-cta">
          <a href="#contact" className="why-btn">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
