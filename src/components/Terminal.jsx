import { useState, useEffect, useRef } from 'react';
import './Terminal.css';

const Terminal = () => {
  const [output, setOutput] = useState([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(true);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  const introText = `Welcome to Ayush's Portfolio Terminal
> Initializing...
> Loading developer profile...

Hey! I'm Ayush Patel
Full Stack Developer | NITRR IT'27
Building innovative web solutions

Type 'help' for available commands or click a suggestion below.`;

  useEffect(() => {
    // Auto-type intro
    let currentIndex = 0;
    const lines = introText.split('\n');
    const typeInterval = setInterval(() => {
      if (currentIndex < lines.length) {
        setOutput(prev => [...prev, { type: 'intro', content: lines[currentIndex] }]);
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 300);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const commands = {
    whoami: () => ({
      content: `
╔════════════════════════════════════════╗
║         DEVELOPER PROFILE              ║
╚════════════════════════════════════════╝

Name:     Ayush Patel
Role:     Full Stack Developer
Location: National Institute of Technology, Raipur
Status:   Building awesome web applications

About:
  Passionate developer focused on creating innovative
  solutions. Experienced in modern web technologies
  and collaborative development. Always learning and
  exploring new tech.

Interests:
  • Web Development
  • Agentic AI
  • Open Source Contribution
  • Problem Solving
  • Continuous Learning
      `
    }),

    skills: () => ({
      content: `
╔════════════════════════════════════════╗
║           TECH STACK                   ║
╚════════════════════════════════════════╝

Frontend:
  ▰▰▰▰▰▰▰▰▰░ React.js
  ▰▰▰▰▰▰▰▰░░ JavaScript/ES6+
  ▰▰▰▰▰▰▰░░░ HTML5 & CSS3
  ▰▰▰▰▰▰▰░░░ Responsive Design

Backend:
  ▰▰▰▰▰▰▰▰░░ Node.js
  ▰▰▰▰▰▰▰░░░ Express.js 
  ▰▰▰▰▰▰▰▰░░ MongoDB ,PostgreSQL

Tools & Others:
  ▰▰▰▰▰▰▰▰░░ Git & GitHub
  ▰▰▰▰▰▰▰░░░ Chrome Extensions , RAG , Langchain
  ▰▰▰▰▰▰░░░░ RESTful APIs , Docker
  ▰▰▰▰▰▰▰░░░ Vite
      `
    }),

    projects: () => ({
      content: `
╔════════════════════════════════════════╗
║         FEATURED PROJECTS              ║
╚════════════════════════════════════════╝

[1] Safety Management System
    A comprehensive safety management system with 
    real-time monitoring and incident reporting.
    
    Tech: React, Node.js, MongoDB, Express
    → https://github.com/ayush-patel1/safety-management

[2] Link Manager Extension
    Chrome extension for organizing and managing 
    bookmarks with advanced search features.
    
    Tech: JavaScript, Chrome API, HTML5, CSS3
    → https://github.com/ayush-patel1/link-manager-extension

[3] Team Technocracy Website
    College tech fest website. Developed Team, 
    Aavartan & Vigyaan pages.
    
    Tech: HTML5, CSS3, JavaScript
    → https://technocracy.nitrr.ac.in/

[4] Vigyaan Portal
    Open platform for project sharing and 
    collaboration in tech community.
    
    Tech: React, Node.js, MongoDB, Express
    → https://github.com/ayush-patel1/Vigyaan-Portal

Type 'contact' to get in touch!
      `,
      links: true
    }),

    contact: () => ({
      content: `
╔════════════════════════════════════════╗
║        CONTACT INFORMATION             ║
╚════════════════════════════════════════╝

📧 Email:    ayush005rkt@gmail.com.com
🐙 GitHub:   github.com/ayush-patel1
💼 LinkedIn: linkedin.com/in/ayush-patel05/
🐦 Twitter:  @DevAyushX

Feel free to reach out for collaborations,
opportunities, or just to say hi! 👋

Available for freelance and full-time roles.
      `,
      links: true
    }),

    help: () => ({
      content: `
╔════════════════════════════════════════╗
║        AVAILABLE COMMANDS              ║
╚════════════════════════════════════════╝

whoami      Display developer profile
skills      Show technical skills
projects    List featured projects
contact     Show contact information
help        Display this help message
clear       Clear the terminal screen

USAGE:
  Type a command and press Enter
  or click on command suggestions below

KEYBOARD SHORTCUTS:
  ↑/↓         Navigate command history
  Tab         (Future) Auto-complete
  Ctrl+L      Clear screen
      `
    }),

    clear: () => null
  };

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    // Add to output
    setOutput(prev => [...prev, { type: 'command', content: `ayush@portfolio:~$ ${cmd}` }]);

    // Add to history
    if (trimmedCmd) {
      setCommandHistory(prev => [...prev, trimmedCmd]);
      setHistoryIndex(-1);
    }

    // Execute command
    if (trimmedCmd === 'clear') {
      setOutput([]);
      return;
    }

    if (commands[trimmedCmd]) {
      const result = commands[trimmedCmd]();
      if (result) {
        setOutput(prev => [...prev, { type: 'output', ...result }]);
      }
    } else if (trimmedCmd) {
      setOutput(prev => [...prev, { 
        type: 'error', 
        content: `Command not found: ${trimmedCmd}\nType 'help' for available commands.` 
      }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    // Handle Ctrl+L for clear
    if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      setOutput([]);
      return;
    }

    // Handle command history navigation
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  const handleSuggestionClick = (cmd) => {
    executeCommand(cmd);
    inputRef.current?.focus();
  };

  const renderContent = (text, links) => {
    if (!links) return text;
    
    // Convert URLs to clickable links
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a 
            key={i} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer"
            className="terminal-link"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button close"></span>
          <span className="terminal-button minimize"></span>
          <span className="terminal-button maximize"></span>
        </div>
        <div className="terminal-title">ayush@portfolio: ~</div>
      </div>

      <div className="terminal-body" ref={outputRef}>
        {output.map((line, index) => (
          <div key={index} className={`terminal-line ${line.type}`}>
            <pre>{renderContent(line.content, line.links)}</pre>
          </div>
        ))}

        {!isTyping && (
          <form onSubmit={handleSubmit} className="terminal-input-container">
            <span className="terminal-prompt">ayush@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              autoFocus
              aria-label="Terminal command input"
              placeholder="Type a command..."
            />
            <span className="terminal-cursor"></span>
          </form>
        )}
      </div>

      {!isTyping && (
        <div className="terminal-suggestions">
          <span className="suggestions-label">Quick commands:</span>
          {Object.keys(commands).filter(cmd => cmd !== 'clear').map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleSuggestionClick(cmd)}
              className="suggestion-btn"
              aria-label={`Execute ${cmd} command`}
            >
              {cmd}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Terminal;
