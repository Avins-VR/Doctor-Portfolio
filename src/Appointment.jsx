import React from 'react';

function Appointment() {
  return (
    <div className="appointment-section">
      <h2 className="appointment-title" id="appointment">Book an Appointment</h2>
      <p className="appointment-description">
        Don’t wait to prioritize your heart health — schedule your consultation with Dr. Arvind Menon for trusted, expert cardiac care and take the first step towards a healthier heart today.
      </p>

      <form className="appointment-form" onSubmit={(e) => { e.preventDefault(); alert('Your appointment request has been submitted!'); }}>
        <div className="form-group section-group">
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
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="appointment-input"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="appointment-input"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="date"
            name="date"
            className="appointment-input"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="time"
            name="time"
            className="appointment-input"
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            placeholder="Additional Information (Optional)"
            rows="4"
            className="appointment-textarea"
          />
        </div>

        <button type="submit" className="submit-btn">Book Appointment</button>
      </form>
    </div>
  );
}

export default Appointment;
