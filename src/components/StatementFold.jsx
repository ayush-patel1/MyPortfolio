import React, { useEffect, useState, useRef } from 'react';
import './StatementFold.css';

const StatementFold = () => {
  const foldRef = useRef(null);
  const [scrollYOffset, setScrollYOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (foldRef.current) {
            const rect = foldRef.current.getBoundingClientRect();
            // Drift based on fold's position in viewport
            const relativeOffset = (window.innerHeight - rect.top) * 0.15;
            setScrollYOffset(relativeOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="statement-section" ref={foldRef} id="statement">
      {/* Outlined index numeral behind or beside statement */}
      <div className="statement-outline-numeral" aria-hidden="true">
        01
      </div>

      <div className="statement-container">
        <div className="statement-content">
          <p className="label-caps statement-label">01 / CORE THESIS</p>
          <blockquote className="statement-text">
            Architecting resilient digital systems and tactile interfaces with{' '}
            <span className="statement-accent-amber">deliberate technical rigor</span>{' '}
            and architectural poise.
          </blockquote>
          <div className="statement-attribution">
            <span className="attribution-line" aria-hidden="true"></span>
            <span className="label-caps">AYUSH PATEL — NIT RAIPUR &apos;27</span>
          </div>
        </div>
      </div>

      {/* Circular floating image drifting and rotating off right edge */}
      <div 
        className="floating-orb-wrapper"
        style={{
          transform: `translateY(${scrollYOffset}px) rotate(${scrollYOffset * 0.35}deg)`
        }}
        aria-hidden="true"
      >
        <img 
          src="/images/ayush-hero.jpg" 
          alt="" 
          className="floating-orb-img" 
        />
      </div>
    </section>
  );
};

export default StatementFold;
