import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    number: "01",
    type: "Marketplace Platform",
    name: "SellaHub",
    intro:
      "A modern marketplace designed to give sellers a structured way to publish and manage listings while making it easier for buyers to discover products and services.",
    problem:
      "The marketplace needed to solve more than simply displaying products. Sellers needed a straightforward way to create listings, select a publishing plan, upload images, and manage their activity. Buyers needed clear categories, search, filtering, seller information, and detailed listings without the experience becoming overwhelming.",
    solution:
      "I designed and developed SellaHub as a full-stack marketplace with authentication, structured categories, listing management, seller profiles, subscription-based listing plans, image uploads, search and filtering, saved listings, and a dedicated dashboard. The interface was intentionally kept clean and structured so the platform can accommodate more listings as it grows.",
    result:
      "The result is a complete marketplace foundation connecting the buyer and seller experience in one system. Sellers have a dedicated environment for managing their listings and plans, while buyers can discover, filter, save, and explore listings through a more focused browsing experience.",
    link: "https://sellahub.vercel.app/",
  },
  {
    number: "02",
    type: "Construction Website",
    name: "Apex Construct",
    intro:
      "A professional digital presence designed to communicate construction expertise clearly, build trust with potential clients, and create a stronger path from discovery to enquiry.",
    problem:
      "The challenge was to present a construction company as established and trustworthy without creating a complicated website. Visitors needed to quickly understand the company's services, capabilities, and value while being given a clear reason and path to get in touch.",
    solution:
      "I created a modern responsive website focused on strong visual hierarchy and straightforward communication. Services and company information were organized into easy-to-scan sections, while strategically placed calls to action helped guide potential clients toward making an enquiry. The visual direction combines construction imagery with a clean interface to give the business a contemporary digital presence.",
    result:
      "The finished website gives Apex Construct a clearer digital storefront for presenting its services and capabilities. The experience works across desktop and mobile while giving prospective clients a more direct path from learning about the company to taking the next step.",
    link: "https://apexconstruct.org/",
  },
];

const CaseStudies = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* =========================================
       SECTION HEADER
    ========================================= */

      const headerElements = section.querySelectorAll(
        ".case-studies-header > *"
      );

      gsap.from(headerElements, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.querySelector(".case-studies-header"),
          start: "top 80%",
          once: true,
        },
      });

      /* =========================================
       CASE STUDIES
    ========================================= */

      const studies = section.querySelectorAll(".case-study");

      studies.forEach((study) => {
        const meta = study.querySelector(".case-study-meta");
        const title = study.querySelector(".case-study-heading h3");
        const intro = study.querySelector(".case-study-intro");
        const blocks = study.querySelectorAll(".case-study-block");
        const footer = study.querySelector(".case-study-footer");

        /* -----------------------------------------
         Project metadata
      ----------------------------------------- */

        gsap.from(meta, {
          y: 25,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: study,
            start: "top 82%",
            once: true,
          },
        });

        /* -----------------------------------------
         Project title
      ----------------------------------------- */

        gsap.from(title, {
          y: 45,
          opacity: 0,
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            once: true,
          },
        });

        /* -----------------------------------------
         Intro
      ----------------------------------------- */

        gsap.from(intro, {
          y: 25,
          opacity: 0,
          duration: 0.8,
          delay: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: intro,
            start: "top 88%",
            once: true,
          },
        });

        /* -----------------------------------------
         Problem / Solution / Result
      ----------------------------------------- */

        gsap.from(blocks, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: study.querySelector(".case-study-content"),
            start: "top 84%",
            once: true,
          },
        });

        /* -----------------------------------------
         Footer / Live project
      ----------------------------------------- */

        gsap.from(footer, {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
            once: true,
          },
        });
      });

      /* =========================================
       BOTTOM CTA
    ========================================= */

      const cta = section.querySelector(".case-studies-cta");

      if (cta) {
        gsap.from(cta.children, {
          y: 35,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cta,
            start: "top 82%",
            once: true,
          },
        });
      }

      /* =========================================
       REFRESH AFTER PAGE LAYOUT
    ========================================= */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="case-studies-section"
      id="case-studies"
    >
      <div className="case-studies-container">
        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <header className="case-studies-header">
          <span className="case-studies-tag">— Case Studies —</span>

          <h2>
            Selected work,
            <span> built with purpose.</span>
          </h2>

          <p>
            A closer look at projects where design, development, and business
            goals came together to solve real problems.
          </p>
        </header>

        {/* =====================================
            CASE STUDIES
        ===================================== */}

        <div className="case-studies-list">
          {caseStudies.map((study) => (
            <article className="case-study" key={study.number}>
              {/* PROJECT HEADER */}

              <div className="case-study-heading">
                <div className="case-study-meta">
                  <span>{study.number}</span>
                  <span>{study.type}</span>
                </div>

                <div className="case-study-title-wrap">
                  <h3>{study.name}</h3>

                  <p className="case-study-intro">{study.intro}</p>
                </div>
              </div>

              {/* PROJECT DETAILS */}

              <div className="case-study-content">
                <div className="case-study-block">
                  <span className="case-study-label">01 / Problem</span>

                  <p>{study.problem}</p>
                </div>

                <div className="case-study-block">
                  <span className="case-study-label">02 / Solution</span>

                  <p>{study.solution}</p>
                </div>

                <div className="case-study-block">
                  <span className="case-study-label">03 / Result</span>

                  <p>{study.result}</p>
                </div>
              </div>

              {/* PROJECT LINK */}

              <div className="case-study-footer">
                <span className="case-study-footer-label">
                  Explore the project
                </span>

                <a
                  href={study.link}
                  className="case-study-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View live project</span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================
            CTA
        ===================================== */}

        <div className="case-studies-cta">
          <div className="case-studies-cta-content">
            <span>Have a project in mind?</span>

            <h3>
              Let’s build something
              <span> meaningful.</span>
            </h3>
          </div>

          <a href="#contact" className="case-studies-cta-link">
            <span>Discuss your project</span>

            <ArrowUpRight size={19} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
