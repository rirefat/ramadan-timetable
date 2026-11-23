import React from 'react';
import { Globe, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-credit">
          <span>Designed & Developed by </span>
          <a
            href="https://rafiulrefat.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="author-link"
          >
            Rafiul Islam Refat
          </a>
        </div>

        <p className="collab-text">Open for collaboration & freelance opportunities</p>

        <div className="social-links" aria-label="Social and professional links">
          <a
            href="https://rafiulrefat.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            title="Portfolio Website"
          >
            <Globe size={15} />
            <span>Portfolio</span>
          </a>

          <a
            href="https://github.com/rirefat"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            title="GitHub Profile"
          >
            <Github size={15} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/rirefat"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            title="LinkedIn Profile"
          >
            <Linkedin size={15} />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:rirefat.official@gmail.com"
            className="social-btn"
            title="Send Email"
          >
            <Mail size={15} />
            <span>Email</span>
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Ramadan Timetable • Ramadan Kareem</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
