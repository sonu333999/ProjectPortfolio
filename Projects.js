import React from 'react';
import './Projects.css';
// import projectsImg from "../assets/projects.jpg";


const projects = [
  {
    name: 'Quiz System',
    description: 'A full-stack application built with frontend and backend functionalities.',
  },
  {
    name: 'Travel App Prototype',
    description: 'An intuitive travel planning app designed as a UI/UX prototype.',
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
