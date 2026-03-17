import React from 'react';
import './Projects.css';

const PROJECTS = [
  {
    num: '01',
    badge: 'Enterprise',
    name: 'PersonaX Payroll Bureau',
    desc: 'Enterprise-grade payroll processing system. Contributed to frontend logic, UI components, and integration with payroll APIs at Persol Systems Limited.',
    tags: ['React', 'Redux', 'ASP.NET', 'REST API'],
  },
  {
    num: '02',
    badge: 'Sole Developer',
    name: 'TimeTrakker Control Service',
    desc: 'Full attendance & time-tracking management web application. Built as sole frontend developer — from UI architecture to backend integration and deployment.',
    tags: ['React', 'C#', '.NET Razor', 'Docker'],
  },
  {
    num: '03',
    badge: 'Final Year Project',
    name: 'Crime Tracking System',
    desc: 'A web-based crime reporting and tracking platform developed for the Madina Police Station. Digitizes incident logging, case tracking, and reporting workflows.',
    tags: ['React', 'MySQL', 'JavaScript', 'CSS'],
  },
  {
    num: '04',
    badge: 'Government',
    name: 'EVAT Admin (GRA)',
    desc: "Assisted in restructuring the Ghana Revenue Authority's EVAT Admin frontend. Implemented frontend logic improvements and modernized the UI architecture.",
    tags: ['React', 'Bootstrap', 'Core UI', 'REST API'],
  },
];

function Projects() {
  return (
    <section id="projects" className="section-bg fade-section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">04 — Projects</div>
          <h2 className="section-title">What I've <em>Built</em></h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div className="proj-card" key={p.num}>
              <div className="proj-num">{p.num}</div>
              <div className="proj-badge">{p.badge}</div>
              <div className="proj-name">{p.name}</div>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-tags">
                {p.tags.map((t) => <span className="proj-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <a
            href="https://github.com/eddisonl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            View GitHub Profile ↗
          </a>
          <a
            href="https://app.netlify.com/teams/eddisonlarbi402/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Netlify Projects ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
