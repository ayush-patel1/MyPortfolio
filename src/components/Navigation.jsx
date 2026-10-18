import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import './Navigation.css';

const Navigation = ({ onOpenCommandPalette }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Keyboard shortcut listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenCommandPalette();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenCommandPalette]);

  const handleNavClick = (anchorId) => {
    setMobileMenuOpen(false);
    if (isHomePage) {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="nav-header">
      <div className="nav-container">
        {/* Left: Wordmark returns to top */}
        <Link to="/" className="nav-wordmark" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          AYUSH PATEL<span className="nav-dot">.</span>
        </Link>

        {/* Right: Section Links */}
        <nav className="nav-menu" aria-label="Main Navigation">
          {isHomePage ? (
            <>
              <a href="#work" onClick={(e) => { e.preventDefault(); handleNavClick('work'); }} className="nav-link">WORK</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} className="nav-link">ABOUT</a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }} className="nav-link">EXPERIENCE</a>
              <a href="#stack" onClick={(e) => { e.preventDefault(); handleNavClick('stack'); }} className="nav-link">STACK</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} className="nav-link">CONTACT</a>
            </>
          ) : (
            <>
              <Link to="/#work" className="nav-link">WORK</Link>
              <Link to="/#about" className="nav-link">ABOUT</Link>
              <Link to="/#experience" className="nav-link">EXPERIENCE</Link>
              <Link to="/#stack" className="nav-link">STACK</Link>
              <Link to="/#contact" className="nav-link">CONTACT</Link>
            </>
          )}
        </nav>

        {/* Actions: Command Palette & GitHub */}
        <div className="nav-actions">
          <button 
            className="nav-cmd-btn"
            onClick={onOpenCommandPalette}
            aria-label="Open Command Palette (Ctrl+K or Cmd+K)"
          >
            <span>COMMANDS</span>
            <kbd className="nav-kbd">⌘K</kbd>
          </button>

          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-icon-link"
            aria-label="GitHub Profile"
          >
            GH ↗
          </a>

          {/* Mobile hamburger toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {isHomePage ? (
            <>
              <a href="#work" onClick={(e) => { e.preventDefault(); handleNavClick('work'); }} className="mobile-nav-link">01 / WORK</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} className="mobile-nav-link">02 / ABOUT</a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }} className="mobile-nav-link">03 / EXPERIENCE</a>
              <a href="#stack" onClick={(e) => { e.preventDefault(); handleNavClick('stack'); }} className="mobile-nav-link">04 / STACK</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} className="mobile-nav-link">05 / CONTACT</a>
            </>
          ) : (
            <>
              <Link to="/#work" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">01 / WORK</Link>
              <Link to="/#about" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">02 / ABOUT</Link>
              <Link to="/#experience" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">03 / EXPERIENCE</Link>
              <Link to="/#stack" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">04 / STACK</Link>
              <Link to="/#contact" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">05 / CONTACT</Link>
            </>
          )}
          <button 
            className="mobile-cmd-btn"
            onClick={() => { setMobileMenuOpen(false); onOpenCommandPalette(); }}
          >
            COMMAND PALETTE (⌘K)
          </button>
        </div>
      )}
    </header>
  );
};

export default Navigation;
