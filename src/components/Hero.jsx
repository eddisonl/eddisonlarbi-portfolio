import React, { useEffect, useState } from 'react';
import './Hero.css';

const PHRASES = [
  'Frontend Developer.',
  'React Specialist.',
  'UI Craftsman.',
  'AI Consultant.',
];

function useTypingEffect(phrases) {
  const [text, setText] = useState('');
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phaseIndex];
    let timeout;

    if (!deleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
      } else {
        setDeleting(false);
        setPhaseIndex((p) => (p + 1) % phrases.length);
      }
    }

    setText(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phaseIndex, phrases]);

  return text;
}

function Hero() {
  const typed = useTypingEffect(PHRASES);

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-inner">
        <div className="hero-label">
          <span className="hero-label-dot" />
          Available for new opportunities
        </div>

        <h1 className="hero-name">
          Eddison<br />
          <span>Anim-Larbi</span>
        </h1>

        <div className="hero-title">
          <span className="hero-typed">{typed}</span>
          <span className="cursor" />
        </div>

        <p className="hero-desc">
          Frontend Developer specializing in React &amp; JavaScript, building
          performant web experiences. Based in Accra, Ghana — 2+ years shipping
          production software.
        </p>

        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">View Projects ↓</a>
          <a href="#contact" className="btn-ghost">Get In Touch →</a>
          <a
            href="https://github.com/eddisonl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            GitHub ↗
          </a>
        </div>

        <div className="hero-stats">
          {[
            { num: '2+',  label: 'Years Experience' },
            { num: '3+',  label: 'Projects Shipped' },
            { num: '3',   label: 'Certifications' },
            { num: '∞',   label: 'Lines of Code' },
          ].map(({ num, label }) => (
            <div className="stat" key={label}>
              <span className="stat-num">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-side" aria-hidden="true">
        <div className="hex hex-1" />
        <div className="hex hex-2" />
        <div className="hex hex-3" />
      </div>
    </section>
  );
}

export default Hero;
