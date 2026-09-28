import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../components/SectionHeader";

import project7 from "../assets/project7.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";
import project10 from "../assets/project10.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    type: "Booking Platform",
    title: "DXB Star ETM",
    desc: "An interactive dance class platform with class scheduling, booking functionality, and secure Stripe payment integration.",
    img: project9,
    link: "https://dxbstarsetm.com/",
    bg: "#DCE4DE",
  },
  {
    type: "Marketplace",
    title: "SellaHub",
    desc: "A modern marketplace connecting buyers and sellers through category-based listings, seller profiles, subscription plans, payments, and listing management.",
    img: project2,
    link: "https://sellahub.vercel.app/",
    bg: "#E5DED2",
  },
  {
    type: "Law Firm Website",
    title: "Seaside Partners",
    desc: "A professional digital presence designed for legal professionals, combining a strong visual identity with content publishing and lead generation.",
    img: project5,
    link: "https://www.seasidepartners.org/",
    bg: "#DDDDE2",
  },
  {
    type: "Prediction Platform",
    title: "KickPredict",
    desc: "A prediction platform where admins publish games and users explore predictions, recent match history, and daily newsletter updates.",
    img: project10,
    link: "https://www.kickpredict.xyz/",
    bg: "#D9E1E7",
  },
  {
    type: "Construction Website",
    title: "Apex Construct",
    desc: "A sleek and modern construction website designed to communicate expertise, build trust, and convert visitors into clients.",
    img: project4,
    link: "https://apexconstruct.org/",
    bg: "#E3DED4",
  },
  {
    type: "E-commerce",
    title: "Sikarite Ventures",
    desc: "An online shopping platform featuring product browsing, size selection, cart management, Paystack payments, and order notifications.",
    img: project6,
    link: "https://www.sikariteventures.biz/",
    bg: "#DCE3D6",
  },
  {
    type: "Bakery & Food",
    title: "Everything by Baliquity",
    desc: "A visually engaging website for a baking business with product showcases, custom orders, and a smooth customer experience.",
    img: project8,
    link: "https://everythingbybaliquity.vercel.app/",
    bg: "#E5D9D5",
  },
  {
    type: "Personal Portfolio",
    title: "Oladipupo",
    desc: "A personal portfolio website focused on strong visual presentation, performance, responsive layouts, and clear project storytelling.",
    img: project7,
    link: "https://oladipupo.vercel.app/",
    bg: "#DFDEE5",
  },
  {
    type: "SaaS Application",
    title: "FreshMind Studio",
    desc: "A modern SaaS platform providing image optimization, PDF utilities, file management, and productivity tools for creators and businesses.",
    img: project3,
    link: "https://freshmindstudio.vercel.app/",
    bg: "#D9E2E0",
  },
];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        return Math.max(0, track.scrollWidth - window.innerWidth);
      };

      const horizontalTween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      return () => {
        horizontalTween.scrollTrigger?.kill();
        horizontalTween.kill();
      };
    }, sectionRef);

    const refresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", refresh);

    return () => {
      window.removeEventListener("resize", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section id="projects" className="portfolio-section" ref={sectionRef}>
      {/* ========================= */}
      {/* Heading */}
      {/* ========================= */}

      <SectionHeader
        tag="-Portfolio-"
        title="My Past"
        highlight="Projects"
        text="A selection of digital experiences I’ve designed and developed for businesses, brands, and products."
      />

      {/* ========================= */}
      {/* Horizontal Scroll Area */}
      {/* ========================= */}

      <div className="portfolio-scroll-area">
        <div className="portfolio-stack" ref={trackRef}>
          {projects.map((project, i) => (
            <article
              key={i}
              className="portfolio-card"
              style={{
                "--card-bg": project.bg,
              }}
            >
              {/* ========================= */}
              {/* Top */}
              {/* ========================= */}

              <div className="portfolio-top">
                <span className="portfolio-type">{project.type}</span>

                <span className="portfolio-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* ========================= */}
              {/* Description */}
              {/* ========================= */}

              <p className="portfolio-desc">{project.desc}</p>

              {/* ========================= */}
              {/* Project Image */}
              {/* ========================= */}

              <a
                href={project.link}
                className="portfolio-image"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title}`}
              >
                <img src={project.img} alt={project.title} />
              </a>

              {/* ========================= */}
              {/* Bottom */}
              {/* ========================= */}

              <div className="portfolio-bottom">
                <h3>{project.title}</h3>

                <a
                  href={project.link}
                  className="view-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Project</span>
                  <span className="view-arrow">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ========================= */}
      {/* CTA */}
      {/* ========================= */}

      <div className="why-cta">
        <a href="#contact" className="why-btn">
          Discuss Your Project →
        </a>
      </div>
    </section>
  );
}
