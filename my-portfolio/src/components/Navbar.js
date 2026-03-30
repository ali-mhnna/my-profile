import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'عني', href: '#about' },
    { name: 'المهارات', href: '#skills' },
    { name: 'المشاريع', href: '#projects' },
    { name: 'تواصل معي', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          {'<'}Ali{'/>'} 
        </a>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;