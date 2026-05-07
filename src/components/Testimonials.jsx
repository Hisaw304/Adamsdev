import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SectionHeader from "../components/SectionHeader";
const testimonials = [
  {
    name: "James R.",
    role: "Construction Company Owner • United States",
    initials: "JR",
    text: "Adams built a professional website for our construction company that truly reflects our brand. The layout, speed, and overall presentation exceeded our expectations. We've already seen an improvement in client inquiries since launch.",
  },
  {
    name: "Nadia K.",
    role: "Dance Studio Owner • Dubai",
    initials: "NK",
    text: "Working with Adams was smooth from start to finish. He developed a clean and modern platform for our dance classes and bookings that made it easy for clients to interact with our services. The result feels polished and very user-friendly.",
  },
  {
    name: "Chinedu O.",
    role: "Bakery Business Owner • Nigeria",
    initials: "CO",
    text: "Adams created a beautiful and functional website for my baking business. The design highlights our products perfectly, and customers can now easily browse and place orders. It has really improved how we present our brand online.",
  },
  {
    name: "Aisha M.",
    role: "Legal Consultant • Nigeria",
    initials: "AM",
    text: "The law firm website Adams built for us is clean, professional, and easy to navigate. He understood exactly what we needed and delivered a platform that builds trust with our clients.",
  },
  {
    name: "Samuel E.",
    role: "E-commerce Store Owner • Nigeria",
    initials: "SE",
    text: "Adams developed a smooth and responsive e-commerce website for my business. The shopping experience is seamless, and everything works exactly as expected. His attention to detail really stood out.",
  },
  {
    name: "Lukas W.",
    role: "Tech Founder • Germany",
    initials: "LW",
    text: "Adams helped us build a prediction-based web platform with a clean interface and solid performance. He approached the project with professionalism and delivered a product that feels stable and scalable.",
  },
  {
    name: "Oliver H.",
    role: "SaaS Founder • United Kingdom",
    initials: "OH",
    text: "Adams worked on our SaaS product and delivered a well-structured and intuitive interface. He understands both design and functionality, which made a big difference in the final result.",
  },
  {
    name: "Victor A.",
    role: "Real Estate Consultant • Nigeria",
    initials: "VA",
    text: "Adams built a clean and professional website that made it much easier for clients to explore our real estate listings. The layout is simple, fast, and very effective for showcasing properties.",
  },
  {
    name: "Sophie L.",
    role: "Startup Founder • France",
    initials: "SL",
    text: "Adams helped bring structure and clarity to our early-stage product. He built a responsive and well-organized interface that made our platform feel much more polished and ready for users.",
  },
  {
    name: "Ibrahim S.",
    role: "Business Owner • UAE",
    initials: "IS",
    text: "The website Adams delivered was exactly what we needed — modern, responsive, and easy to manage. He paid attention to both design and functionality, which made the final result feel complete.",
  },
  {
    name: "Carlos M.",
    role: "E-commerce Entrepreneur • Spain",
    initials: "CM",
    text: "Adams created a smooth and user-friendly shopping experience for our online store. Everything from product display to checkout works seamlessly, and the site feels fast and reliable.",
  },
  {
    name: "Grace T.",
    role: "Business Owner • United Kingdom",
    initials: "GT",
    text: "Adams has been managing and updating our website consistently. He’s reliable, responsive, and always ensures everything runs smoothly. It’s great having someone we can depend on long-term.",
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
