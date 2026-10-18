import React from 'react';
import { achievementsData, codingProfiles } from '../data/portfolioData';
import './RecognitionSection.css';

const RecognitionSection = () => {
  return (
    <section className="recognition-section" id="recognition">
      <div className="recognition-container">
        
        {/* Section Header */}
        <div className="recognition-header">
          <div className="section-label-group">
            <span className="label-accent-line" aria-hidden="true"></span>
            <span className="label-caps">04 / RECOGNITION</span>
          </div>
          <h2 className="recognition-headline">Honours, Cohorts &amp; Community.</h2>
        </div>

        {/* Verified Achievements Grid */}
        <div className="achievements-list">
          {achievementsData.map((item, idx) => (
            <div className="achievement-row" key={idx}>
              <div className="ach-left">
                <span className="ach-numeral">{item.numeral}</span>
                <span className="ach-year">{item.year}</span>
              </div>
              <div className="ach-center">
                <h3 className="ach-title">{item.title}</h3>
                <p className="ach-desc">{item.description}</p>
              </div>
              <div className="ach-right">
                <span className="ach-badge">{item.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Coding Profiles */}
        <div className="coding-profiles-block">
          <div className="profiles-header-row">
            <span className="label-caps">VERIFIED PLATFORM PROFILES</span>
            <span className="label-caps profiles-meta">COMPETITIVE &amp; OPEN SOURCE</span>
          </div>

          <div className="profiles-grid">
            {codingProfiles.map((prof, pIdx) => (
              <a 
                key={pIdx}
                href={prof.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="profile-box"
              >
                <div className="profile-box-top">
                  <span className="profile-name">{prof.name}</span>
                  <span className="profile-arrow">↗</span>
                </div>
                <span className="profile-handle">@{prof.handle}</span>
                <span className="profile-metric">{prof.metric}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RecognitionSection;
