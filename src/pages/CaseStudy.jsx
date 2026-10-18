import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';
import './CaseStudy.css';

const CaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const currentIndex = projectsData.findIndex(p => p.id === projectId);
  const project = projectsData[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="casestudy-notfound">
        <h2>Case Study Not Found</h2>
        <p>The requested engineering case study does not exist.</p>
        <Link to="/#work" className="btn-back">← RETURN TO SELECTED WORK</Link>
      </div>
    );
  }

  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <article className="casestudy-page">
      
      {/* Top Breadcrumb & Return Nav */}
      <div className="casestudy-top-nav">
        <Link to="/#work" className="casestudy-back-link">
          ← BACK TO SELECTED WORK
        </Link>
        <span className="casestudy-code-badge">{project.number} / 04</span>
      </div>

      {/* Hero Header */}
      <header className="casestudy-hero">
        <div className="casestudy-container">
          <div className="section-label-group">
            <span className="label-accent-line" aria-hidden="true"></span>
            <span className="label-caps">{project.category}</span>
          </div>

          <h1 className="casestudy-title">{project.title}</h1>
          <p className="casestudy-lead">{project.summary}</p>

          {/* Action CTAs */}
          <div className="casestudy-hero-actions">
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="cs-btn cs-btn-primary">
                LIVE DEMO ↗
              </a>
            )}
            {project.links.dashboard && (
              <a href={project.links.dashboard} target="_blank" rel="noopener noreferrer" className="cs-btn cs-btn-primary">
                LIVE DASHBOARD ↗
              </a>
            )}
            {project.links.modelDemo && (
              <a href={project.links.modelDemo} target="_blank" rel="noopener noreferrer" className="cs-btn cs-btn-secondary">
                MODEL DEMO ↗
              </a>
            )}
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="cs-btn cs-btn-secondary">
              VIEW REPOSITORY ↗
            </a>
          </div>

          {/* Tech Stack Pills */}
          <div className="casestudy-stack-row">
            <span className="label-caps">STACK:</span>
            {project.stack.map((s, idx) => (
              <span key={idx} className="cs-stack-pill">{s}</span>
            ))}
          </div>

          {/* Disclaimer / Technical Transparency */}
          {project.disclaimer && (
            <div className="cs-disclaimer-box">
              <span className="disclaimer-dot" aria-hidden="true"></span>
              <p className="disclaimer-text">{project.disclaimer}</p>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Sections */}
      <div className="casestudy-body-container">
        
        {/* Section 1: System Architecture Diagram */}
        <section className="cs-section">
          <div className="cs-section-label">01 / ARCHITECTURE FLOW</div>
          <h2 className="cs-section-heading">Data &amp; Execution Pipeline</h2>
          <p className="cs-section-desc">
            End-to-end telemetry and execution topology mapping user interactions through 
            processing nodes to verified outputs.
          </p>

          <div className="architecture-diagram" role="region" aria-label="Architecture flow diagram">
            <div className="architecture-track">
              {project.architecture.map((node, nIdx) => (
                <React.Fragment key={nIdx}>
                  <div className="arch-node-card">
                    <span className="arch-node-step">{node.step}</span>
                    <h4 className="arch-node-title">{node.title}</h4>
                    <p className="arch-node-desc">{node.desc}</p>
                  </div>
                  {nIdx < project.architecture.length - 1 && (
                    <div className="arch-connector" aria-hidden="true">
                      <span className="arch-arrow">→</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Implemented Capabilities */}
        <section className="cs-section">
          <div className="cs-section-label">02 / CAPABILITIES</div>
          <h2 className="cs-section-heading">Core Engineering Features</h2>
          
          <div className="capabilities-grid">
            {project.capabilities.map((cap, cIdx) => (
              <div key={cIdx} className="capability-card">
                <span className="cap-bullet">/</span>
                <span className="cap-text">{cap}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Engineering Challenges & Trade-offs */}
        <section className="cs-section">
          <div className="cs-section-label">03 / TRADE-OFFS &amp; CHALLENGES</div>
          <h2 className="cs-section-heading">Problems Solved &amp; Constraints</h2>
          
          <div className="challenges-grid">
            <div className="challenges-col">
              <h3 className="challenges-col-title">Key Engineering Challenges:</h3>
              <ul className="challenges-list">
                {project.challenges.map((ch, chIdx) => (
                  <li key={chIdx} className="challenge-item">
                    <span className="ch-dash">—</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tradeoffs-col">
              <h3 className="challenges-col-title">Architectural Decision:</h3>
              <div className="tradeoff-box">
                <p>{project.tradeoffs}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Project Status Breakdown (for Support2Fix) */}
        {project.statusBreakdown && (
          <section className="cs-section">
            <div className="cs-section-label">04 / IMPLEMENTATION STATUS</div>
            <h2 className="cs-section-heading">Active Development Roadmap</h2>
            <p className="cs-section-desc">
              Transparent demarcation between verified working systems and in-flight features.
            </p>

            <div className="status-columns-grid">
              <div className="status-column status-col-done">
                <div className="status-col-header">
                  <span className="status-tag-dot dot-green"></span>
                  <h4>IMPLEMENTED</h4>
                </div>
                <ul className="status-items-list">
                  {project.statusBreakdown.implemented.map((item, idx) => (
                    <li key={idx}>✓ {item}</li>
                  ))}
                </ul>
              </div>

              <div className="status-column status-col-wip">
                <div className="status-col-header">
                  <span className="status-tag-dot dot-amber"></span>
                  <h4>IN PROGRESS</h4>
                </div>
                <ul className="status-items-list">
                  {project.statusBreakdown.inProgress.map((item, idx) => (
                    <li key={idx}>◐ {item}</li>
                  ))}
                </ul>
              </div>

              <div className="status-column status-col-planned">
                <div className="status-col-header">
                  <span className="status-tag-dot dot-teal"></span>
                  <h4>PLANNED ROADMAP</h4>
                </div>
                <ul className="status-items-list">
                  {project.statusBreakdown.planned.map((item, idx) => (
                    <li key={idx}>○ {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

      </div>

      {/* Prev / Next Case Study Navigation Strip */}
      <footer className="casestudy-pagination">
        <div className="pagination-container">
          <Link to={prevProject.links.caseStudy} className="pagination-card pag-prev">
            <span className="pag-label">← PREVIOUS RELEASE</span>
            <span className="pag-title">{prevProject.title}</span>
          </Link>
          <Link to={nextProject.links.caseStudy} className="pagination-card pag-next">
            <span className="pag-label">NEXT RELEASE →</span>
            <span className="pag-title">{nextProject.title}</span>
          </Link>
        </div>
      </footer>

    </article>
  );
};

export default CaseStudy;
