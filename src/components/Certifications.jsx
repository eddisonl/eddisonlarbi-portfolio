import React from 'react';
import './Certifications.css';

const CERTS = [
  { icon: '🤖', name: 'AI Career Essentials', issuer: 'ALX Ghana · 2024' },
  { icon: '⚙️', name: 'C# Basics for Beginners', issuer: 'Udemy — Mosh Hamedani' },
  { icon: '🔷', name: 'C# Intermediate: Classes, Interfaces & OOP', issuer: 'Udemy — Mosh Hamedani' },
];

const EDUCATION = [
  {
    year: '2021 — 2024',
    degree: 'BSc. Information Technology Management',
    school: 'University of Professional Studies, Accra (UPSA)',
    courses: ['Web Technologies', 'Database Management', 'C++', 'Computer Networks'],
  },
  {
    year: '2017 — 2020',
    degree: 'General Arts',
    school: 'Adisadel College',
    courses: ['Literature', 'Economics', 'Visual Arts'],
  },
];

function Certifications() {
  return (
    <section id="certifications" className="fade-section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">05 — Certifications</div>
          <h2 className="section-title">Credentials &amp; <em>Learning</em></h2>
        </div>

        <div className="cert-grid">
          {CERTS.map((c) => (
            <div className="cert-card" key={c.name}>
              <div className="cert-icon">{c.icon}</div>
              <div className="cert-body">
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="edu-section">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>
              <em>Education</em>
            </h2>
          </div>
          <div className="edu-grid">
            {EDUCATION.map((e) => (
              <div className="edu-card" key={e.degree}>
                <div className="edu-year">{e.year}</div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-school">{e.school}</div>
                <div className="edu-courses">
                  {e.courses.map((c) => (
                    <span className="edu-course" key={c}>{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
