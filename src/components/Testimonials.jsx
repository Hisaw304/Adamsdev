import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SectionHeader from "../components/SectionHeader";

const testimonials = [
  {
    name: "DXBStars Entertainment",
    role: "Entertainment & Show Booking • Dubai",
    initials: "DE",
    text: "Adams built our website around the way we actually run our entertainment business. The show listings and booking experience are much easier for visitors to use, and the site gives us a much stronger online presence.",
  },

  {
    name: "Seaside Partners",
    role: "Law Firm • Nigeria",
    initials: "SP",
    text: "We needed a website that felt credible without being overly complicated. Adams took the time to understand what we wanted and built something that represents the firm well and is easy for clients to navigate.",
  },

  {
    name: "KickPredict",
    role: "Football Prediction Platform • Nigeria",
    initials: "KP",
    text: "Adams understood that KickPredict needed more than just a nice-looking website. He built the interface around the prediction experience and made the platform feel like a proper product rather than a simple sports website.",
  },

  {
    name: "Apex Construct",
    role: "Construction Company • United State",
    initials: "AC",
    text: "The new website gives us a much better way to show our projects and explain what we do. Adams handled the design and development himself and was easy to communicate with throughout the project.",
  },

  {
    name: "Sikarite Ventures",
    role: "E-commerce & Grocery • Nigeria",
    initials: "SV",
    text: "We wanted something simple for customers to browse our products and place orders. Adams built the store around that idea instead of adding unnecessary features, and the final result is straightforward to use.",
  },

  {
    name: "Everything by Baliquity",
    role: "Bakery & Food Business • France",
    initials: "EB",
    text: "Adams did a great job turning our products into something people could actually explore online. The website feels like our brand and gives customers a much better way to see what we offer.",
  },

  {
    name: "Oladipupo",
    role: "Full Stack Developer • Personal Portfolio",
    initials: "OL",
    text: "I wanted a portfolio that felt different from the usual developer websites. Adams focused on the presentation and interactions as much as the development, and the result feels much closer to the kind of portfolio I had in mind.",
  },

  {
    name: "FreshMind Studio",
    role: "SaaS Application • Digital Product",
    initials: "FS",
    text: "Adams worked on the product interface and helped turn a collection of tools into a much more organized experience. The application feels easier to navigate now and the overall presentation is much stronger.",
  },

  {
    name: "SellaHub",
    role: "Marketplace Platform • Nigeria",
    initials: "SH",
    text: "Adams helped us build the marketplace from the ground up, including the listing experience and user dashboard. He paid attention to how the different parts of the platform connect instead of treating each page separately.",
  },

  {
    name: "Show Booking Client",
    role: "Entertainment & Booking Platform",
    initials: "SB",
    text: "The main thing we wanted was a booking experience that wasn't confusing for customers. Adams kept the flow straightforward and made the website work well across both desktop and mobile.",
  },

  {
    name: "Dance Class Client",
    role: "Dance Studio • Dubai",
    initials: "DC",
    text: "Our old online presence didn't really show what our classes were about. Adams created a much better way for people to see the classes, understand what we offer, and get in touch with us.",
  },

  {
    name: "Construction Client",
    role: "Construction & Development • Nigeria",
    initials: "CC",
    text: "We mainly needed a better way to present our work online. Adams organized the website around our projects and services, and it has made the business look much more established online.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const getCardClass = (index) => {
    const diff = (index - active + testimonials.length) % testimonials.length;

    if (diff === 0) return "testimonial-card active";
    if (diff === 1) return "testimonial-card next";
    if (diff === testimonials.length - 1) return "testimonial-card prev";
    if (diff === 2) return "testimonial-card next-far";
    if (diff === testimonials.length - 2) return "testimonial-card prev-far";
    return "testimonial-card hidden-card";
  };

  return (
    <section id="testimonial" className="testimonials-section px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="-Testimonials-"
          title="What Clients"
          highlight="Say"
          text="Real feedback from clients across different industries and regions, reflecting the quality, reliability, and impact of my work."
        />

        <div className="testimonials-slider">
          {testimonials.map((item, index) => (
            <div key={index} className={getCardClass(index)}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={18} />
                ))}
              </div>

              <p className="testimonial-text">{item.text}</p>
              {/* Divider */}

              <div className="testimonial-divider" />
              <div className="testimonial-user">
                <div className="testimonial-avatar">{item.initials}</div>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>

              <div className="quote-mark">”</div>
            </div>
          ))}
        </div>

        <div className="testimonial-controls">
          <button onClick={prevSlide} aria-label="Previous testimonial">
            <FiChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} aria-label="Next testimonial">
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
