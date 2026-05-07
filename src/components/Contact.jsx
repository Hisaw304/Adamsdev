import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiTwitter,
  FiInstagram,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";
import SectionHeader from "../components/SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!form.email || !form.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("Message sent successfully.");
      setForm({
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus(error.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section px-6 py-24 ">
      <div className="max-w-6xl mx-auto">
        <div className="contact-card contact-container">
          <div className="contact-grid"></div>
          {/* Heading */}
          <SectionHeader
            tag="-Contact-"
            title="Let’s Build Something"
            highlight="Great"
            text="Have a project in mind or need help bringing your ideas to life? I’m open to new opportunities and collaborations."
          />

          {/* Form */}
          <form className="contact-form mt-10" onSubmit={handleSubmit}>
            <div className="input-group">
              <FiMail className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group textarea-group">
              <FiSend className="input-icon textarea-icon" />
              <textarea
                name="message"
                placeholder="Your message"
                rows="6"
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="contact-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="contact-status">{status}</p>}
          </form>

          <div className="contact-info">
            <div className="contact-info-item">
              <FiMail className="contact-info-icon" />
              <div>
                <p className="contact-info-label">Email</p>
                <a
                  href="mailto:joeloladipupo@gmail.com"
                  className="contact-info-value"
                >
                  Blackadmas@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <FiMessageCircle className="contact-info-icon" />
              <div>
                <p className="contact-info-label">WhatsApp</p>
                <a
                  href="https://wa.me/2349042457823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-value"
                >
                  +234 704 162 4830
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <FiTwitter className="contact-info-icon" />
              <div>
                <p className="contact-info-label">X (Twitter)</p>
                <a href="#" className="contact-info-value">
                  @AdamsGunners
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <FiInstagram className="contact-info-icon" />
              <div>
                <p className="contact-info-label">Instagram</p>
                <a href="#" className="contact-info-value">
                  @BlackAdams
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
