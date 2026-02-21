import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'; // Your contact styles file
import headshot from '../assets/headshot.jpg';
import { config } from '../config';
// Adjust path/filename if needed

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<{ message: string; isSuccess: boolean } | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        config.emailjs.serviceId,
        config.emailjs.templateId,
        form.current,
        config.emailjs.publicKey
      )
      .then(
        () => {
          setStatus({ message: 'Message sent successfully! 🎶', isSuccess: true });
          form.current?.reset();
        },
        (error) => {
          console.error('EmailJS error:', error);
          setStatus({
            message: 'Failed to send message. Try again or email briggs@alumni.berklee.edu directly.',
            isSuccess: false,
          });
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p className="subtitle">
          I'd love to hear from you — collabs, feedback, questions, or just a hello.
        </p>
      </div>

      <div className="contact-content">
        {/* Left side: Info + headshot + invitation */}
        <div className="contact-info">
          <h2>Contact Me Directly</h2>

          {/* Headshot inside the card – now properly constrained */}
          <div className="headshot-container">
            <img
              src={headshot}
              alt="Jake Riggs - Musical Whiskey"
              className="contact-headshot"
            />
          </div>

          <p className="invitation-text">
            Would you like to connect to discuss music, collaborations, or just say hi? Whether you're reaching out with a job opportunty, feedback, or just want to chat about music, feel free to reach out.
          </p>

          <p className="email-highlight">
            <strong>Send me an email by filling out the form on this page, and I'll get back to you as soon as I can.</strong><br />
          </p>
        </div>

        {/* Right side: Contact form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={sendEmail} ref={form}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required rows={5} />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>

            {status && (
              <div className={`form-status ${status.isSuccess ? 'success' : 'error'}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;