import React from "react";
import "./Contact.css"; // for custom styling
// import ContactImg from "../assets/contact.jpg";


function Contact() {
  return (
    <section className="contact-section">
      <h2 className="text-center">Contact</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>Email</h3>
          <a href="mailto:sonukhajotiya01@gmail.com">sonukhajotiya01@gmail.com</a>
        </div>
        <div className="contact-card">
          <h3>GitHub</h3>
          <a href="https://github.com/sonu333999" target="_blank" rel="noopener noreferrer">
            github.com/sonu333999
          </a>
        </div>
        <div className="contact-card">
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/sonu999" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/sonu999
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
