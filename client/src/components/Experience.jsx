import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const ExperienceItem = ({ role, company, duration, location, details, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
  >
    <div className="timeline-content glass">
      <div className="timeline-date">{duration}</div>
      <h3 className="timeline-role">{role}</h3>
      <h4 className="timeline-company">{company}</h4>
      <p className="timeline-location">{location}</p>
      <ul className="timeline-details">
        {details.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "MomPharmacy",
      duration: "Feb 2025 - Present",
      location: "Hyderabad, Telangana",
      details: [
        "Developing online pharmacy platform including E-commerce Web, User App, Delivery App, and Admin Dashboard.",
        "Building full-stack features using React.js, React Native, Node.js, MongoDB, Redis, and Socket.io.",
        "Implementing JWT Authentication, Redis caching, and optimized MongoDB queries.",
        "Managing scalable client state using Zustand and Redux."
      ]
    },
    {
      role: "Technical Lead Board Member",
      company: "IVC",
      duration: "Present", 
      location: "College/Org",
      details: [
        "Guiding technical projects and mentoring juniors.",
        "Leading development initiatives and fostering a collaborative environment."
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} index={index} />
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
