import React from 'react';
import './About.css';

const INFO = [
  { key: 'Name',     value: 'Eddison Anim-Larbi Oheneaku' },
  { key: 'Role',     value: 'Frontend Developer' },
  { key: 'Location', value: 'Accra, Ghana 🇬🇭' },
  { key: 'Email',    value: 'eddisonlarbi402@gmail.com', link: 'mailto:eddisonlarbi402@gmail.com' },
  { key: 'Phone',    value: '+233 55 7700 568', link: 'tel:+233557700568' },
  { key: 'Status',   value: '● Open to Opportunities', highlight: true },
];

function About() {
  return (
    <section id="about" className="fade-section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">01 — About</div>
          <h2 className="section-title">The <em>Developer</em></h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a detail-oriented Frontend Developer with a passion for crafting clean,
              performant, and user-centric web interfaces. I specialize in React and JavaScript
              ecosystems, with solid experience extending into .NET Razor and ASP.NET Core
              for full-stack integration.
            </p>
            <p>
              At Persol Systems Limited, I've shipped production features across enterprise
              payroll and time-tracking platforms, collaborating closely with backend teams
              to deliver polished, integrated experiences. I'm also a certified AI consultant
              through ALX Ghana — always staying ahead of the curve.
            </p>
            <p>
              When I'm not writing code, I'm exploring how AI tools can accelerate development
              workflows and push frontend quality to the next level.
            </p>
          </div>

          <div className="about-info">
            {INFO.map(({ key, value, link, highlight }) => (
              <div className="info-row" key={key}>
                <span className="info-key">{key}</span>
                {link ? (
                  <a href={link} className="info-val info-link">{value}</a>
                ) : (
                  <span className={`info-val${highlight ? ' info-highlight' : ''}`}>{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
