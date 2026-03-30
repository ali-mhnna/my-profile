import React from 'react';
import { FaGithub, FaLinkedin,  FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="https://github.com/ali-mhnna" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/ali-mhnna-5090bb310" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
       
      </div>
      <p>
        صُنع بـ <FaHeart className="heart" /> بواسطة علي © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;