import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaCode, FaServer } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="about-text"
          >
            <p className="about-description">
              I am a results-driven <strong>Full Stack Developer</strong> and B.Tech (Computer Science - IoT) student at Sreenidhi Institute Of Science and Technology.
            </p>
            <p className="about-description">
              Currently serving as a Team Lead at MomPharmacy, I oversee the development of scalable e-commerce and logistics applications. My expertise lies in the <strong>MERN Stack (MongoDB, Express, React, Node.js)</strong>, utilizing advanced tools like Redis and Socket.io to build real-time, high-performance systems.
            </p>
            <p className="about-description">
              As a Technical Lead Board Member at IVC, I have mentored juniors and guided technical projects, honing my leadership and collaboration skills. I am passionate about solving complex problems and delivering seamless user experiences.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="about-cards"
          >
            <div className="about-card glass">
              <div className="card-icon"><FaCode /></div>
              <h3>Frontend</h3>
              <p>React.js, React Native, HTML/CSS</p>
            </div>
            <div className="about-card glass">
              <div className="card-icon"><FaServer /></div>
              <h3>Backend</h3>
              <p>Node.js, Express, MongoDB, PostgreSQL</p>
            </div>
            <div className="about-card glass">
              <div className="card-icon"><FaUserGraduate /></div>
              <h3>Education</h3>
              <p>B.Tech CS (IoT) - 2025</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
