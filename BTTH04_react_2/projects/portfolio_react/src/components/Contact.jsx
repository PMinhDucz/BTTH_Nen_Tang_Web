import React, { useState } from 'react';

function Contact() {
  // [STATE] Khởi tạo form data state object
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="section-subtitle text-center">Have a project in mind? Let's talk!</p>

        <div className="contact-card">
          <form>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="John Doe"
                  value={formData.name}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="john@example.com"
                  value={formData.email}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                placeholder="Project Inquiry"
                value={formData.subject}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="5"
                placeholder="Tell me about your project..."
                value={formData.message}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;