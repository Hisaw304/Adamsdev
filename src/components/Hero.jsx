import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  const stats = [
    { value: 35, label: "Projects Completed" },
    { value: 4, label: "Years Experience" },
    { value: 30, label: "Happy Clients" },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // =========================
      // HERO INTRO
      // =========================

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .from(".hero-left", {
          opacity: 0,
          y: 40,
          duration: 0.7,
        })
        .from(
          ".hero-right",
          {
            opacity: 0,
            x: 60,
            scale: 0.8,
            duration: 0.8,
          },
          "-=0.45"
        );

      // =========================
      // STATS
      // =========================

      gsap.from(".stat-item", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".hero-stats",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-grid">
          {/* LEFT CONTENT */}
          <div className="hero-left">
            {/* Heading Card */}
            <div className="hero-heading-card">
              <p className="hero-greeting">Hello, I’m Adams.</p>

              <h1>
                I Build High-Converting <br />
                Websites That Grow <br />
                Your Business
              </h1>
            </div>

            <div className="hero-info-card">
              <p className="hero-text">
                I design and develop modern, fast, and scalable websites
                tailored to help businesses and brands stand out, attract
                clients, and drive real results online.
              </p>

              <p className="hero-niche">
                I partner with <span>ambitious businesses</span> — including{" "}
                <span>law firms</span>, <span>real estate brands</span>,{" "}
                <span>startups</span>, <span>agencies</span>,{" "}
                <span>SaaS companies</span>, and more — to design and build
                digital experiences that drive real growth.
              </p>

              <a href="#contact" className="hero-btn">
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-right">
            <div className="home__img">
              <svg
                className="home__blob"
                viewBox="0 0 479 467"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="mask0" style={{ maskType: "alpha" }}>
                  <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                </mask>

                <g mask="url(#mask0)">
                  <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />

                  <image className="home__blob-img" href="/adamshero.png" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* FULL WIDTH STATS */}
        <div className="hero-stats">
          {stats.map((item, i) => (
            <div className="stat-item" key={i}>
              <h3>{item.value}+</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
