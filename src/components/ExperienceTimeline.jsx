import React from 'react';
import { experienceData } from '../data/portfolioData';
import './ExperienceTimeline.css';

const ExperienceTimeline = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        
        {/* Section Header */}
        <div className="experience-header">
          <div className="section-label-group">
            <span className="label-accent-line" aria-hidden="true"></span>
            <span className="label-caps">{experienceData[0].kicker}</span>
          </div>
          <h2 className="experience-headline">{experienceData[0].headline}</h2>
        </div>

        {/* Timeline Item */}
        <div className="timeline-block">
          {experienceData.map((exp, idx) => (
            <div className="experience-card" key={idx}>
              
              {/* Card Meta Row */}
              <div className="exp-meta-row">
                <div className="exp-role-group">
                  <span className="exp-status-dot" aria-hidden="true"></span>
                  <h3 className="exp-company">{exp.company}</h3>
                  <span className="exp-role-title">/ {exp.role}</span>
                </div>
                <div className="exp-date-group">
                  <span className="exp-duration">{exp.duration}</span>
                  <span className="exp-location">· {exp.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="exp-summary">{exp.description}</p>

              {/* Metrics Row */}
              <div className="exp-metrics-grid">
                {exp.metrics.map((m, mIdx) => (
                  <div className="metric-box" key={mIdx}>
                    <span className="metric-val">{m.value}</span>
                    <span className="metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Documented Contributions */}
              <div className="exp-contributions">
                <h4 className="contributions-title">ENGINEERING CONTRIBUTIONS &amp; ARCHITECTURE:</h4>
                <ul className="contributions-list">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="contribution-item">
                      <span className="contrib-bullet">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="exp-tech-row">
                {exp.technologies.map((t, tIdx) => (
                  <span key={tIdx} className="exp-tech-tag">{t}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceTimeline;
