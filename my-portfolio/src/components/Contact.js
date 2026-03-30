import React from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const phone = '963935762054';
  const email = 'alilearn27@gmail.com';
  
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">تواصل معي</h2>
      
      <div className="contact-cards">
        {/* WhatsApp */}
        <a 
          href={`https://wa.me/${phone}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-card-icon whatsapp">
            <FaWhatsapp />
          </div>
          <h4>واتساب</h4>
          <p dir="ltr">+963 935 762 054</p>
        </a>

        {/* Email */}
        <a 
          href={`mailto:${email}`}
          className="contact-card"
        >
          <div className="contact-card-icon email">
            <FaEnvelope />
          </div>
          <h4>البريد الإلكتروني</h4>
          <p style={{fontSize: '0.85rem'}}>alilearn27@gmail.com</p>
        </a>

        {/* Location */}
        <a 
          href="https://maps.google.com/?q=Damascus,Syria"
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-card-icon location">
            <FaMapMarkerAlt />
          </div>
          <h4>الموقع</h4>
          <p>دمشق، سوريا</p>
        </a>
      </div>

      {/* Social Links */}
      <div className="contact-socials">
        <a 
          href="https://github.com/ali-mhnna" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a 
          href="https://linkedin.com/in/ali-mhnna-5090bb310" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a 
          href={`https://wa.me/${phone}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
};

export default Contact;