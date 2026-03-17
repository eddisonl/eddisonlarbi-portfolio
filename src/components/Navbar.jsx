import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#about',          label: 'About' },
  { href: '#skills',         label: 'Skills' },
  { href: '#experience',     label: 'Experience' },
  { href: '#projects',       label: 'Projects' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact',        label: 'Contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">&lt;EAL /&gt;</div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <div className="nav-dot" />
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
