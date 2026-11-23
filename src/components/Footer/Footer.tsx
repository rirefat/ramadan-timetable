import React from 'react';
import { Globe, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="slick-footer">
      <div className="slick-footer-dock">
        {/* Left: Author & Collab indicator */}
        <div className="dock-left">
          <span className="live-status-dot" title="Available for collaboration">
            <span className="status-ping"></span>
            <span className="status-core"></span>
          </span>
          <span className="dock-credit">
            Crafted by{' '}
            <a
              href="https://rafiulrefat.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="author-name"
            >
              Rafiul Refat
            </a>
          </span>
          <a
            href="https://rafiulrefat.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="collab-pill"
            title="Open for collaboration & freelance projects"
          >
            Collab
          </a>
        </div>

        {/* Right: Quick Social Dock & Year */}
        <div className="dock-right">
          <div className="dock-actions" aria-label="Social and portfolio links">
            <a
              href="https://rafiulrefat.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="dock-link"
              title="Portfolio Website"
              aria-label="Portfolio"
            >
              <Globe size={15} />
            </a>

            <a
              href="https://github.com/rirefat"
              target="_blank"
              rel="noopener noreferrer"
              className="dock-link"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>

            <a
              href="https://www.linkedin.com/in/rirefat"
              target="_blank"
              rel="noopener noreferrer"
              className="dock-link"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>

            <a
              href="mailto:rirefat.official@gmail.com"
              className="dock-link"
              title="Email: rirefat.official@gmail.com"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>

          <span className="dock-divider"></span>
          <span className="dock-year">© 2026</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
