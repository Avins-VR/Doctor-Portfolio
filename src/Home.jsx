import React from 'react';
import medicalGif from './assets/medical.gif'
import doctorImage from './assets/doctor.png'
import experienceImage from './assets/Experience.jpg'
import Contact from './Contact'
import Appointment from './Appointment'
import Service from './Service'


function Home() {
  return (
    <div className="home-container" >
      <nav className="navbar">
        <h1 className="logo">Dr. Arvind Menon</h1>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#appointment">Appointment</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>A decade of experience as a <span>Cardiologist</span></h2>
          <h3>Experience best-in-class heart care, diagnosis & personalized treatment plans</h3>
          <p>I am dedicated to improving patient outcomes through advanced treatments, compassionate care, clear communication, and a patient-first approach for your heart health and well-being.</p>
        </div>
        <img src={medicalGif} alt="Medical Animation" className="medical-gif" />
        <img src={doctorImage} alt="Dr. Arvind Menon" className="doctor-image" />
      </div>
      <div className="about-section">
        <h2 id="about">About Me</h2>
        <h3>Dr. Arvind Menon, MBBS, MD, DM (Cardiology)</h3>
        <p>Dr. Arvind Menon is a distinguished Cardiologist with over 20 years of extensive experience in diagnosing, managing, and treating a wide range of cardiovascular diseases. His career is marked by an unwavering commitment to excellence in patient care, blending advanced medical knowledge with a compassionate and personalized approach that has transformed countless lives.

Throughout his journey, Dr. Menon has mastered the latest techniques in interventional cardiology, preventive heart care, and chronic disease management. He believes in empowering patients through education and clear communication, ensuring they fully understand their condition and treatment options. His philosophy centers on treating not just the disease but the person behind it, recognizing that each patient’s journey is unique.

Dr. Menon has been instrumental in performing thousands of successful cardiac procedures — from simple angioplasties to complex interventions — earning the trust, respect, and gratitude of patients and peers alike. He is continuously engaged in research and professional development to stay at the forefront of cardiology innovations, bringing the best global practices to his patients. His dedication to continuous learning ensures that his patients benefit from the most advanced and effective treatments available today.

Beyond the operating room and consulting chamber, Dr. Menon is an active contributor to medical conferences and peer-reviewed journals. He frequently shares his expertise as a guest speaker at national and international cardiology forums and plays a pivotal role in mentoring the next generation of cardiologists. His work has earned him numerous accolades for excellence in cardiac care and contributions to the field.

Patients appreciate Dr. Menon not just for his technical expertise but also for his warm, approachable nature and genuine care. He builds lasting relationships based on trust, open dialogue, and mutual respect, taking time to listen and respond to every concern. His holistic approach extends to guiding patients on lifestyle modifications, preventive measures, and long-term wellness strategies that support healthier living.

Outside his practice, Dr. Menon is an advocate for heart health awareness in the community. He organizes regular outreach programs, workshops, and health camps to educate people about early detection, risk factor management, and the importance of a heart-healthy lifestyle. His commitment to patient education and community well-being reflects his belief that prevention is as important as cure.

With Dr. Arvind Menon, patients receive more than just world-class medical expertise — they find a trusted partner who walks with them on their journey to better heart health. His mission is to deliver comprehensive, compassionate cardiac care that empowers every patient to live life to its fullest, with a healthy heart and peace of mind.

</p>
      </div>

      {/* EXPERIENCE */}
      <div className="experience-section">
        <div className="experience-overlay"></div>
        <div className="experience-content">
          <div className="experience-item">
            <i className="bi bi-heart-pulse"></i>
            <p className="count">1700</p>
            <p>Surgeries</p>
          </div>
          <div className="experience-item">
            <i className="bi bi-people-fill"></i>
            <p className="count">50000</p>
            <p>Cases</p>
          </div>
          <div className="experience-item">
            <i className="bi bi-globe-central-south-asia"></i>
            <p className="count">5</p>
            <p>Countries</p>
          </div>
        </div>
      </div>
      <div className="expertise-section">
        <h2>Areas of Expertise</h2>
        <p>Over 20 years of extensive practice and global exposure have made Dr. Arvind Menon a trusted choice for comprehensive cardiac care</p>
        <ul>
          <li>Advanced diagnosis & management of complex heart diseases</li>
          <li>Coronary angiography & angioplasty (stent placement)</li>
          <li>Preventive cardiology & risk factor management</li>
          <li>Heart failure management & long-term care</li>
          <li>Treatment of arrhythmias & pacemaker implantation</li>
          <li>Minimally invasive cardiac procedures</li>
          <li>Non-invasive cardiac imaging & stress tests</li>
          <li>Hypertension & cholesterol management</li>
          <li>Lifestyle counselling for heart health</li>
          <li>Patient education & rehabilitation programs</li>
        </ul>
      </div>
      <div>
        <Service/>
        <Appointment/>
        <Contact/>
         <footer className="footer">
          <p>© 2025 Dr. Arvind Menon. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default Home
