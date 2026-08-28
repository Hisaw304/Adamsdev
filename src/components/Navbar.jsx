import { useState, useEffect } from "react";
import {
  Home,
  FolderKanban,
  BriefcaseBusiness,
  Mail,
  MessageSquareQuote,
  Sun,
  Moon,
} from "lucide-react";

const navLinks = [
  {
    name: "Home",
    icon: Home,
  },
  {
    name: "Projects",
    icon: FolderKanban,
  },
  {
    name: "Services",
    icon: BriefcaseBusiness,
  },
  {
    name: "Contact",
    icon: Mail,
  },
  {
    name: "Testimonial",
    icon: MessageSquareQuote,
  },
];

export default function Navbar() {
  const [lightMode, setLightMode] = useState(() => {
    return localStorage.getItem("adams-theme") === "light";
  });

  const handleScroll = (section) => {
    const el = document.getElementById(section.toLowerCase());

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const toggleTheme = () => {
    setLightMode((prev) => {
      const next = !prev;

      document.body.classList.toggle("light-mode", next);
      localStorage.setItem("adams-theme", next ? "light" : "dark");

      return next;
    });
  };
  useEffect(() => {
    document.body.classList.toggle("light-mode", lightMode);
  }, []);
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* NAME - LARGE SCREEN ONLY */}
        <div className="navbar-brand" onClick={() => handleScroll("Home")}>
          <h1>ADAMS</h1>
          <span>Full Stack Developer</span>
        </div>

        {/* NAVIGATION */}
        <ul className="navbar-links">
          {navLinks.map(({ name, icon: Icon }) => (
            <li
              key={name}
              className="navbar-link"
              onClick={() => handleScroll(name)}
            >
              <Icon className="navbar-icon" />

              <span>{name}</span>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="navbar-actions">
          {/* Availability */}
          <div className="availability-badge">
            <span className="dot"></span>
            <span>Available for work</span>
          </div>

          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light mode"
          >
            {lightMode ? (
              <Moon className="theme-icon" />
            ) : (
              <Sun className="theme-icon" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
