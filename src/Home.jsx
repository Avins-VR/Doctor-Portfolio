import React from 'react';
import { motion } from 'framer-motion';
import doctorImage from './assets/doctor.png';
import About from './About';
import Service from './Service';
import Appointment from './Appointment';
import Contact from './Contact';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Home() {
  return (
    <div className="home-container">
      <motion.nav 
        className="navbar"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="logo"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Dr. Arvind Menon
        </motion.h1>
        <motion.ul 
          className="nav-links"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {['Home', 'About', 'Services', 'Appointment', 'Contact'].map((item, index) => (
            <motion.li
              key={item}
              variants={fadeInUp}
              transition={{ delay: 0.1 * index }}
            >
              <a href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>

      <div className="hero-section">
        <motion.div 
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={fadeInLeft} transition={{ delay: 0.3 }}>
            <span className="wave">👋</span> Hi, I'm<br />
            <span className="gradient-text">Dr. Arvind Menon</span>
          </motion.h2>
          <motion.h3 variants={fadeInLeft} transition={{ delay: 0.5 }}>
            Cardiologist | Heart Care Specialist
          </motion.h3>
          <motion.p variants={fadeInLeft} transition={{ delay: 0.7 }}>
            I am dedicated to improving patient outcomes through advanced treatments, compassionate care, clear communication, and a patient-first approach for your heart health and well-being.
          </motion.p>
        </motion.div>

        <div className="doctor-visual">
          <motion.img 
            src={doctorImage} 
            alt="Dr. Arvind Menon" 
            className="doctor-image"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }} 
          />
         <div className="image-animations">
  {Array.from({ length: 10 }).map((_, i) => (
    <div key={`circle-${i}`} className="shape circle"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 0}s`,
        animationDuration: `${5 + Math.random() * 5}s`
      }}
    ></div>
  ))}

  {Array.from({ length: 6 }).map((_, i) => (
    <div key={`square-${i}`} className="shape square"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 0}s`,
        animationDuration: `${5 + Math.random() * 5}s`
      }}
    ></div>
  ))}

  {Array.from({ length: 6 }).map((_, i) => (
    <div key={`triangle-${i}`} className="shape triangle"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 0}s`,
        animationDuration: `${5 + Math.random() * 5}s`
      }}
    ></div>
  ))}
</div>
        </div>
      </div>

      <About/>
      <Service/>
      <Appointment/>
      <Contact/>

      <motion.footer 
        className="footer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>© 2025 Dr. Arvind Menon. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default Home;
