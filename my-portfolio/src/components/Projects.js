import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'منصة تعليمية',
      description: 'منصة تعليمية متكاملة تتيح للطلاب متابعة الدورات والدروس التفاعلية مع نظام إدارة للمحتوى التعليمي',
      emoji: '🎓',
      tech: ['React', 'Laravel', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/ali-mhnna',
      live: 'https://react-educ.netlify.app/',
    },
    {
      title: 'موقع شركة تبريد',
      description: 'موقع احترافي لشركة تبريد وتكييف يعرض الخدمات والمنتجات مع نظام تواصل وطلب خدمات',
      emoji: '❄️',
      tech: ['Bootstrap', 'CSS', 'React', 'Laravel', 'MySQL'],
      github: 'https://github.com/ali-mhnna',
      live: 'https://react-project-cooling-service-request.netlify.app/',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">المشاريع</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-emoji">
              <span>{project.emoji}</span>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noreferrer"
                  className="project-btn project-btn-live"
                >
                  <FaExternalLinkAlt />
                  معاينة الموقع
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="project-btn project-btn-github"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;