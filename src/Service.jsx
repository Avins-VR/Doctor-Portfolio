import React from 'react';
import { motion } from 'framer-motion';

// ✅ Full services data
const servicesData = [
  {
    title: 'Heart Health Checkups',
    description: 'Comprehensive screenings to assess your overall cardiac wellness and detect risks early.'
  },
  {
    title: 'ECG & Stress Tests',
    description: 'Advanced electrocardiograms and treadmill stress tests for accurate heart monitoring.'
  },
  {
    title: 'Coronary Angiography',
    description: 'Diagnostic imaging to detect blockages in your heart’s arteries.'
  },
  {
    title: 'Heart Failure Management',
    description: 'Long-term care and advanced therapies for patients with heart failure.'
  },
  {
    title: 'Arrhythmia Treatment & Pacemakers',
    description: 'Diagnosis and treatment of irregular heartbeats, including pacemaker implantation.'
  },
  {
    title: 'Non-invasive Cardiac Imaging',
    description: 'Stress tests, echocardiograms, and advanced imaging techniques.'
  },
  {
    title: 'Angioplasty & Stenting',
    description: 'Minimally invasive procedures to open narrowed arteries and restore blood flow.'
  },
  {
    title: 'Lifestyle Counselling & Rehab',
    description: 'Guidance and programs to promote long-term heart health and recovery.'
  },
  {
    title: 'Arrhythmia Treatment',
    description: 'Diagnosis and treatment plans for irregular heartbeats, including medication and procedures.'
  },
  {
    title: 'Cholesterol Management',
    description: 'Medication and lifestyle support to control cholesterol levels effectively.'
  },
  {
    title: 'Preventive Cardiology',
    description: 'Risk assessment and lifestyle guidance to prevent future heart disease.'
  },
  {
    title: 'Cardiac Rehabilitation',
    description: 'Structured recovery programs to restore health and improve quality of life post-treatment.'
  },
  {
    title: 'Hypertension Control',
    description: 'Personalized plans to manage high blood pressure and reduce cardiac risks.'
  },
  {
    title: 'Preventive Cardiology',
    description: 'Risk assessment and lifestyle guidance to prevent future heart disease.'
  }
];

// ✅ Framer Motion variants
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

function Services() {
  return (
    <motion.section 
      className="services-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* ✅ Galaxy Star Animation */}
      <div className="stars">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={`star-${i}`} className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 5}s`
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
          id="services"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Services Offered
        </motion.h2>

        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Comprehensive cardiac care tailored to your unique heart health needs with advanced diagnosis, effective treatment, and personalized lifestyle guidance for lasting well-being.
        </motion.p>

        <motion.div 
          className="services-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {servicesData.map((service, index) => (
            <motion.div 
              className="service-card"
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Services;