import React, { useEffect, useRef } from 'react';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    title: '⚡ Frontend',
    bars: [
      { name: 'React.js',          pct: 92 },
      { name: 'JavaScript',        pct: 90 },
      { name: 'HTML / CSS',        pct: 95 },
      { name: 'Redux',             pct: 80 },
      { name: 'React Hook Forms',  pct: 85 },
    ],
    tags: ['Bootstrap', 'Core UI', 'Responsive Design', 'Postman'],
  },
  {
    title: '🔧 Backend & DB',
    bars: [
      { name: 'C#',             pct: 75 },
      { name: '.NET Razor',     pct: 78 },
      { name: 'ASP.NET Core',   pct: 70 },
      { name: 'MySQL / MariaDB', pct: 72 },
    ],
    tags: ['REST APIs', 'JSON', 'Postman', 'API Integration'],
  },
  {
    title: '🚀 Tools & DevOps',
    bars: [
      { name: 'GitHub Actions',  pct: 75 },
      { name: 'Docker',          pct: 60 },
      { name: 'Jira',            pct: 80 },
      { name: 'Netlify',         pct: 85 },
    ],
    tags: ['VS Code', 'Visual Studio', 'BlackBox IDE', 'Inno Setup'],
  },
];

function SkillCard({ title, bars, tags }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const fills = cardRef.current?.querySelectorAll('.skill-fill');
    if (!fills) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fills.forEach((fill) => {
              fill.style.width = fill.dataset.w;
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-card" ref={cardRef}>
      <div className="skill-card-title">{title}</div>
      {bars.map(({ name, pct }) => (
        <div className="skill-item" key={name}>
          <div className="skill-name">
            <span>{name}</span>
            <span className="skill-pct">{pct}%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" data-w={`${pct}%`} />
          </div>
        </div>
      ))}
      <div className="skill-tag-row">
        {tags.map((t) => <span className="skill-tag" key={t}>{t}</span>)}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-bg fade-section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">02 — Skills</div>
          <h2 className="section-title">Tech <em>Stack</em></h2>
        </div>
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat) => (
            <SkillCard key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
