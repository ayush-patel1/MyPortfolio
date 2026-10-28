import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ onOpenCommandPalette }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => (
    typeof document !== 'undefined' && document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
  ));
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    let savedTheme = null;
    try {
      savedTheme = window.localStorage.getItem('portfolio-theme');
    } catch {
      savedTheme = null;
    }

    const initialTheme = savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    document.documentElement.dataset.theme = initialTheme;
    setTheme(initialTheme);
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', initialTheme === 'dark' ? '#171a1c' : '#f7f2e7');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
    try {
      window.localStorage.setItem('portfolio-theme', nextTheme);
    } catch {
      // The toggle still works for this session if storage is unavailable.
    }
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', nextTheme === 'dark' ? '#171a1c' : '#f7f2e7');
  };

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
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="nav-header">
      <div className="nav-container">
        <Link
          to="/"
          className="nav-wordmark"
          aria-label="Ayush Patel home"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src="/assets/ayush-patel-monogram.svg" alt="" className="nav-monogram" width="220" height="135" />
          <span>AYUSH PATEL<span className="nav-dot">.</span></span>
        </Link>

        <nav className="nav-menu" aria-label="Main Navigation">
          {isHomePage ? (
            <>
              <a href="#work" onClick={(e) => { e.preventDefault(); handleNavClick('work'); }} className="nav-link">WORK</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} className="nav-link">ABOUT</a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }} className="nav-link">EXPERIENCE</a>
              <a href="#stack" onClick={(e) => { e.preventDefault(); handleNavClick('stack'); }} className="nav-link">STACK</a>
              <a href="#profiles" onClick={(e) => { e.preventDefault(); handleNavClick('profiles'); }} className="nav-link">PROFILES</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} className="nav-link">CONTACT</a>
            </>
          ) : (
            <>
              <Link to="/#work" className="nav-link">WORK</Link>
              <Link to="/#about" className="nav-link">ABOUT</Link>
              <Link to="/#experience" className="nav-link">EXPERIENCE</Link>
              <Link to="/#stack" className="nav-link">STACK</Link>
              <Link to="/#profiles" className="nav-link">PROFILES</Link>
              <Link to="/#contact" className="nav-link">CONTACT</Link>
            </>
          )}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="nav-icon-link theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 2v2.1M12 19.9V22M4.93 4.93l1.48 1.48m11.18 11.18 1.48 1.48M2 12h2.1m15.8 0H22M4.93 19.07l1.48-1.48M17.59 6.41l1.48-1.48" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20.6 15.2A8.8 8.8 0 0 1 8.8 3.4 8.9 8.9 0 1 0 20.6 15.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>

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

      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {isHomePage ? (
            <>
              <a href="#work" onClick={(e) => { e.preventDefault(); handleNavClick('work'); }} className="mobile-nav-link">01 / WORK</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} className="mobile-nav-link">02 / ABOUT</a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }} className="mobile-nav-link">03 / EXPERIENCE</a>
              <a href="#stack" onClick={(e) => { e.preventDefault(); handleNavClick('stack'); }} className="mobile-nav-link">04 / STACK</a>
              <a href="#profiles" onClick={(e) => { e.preventDefault(); handleNavClick('profiles'); }} className="mobile-nav-link">05 / PROFILES</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} className="mobile-nav-link">06 / CONTACT</a>
            </>
          ) : (
            <>
              <Link to="/#work" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">01 / WORK</Link>
              <Link to="/#about" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">02 / ABOUT</Link>
              <Link to="/#experience" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">03 / EXPERIENCE</Link>
              <Link to="/#stack" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">04 / STACK</Link>
              <Link to="/#profiles" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">05 / PROFILES</Link>
              <Link to="/#contact" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">06 / CONTACT</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navigation;
