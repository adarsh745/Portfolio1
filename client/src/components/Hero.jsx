import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-subtitle"
          >
            Hello, I'm
          </motion.h3>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-title"
          >
            Janjirala <span className="gradient-text">Adarsh</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-role"
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hero-description"
          >
            I build scalable web applications with modern technologies like React, Node.js, and MongoDB. Passionate about building efficient full-stack solutions and creating seamless user experiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hero-buttons"
          >
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="https://drive.google.com/file/d/13UDWp2IcFk-15RQC5U94k2g0YbGUoVcB/view?usp=sharing" download className="btn btn-outline">
              Download Resume <FaDownload />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="hero-socials"
          >
             <a href="https://github.com/adarsh745" target="_blank" rel="noreferrer"><FaGithub /></a>
             <a href="https://linkedin.com/in/adarshjanjirala" target="_blank" rel="noreferrer"><FaLinkedin /></a>
             <a href="https://leetcode.com/u/adarshjanjirala745/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-image-container"
        >
          <div className="hero-image-wrapper">
            <img src={profileImg} alt="Janjirala Adarsh" className="hero-profile-img" />
          </div>
        </motion.div>
      </div>
      
      <div className="hero-background">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
    </section>
  );
};

export default Hero;
