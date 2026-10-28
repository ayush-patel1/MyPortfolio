import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import './CloseSection.css';

const CloseSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="close-section" id="contact">
      <div className="close-container">
        <div className="close-dispatch-grid">
          <div className="close-text-block">
            <div className="section-label-group">
              <span className="label-accent-line" aria-hidden="true"></span>
              <span className="label-caps close-kicker">05 / OPEN TO INTERESTING PROBLEMS</span>
            </div>
            <h2 className="close-headline">Have a hard problem?<br />Let&apos;s build the solution.</h2>
            <p className="close-fineprint">
              I&apos;m interested in building useful software, exploring agentic systems, 
              and collaborating on technically challenging problems.
            </p>
          </div>

          <div className="close-actions-block">
            <a
              href={`mailto:${personalInfo.email}`}
              className="close-btn close-btn-primary"
            >
              LET&apos;S TALK ↗
            </a>
            <button
              className="close-btn close-btn-secondary"
              onClick={handleCopyEmail}
            >
              {copied ? 'EMAIL COPIED ✓' : 'COPY DISPATCH ADDRESS'}
            </button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="close-btn close-btn-ghost"
            >
              VIEW RESUME (PDF) ↗
            </a>
          </div>
        </div>

        <div className="footer-strip">
          <div className="footer-col footer-col-meta">
            <span className="label-caps">LOCATION</span>
            <span className="footer-val">{personalInfo.location}</span>
          </div>

          <div className="footer-col footer-col-status">
            <span className="label-caps">SIGNAL STATUS</span>
            <span className="footer-val">
              <span className="status-indicator-dot" aria-hidden="true"></span>
              RECEPTIVE TO SELECT CHALLENGES
            </span>
          </div>
        </div>
      </div>

      <div className="close-wordmark-wrapper" aria-hidden="true">
        <img
          src="/assets/ayush-patel-logo.svg"
          alt=""
          className="footer-brand-logo"
          width="220"
          height="185"
          loading="lazy"
        />
      </div>
    </footer>
  );
};

export default CloseSection;
