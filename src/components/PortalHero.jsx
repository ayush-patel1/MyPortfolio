import React, { useEffect, useState, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import './PortalHero.css';

const PortalHero = () => {
  const heroRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroRef.current) {
            const heroTop = heroRef.current.offsetTop;
            const heroHeight = heroRef.current.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;

            const totalScrollable = heroHeight - windowHeight;
            if (totalScrollable > 0) {
              const currentScroll = scrollY - heroTop;
              const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
              setScrollProgress(progress);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  const p = reducedMotion ? 1 : scrollProgress;

  // PHASING & GUARANTEED HOLD PLATEAU:
  // Phase 1 (0 to 0.35): Curtains part smoothly outward, photo opens completely into crisp grey-white.
  // Phase 2 (0.35 to 0.85) [LOCKED DELAYED HOLD]: The stage locks firmly in place for over 50% of the runway (~1400px of scrolling).
  // The photo is 100% open, fully visible in its entire length with zero movement downward.
  // Phase 3 (0.85 to 1.0): Gentle exit transition into About section.
  const openProgress = Math.min(p / 0.35, 1);

  // Panels translate outward past width with generous margin so nothing is covered
  const leftPanelTransform = `translateX(-${openProgress * 140}%)`;
  const rightPanelTransform = `translateX(${openProgress * 140}%)`;

  // Photo begins in dark moody grey-black and brightens into luminous grey-white as it opens
  const photoBrightness = (0.38 + openProgress * 0.60).toFixed(2);
  const photoContrast = (1.30 - openProgress * 0.18).toFixed(2);

  // Accent dots travel outward toward opposite corners
  const dot1Transform = `translate(calc(-50% - ${openProgress * 42}vw), calc(-50% - ${openProgress * 38}vh))`;
  const dot2Transform = `translate(calc(-50% + ${openProgress * 42}vw), calc(-50% + ${openProgress * 38}vh))`;

  // Title placement:
  // Starts centered at 50% when closed, lowers gracefully across chest as curtain parts
  const titleTop = `calc(50% - ${openProgress * 3}vh)`;
  const letterSpacing = (-0.025 - openProgress * 0.015).toFixed(4) + 'em';

  const isFullyOpen = openProgress >= 1;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openCurtainSmoothly = () => {
    if (heroRef.current) {
      const heroTop = heroRef.current.offsetTop;
      const heroHeight = heroRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const targetScroll = heroTop + (heroHeight - windowHeight) * 0.45;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <section className="portal-section" ref={heroRef} id="hero">
      <div className={`portal-stage ${isFullyOpen ? 'portal-stage-open' : ''}`}>
        
        {/* Layer 1: Whole-Length Photo Frame — 100% complete photo with zero cropping */}
        <div className="portal-image-layer">
          <div className="portal-photo-frame">
            <img 
              src="/images/ayush-hero.jpg" 
              alt="Ayush Patel" 
              className="portal-bg-img"
              style={{
                filter: `grayscale(100%) contrast(${photoContrast}) brightness(${photoBrightness})`
              }}
            />
            <div className="photo-frame-border" aria-hidden="true" />
          </div>
        </div>

        {/* Layer 2: Soft radial veil to blend outer stage into #0A0C0E */}
        <div className="portal-radial-veil" aria-hidden="true" />

        {/* Layer 3: Two Solid Parting Curtains */}
        <div 
          className="portal-panel portal-panel-left" 
          style={{ transform: leftPanelTransform }}
          aria-hidden="true"
        />
        <div 
          className="portal-panel portal-panel-right" 
          style={{ transform: rightPanelTransform }}
          aria-hidden="true"
        />

        {/* Layer 4: Accent Dots travelling outward */}
        <div 
          className="portal-dot portal-dot-amber" 
          style={{ transform: dot1Transform }}
          aria-hidden="true"
        />
        <div 
          className="portal-dot portal-dot-teal" 
          style={{ transform: dot2Transform }}
          aria-hidden="true"
        />

        {/* Layer 5: Hero Central Presentation */}
        <div 
          className={`portal-title-wrapper ${isFullyOpen ? 'portal-title-wrapper-open' : ''}`}
          style={{ top: titleTop }}
        >
          <p className="portal-eyebrow">FULL STACK ENGINEERING / AGENTIC AI</p>
          <h1 className="portal-title" style={{ letterSpacing }}>
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
              EXPLORE SELECTED WORK
            </button>
            <button 
              className="hero-btn hero-btn-secondary" 
              onClick={() => scrollToSection('contact')}
            >
              GET IN TOUCH
            </button>
            {!isFullyOpen && (
              <button 
                className="hero-btn hero-btn-amber-outline" 
                onClick={openCurtainSmoothly}
                title="Open portal curtain instantly"
              >
                OPEN PORTAL ↓
              </button>
            )}
          </div>
        </div>

        {/* Layer 6: Minimal engineering ticker, limited to the hero stage */}
        <div className="hero-ticker" aria-hidden="true">
          <div className="hero-ticker-track">
            <span className="hero-ticker-accent">INTELLIGENT SYSTEMS</span>
            <span className="hero-ticker-separator">/</span>
            <span>FULL-STACK ENGINEERING</span>
            <span className="hero-ticker-separator">/</span>
            <span>AGENTIC AI WORKFLOWS</span>
            <span className="hero-ticker-separator">/</span>
            <span>INFRASTRUCTURE AUTOMATION</span>
            <span className="hero-ticker-separator">/</span>
            <span className="hero-ticker-accent">INTELLIGENT SYSTEMS</span>
            <span className="hero-ticker-separator">/</span>
            <span>FULL-STACK ENGINEERING</span>
            <span className="hero-ticker-separator">/</span>
            <span>AGENTIC AI WORKFLOWS</span>
            <span className="hero-ticker-separator">/</span>
            <span>INFRASTRUCTURE AUTOMATION</span>
            <span className="hero-ticker-separator">/</span>
          </div>
        </div>

        {/* Layer 7: Corner Metadata & Status */}
        <div className="corner-meta corner-top-left">
          <span className="label-caps">PORTFOLIO / 027</span>
        </div>

        <div className="corner-meta corner-top-right">
          <span className="label-caps">ROLE DISCIPLINE</span>
          <span className="meta-sub">FULL STACK &amp; AGENTIC AI</span>
        </div>

        <div className="corner-meta corner-bottom-left">
          <span className="label-caps">CURTAIN STATUS</span>
          <span className="meta-sub">
            {isFullyOpen ? '100% UNCOVERED · STAGE HELD' : `OPENING: ${Math.round(openProgress * 100)}%`}
          </span>
        </div>

        <div 
          className="corner-meta corner-bottom-right" 
          onClick={() => scrollToSection('about')} 
          style={{ cursor: 'pointer' }}
        >
          <span className="label-caps">
            {isFullyOpen ? 'PROCEED TO MINDSET ↓' : 'SCROLL TO UNCOVER CURTAIN...'}
          </span>
          <div className="scroll-indicator-rule">
            <div 
              className="scroll-indicator-fill" 
              style={{ width: `${Math.round(openProgress * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalHero;
