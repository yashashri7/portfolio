import React from 'react';
import '../styles/Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-info">
          <a href="mailto:yashashrisonar410@gmail.com" className="contact-link">
            <FaEnvelope /> yashashrisonar410@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/yashashri-sonar-b4856317b" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaLinkedin /> LinkedIn Profile
          </a>
          <a href="https://github.com/yashashri7" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaGithub /> GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
