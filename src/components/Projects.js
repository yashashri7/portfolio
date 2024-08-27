import React from 'react';
import '../styles/Projects.css';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'To-Do List App',
    description: 'The To-Do List Application is a simple yet powerful tool designed to help users manage their tasks effectively. This web-based application allows users to add, delete, and mark tasks as complete. Utilizing local storage, the app ensures that tasks persist across page refreshes, providing a seamless user experience.',
    techStack: ['HTML', 'CSS','JavaScript'],
    hostedLink: 'https://yashashri7.github.io/To-Do-List-App/',
    repoLink: 'https://github.com/yashashri7/To-Do-List-App',
    imageUrl: '/images/To-DO.JPG' 
  },
  {
    title: 'Weather App',
    description: 'The Weather App is a web application that provides real-time weather information and forecasts. It enables users to search for weather data by city, view current weather conditions, and access a 5-day weather forecast. Designed with user experience in mind, the app ensures that users receive accurate and timely weather updates.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    hostedLink: 'https://yashashri7.github.io/Weather-App/',
    repoLink: 'https://github.com/yashashri7/Weather-App',
    imageUrl: '/images/Weather.JPG' 
      
  },
  {
    title: 'Quiz App',
    description: 'The Interactive Quiz App is a web-based application designed to provide users with a dynamic and engaging quiz experience. It allows users to test their knowledge on various topics by answering multiple-choice questions. The app features a responsive design, real-time feedback, and a user-friendly interface, making it an excellent tool for both casual users and educational purposes.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    hostedLink: 'https://yashashri7.github.io/Interactive-Quiz-App/',
    repoLink: 'https://github.com/yashashri7/Interactive-Quiz-App',
    imageUrl: '/images/Quiz.JPG' 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;