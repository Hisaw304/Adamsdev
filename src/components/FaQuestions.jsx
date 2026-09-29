import { useState } from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
const FAQ_ITEMS = [
  {
    q: "How do you approach a new project?",
    a: "I start by understanding the business goals, users, technical requirements, and expected outcomes. From there, I define the project structure, technology stack, key features, and development approach before moving into implementation.",
  },

  {
    q: "Can you work on an existing application or codebase?",
    a: "Yes. I can work with existing applications, whether you need new features, performance improvements, bug fixes, refactoring, or a broader technical upgrade. I first review the codebase and architecture to understand how the system works before making changes.",
  },

  {
    q: "How do you handle scalability and performance?",
    a: "I build with scalability in mind from the beginning, focusing on efficient architecture, optimized queries, responsive interfaces, caching where appropriate, and clean, maintainable code. The goal is to make the application perform well as traffic, data, and functionality grow.",
  },

  {
    q: "Can you take ownership of the technical side of a project?",
    a: "Yes. I can take ownership from planning and architecture through development, testing, deployment, and ongoing improvements. I focus on making sound technical decisions while keeping the product aligned with its goals and requirements.",
  },

  {
    q: "How do you approach security?",
    a: "Security is considered throughout development rather than added at the end. I follow practices such as input validation, secure authentication, authorization, protected API endpoints, safe data handling, and proper environment and deployment configuration.",
  },

  {
    q: "What happens after the application is deployed?",
    a: "Deployment is not the end of the process. I can provide ongoing maintenance, monitoring, bug fixes, performance improvements, feature updates, and technical support as the product evolves.",
  },
];

export default function FaQuestions() {
  const [openIndex, setOpenIndex] = useState(0);
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
              <div className="faq-support-icon">
                <MessageCircle size={22} strokeWidth={2} />
              </div>

              <h3>Still have questions?</h3>

              <p>
                If you have a specific project in mind or need more details,
                feel free to reach out directly.
              </p>

              <div className="faq-support-actions">
                <a
                  href="https://wa.me/2347041624830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="faq-btn primary"
                >
                  <span>WhatsApp Me</span>
                  <ArrowUpRight size={18} strokeWidth={1.8} />
                </a>

                {/* <a href="#contact" className="faq-btn secondary">
                  Contact Form
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
