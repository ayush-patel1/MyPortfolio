import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import './CommandPalette.css';

const defaultCommands = [
  { id: 'home', label: 'Go to Top / Home', section: 'Navigation', shortcut: 'H', action: (nav, onClose) => { nav('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); onClose(); } },
  { id: 'work', label: 'View Selected Work', section: 'Navigation', shortcut: 'W', action: (nav, onClose) => { nav('/#work'); const el = document.getElementById('work'); if (el) el.scrollIntoView({ behavior: 'smooth' }); onClose(); } },
  { id: 'about', label: 'View Engineering Mindset (About)', section: 'Navigation', shortcut: 'A', action: (nav, onClose) => { nav('/#about'); const el = document.getElementById('about'); if (el) el.scrollIntoView({ behavior: 'smooth' }); onClose(); } },
  { id: 'experience', label: 'View Experience (Zscaler Internship)', section: 'Navigation', shortcut: 'E', action: (nav, onClose) => { nav('/#experience'); const el = document.getElementById('experience'); if (el) el.scrollIntoView({ behavior: 'smooth' }); onClose(); } },
  { id: 'stack', label: 'View Technical Arsenal (Stack)', section: 'Navigation', shortcut: 'S', action: (nav, onClose) => { nav('/#stack'); const el = document.getElementById('stack'); if (el) el.scrollIntoView({ behavior: 'smooth' }); onClose(); } },
  { id: 'recognition', label: 'View Recognition & Achievements', section: 'Navigation', shortcut: 'R', action: (nav, onClose) => { nav('/#recognition'); const el = document.getElementById('recognition'); if (el) el.scrollIntoView({ behavior: 'smooth' }); onClose(); } },
  { id: 'contact', label: 'Initiate Dispatch (Contact)', section: 'Navigation', shortcut: 'C', action: (nav, onClose) => { nav('/#contact'); const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); onClose(); } },
  
  // Projects
  { id: 'p1', label: 'Case Study: NeuroRepurpose AI', section: 'Projects', shortcut: '01', action: (nav, onClose) => { nav('/work/neurorepurpose-ai'); onClose(); } },
  { id: 'p2', label: 'Case Study: SecureGluco', section: 'Projects', shortcut: '02', action: (nav, onClose) => { nav('/work/secure-gluco'); onClose(); } },
  { id: 'p3', label: 'Case Study: Safety & Maintenance Portal', section: 'Projects', shortcut: '03', action: (nav, onClose) => { nav('/work/safety-management'); onClose(); } },
  { id: 'p4', label: 'Case Study: Support2Fix', section: 'Projects', shortcut: '04', action: (nav, onClose) => { nav('/work/support2fix'); onClose(); } },

  // External / Actions
  { id: 'github', label: 'Open GitHub Profile', section: 'External', shortcut: '↗', action: (nav, onClose) => { window.open(personalInfo.github, '_blank'); onClose(); } },
  { id: 'linkedin', label: 'Open LinkedIn Profile', section: 'External', shortcut: '↗', action: (nav, onClose) => { window.open(personalInfo.linkedin, '_blank'); onClose(); } },
  { id: 'email', label: 'Copy Email Address', section: 'Actions', shortcut: 'COPY', action: (nav, onClose, setFeedback) => { navigator.clipboard.writeText(personalInfo.email); setFeedback('Email address copied to clipboard!'); setTimeout(onClose, 800); } },
  { id: 'resume', label: 'Download Resume (PDF)', section: 'Actions', shortcut: 'DL', action: (nav, onClose) => { window.open(personalInfo.resumeUrl, '_blank'); onClose(); } }
];

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const filtered = defaultCommands.filter(c => 
    c.label.toLowerCase().includes(query.toLowerCase()) || 
    c.section.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setFeedback('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action(navigate, onClose, setFeedback);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="palette-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Command Palette">
      <div className="palette-modal" onClick={e => e.stopPropagation()} onKeyDown={handleKeyDown}>
        <div className="palette-search-row">
          <span className="palette-search-icon" aria-hidden="true">⌘</span>
          <input 
            ref={inputRef}
            type="text"
            className="palette-input"
            placeholder="Type a command or search sections, case studies, actions..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <kbd className="palette-kbd">ESC</kbd>
        </div>

        {feedback && (
          <div className="palette-feedback">
            <span className="feedback-dot"></span>
            <span>{feedback}</span>
          </div>
        )}

        <div className="palette-list" role="listbox">
          {filtered.length === 0 ? (
            <div className="palette-empty">No matching commands found.</div>
          ) : (
            filtered.map((item, index) => (
              <div 
                key={item.id}
                role="option"
                aria-selected={index === selectedIndex}
                className={`palette-item ${index === selectedIndex ? 'palette-item-active' : ''}`}
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => item.action(navigate, onClose, setFeedback)}
              >
                <div className="palette-item-left">
                  <span className="palette-item-section">{item.section}</span>
                  <span className="palette-item-label">{item.label}</span>
                </div>
                <span className="palette-item-shortcut">{item.shortcut}</span>
              </div>
            ))
          )}
        </div>

        <div className="palette-footer">
          <span className="palette-hint">Use <kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
          <span className="palette-hint">Use <kbd>↵</kbd> to execute</span>
          <span className="palette-hint">Use <kbd>ESC</kbd> to dismiss</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
