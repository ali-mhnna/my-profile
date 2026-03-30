import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPhp, FaLaravel, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
    { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
    { name: 'Laravel', icon: <FaLaravel />, color: '#FF2D20' },
    { name: 'MySQL', icon: <FaDatabase />, color: '#4479A1' },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">المهارات</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;