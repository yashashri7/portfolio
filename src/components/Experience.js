import React from 'react';
import '../styles/Experience.css';

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-item">
          <h3>Consultant at PerpetualBlock AG</h3>
          <p>March 2023 - June 2023</p>
          <p className="text">I worked as a consultant in the development department, where I implemented dynamic front-end functionalities using ReactJS. This included creating interactive UI components, ensuring seamless navigation with React Router, and managing state with React Context and Redux. I also contributed to internal technology projects and assisted in developing web application features while collaborating with senior developers on various project tasks.</p>
        </div>
        <div className="experience-item">
          <h3>Internship at Siddhi Software</h3>
          <p>May 2020 - July 2020</p>
          <p className="text">Developed an e-commerce website in collaboration with colleagues, utilizing HTML, CSS, and PHP. The project involved designing a user-friendly interface with HTML and CSS to ensure an appealing and responsive layout. On the back end, PHP was used to handle server-side logic, manage user authentication, process transactions, and integrate with a database for product management and order processing. The website featured a secure checkout process, a user account system, and an admin panel for managing inventory and orders.</p>
        </div>
        <div className="experience-item">
          <h3>Volunteering at College</h3>
          <p className="text">Volunteered at college by assisting in the organization of a seminar titled "Medical Imaging 2023: AI in Imaging and Oncology." My responsibilities included coordinating event logistics, preparing materials, and handling guest registration. I also attended the seminar as a guest, where I gained valuable insights into advancements in medical imaging and the integration of artificial intelligence in oncology.</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
