import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  ArrowUpRight,
  Code2,
  LayoutDashboard,
  Rocket,
  Wrench,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Custom Web Development",
    short: "Websites & full-stack applications",
    desc: "I build tailored websites and web applications around your actual business requirements — from marketing sites and client portals to complex full-stack platforms. The focus is on clean architecture, reliability, and a codebase that can evolve with the product.",
  },
  {
    number: "02",
    icon: LayoutDashboard,
    title: "Product UI & UX",
    short: "Interfaces built around real users",
    desc: "I turn ideas, rough concepts, and existing designs into clear, responsive interfaces that are easy to use and built around real user journeys. Every screen is designed to balance usability, visual hierarchy, accessibility, and the goals of the business.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Performance & Optimization",
    short: "Faster, stronger digital products",
    desc: "I identify and resolve the issues that slow products down — from inefficient rendering and heavy assets to poor API usage and database queries. The result is a faster, more responsive experience with a stronger technical foundation for SEO and growth.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Maintenance & Improvement",
    short: "Continuous technical support",
    desc: "I stay involved after launch to keep applications reliable and up to date. That includes debugging, security updates, performance improvements, new features, refactoring, and technical improvements as your business and requirements evolve.",
  },
];

export default function WhatIDo() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const [activeService, setActiveService] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-section .section-header > *", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".services-panel", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-panel",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".service-list-item", {
        x: -25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-panel",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".services-cta", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-cta",
          start: "top 90%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleServiceChange = (index) => {
    if (index === activeService) return;

    const nextService = services[index];

    gsap.to(contentRef.current, {
      opacity: 0,
      y: 15,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setActiveService(index);

        gsap.fromTo(
          contentRef.current,
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
          }
        );
      },
    });
  };

  const active = services[activeService];
  const ActiveIcon = active.icon;

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <SectionHeader
        tag="-What I Do-"
        title="Services I"
        highlight="Provide"
        text="I help businesses build modern digital experiences that are fast, scalable, and designed to convert."
      />

      <div className="services-panel">
        {/* =====================================
            SERVICE NAVIGATION
        ===================================== */}

        <div className="services-list">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;

            return (
              <button
                type="button"
                className={`service-list-item ${isActive ? "is-active" : ""}`}
                key={service.number}
                onClick={() => handleServiceChange(index)}
              >
                <span className="service-list-number">{service.number}</span>

                <span className="service-list-icon">
                  <Icon size={18} strokeWidth={1.8} />
                </span>

                <span className="service-list-content">
                  <strong>{service.title}</strong>
                  <small>{service.short}</small>
                </span>

                <ArrowUpRight
                  className="service-list-arrow"
                  size={18}
                  strokeWidth={1.8}
                />
              </button>
            );
          })}
        </div>

        {/* =====================================
            ACTIVE SERVICE
        ===================================== */}

        <div className="service-detail">
          <div ref={contentRef} className="service-detail-inner">
            <div className="service-detail-top">
              <div className="service-detail-icon">
                <ActiveIcon size={28} strokeWidth={1.7} />
              </div>

              <span>{active.number} / SERVICE</span>
            </div>

            <h3>{active.title}</h3>

            <p>{active.desc}</p>

            <div className="service-detail-bottom">
              <span>
                Strategy
                <i />
                Design
                <i />
                Development
              </span>

              <a href="#contact" className="service-detail-link">
                <span>Start a project</span>

                <ArrowUpRight size={18} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================
          CTA
      ===================================== */}

      <div className="services-cta">
        <div>
          <span>Have something specific in mind?</span>

          <h3>
            Let’s turn the idea into
            <span> something real.</span>
          </h3>
        </div>

        <a href="#contact">
          <span>Discuss your project</span>

          <ArrowUpRight size={19} strokeWidth={1.8} />
        </a>
      </div>
    </section>
  );
}
