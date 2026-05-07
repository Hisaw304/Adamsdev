import { useState } from "react";
import { MessageCircle } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
const FAQ_ITEMS = [
  {
    q: "How much do you charge for a project?",
    a: "Pricing depends on the scope, features, and complexity of the project. After understanding your requirements, I provide a clear and fair quote tailored to your needs.",
  },
  {
    q: "How long does it take to complete a website?",
    a: "Most projects take between 1 to 4 weeks depending on size and requirements. Larger or more complex platforms may take longer, but timelines are always discussed upfront.",
  },
  {
    q: "Do you work with clients internationally?",
    a: "Yes, I work with clients globally and communicate effectively through tools like WhatsApp, email, and video calls to ensure smooth collaboration.",
  },
  {
    q: "Can you help with design as well as development?",
    a: "Absolutely. I handle both UI/UX design and development, ensuring your website looks great and functions seamlessly.",
  },
  {
    q: "Do you offer ongoing support after delivery?",
    a: "Yes, I provide ongoing support including updates, bug fixes, performance improvements, and maintenance to keep your website running smoothly.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Yes, all websites I build are fully responsive and optimized for mobile, tablet, and desktop devices.",
  },
];

export default function FaQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="kp-faq">
      <div className="kp-faq-container">
        {/* HEADER */}
        <SectionHeader
          tag="-FAQ-"
          title="Frequently Asked"
          highlight="Questions"
          text="Answers to common questions about working with me, project timelines, pricing, and ongoing support."
        />

        <div className="kp-faq-grid">
          {/* LEFT */}
          <div className="kp-faq-list">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div key={i} className={`kp-faq-item ${isOpen ? "open" : ""}`}>
                  <button className="kp-faq-question" onClick={() => toggle(i)}>
                    <span>{item.q}</span>
                    <span className="kp-faq-icon">{isOpen ? "−" : "+"}</span>
                  </button>

                  <div className="kp-faq-answer">
                    {isOpen && <p>{item.a}</p>}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT */}
          <div className="faq-support">
            <div className="faq-support-card">
              <div className="faq-support-icon">💬</div>

              <h3>Still have questions?</h3>

              <p>
                If you have a specific project in mind or need more details,
                feel free to reach out directly.
              </p>

              <div className="faq-support-actions">
                <a
                  href="https://wa.me/your-number"
                  target="_blank"
                  className="faq-btn primary"
                >
                  WhatsApp Me
                </a>

                <a href="#contact" className="faq-btn secondary">
                  Contact Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
