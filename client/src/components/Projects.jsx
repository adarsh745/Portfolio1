import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const ProjectCard = ({ project, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="project-card glass"
  >
    <div className="project-content">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      
      <div className="project-tech">
        {project.tags.map((tag, i) => (
          <span key={i} className="tech-tag">{tag}</span>
        ))}
      </div>
      
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer" className="link-btn">
          <FaGithub /> Code
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="link-btn accent">
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description: "A bidirectional communication platform enabling real-time messaging with typing indicators, delivery status, and presence monitoring. Built with event-driven architecture.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
      github: "https://github.com/adarsh745",
      demo: null 
    },
    {
      title: "TinyLink — URL Shortener",
      description: "Full-stack URL shortener with custom short codes, instant redirection, and analytics. Features rigorous DB schema design and optimized queries.",
      tags: ["React", "PostgreSQL", "Redis", "Express", "Node.js"],
      github: "https://github.com/adarsh745", 
      demo: null
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
