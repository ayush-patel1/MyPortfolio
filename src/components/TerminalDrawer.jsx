import React, { useEffect } from 'react';
import Terminal from './Terminal';
import './TerminalDrawer.css';

const TerminalDrawer = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="terminal-drawer-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="terminal-drawer-container" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="terminal-drawer-header">
          <div className="terminal-drawer-info">
            <span className="terminal-indicator-dot"></span>
            <span className="label-caps">CLI TERMINAL — v2.5</span>
          </div>
          <button 
            className="terminal-close-btn" 
            onClick={onClose}
            aria-label="Close Terminal"
          >
            ✕ ESC
          </button>
        </div>
        <div className="terminal-drawer-body">
          <Terminal />
        </div>
      </div>
    </div>
  );
};

export default TerminalDrawer;
