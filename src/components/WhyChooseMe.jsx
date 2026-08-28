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
    title: "Business-Focused Development",
    text: "I don't build websites just to look good. I focus on understanding the business behind the project and building experiences that support real goals — from generating leads to improving customer journeys.",
  },

  {
    icon: <FaLayerGroup />,
    title: "Full-Stack Ownership",
    text: "From frontend interfaces to backend logic, databases, APIs, authentication, and deployment, I can handle the technical side of the project without you having to coordinate multiple developers.",
  },

  {
    icon: <FaBolt />,
    title: "Problem-Solving Mindset",
    text: "Technical issues are part of every serious project. I investigate problems, identify the root cause, and build practical solutions instead of relying on temporary fixes.",
  },

  {
    icon: <FaBriefcase />,
    title: "Built for Real-World Use",
    text: "My experience spans business websites, SaaS products, e-commerce platforms, and custom web applications, giving me a practical understanding of different users, workflows, and business requirements.",
  },

  {
    icon: <FaRocket />,
    title: "Performance & Scalability",
    text: "I build with long-term performance in mind, focusing on clean architecture, efficient data handling, responsive interfaces, and a foundation that can evolve as your product and users grow.",
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
