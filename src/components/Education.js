import React from 'react';
import '../styles/Education.css';

function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <h3>BE in Computer Engineering</h3>
          <p>Alard College of Engineering and Management Pune</p>
          <p>Year of Graduation: 2024</p>
        </div>
        <div className="education-item">
          <h3>Diploma in Computer Engineering</h3>
          <p>G. H. Raisoni Polytechnic Jalgaon</p>
          <p>Year of Completion: 2021</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
