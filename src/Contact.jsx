import React from 'react';

function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title" id="contact">Contact</h2>
        <p className="section-subtitle">
          Ready to take charge of your heart health? Reach out today to book an appointment with Dr. Arvind Menon and experience world-class cardiac care you can trust.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <i class="bi bi-building"></i>
            <h3>Office Address</h3>
            <p><b>CardioCare Speciality Hospital</b><br/>102 Mediview Plaza,MG Road, Near City Hospital,<br />Chennai, TN 600001</p>

          </div>

          <div className="contact-item">
            <i className="bi bi-telephone-fill"></i>
            <h3>Phone Number</h3>
            <a href="tel:+919488715046"
            style={{ color: '#00cfff', textDecoration: 'none', fontWeight: 'bold',paddingTop: '30px',display: 'inline-block' }}>+91 9488715046</a>
          </div>

          <div className="contact-item">
            <i className="bi bi-envelope-fill"></i>
            <h3>Email Address</h3>
            <a href="mailto:dr.arvindmenon@gmail.com"
            style={{ color: '#00cfff', textDecoration: 'none', fontWeight: 'bold',paddingTop: '30px',display: 'inline-block'}}>dr.arvindmenon@gmail.com</a>

          </div>

          <div className="contact-item">
            <i class="bi bi-clock"></i>
            <h3>Office Hours</h3>
            <p>Mon-Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
