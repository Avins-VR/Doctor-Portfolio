import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

function Contact() {
  return (
    <motion.section 
      className="contact-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
       <div className="image-animations">
    {Array.from({ length: 40}).map((_, i) => (
      <div key={`star-${i}`} className="shape star"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${5 + Math.random() * 5}s`
        }}
      ></div>
    ))}

    {Array.from({ length: 20}).map((_, i) => (
      <div key={`heart-${i}`} className="shape heart"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${5 + Math.random() * 5}s`
        }}
      ></div>
    ))}

    {Array.from({ length: 20}).map((_, i) => (
      <div key={`hex-${i}`} className="shape hexagon"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${5 + Math.random() * 5}s`
        }}
      ></div>
    ))}
  </div>
      <div className="container">
        <motion.h2 
          className="section-title"
          id="contact"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to take charge of your heart health? Reach out today to book an appointment with Dr. Arvind Menon and experience world-class cardiac care you can trust.
        </motion.p>

        <motion.div 
          className="contact-details"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >

          <div className="contact-row">
            <motion.div className="contact-item" variants={fadeInUp}>
              <div className="icon">🏢</div>
              <h3>Office Address</h3>
              <p>
                <b>CardioCare Speciality Hospital</b><br />
                102 Mediview Plaza, MG Road, Near City Hospital,<br />
                Chennai, TN 600001
              </p>
            </motion.div>

            <motion.div className="contact-item" variants={fadeInUp}>
              <div className="icon">📞</div>
              <h3>Phone Number</h3>
              <a 
                href="tel:+919488715046"
                style={{
                  color: '#009dff',
                  textDecoration: 'none',
                  fontSize:'16px',
                  fontWeight: 'bold',
                  paddingTop: '30px',
                  display: 'inline-block'
                }}
              >
                +91 9488715046
              </a>
            </motion.div>
          </div>

          <div className="contact-row">
            <motion.div className="contact-item" variants={fadeInUp}>
              <div className="icon">📩</div>
              <h3>Email Address</h3>
              <a 
                href="mailto:dr.arvindmenon@gmail.com"
                style={{
                  color: '#009dff',
                  textDecoration: 'none',
                  fontSize:'16px',
                  fontWeight: 'bold',
                  paddingTop: '30px',
                  display: 'inline-block'
                }}
              >
                dr.arvindmenon@gmail.com
              </a>
            </motion.div>

            <motion.div className="contact-item" variants={fadeInUp}>
              <div className="icon">🕒</div>
              <h3>Office Hours</h3>
              <p>Mon–Fri: 8:00 AM – 6:00 PM<br />Sat: 9:00 AM – 2:00 PM</p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
