import React, { useState } from 'react';
import './Contact.css';

const LINKS = [
  {
    icon: '✉',
    label: 'Email',
    value: 'eddisonlarbi402@gmail.com',
    href: 'mailto:eddisonlarbi402@gmail.com',
  },
  {
    icon: 'GH',
    label: 'GitHub',
    value: 'github.com/eddisonl',
    href: 'https://github.com/eddisonl',
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'eddison-larbi-49a78a304',
    href: 'http://www.linkedin.com/in/eddison-larbi-49a78a304',
  },
  {
    icon: 'NTL',
    label: 'Netlify',
    value: 'eddisonlarbi402 projects',
    href: 'https://app.netlify.com/teams/eddisonlarbi402/projects',
  },
  {
    icon: '☎',
    label: 'Phone',
    value: '+233 55 7700 568',
    href: 'tel:+233557700568',
  },
];

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in your name, email, and message.');
      return;
    }
    const mailto = `mailto:eddisonlarbi402@gmail.com?subject=${encodeURIComponent(
      form.subject || 'Portfolio Contact'
    )}&body=${encodeURIComponent(
      `From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section-bg fade-section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">06 — Contact</div>
          <h2 className="section-title">Let's <em>Connect</em></h2>
        </div>

        <div className="contact-grid">
          {/* Left column */}
          <div>
            <p className="contact-intro">
              Open to new opportunities, freelance projects, and collaborations.
              Whether you have a role, project, or just want to say hi — drop a
              message!
            </p>

            <div className="contact-links">
              {LINKS.map(({ icon, label, value, href }) => (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-link"
                  key={label}
                >
                  <div className="link-icon">{icon}</div>
                  <div className="link-info">
                    <div className="link-label">{label}</div>
                    <div className="link-value">{value}</div>
                  </div>
                  <span className="link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right column — form */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your message... *"
              value={form.message}
              onChange={handleChange}
              rows={5}
            />
            <button type="submit" className="btn-primary">
              {sent ? 'Opening mail client...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
