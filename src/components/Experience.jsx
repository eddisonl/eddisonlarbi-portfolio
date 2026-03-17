import React from 'react';
import './Experience.css';

const EXPERIENCE = [
  {
    date: 'Oct 2025 — Present',
    role: 'Frontend Developer',
    company: 'Persol Systems Limited · Full-time',
    bullets: [
      'Continued development on enterprise payroll and time-tracking systems post National Service.',
      'Building and maintaining high-quality frontend components to Persol\'s engineering standards.',
      'Collaborating cross-functionally with backend and product teams on new feature delivery.',
      'Practicing safe coding methodologies and company coding standards consistently.',
    ],
  },
  {
    date: 'Oct 2024 — Sept 2025',
    role: 'National Service Personnel — Frontend Developer',
    company: 'Persol Systems Limited · Contract',
    bullets: [
      'Sole frontend developer for TimeTrakker Control Service — built from scratch to production.',
      'Worked alongside the lead frontend developer on PersonaX Payroll Bureau.',
      'Orchestrated seamless frontend and backend API integrations, creating downloadable web apps.',
      'Maintained high code quality and applied safe coding practices across all deliverables.',
    ],
  },
  {
    date: 'Jun 2024 — Oct 2024',
    role: 'Frontend Intern',
    company: 'Persol Systems Limited · Internship',
    bullets: [
      'Helped restructure the EVAT Admin (GRA) frontend and implemented new UI logic.',
      'Contributed to performance improvements and code quality across the admin interface.',
      'Gained hands-on experience with enterprise-level React and .NET Razor integration.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="fade-section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">03 — Experience</div>
          <h2 className="section-title">Work <em>History</em></h2>
        </div>

        <div className="exp-timeline">
          {EXPERIENCE.map((job, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-dot" />
              <div className="exp-date">{job.date}</div>
              <div className="exp-role">{job.role}</div>
              <div className="exp-company">{job.company}</div>
              <ul className="exp-bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
