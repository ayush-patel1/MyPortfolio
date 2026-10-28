import React from 'react';
import { personalInfo } from '../data/portfolioData';
import './PortalHero.css';

const PortalHero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <section className="portal-section" id="hero" aria-labelledby="hero-title">
      <div className="portal-stage portal-stage-static">
        <div className="portal-static-layout">
          <div className="portal-title-wrapper portal-title-wrapper-open portal-static-copy">
            <p className="portal-eyebrow">
              <span className="hero-eyebrow-rule" aria-hidden="true" />
              FULL STACK / AGENTIC AI DEVELOPER
            </p>

            <h1 className="portal-title" id="hero-title">
              <span className="portal-title-solid">AYUSH</span>
              <span className="portal-title-outline">PATEL<span className="title-amber-dot">.</span></span>
            </h1>

            <p className="portal-headline">{personalInfo.heroHeadline}</p>
            <p className="portal-supporting">{personalInfo.heroSupporting}</p>

            <div className="hero-ctas">
              <button
                className="hero-btn hero-btn-primary"
                onClick={() => scrollToSection('work')}
              >
                Explore selected work <span aria-hidden="true">↗</span>
              </button>
              <button
                className="hero-btn hero-btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get in touch
              </button>
            </div>

          </div>

          <div className="portal-image-layer portal-static-image">
            <figure className="portal-photo-frame">
              <img
                src="/images/ayush-hero.jpg"
                alt="Ayush Patel standing outdoors"
                className="portal-bg-img"
                width="698"
                height="1024"
                fetchPriority="high"
              />
              <span className="photo-frame-border" aria-hidden="true" />
            </figure>
            <div className="hero-photo-caption" aria-hidden="true">
              <span className="hero-caption-line" />
              <span>A NOTE IN PROGRESS</span>
            </div>
            <svg className="hero-handdrawn-mark" viewBox="0 0 110 90" fill="none" aria-hidden="true">
              <path d="M8 66C22 16 70 3 98 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M82 17L99 28L93 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalHero;
