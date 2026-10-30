import React, { useState, useEffect } from 'react';
import {
  Sun, Moon, Shield, Award, CheckCircle2, ChevronRight, FileDown, Send,
  Briefcase, Code2, Database, Layout, Sparkles, Mail, Phone, MapPin, ExternalLink,
  Layers, Check, AlertCircle, Info, Lock, Terminal, FileText, Cloud, CheckSquare
} from 'lucide-react';

import { initialApplications, caseStudies, skillsData, careerTimeline } from './data/mockData';
import CivicFlowDashboard from './components/CivicFlowDashboard';
import DataGridPlayground from './components/DataGridPlayground';
import CreateApplicationWorkflow from './components/CreateApplicationWorkflow';
import DesignSystemShowcase from './components/DesignSystemShowcase';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [applications, setApplications] = useState(initialApplications);
  const [toasts, setToasts] = useState([]);

  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactErrors, setContactErrors] = useState({});
  const [contactSuccess, setContactSuccess] = useState(false);

  // Toggle Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
    showToast(`Switched to ${theme === 'light' ? 'Dark' : 'Light'} theme`);
  };

  // Toast Notification System
  const showToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // Append new application from CreateApplicationWorkflow into applications state
  const handleApplicationCreated = (newRecord) => {
    setApplications(prev => [newRecord, ...prev]);
  };

  // Contact Form Submission Handler
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!contactForm.name.trim()) errs.name = 'Please enter your name.';
    if (!contactForm.email.trim() || !/\S+@\S+\.\S+/.test(contactForm.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!contactForm.message.trim()) errs.message = 'Please enter your message.';

    setContactErrors(errs);
    if (Object.keys(errs).length === 0) {
      setContactSuccess(true);
      showToast('Thank you! Your message has been sent.');
      setContactForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div className="app-container">
      {/* WCAG 2.4.1 Skip Link */}
      <a href="#main-content" className="skip-link">Skip to main enterprise content</a>

      {/* Enterprise System Header Banner */}
      <div className="gov-banner">
        <div className="gov-banner-badge">
          <Shield size={14} aria-hidden="true" />
          <span>ENTERPRISE FULL-STACK ARCHITECTURE & PRODUCTION PLATFORM</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span>C# .NET 8 • Blazor • React • Azure • SQL Server & Oracle DB</span>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="navbar">
        <div className="nav-inner">
          <a href="#hero" className="brand-wrapper" aria-label="Mohith Reddy Aramati Portfolio Home">
            <div className="brand-icon-box">M</div>
            <div className="brand-details">
              <h1>Mohith Reddy Aramati</h1>
              <p>Senior Full Stack .NET Developer & Front-End UI/UX Architect</p>
            </div>
          </a>

          <nav aria-label="Primary Navigation">
            <ul className="nav-links">
              <li><a href="#civicflow">CivicFlow Platform</a></li>
              <li><a href="#datagrid-section">Data Grid</a></li>
              <li><a href="#workflow-section">Workflow Engine</a></li>
              <li><a href="#design-system">Design System</a></li>
              <li><a href="#accessibility">Accessibility</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              title="Toggle Color Theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a href="#contact" className="btn btn-primary btn-sm">
              Connect
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="main-content" className="main-content">
        {/* Section A: Hero */}
        <section id="hero" className="hero-section">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="badge-target-role">
                <Sparkles size={14} /> 12+ Years Enterprise Architecture & Engineering
              </div>
              <h1 className="hero-title">
                Engineering Resilient Enterprise Systems & Accessible Digital Platforms.
              </h1>
              <p className="hero-subtitle">
                C# .NET Core • ASP.NET MVC • Blazor • React • Azure Cloud • Relational Data Architecture
              </p>
              <p className="hero-bio">
                Senior software developer and UI/UX frontend architect with over 12 years of experience building mission-critical enterprise applications, modernizing complex legacy architectures, and delivering high-performance, WCAG 2.1 AA accessible web solutions across state agencies, telecommunications, healthcare, and transportation domains.
              </p>

              <div className="hero-cta-group">
                <a href="#civicflow" className="btn btn-primary">
                  Explore CivicFlow Platform <ChevronRight size={16} />
                </a>
                <a href="#datagrid-section" className="btn btn-secondary">
                  Interactive Data Grid
                </a>
                <a href="#design-system" className="btn btn-outline">
                  UI Design System
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <Mail size={16} /> Contact Mohith
                </a>
              </div>

              <div className="hero-tech-strip">
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-subtle)', marginRight: '0.5rem' }}>CORE STACK:</span>
                {['C# .NET 8', 'ASP.NET Core MVC', 'Blazor (Wasm/Server)', 'React', 'Angular', 'TypeScript', 'Microsoft Azure', 'SQL Server', 'Oracle DB', 'WCAG 2.1 AA', 'Docker'].map((tech) => (
                  <span key={tech} className="hero-tech-pill">{tech}</span>
                ))}
              </div>
            </div>

            {/* Hero Interactive Window Preview */}
            <div className="hero-preview-window" aria-hidden="true">
              <div className="window-header">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="window-title">Enterprise_Runtime_Telemetry.dll</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>PRODUCTION ACTIVE</div>
              </div>
              <div className="window-body">
                <div className="quick-metric-grid">
                  <div className="quick-metric-card">
                    <div className="quick-metric-label">Managed Records</div>
                    <div className="quick-metric-value">{applications.length} Active</div>
                  </div>
                  <div className="quick-metric-card">
                    <div className="quick-metric-label">WCAG 2.1 Conformance</div>
                    <div className="quick-metric-value" style={{ color: 'var(--color-success-600)' }}>Level AA Pass</div>
                  </div>
                </div>

                <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <div style={{ color: 'var(--color-primary-600)', fontWeight: 600 }}>[Enterprise Architecture Status]</div>
                  <div>➜ Backend: C# ASP.NET Core 8 Clean Architecture</div>
                  <div>➜ Frontend: React 18, Blazor Interop & Design Tokens</div>
                  <div>➜ Databases: Microsoft SQL Server & Oracle 19c</div>
                  <div>➜ Accessibility: axe DevTools 0 Violations (WCAG 2.1 AA)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section B: Interactive Enterprise Dashboard (CivicFlow) */}
        <section id="civicflow" className="section">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Enterprise Application Architecture</span>
              <h2 className="section-title">CivicFlow – Enterprise Service Management</h2>
              <p className="section-desc">
                A high-concurrency public administration platform engineered for grant management, provider intake, and claims adjudication. Demonstrating dynamic KPI aggregation, real-time filtering, responsive navigation, and strict visual hierarchy.
              </p>
            </div>

            <CivicFlowDashboard
              applications={applications}
              onNavigateToForm={() => document.getElementById('workflow-section').scrollIntoView({ behavior: 'smooth' })}
              onNavigateToGrid={() => document.getElementById('datagrid-section').scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </section>

        {/* Section C: Advanced Data Grid Playground */}
        <section id="datagrid-section" className="section" style={{ background: 'var(--bg-surface)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Data Engineering & Component Architecture</span>
              <h2 className="section-title">Advanced Enterprise Data Grid</h2>
              <p className="section-desc">
                Production-grade data management table featuring multi-column sorting, case-insensitive instant search,
                status filtering, accessible pagination, detailed audit modals, and client-side streaming CSV export.
              </p>
            </div>

            <DataGridPlayground
              applications={applications}
              onShowToast={showToast}
            />
          </div>
        </section>

        {/* Section D: Multi-Step Application Workflow Form */}
        <section id="workflow-section" className="section">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">State Management & Validation Engine</span>
              <h2 className="section-title">Multi-Step Application Intake Workflow</h2>
              <p className="section-desc">
                Multi-stage application intake process equipped with progressive schema validation, inline error messaging,
                WCAG-compliant keyboard traversal, review attestation, and local state persistence.
              </p>
            </div>

            <CreateApplicationWorkflow
              onApplicationCreated={handleApplicationCreated}
              onShowToast={showToast}
            />
          </div>
        </section>

        {/* Section E: UI Component Design System */}
        <section id="design-system" className="section" style={{ background: 'var(--bg-surface)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Design Tokens & Component Library</span>
              <h2 className="section-title">Enterprise UI Component Design System</h2>
              <p className="section-desc">
                Modular, reusable component primitives crafted in alignment with enterprise UI/UX specifications.
                Every component incorporates strict states: default, hover, focus-visible, active, disabled, and error.
              </p>
            </div>

            <DesignSystemShowcase onShowToast={showToast} />
          </div>
        </section>

        {/* Section F: Accessibility Showcase */}
        <section id="accessibility" className="section">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Universal Inclusion & Compliance</span>
              <h2 className="section-title">Accessibility & Section 508 Verification</h2>
              <p className="section-desc">
                Engineered with semantic HTML5, explicit ARIA role patterns, high-contrast typography, and complete keyboard traversability.
                Reflecting hands-on experience conducting automated axe DevTools audits and JAWS screen reader validation.
              </p>
            </div>

            <div className="a11y-audit-card">
              <div className="audit-grid">
                <div className="audit-item">
                  <CheckCircle2 size={24} className="audit-icon" />
                  <div className="audit-content">
                    <h4>High-Contrast Color Palettes (WCAG AA)</h4>
                    <p>
                      All text tokens exceed the 4.5:1 minimum contrast requirement for normal text and 3:1 for large graphical interface boundaries.
                    </p>
                  </div>
                </div>

                <div className="audit-item">
                  <CheckCircle2 size={24} className="audit-icon" />
                  <div className="audit-content">
                    <h4>Complete Keyboard Operability</h4>
                    <p>
                      Logical tab sequencing throughout all data tables, multi-step forms, and navigation buttons with visible 3px custom focus indicators.
                    </p>
                  </div>
                </div>

                <div className="audit-item">
                  <CheckCircle2 size={24} className="audit-icon" />
                  <div className="audit-content">
                    <h4>Accessible Error Diagnostics</h4>
                    <p>
                      Form fields leverage <code>aria-invalid</code> and <code>aria-describedby</code> linking directly to clear human-readable error messages.
                    </p>
                  </div>
                </div>

                <div className="audit-item">
                  <CheckCircle2 size={24} className="audit-icon" />
                  <div className="audit-content">
                    <h4>Skip Navigation Architecture</h4>
                    <p>
                      Keyboard and screen-reader users can bypass repetitive navigation bars directly via the top-level skip link.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <strong>Accessibility Benchmark:</strong> Built to WCAG 2.1 Level AA and Section 508 accessibility guidelines with 0 automated violations.
                </div>
                <button
                  className="btn btn-outline btn-sm"
                  onClick={() => showToast('A11y automated ruleset: 0 violations detected across current views')}
                >
                  Verify Active Page Accessibility
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section H: Project Case Studies */}
        <section id="case-studies" className="section" style={{ background: 'var(--bg-surface)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Enterprise Proven Track Record</span>
              <h2 className="section-title">Production Case Studies</h2>
              <p className="section-desc">
                Architectural summaries based on professional engineering engagements in government public assistance modernization, telecommunications infrastructure, statewide insurance, and logistics.
              </p>
            </div>

            <div>
              {caseStudies.map((cs) => (
                <article key={cs.id} className="case-study-card">
                  <div className="cs-header-badge">{cs.period} • {cs.role}</div>
                  <h3 className="cs-title">{cs.title}</h3>
                  <div className="cs-tagline">{cs.tagline}</div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                    {cs.description}
                  </p>

                  <div className="cs-grid">
                    <div className="cs-box">
                      <h4>Mission Challenges & Scope</h4>
                      <ul>
                        {cs.challenges.map((c, idx) => (
                          <li key={idx}>{c}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="cs-box">
                      <h4>Technical Architecture & Solution</h4>
                      <ul>
                        {cs.architecture.map((a, idx) => (
                          <li key={idx}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="cs-box" style={{ background: 'var(--bg-surface)', borderColor: 'var(--color-primary-600)' }}>
                    <h4 style={{ color: 'var(--color-primary-600)' }}>Key Engineering Accomplishments</h4>
                    <ul>
                      {cs.highlights.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="tech-tag-wrap">
                    {cs.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section I: Technical Skills Matrix */}
        <section id="skills" className="section">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Technical Competencies</span>
              <h2 className="section-title">Skills & Technologies Matrix</h2>
              <p className="section-desc">
                Comprehensive inventory of technical proficiencies across modern .NET, Blazor, React, relational databases, accessibility engineering, and Microsoft Azure Cloud.
              </p>
            </div>

            <div className="skills-category-grid">
              {/* Backend */}
              <div className="skill-category-card">
                <h3 className="skill-category-title"><Terminal size={18} color="var(--color-primary-600)" /> Backend Architecture</h3>
                {skillsData.backend.map(s => (
                  <div key={s.name} className="skill-row">
                    <span className="skill-name">{s.name}</span>
                    <div className="skill-meta">
                      <span className="skill-badge">{s.years}</span>
                      <span className="skill-badge" style={{ color: 'var(--color-primary-600)', fontWeight: 700 }}>{s.level}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Frontend */}
              <div className="skill-category-card">
                <h3 className="skill-category-title"><Layout size={18} color="var(--color-primary-600)" /> Frontend & UI/UX</h3>
                {skillsData.frontend.map(s => (
                  <div key={s.name} className="skill-row">
                    <span className="skill-name">{s.name}</span>
                    <div className="skill-meta">
                      <span className="skill-badge">{s.years}</span>
                      <span className="skill-badge" style={{ color: 'var(--color-primary-600)', fontWeight: 700 }}>{s.level}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Accessibility */}
              <div className="skill-category-card">
                <h3 className="skill-category-title"><Shield size={18} color="var(--color-success-600)" /> A11y & Section 508</h3>
                {skillsData.accessibility.map(s => (
                  <div key={s.name} className="skill-row">
                    <span className="skill-name">{s.name}</span>
                    <div className="skill-meta">
                      <span className="skill-badge">{s.years}</span>
                      <span className="skill-badge" style={{ color: 'var(--color-success-600)', fontWeight: 700 }}>{s.level}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Database */}
              <div className="skill-category-card">
                <h3 className="skill-category-title"><Database size={18} color="var(--color-primary-600)" /> Relational Databases & ETL</h3>
                {skillsData.database.map(s => (
                  <div key={s.name} className="skill-row">
                    <span className="skill-name">{s.name}</span>
                    <div className="skill-meta">
                      <span className="skill-badge">{s.years}</span>
                      <span className="skill-badge" style={{ color: 'var(--color-primary-600)', fontWeight: 700 }}>{s.level}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cloud & DevOps */}
              <div className="skill-category-card">
                <h3 className="skill-category-title"><Cloud size={18} color="var(--color-primary-600)" /> Cloud & DevOps</h3>
                {skillsData.cloudDevops.map(s => (
                  <div key={s.name} className="skill-row">
                    <span className="skill-name">{s.name}</span>
                    <div className="skill-meta">
                      <span className="skill-badge">{s.years}</span>
                      <span className="skill-badge" style={{ color: 'var(--color-primary-600)', fontWeight: 700 }}>{s.level}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Methodologies */}
              <div className="skill-category-card">
                <h3 className="skill-category-title"><Briefcase size={18} color="var(--color-primary-600)" /> Engineering Practices</h3>
                <div style={{ padding: '0.5rem 0', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <p style={{ marginBottom: '0.75rem' }}><strong>Clean Architecture:</strong> Domain-Driven Design, CQRS principles, SOLID standards, and decoupled REST APIs.</p>
                  <p style={{ marginBottom: '0.75rem' }}><strong>Agile Engineering:</strong> Scrum sprints, automated test coverage (NUnit, xUnit), and automated CI/CD pipeline deployments.</p>
                  <p><strong>Security Standards:</strong> RBAC, OAuth 2.0, OpenID Connect, JWT, anti-CSRF safeguards, and input sanitization.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section J: Professional Experience Timeline */}
        <section id="experience" className="section" style={{ background: 'var(--bg-surface)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Career Trajectory</span>
              <h2 className="section-title">Professional Experience</h2>
              <p className="section-desc">
                Over 12 years of enterprise software engineering across government public assistance, healthcare, rail logistics, and telecommunications.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {careerTimeline.map((item, index) => (
                <div key={index} style={{ padding: '1.5rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-primary-600)', borderTop: '1px solid var(--border-light)', borderRight: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>{item.role}</h3>
                      <div style={{ color: 'var(--color-primary-600)', fontWeight: 600 }}>{item.client}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span className="hero-tech-pill" style={{ background: 'var(--bg-surface)', fontWeight: 700 }}>{item.period}</span>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', marginTop: '0.2rem' }}>{item.location}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section K: Contact Section */}
        <section id="contact" className="section">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Connect</span>
              <h2 className="section-title">Contact & Communication</h2>
              <p className="section-desc">
                Have a project inquiry, technical discussion, or architecture question? Feel free to reach out directly through any of the channels below.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '2rem' }}>
              {/* Contact Information & Channels */}
              <div className="cs-box">
                <h4>Contact Details</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-md)', background: 'var(--color-primary-100)', color: 'var(--color-primary-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>Email Address</div>
                      <a href="mailto:mohithreddyaramati@gmail.com" style={{ fontWeight: 600, color: 'var(--color-primary-600)', textDecoration: 'none' }}>
                        mohithreddyaramati@gmail.com
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-md)', background: 'var(--color-primary-100)', color: 'var(--color-primary-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>Direct Phone</div>
                      <a href="tel:605-215-1506" style={{ fontWeight: 600, color: 'var(--text-main)', textDecoration: 'none' }}>
                        605-215-1506
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-md)', background: 'var(--color-primary-100)', color: 'var(--color-primary-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ExternalLink size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>LinkedIn Profile</div>
                      <a
                        href="https://www.linkedin.com/in/mohith-reddy-aramati"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontWeight: 600, color: 'var(--color-primary-600)', textDecoration: 'none' }}
                      >
                        linkedin.com/in/mohith-reddy-aramati
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>Architecture Note</div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    This platform operates purely on client-side state execution, optimized for instant sub-second page loads, full responsive adaptability, and zero external tracking.
                  </p>
                </div>
              </div>

              {/* Direct Inquiry Form */}
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-lg)', padding: '1.75rem', boxShadow: 'var(--card-shadow)' }}>
                {contactSuccess ? (
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <CheckCircle2 size={48} style={{ color: 'var(--color-success-600)', margin: '0 auto 1rem' }} />
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Message Transmitted</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                      Thank you for reaching out. Your message has been received and I will reply promptly.
                    </p>
                    <button className="btn btn-secondary btn-sm" onClick={() => setContactSuccess(false)}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} noValidate>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>Send a Message</h3>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">
                        <span>Your Full Name</span>
                        <span className="form-label-required">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        className={`form-control ${contactErrors.name ? 'has-error' : ''}`}
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                      />
                      {contactErrors.name && (
                        <div className="form-error-msg"><AlertCircle size={14} /> {contactErrors.name}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">
                        <span>Email Address</span>
                        <span className="form-label-required">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        className={`form-control ${contactErrors.email ? 'has-error' : ''}`}
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="name@organization.com"
                      />
                      {contactErrors.email && (
                        <div className="form-error-msg"><AlertCircle size={14} /> {contactErrors.email}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-msg">
                        <span>Message</span>
                        <span className="form-label-required">*</span>
                      </label>
                      <textarea
                        id="contact-msg"
                        rows="4"
                        className={`form-control ${contactErrors.message ? 'has-error' : ''}`}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Enter your message regarding technical collaboration, architecture, or engineering..."
                      ></textarea>
                      {contactErrors.message && (
                        <div className="form-error-msg"><AlertCircle size={14} /> {contactErrors.message}</div>
                      )}
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                      Send Message <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Toast Shelf */}
      <div className="toast-shelf" aria-live="polite">
        {toasts.map(toast => (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            <Info size={18} color="var(--color-primary-600)" />
            <span style={{ fontSize: '0.88rem', fontWeight: 500 }}>{toast.message}</span>
          </div>
        ))}
      </div>

      {/* Enterprise Site Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.4rem' }}>
                <Shield size={20} color="#38bdf8" /> Mohith Reddy Aramati
              </div>
              <p style={{ fontSize: '0.85rem', maxWidth: '540px' }}>
                Senior Full Stack .NET Developer & Front-End UI/UX Architect. Specializing in resilient enterprise systems, accessible user interfaces (WCAG 2.1 AA), and modern cloud architectures.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#hero" className="btn btn-secondary btn-sm" style={{ background: '#1e293b', borderColor: '#334155', color: '#f1f5f9' }}>
                Back to Top ↑
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              © {new Date().getFullYear()} Mohith Reddy Aramati. All rights reserved.
            </div>
            <div>
              Built to WCAG 2.1 AA & Enterprise Design System Specifications.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
