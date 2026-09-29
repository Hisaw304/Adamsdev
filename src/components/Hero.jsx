import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  const stats = [
    { value: 30, label: "Projects Completed" },
    { value: 4, label: "Years Experience" },
    { value: 30, label: "Businesses Helped" },
  ];

  useLayoutEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .from(".hero-left", {
          opacity: 0,
          y: 40,
          duration: 0.8,
        })
        .from(
          ".hero-right",
          {
            opacity: 0,
            x: 50,
            scale: 0.9,
            duration: 0.9,
          },
          "-=0.5"
        )
        .from(
          ".hero-stats",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.4"
        );

      gsap.from(".stat-item", {
        opacity: 0,
        y: 25,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-stats",
          start: "top 90%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-grid">
          {/* ========================= */}
          {/* LEFT CONTENT */}
          {/* ========================= */}

          <div className="hero-left">
            <div className="hero-heading">
              <p className="hero-greeting">Hello, I’m Adams.</p>

              <h1>
                I Build Digital Products
                <span> That Help Businesses Grow.</span>
              </h1>
            </div>
            <div className="hero-info">
              <p className="hero-text">
                I’m a Full Stack Developer with 4+ years of experience building
                modern websites and web applications for businesses, startups,
                and individuals. I’ve helped <strong>30+ clients</strong> bring
                their ideas to life through websites, platforms, and web
                applications built around the way their businesses actually
                work.
              </p>

              <p className="hero-proof">
                My approach goes beyond simply building a website. I focus on
                understanding the business goal first, then creating solutions
                that are{" "}
                <strong>
                  reliable, responsive, scalable, and built around real business
                  needs.
                </strong>
              </p>

              <a href="#contact" className="hero-btn">
                <span>Contact Me</span>
                <ArrowUpRight size={18} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* ========================= */}
          {/* RIGHT IMAGE */}
          {/* ========================= */}

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

        {/* ========================= */}
        {/* STATS */}
        {/* ========================= */}

        <div className="hero-stats">
          {stats.map((item) => (
            <div className="stat-item" key={item.label}>
              <h3>{item.value}+</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
