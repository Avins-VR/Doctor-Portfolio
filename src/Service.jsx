import React from 'react';

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

function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title" id="service">Services Offered</h2>
        <p className="section-subtitle">
          Comprehensive cardiac care tailored to your heart health needs.
        </p>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
