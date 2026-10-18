import React, { useEffect, useState, useRef } from 'react';
import './AboutMindset.css';

const AboutMindset = () => {
  const sectionRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const rel = (window.innerHeight - rect.top) * 0.12;
            setScrollOffset(rel);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="about-section" ref={sectionRef} id="about">
      <div className="about-container">
        
        {/* Outlined 01 Numeral Background Element */}
        <div className="about-outline-numeral" aria-hidden="true">
          01
        </div>

        {/* 12-Column Asymmetric Grid */}
        <div className="about-grid">
          
          {/* Left Column (8 cols): Content */}
          <div className="about-content-col">
            <div className="section-label-group">
              <span className="label-accent-line" aria-hidden="true"></span>
              <span className="label-caps about-kicker">01 / THE ENGINEERING MINDSET</span>
            </div>

            <h2 className="about-headline">
              I build beyond <span className="about-teal-accent">the interface.</span>
            </h2>

            <div className="about-body">
              <p className="about-lead">
                My work spans frontend experiences, backend systems, AI-powered workflows, and 
                infrastructure. I enjoy understanding how the pieces fit together, then engineering 
                solutions that are useful, testable, and reliable.
              </p>
              <p className="about-sub">
                Whether I&apos;m orchestrating AI agents, building data-driven applications, or connecting 
                services through APIs, my focus is on solving the underlying problem—not just making the 
                interface look good.
              </p>
            </div>

            {/* Core Tenets Checklist */}
            <div className="about-tenets">
              <div className="tenet-item">
                <span className="tenet-bullet">/</span>
                <span className="tenet-text">Deterministic Orchestration</span>
              </div>
              <div className="tenet-item">
                <span className="tenet-bullet">/</span>
                <span className="tenet-text">Defensive System Boundaries</span>
              </div>
              <div className="tenet-item">
                <span className="tenet-bullet">/</span>
                <span className="tenet-text">Observable AI Reasoning</span>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Floating Graphic / Motif */}
          <div className="about-visual-col">
            <div 
              className="about-orb-card"
              style={{
                transform: `translateY(${scrollOffset * 0.4}px) rotate(${scrollOffset * 0.15}deg)`
              }}
            >
              <div className="orb-frame">
                <img 
                  src="/images/ayush-hero.jpg" 
                  alt="Ayush Patel" 
                  className="orb-img" 
                />
              </div>
              <div className="orb-badge">
                <span className="orb-badge-dot"></span>
                <span className="label-caps">NIT RAIPUR &apos;27</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMindset;
