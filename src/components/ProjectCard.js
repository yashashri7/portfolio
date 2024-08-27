import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {project.imageUrl && (
        <a 
          href={project.hostedLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-image-link"
        >
          <img src={project.imageUrl} alt={project.title} className="project-image" />
        </a>
      )}
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        {project.repoLink && (
          <a 
            href={project.repoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="repo-link"
          >
            View Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
