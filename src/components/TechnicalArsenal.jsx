import React, { useState } from 'react';
import { arsenalData } from '../data/portfolioData';
import './TechnicalArsenal.css';

const TechnicalArsenal = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSkill, setActiveSkill] = useState(null);

  const currentCategory = arsenalData[activeCategory] || arsenalData[0];

  return (
    <section className="arsenal-section" id="stack">
      <div className="arsenal-container">
        
        {/* Section Header */}
        <div className="arsenal-header">
          <div className="section-label-group">
            <span className="label-accent-line" aria-hidden="true"></span>
            <span className="label-caps">03 / TOOLS OF THE TRADE</span>
          </div>
          <h2 className="arsenal-headline">The stack behind the systems.</h2>
          <p className="arsenal-lede">
            Curated technologies applied across distributed services, multi-agent reasoning, 
            and real-world production engineering.
          </p>
        </div>

        {/* Arsenal Interactive Grid */}
        <div className="arsenal-grid">
          
          {/* Category Tabs */}
          <div className="arsenal-tabs-col" role="tablist" aria-label="Technical skill categories">
            {arsenalData.map((cat, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={activeCategory === idx}
                className={`arsenal-tab-btn ${activeCategory === idx ? 'arsenal-tab-active' : ''}`}
                onClick={() => {
                  setActiveCategory(idx);
                  setActiveSkill(null);
                }}
              >
                <span className="tab-code">{cat.code}</span>
                <span className="tab-name">{cat.category}</span>
                <span className="tab-indicator" aria-hidden="true">→</span>
              </button>
            ))}
          </div>

          {/* Active Category Skills Panel */}
          <div className="arsenal-skills-col">
            <div className="skills-panel-header">
              <span className="panel-kicker">{currentCategory.code}</span>
              <h3 className="panel-title">{currentCategory.category}</h3>
            </div>

            <div className="skills-items-grid">
              {currentCategory.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx}
                  tabIndex={0}
                  className={`skill-item-card ${activeSkill === skill.name ? 'skill-item-active' : ''}`}
                  onMouseEnter={() => setActiveSkill(skill.name)}
                  onFocus={() => setActiveSkill(skill.name)}
                >
                  <div className="skill-card-top">
                    <span className="skill-accent-dash">—</span>
                    <h4 className="skill-name">{skill.name}</h4>
                  </div>
                  <p className="skill-context">{skill.context}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechnicalArsenal;
