import React from 'react';
import { achievementsData } from '../data/portfolioData';
import './RecognitionSection.css';

const RecognitionSection = () => {
  return (
    <section className="recognition-section" id="recognition">
      <div className="recognition-container">
        <div className="recognition-header">
          <div className="section-label-group">
            <span className="label-accent-line" aria-hidden="true"></span>
            <span className="label-caps">04 / RECOGNITION</span>
          </div>
          <h2 className="recognition-headline">Honours, Cohorts &amp; Community.</h2>
        </div>

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
      </div>
    </section>
  );
};

export default RecognitionSection;
