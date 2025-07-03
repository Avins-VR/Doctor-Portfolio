import React from 'react';
import { motion } from 'framer-motion';

// === Motion Variants ===
const slideInFromTop = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.2 }
  }
};

function About() {
  return (
    <section className="about-wrapper" id="about">
      <div className="animated-bg" />
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
      <motion.h2
        variants={slideInFromTop}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="subheading"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        A compassionate and experienced <span>cardiologist</span> dedicated to heart health and patient well-being.
      </motion.p>

      <div className="about-columns">
        <div className="left-column">
          <motion.div
            className="box journey-box"
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>Dr. Arvind Menon, MBBS, MD, DM (Cardiology)</h3>
            <p>
             Dr. Arvind Menon is a leading Cardiologist with over 20 years of experience treating complex heart conditions. Known for his skill in interventional cardiology and preventive care, he combines advanced treatment with genuine, patient-focused care. He has performed thousands of successful procedures and is dedicated to clear communication and empowering patients to improve their long-term heart health. Outside his practice, he mentors young cardiologists and promotes heart health awareness through community outreach. Patients value his expertise, trust, and compassionate approach
            </p>
          </motion.div>

          <motion.div
            className="box expertise-box"
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.2 }}
          >
            <h3>Areas of Expertise</h3>
            <motion.ul variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
              {[
                'Advanced diagnosis & management of complex heart diseases',
                'Coronary angiography & angioplasty (stent placement)',
                'Preventive cardiology & risk factor management',
                'Heart failure management & long-term care',
                'Treatment of arrhythmias & pacemaker implantation',
                'Minimally invasive cardiac procedures'
              ].map((item, i) => (
                <motion.li key={i} variants={fadeInLeft} transition={{ delay: 0.1 * i }}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        <motion.div
          className="box stats-box"
          variants={scaleIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
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
          <div className="stats-grid">
            <div className="top-row">
              <div className="stat-item">
                <div className="icon">❤️‍🩹</div>
                <motion.span style={{ color: '#ff02d9' }}>1700+</motion.span>
                <p>Surgeries</p>
              </div>
              <div className="stat-item">
                <div className="icon">👥</div>
                <motion.span style={{ color: '#00f895' }}>50,000+</motion.span>
                <p>Cases Handled</p>
              </div>
            </div>
            <div className="bottom-row">
              <div className="stat-item">
                <div className="icon">🌏</div>
                <motion.span style={{ color: '#a602ff' }}>5</motion.span>
                <p>Countries Served</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
