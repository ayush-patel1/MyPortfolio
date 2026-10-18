import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';
import './ThrowableDeck.css';

const ThrowableDeck = () => {
  const [topIndex, setTopIndex] = useState(0);
  const [dragState, setDragState] = useState({ isDragging: false, dx: 0, dy: 0, rotation: 0 });
  const [throwing, setThrowing] = useState(null); // { direction: -1 | 1 }
  const deckRef = useRef(null);
  const startPos = useRef({ x: 0, y: 0 });
  const hasDragged = useRef(false);

  const total = projectsData.length;

  const throwCard = useCallback((direction) => {
    if (throwing) return;
    setThrowing({ direction });
    setTimeout(() => {
      setTopIndex((prev) => (prev + 1) % total);
      setThrowing(null);
      setDragState({ isDragging: false, dx: 0, dy: 0, rotation: 0 });
    }, 380);
  }, [throwing, total]);

  const prevCard = () => {
    if (throwing) return;
    setTopIndex((prev) => (prev - 1 + total) % total);
  };

  const handlePointerDown = (e) => {
    if (throwing) return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
    startPos.current = { x: e.clientX, y: e.clientY };
    hasDragged.current = false;
    setDragState({ isDragging: true, dx: 0, dy: 0, rotation: 0 });
  };

  const handlePointerMove = (e) => {
    if (!dragState.isDragging || throwing) return;
    const dx = e.clientX - startPos.current.x;
    const dy = (e.clientY - startPos.current.y) * 0.25;
    if (Math.abs(dx) > 6) {
      hasDragged.current = true;
    }
    const deckWidth = deckRef.current?.offsetWidth || 400;
    const rotation = (dx / deckWidth) * 20;
    setDragState({ isDragging: true, dx, dy, rotation });
  };

  const handlePointerUp = (e) => {
    if (!dragState.isDragging || throwing) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }

    const deckWidth = deckRef.current?.offsetWidth || 400;
    const threshold = deckWidth * 0.12;

    if (Math.abs(dragState.dx) > threshold) {
      throwCard(Math.sign(dragState.dx));
    } else {
      setDragState({ isDragging: false, dx: 0, dy: 0, rotation: 0 });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      throwCard(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      prevCard();
    }
  };

  return (
    <section className="releases-section" id="work">
      <div className="releases-container">
        
        {/* Left Column: Headline, Lede, Navigation Controls */}
        <div className="releases-info">
          <div className="section-label-group">
            <span className="label-accent-line" aria-hidden="true"></span>
            <span className="label-caps releases-kicker">SELECTED WORK / 04 CASE STUDIES</span>
          </div>

          <h2 className="releases-headline">
            Intelligent Systems. <br />
            <span className="headline-amber-accent">Engineered Reality.</span>
          </h2>

          <p className="releases-lede">
            Four production-grade systems spanning agentic AI workflow orchestration, 
            IoMT deep-learning cybersecurity, industrial operations platforms, and 
            developer investigation infrastructure.
          </p>

          <div className="deck-controls-row">
            <button 
              className="deck-nav-btn" 
              onClick={prevCard}
              aria-label="Previous project card"
            >
              ← PREV
            </button>
            <button 
              className="deck-nav-btn deck-nav-primary" 
              onClick={() => throwCard(1)}
              aria-label="Next project card"
            >
              NEXT SLEEVE →
            </button>
          </div>

          <div className="releases-quick-links">
            <span className="label-caps">DIRECT INDEX:</span>
            <div className="quick-links-list">
              {projectsData.map((p, idx) => (
                <Link key={p.id} to={p.links.caseStudy} className="quick-project-link">
                  <span className="quick-idx">{p.number}</span> {p.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 3-Card Stacked Deck */}
        <div className="deck-wrapper">
          <div 
            className="card-deck" 
            ref={deckRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            role="region"
            aria-label="Interactive project card deck. Use arrow keys or swipe to cycle."
          >
            {projectsData.map((project, index) => {
              const offset = (index - topIndex + total) % total;
              const isTop = offset === 0;

              // Render top 3 cards physically
              if (offset > 2) return null;

              let transformStyle = '';
              let opacityStyle = 1;
              let zIndexStyle = 10 - offset;
              let transitionStyle = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease';

              if (isTop) {
                if (throwing) {
                  const throwX = throwing.direction * 140;
                  const throwRot = throwing.direction * 35;
                  transformStyle = `translate(${throwX}%, -30px) rotate(${throwRot}deg) scale(0.96)`;
                  opacityStyle = 0;
                  transitionStyle = 'transform 0.38s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease';
                } else if (dragState.isDragging) {
                  transformStyle = `translate(${dragState.dx}px, ${dragState.dy}px) rotate(${dragState.rotation - 1}deg) scale(1.02)`;
                  transitionStyle = 'none';
                } else {
                  transformStyle = 'translate(0px, 0px) rotate(-1deg) scale(1)';
                }
              } else if (offset === 1) {
                transformStyle = 'translate(10px, -10px) rotate(3deg) scale(0.96)';
                opacityStyle = 0.85;
              } else if (offset === 2) {
                transformStyle = 'translate(-8px, -20px) rotate(-2deg) scale(0.92)';
                opacityStyle = 0.65;
              }

              return (
                <div
                  key={project.id}
                  className={`deck-card ${isTop ? 'deck-card-top' : ''}`}
                  style={{
                    transform: transformStyle,
                    opacity: opacityStyle,
                    zIndex: zIndexStyle,
                    transition: transitionStyle
                  }}
                  onPointerDown={isTop ? handlePointerDown : undefined}
                  onPointerMove={isTop ? handlePointerMove : undefined}
                  onPointerUp={isTop ? handlePointerUp : undefined}
                  onPointerCancel={isTop ? handlePointerUp : undefined}
                >
                  <div className="card-inner">
                    {/* Top Meta Bar */}
                    <div className="card-top-bar">
                      <span className="card-numeral">{project.number} / 04</span>
                      <span className="card-category-tag">{project.category}</span>
                    </div>

                    {/* Image / Visual Frame */}
                    <div className="card-visual-frame">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="card-artwork-img"
                        loading="lazy"
                        draggable="false"
                      />
                      <div className="card-artwork-overlay" />
                    </div>

                    {/* Title & Summary */}
                    <div className="card-body">
                      <h3 className="card-title">{project.title}</h3>
                      <p className="card-summary">{project.summary}</p>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="card-tech-list">
                      {project.stack.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="card-tech-pill">{tech}</span>
                      ))}
                    </div>

                    {/* Card Actions */}
                    <div className="card-actions-bar">
                      <Link 
                        to={project.links.caseStudy} 
                        className="card-cta-btn card-cta-primary"
                        onPointerDown={(e) => e.stopPropagation()}
                      >
                        EXPLORE CASE STUDY ↗
                      </Link>
                      
                      {project.links.demo && (
                        <a 
                          href={project.links.demo} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="card-cta-btn card-cta-secondary"
                          onPointerDown={(e) => e.stopPropagation()}
                        >
                          LIVE DEMO ↗
                        </a>
                      )}
                      {project.links.dashboard && (
                        <a 
                          href={project.links.dashboard} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="card-cta-btn card-cta-secondary"
                          onPointerDown={(e) => e.stopPropagation()}
                        >
                          DASHBOARD ↗
                        </a>
                      )}
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="card-cta-btn card-cta-ghost"
                        onPointerDown={(e) => e.stopPropagation()}
                      >
                        SOURCE ↗
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hint Line & Progress Indicators */}
          <div className="deck-meta-bar">
            <p className="deck-hint-line">SWIPE / DRAG SLEEVE OR USE ARROW KEYS [← / →]</p>
            <div className="deck-progress-dots" role="tablist" aria-label="Deck pagination">
              {projectsData.map((_, i) => (
                <button
                  key={i}
                  className={`progress-dot ${i === topIndex ? 'progress-dot-active' : ''}`}
                  onClick={() => setTopIndex(i)}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ThrowableDeck;
