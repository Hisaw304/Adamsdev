import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "Projects", "Services", "Contact", "Testimonial"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleScroll = (section) => {
    const el = document.getElementById(section.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {/* Navbar */}
      <nav className="w-full top-0 left-0 z-1000 bg-transparent">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Name */}
          <div
            className="flex flex-col leading-tight cursor-pointer"
            onClick={() => handleScroll("Home")}
          >
            <h1 className="text-xl font-bold text-[var(--ad-text)] tracking-wider">
              ADAMS
            </h1>
            <span className="text-sm text-[var(--ad-text-muted)]">
              Full Stack Developer
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 text-[var(--ad-text)]">
            {navLinks.map((link) => (
              <li
                key={link}
                className="nav-link cursor-pointer"
                onClick={() => handleScroll(link)}
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[var(--ad-text)]"
          >
            <div className={`hamburger ${open ? "open" : ""}`}>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {/* Availability badge */}
        <div className="flex justify-center mt-2">
          <div className="availability-badge">
            <span className="dot"></span>
            Available for work
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-wrapper ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      >
        <div
          className="mobile-card-advanced"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link, index) => (
            <div key={link}>
              <div
                className="mobile-link-advanced"
                onClick={() => {
                  handleScroll(link);
                  setOpen(false);
                }}
              >
                {link}
              </div>

              {index !== navLinks.length - 1 && (
                <div className="mobile-divider" />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
