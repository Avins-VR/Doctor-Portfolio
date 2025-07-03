import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
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

function Appointment() {
  return (
    <motion.div 
      className="appointment-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="stars">
        {Array.from({ length: 60 }).map((_, i) => (
          <div 
            key={`star-${i}`} 
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <motion.h2 
        className="appointment-title"
        id="appointment"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Book an Appointment
      </motion.h2>

      <motion.p 
        className="appointment-description"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Don’t wait to prioritize your heart health — schedule your consultation with Dr. Arvind Menon for trusted, expert cardiac care and take the first step towards a healthier heart today.
      </motion.p>

      <motion.form 
        className="appointment-form"
        onSubmit={(e) => { 
          e.preventDefault(); 
          alert('Your appointment request has been submitted!'); 
        }}
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div className="form-group section-group" variants={fadeInUp}>
          <section>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="appointment-input"
              required
            />
          </section>
          <section>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="appointment-input"
              required
            />
          </section>
        </motion.div>

        <motion.div className="form-group" variants={fadeInUp}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="appointment-input"
            required
          />
        </motion.div>

        <motion.div className="form-group" variants={fadeInUp}>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="appointment-input"
            required
          />
        </motion.div>

        <motion.div className="form-group" variants={fadeInUp}>
          <input
            type="date"
            name="date"
            className="appointment-input"
            required
            style={{ color: 'grey' }}
          />
        </motion.div>

        <motion.div className="form-group" variants={fadeInUp}>
          <input
            type="time"
            name="time"
            className="appointment-input"
            required
            style={{ color: 'grey' }}
          />
        </motion.div>

        <motion.div className="form-group" variants={fadeInUp}>
          <textarea
            name="message"
            placeholder="Additional Information (Optional)"
            rows="4"
            className="appointment-textarea"
          />
        </motion.div>

        <motion.button 
          type="submit" 
          className="submit-btn"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          Book Appointment
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default Appointment;
