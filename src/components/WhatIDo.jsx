import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, LayoutDashboard, Rocket, Wrench } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Code2 size={28} />,
    title: "Web Development",
    desc: "Modern, fast, and scalable web applications built with clean architecture and best practices to ensure performance and reliability.",
  },
  {
    icon: <LayoutDashboard size={28} />,
    title: "UI / UX Design",
    desc: "Clean and intuitive interfaces designed to enhance user experience, improve engagement, and drive meaningful interactions.",
  },
  {
    icon: <Rocket size={28} />,
    title: "Performance Optimization",
    desc: "Optimizing websites for speed, SEO, and responsiveness to ensure fast load times and better user retention.",
  },
  {
    icon: <Wrench size={28} />,
    title: "Ongoing Support",
    desc: "Ongoing support for your web app, including regular updates, bug fixes, performance optimization, and ongoing improvements. Ensuring your app remains secure, scalable, and up-to-date with the latest features.",
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
