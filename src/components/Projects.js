import React from 'react';
import '../styles/Projects.css';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'To-Do List App',
    description: 'The To-Do List Application is a simple yet powerful tool...',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    hostedLink: 'https://yashashri7.github.io/To-Do-List-App/',
    repoLink: 'https://github.com/yashashri7/To-Do-List-App',
    imageUrl: process.env.PUBLIC_URL + '/images/To-DO.JPG' // Updated path
  },
  {
    title: 'Weather App',
    description: 'The Weather App is a web application that provides real-time weather information...',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    hostedLink: 'https://yashashri7.github.io/Weather-App/',
    repoLink: 'https://github.com/yashashri7/Weather-App',
    imageUrl: process.env.PUBLIC_URL + '/images/Weather.JPG' // Updated path
  },
  {
    title: 'Quiz App',
    description: 'The Interactive Quiz App is a web-based application designed...',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    hostedLink: 'https://yashashri7.github.io/Interactive-Quiz-App/',
    repoLink: 'https://github.com/yashashri7/Interactive-Quiz-App',
    imageUrl: process.env.PUBLIC_URL + '/images/Quiz.JPG' // Updated path
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
