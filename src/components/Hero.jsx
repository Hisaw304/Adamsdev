import { motion } from "framer-motion";
// import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const stats = [
    { value: 35, label: "Projects Completed" },
    { value: 4, label: "Years Experience" },
    { value: 30, label: "Happy Clients" },
  ];
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          {/* LEFT CONTENT */}
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Heading Card */}
            <div className="hero-heading-card">
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
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
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

                  <image className="home__blob-img" href="/profile1.png" />
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
        {/* ✅ FULL WIDTH STATS */}

        <div className="hero-stats" ref={ref}>
          {stats.map((item, i) => (
            <motion.div
              key={i}
              className="stat-item"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.2,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3>{item.value}+</h3>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
