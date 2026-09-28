import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  BarChart3,
  Bolt,
  BriefcaseBusiness,
  Layers3,
  Rocket,
} from "lucide-react";

import SectionHeader from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    number: "01",
    icon: BarChart3,
    title: "Business-Focused Development",
    text: "I look beyond the interface to understand what the product or business actually needs, then build around those goals.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Full-Stack Ownership",
    text: "Frontend, backend, databases, APIs, authentication, and deployment — I can take ownership of the technical side from start to finish.",
  },
  {
    number: "03",
    icon: Bolt,
    title: "Problem-Solving Mindset",
    text: "I focus on finding the root of a problem and building practical solutions rather than patching symptoms.",
  },
  {
    number: "04",
    icon: BriefcaseBusiness,
    title: "Built for Real-World Use",
    text: "My experience across business websites, SaaS products, e-commerce, and custom applications helps me build for actual users and workflows.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Performance & Scalability",
    text: "I build with clean architecture, responsive interfaces, efficient data handling, and room for the product to grow.",
  },
];

export default function WhyChooseMe() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const header = section.querySelector(".why-editorial-header");
      const statement = section.querySelector(".why-statement");
      const statementItems = section.querySelectorAll(".why-statement > *");
      const reasons = section.querySelectorAll(".why-reason");
      const cta = section.querySelector(".why-editorial-cta");

      if (header) {
        gsap.from(header.children, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 82%",
            once: true,
          },
        });
      }

      if (statement) {
        gsap.from(statementItems, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statement,
            start: "top 80%",
            once: true,
          },
        });
      }

      if (reasons.length) {
        gsap.from(reasons, {
          y: 35,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section.querySelector(".why-reasons"),
            start: "top 82%",
            once: true,
          },
        });
      }

      if (cta) {
        gsap.from(cta.children, {
          y: 25,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cta,
            start: "top 88%",
            once: true,
          },
        });
      }

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="why-section" ref={sectionRef}>
      <div className="why-container">
        <div className="why-editorial-header">
          <SectionHeader
            tag="-Why Choose Me-"
            title="What You Get"
            highlight="Working With Me"
            text="More than just development — I bring strategy, technical ownership, and a practical approach to every project."
          />
        </div>

        <div className="why-editorial">
          <div className="why-statement">
            <span className="why-statement-label">The difference</span>

            <h3>I think beyond the code. </h3>

            <p>
              A good website or application should do more than exist online. It
              should solve a problem, make things easier for people, and create
              a meaningful result for the business behind it.
            </p>

            <div className="why-statement-mark">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="why-reasons">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div className="why-reason" key={reason.number}>
                  <span className="why-reason-number">{reason.number}</span>

                  <div className="why-reason-icon">
                    <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                  </div>

                  <div className="why-reason-content">
                    <h4>{reason.title}</h4>
                    <p>{reason.text}</p>
                  </div>

                  <ArrowUpRight
                    className="why-reason-arrow"
                    size={19}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="why-editorial-cta">
          <div className="why-cta-copy">
            <span>Ready when you are</span>

            <h4>
              Build with clarity.
              <span> Launch with confidence.</span>
            </h4>
          </div>

          <a href="#contact" className="why-btn">
            <span>Start a Project</span>

            <ArrowUpRight size={19} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}
