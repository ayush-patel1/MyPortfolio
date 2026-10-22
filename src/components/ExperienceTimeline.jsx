import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './ExperienceTimeline.css';

const timelineItems = [
  {
    period: 'Mar 2020 – Apr 2021',
    organization: 'Nirmala Convent High School, Renukoot',
    role: 'Class 10',
    detail: 'Scored 98.6%.',
    icon: 'school',
  },
  {
    period: 'Apr 2022 – Mar 2023',
    organization: 'Nirmala Convent High School, Renukoot',
    role: 'Class 12',
    detail: 'Scored 95.8%.',
    icon: 'school',
  },
  {
    period: 'Aug 2023 – 2027 (Expected)',
    organization: 'National Institute of Technology, Raipur',
    role: 'B.Tech · Information Technology',
    detail: 'Undergraduate degree in Information Technology while contributing to software projects and campus technical communities.',
    icon: 'nit',
  },
  {
    period: 'Nov 2023 – Aug 2024',
    organization: 'RobotiX Club, NIT Raipur',
    role: 'Volunteer',
    detail: 'Supported club activities and student-led technical events.',
    icon: 'robotix',
  },
  {
    period: 'Jul 2024 – Sep 2025',
    organization: 'AAVARTAN, NIT Raipur',
    role: 'Tech Executive',
    detail: 'Contributed to the fest website and its digital infrastructure.',
    icon: 'aavartan',
  },
  {
    period: 'Aug 2024 – Sep 2025',
    organization: 'RobotiX Club, NIT Raipur',
    role: 'Web Executive',
    detail: 'Worked on web experiences and digital platforms for club activities.',
    icon: 'robotix',
  },
  {
    period: 'Sep 2025 – Oct 2025',
    organization: 'RobotiX Club, NIT Raipur',
    role: 'Event Coordinator',
    detail: 'Coordinated club event execution and helped teams stay aligned.',
    icon: 'robotix',
  },
  {
    period: 'May 2026 – Jul 2026',
    organization: 'Zscaler · Bengaluru, India',
    role: 'Software Development Intern',
    detail: 'Worked on AI-driven testbed provisioning, topology management, and infrastructure automation.',
    icon: 'zscaler',
    technologies: ['Python', 'FastAPI', 'React.js', 'TypeScript', 'LangChain', 'LangGraph', 'Ansible', 'AWS', 'OCR'],
  },
  {
    period: 'Aug 2025 – Present',
    organization: 'AAVARTAN, NIT Raipur',
    role: 'Tech Lead',
    detail: 'Leading web development and improving the team’s delivery workflows.',
    icon: 'aavartan',
    current: true,
  },
];

function TimelineLogo({ type }) {
  const imageSources = {
    nit: '/images/timeline-nit.webp',
    robotix: '/images/timeline-robotix.webp',
    aavartan: '/images/timeline-aavartan.webp',
  };

  if (type === 'zscaler') {
    return (
      <span className="timeline-logo timeline-logo-zscaler">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/29/Zscaler_logo.png"
          alt="Zscaler"
          loading="lazy"
        />
      </span>
    );
  }

  if (imageSources[type]) {
    const altText = type === 'nit' ? 'NIT Raipur logo' : type === 'robotix' ? 'RobotiX Club logo' : 'AAVARTAN logo';
    return (
      <span className={`timeline-logo timeline-logo-${type}`}>
        <img src={imageSources[type]} alt={altText} loading="lazy" />
      </span>
    );
  }

  return <span className="timeline-logo timeline-logo-school" aria-hidden="true"><FaGraduationCap /></span>;
}

const ExperienceTimeline = () => (
  <section className="experience-section" id="experience" aria-labelledby="experience-title">
    <div className="experience-container">
      <div className="experience-header">
        <div className="section-label-group">
          <span className="label-accent-line" aria-hidden="true"></span>
          <span className="label-caps">02 / EXPERIENCE &amp; EDUCATION</span>
        </div>
        <h2 className="experience-headline" id="experience-title">Experience &amp; Education</h2>
        <p className="experience-intro">
          Academic milestones, campus leadership, and industry experience.
        </p>
      </div>

      <div className="experience-timeline">
        {timelineItems.map((item, index) => (
          <details
            className={`timeline-item ${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'} ${item.current ? 'timeline-item-current' : ''}`}
            key={`${item.organization}-${item.role}`}
          >
            <summary className="timeline-summary">
              <span className="timeline-node" aria-hidden="true">
                <TimelineLogo type={item.icon} />
              </span>
              <span className="timeline-period">{item.period}</span>
              <span className="timeline-entry-copy">
                <span className="timeline-role">{item.role}</span>
                <span className="timeline-organization">{item.organization}</span>
              </span>
              <span className="timeline-toggle" aria-hidden="true"></span>
            </summary>

            <div className="timeline-expanded">
              <span className="timeline-expanded-index">{String(index + 1).padStart(2, '0')}</span>
              <div className="timeline-expanded-copy">
                <p className="timeline-detail">{item.detail}</p>
                {item.technologies && (
                  <div className="timeline-technologies" aria-label="Technologies used">
                    {item.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                )}
              </div>
              {item.current && <span className="timeline-current-label">CURRENT POSITION</span>}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceTimeline;
