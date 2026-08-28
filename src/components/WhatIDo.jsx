import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, LayoutDashboard, Rocket, Wrench } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Code2 size={28} />,
    title: "Custom Web Development",
    desc: "I build tailored websites and web applications around your actual business requirements — from marketing sites and client portals to complex full-stack platforms. The focus is on clean architecture, reliability, and a codebase that can evolve with the product.",
  },

  {
    icon: <LayoutDashboard size={28} />,
    title: "Product UI & UX",
    desc: "I turn ideas, rough concepts, and existing designs into clear, responsive interfaces that are easy to use and built around real user journeys. Every screen is designed to balance usability, visual hierarchy, accessibility, and the goals of the business.",
  },

  {
    icon: <Rocket size={28} />,
    title: "Performance & Technical Optimization",
    desc: "I identify and resolve the issues that slow products down — from inefficient rendering and heavy assets to poor API usage and database queries. The result is a faster, more responsive experience with a stronger technical foundation for SEO and growth.",
  },

  {
    icon: <Wrench size={28} />,
    title: "Maintenance & Product Improvement",
    desc: "I stay involved after launch to keep applications reliable and up to date. That includes debugging, security updates, performance improvements, new features, refactoring, and technical improvements as your business and requirements evolve.",
  },
];

export default function WhatIDo() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".service-card");

      gsap.from(cards, {
        opacity: 0,
        y: 60,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      {/* Header */}
      <SectionHeader
        tag="-What I Do-"
        title="Services I"
        highlight="Provide"
        text="I help businesses build modern digital experiences that are fast, scalable, and designed to convert."
      />

      {/* Cards */}
      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            {/* Top */}
            <div className="service-top">
              <div className="service-icon">{item.icon}</div>

              <h3>{item.title}</h3>
            </div>

            {/* Divider */}
            <div className="service-divider" />

            {/* Text */}
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
