import React from 'react';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiRedis, SiPostgresql, SiExpress, SiSocketdotio, SiCplusplus, SiPostman } from 'react-icons/si';
import './Skills.css';

const SkillCategory = ({ title, skills, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="skill-category glass"
  >
    <h3 className="skill-category-title">{title}</h3>
    <div className="skill-list">
      {skills.map((skill, index) => (
        <div key={index} className="skill-badge">
          {skill.icon && <span className="skill-icon">{skill.icon}</span>}
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillsData = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <FaJs /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "C/C++", icon: <SiCplusplus /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> }
      ]
    },
    {
      title: "Frameworks & Technologies",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "React Native", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Socket.io", icon: <SiSocketdotio /> }
      ]
    },
    {
      title: "Tools & Fundamentals",
      skills: [
        { name: "GitHub", icon: <FaGitAlt /> },
        { name: "VS Code", icon: null },
        { name: "Postman", icon: <SiPostman /> },
        { name: "DSA", icon: null },
        { name: "Rest APIs", icon: null }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <SkillCategory 
              key={index} 
              title={category.title} 
              skills={category.skills} 
              delay={index * 0.2} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
