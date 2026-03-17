import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">&lt;EAL /&gt;</div>
        <p className="footer-copy">
          Built by <span>Eddison Anim-Larbi</span> · Accra, Ghana 🇬🇭 · {year}
        </p>
        <p className="footer-stack">React.js · JavaScript · CSS · Always building.</p>
        <div className="footer-links">
          <a href="https://github.com/eddisonl" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="footer-sep">·</span>
          <a href="http://www.linkedin.com/in/eddison-larbi-49a78a304" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="footer-sep">·</span>
          <a href="https://app.netlify.com/teams/eddisonlarbi402/projects" target="_blank" rel="noopener noreferrer">Netlify</a>
          <span className="footer-sep">·</span>
          <a href="mailto:eddisonlarbi402@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
