import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">مرحباً، أنا</p>
        <h1 className="hero-name"> Ali Mhnna</h1>
        <h2 className="hero-title">مطور Full Stack</h2>
        <p className="hero-description">
          أقوم ببناء مواقع وتطبيقات ويب متكاملة من الواجهة الأمامية
          إلى قواعد البيانات باستخدام أحدث التقنيات
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            مشاريعي
          </a>
          <a href="#contact" className="btn btn-secondary">
            تواصل معي
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/ali-mhnna" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ali-mhnna-5090bb310" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/963935762054" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;