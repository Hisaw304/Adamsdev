import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionHeader({ tag, title, highlight, text }) {
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".section-header-item");

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 30,
          filter: "blur(8px)",
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="portfolio-header" ref={headerRef}>
      <span className="portfolio-tag section-header-item">{tag}</span>

      <h2 className="section-header-item">
        {title} <span>{highlight}</span>
      </h2>

      <p className="section-header-item">{text}</p>
    </div>
  );
}
