import React, { useState } from 'react';
import {
  FaBrain,
  FaCloud,
  FaCode,
  FaCubes,
  FaDatabase,
  FaHtml5,
  FaMicrochip,
  FaNetworkWired,
  FaPlug,
  FaProjectDiagram,
  FaPython,
  FaReact,
  FaRobot,
  FaServer,
  FaNodeJs,
  FaSearch,
} from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import {
  SiAmazonaws,
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
} from 'react-icons/si';
import { arsenalData } from '../data/portfolioData';
import './TechnicalArsenal.css';

const skillIcons = {
  'C++': SiCplusplus,
  Python: FaPython,
  JavaScript: SiJavascript,
  TypeScript: BiLogoTypescript,
  SQL: FaDatabase,
  React: FaReact,
  'Next.js': SiNextdotjs,
  'HTML5 & CSS3': FaHtml5,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': FaNodeJs,
  'Express.js': FaServer,
  FastAPI: SiFastapi,
  'REST APIs': FaNetworkWired,
  LangGraph: FaProjectDiagram,
  LangChain: SiLangchain,
  'Model Context Protocol (MCP)': FaPlug,
  'Retrieval-Augmented Gen (RAG)': FaSearch,
  'Multi-Agent Workflows': FaRobot,
  'PostgreSQL & pgvector': SiPostgresql,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  'Git & GitHub Actions': SiGithubactions,
  'AWS & Ansible': SiAmazonaws,
  'Data Structures & Algorithms': FaCode,
  'Object-Oriented Programming': FaCubes,
  'Operating Systems': FaMicrochip,
  DBMS: FaDatabase,
  'Computer Networks': FaNetworkWired,
};

const skillColors = {
  'C++': '#649ad2',
  Python: '#3776ab',
  JavaScript: '#f0db4f',
  TypeScript: '#3178c6',
  React: '#61dafb',
  'Next.js': '#f0f0f0',
  'HTML5 & CSS3': '#e34f26',
  'Tailwind CSS': '#38bdf8',
  'Node.js': '#68a063',
  FastAPI: '#009688',
  LangChain: '#78c5a4',
  'PostgreSQL & pgvector': '#4169e1',
  MongoDB: '#47a248',
  Docker: '#2496ed',
  'Git & GitHub Actions': '#f05032',
  'AWS & Ansible': '#ff9900',
};

const TechnicalArsenal = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSkill, setActiveSkill] = useState(null);
  const currentCategory = arsenalData[activeCategory] || arsenalData[0];

  return (
    <section className="arsenal-section" id="stack">
      <div className="arsenal-container">
        <div className="arsenal-header">
          <div className="section-label-group">
            <span className="label-accent-line" aria-hidden="true"></span>
            <span className="label-caps">03 / TOOLS OF THE TRADE</span>
          </div>
          <h2 className="arsenal-headline">The stack behind the systems.</h2>
          <p className="arsenal-lede">
            Curated technologies applied across distributed services, multi-agent reasoning,
            and real-world production engineering.
          </p>
        </div>

        <div className="arsenal-grid">
          <div className="arsenal-tabs-col" role="tablist" aria-label="Technical skill categories">
            {arsenalData.map((cat, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={activeCategory === idx}
                className={`arsenal-tab-btn ${activeCategory === idx ? 'arsenal-tab-active' : ''}`}
                onClick={() => {
                  setActiveCategory(idx);
                  setActiveSkill(null);
                }}
              >
                <span className="tab-code">{cat.code}</span>
                <span className="tab-name">{cat.category}</span>
                <span className="tab-indicator" aria-hidden="true">→</span>
              </button>
            ))}
          </div>

          <div className="arsenal-skills-col">
            <div className="skills-panel-header">
              <span className="panel-kicker">{currentCategory.code}</span>
              <h3 className="panel-title">{currentCategory.category}</h3>
            </div>

            <div className="skills-items-grid">
              {currentCategory.skills.map((skill, sIdx) => {
                const Icon = skillIcons[skill.name] || FaBrain;
                return (
                  <div
                    key={sIdx}
                    tabIndex={0}
                    className={`skill-item-card ${activeSkill === skill.name ? 'skill-item-active' : ''}`}
                    onMouseEnter={() => setActiveSkill(skill.name)}
                    onFocus={() => setActiveSkill(skill.name)}
                  >
                    <div className="skill-card-top">
                      <span
                        className="skill-icon"
                        style={{ color: skillColors[skill.name] || 'var(--amber)' }}
                        aria-hidden="true"
                      >
                        <Icon />
                      </span>
                      <h4 className="skill-name">{skill.name}</h4>
                    </div>
                    <p className="skill-context">{skill.context}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalArsenal;
