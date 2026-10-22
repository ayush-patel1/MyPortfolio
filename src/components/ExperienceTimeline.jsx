import React from 'react';
import { FaGraduationCap, FaRobot } from 'react-icons/fa';
import { SiZscaler } from 'react-icons/si';
import './ExperienceTimeline.css';

const timelineItems = [
  {
    period: 'Mar 2020 – Apr 2021',
    organization: 'Nirmala Convent High School, Renukoot',
    role: 'Class 10',
    detail: 'Grade: 98.6%',
    kind: 'school',
    icon: 'school',
  },
  {
    period: 'Apr 2022 – Mar 2023',
    organization: 'Nirmala Convent High School, Renukoot',
    role: 'Class 12',
    detail: 'Grade: 95.8%',
    kind: 'school',
    icon: 'school',
  },
  {
    period: 'Nov 2023 – Oct 2025',
    organization: 'RobotiX Club, NIT Raipur',
    role: 'Volunteer → Web Executive → Event Coordinator',
    detail: 'Contributed to the club website, events, and student community.',
    kind: 'club',
    icon: 'robotix',
  },
  {
    period: 'Jul 2024 – Sep 2025',
    organization: 'AAVARTAN, NIT Raipur',
    role: 'Tech Executive',
    detail: 'Helped build and maintain the fest’s digital platforms.',
    kind: 'work',
    icon: 'aavartan',
  },
  {
    period: 'May 2026 – Jul 2026',
    organization: 'Zscaler',
    role: 'Software Development Intern',
    detail: 'Worked on AI-driven testbed provisioning and infrastructure automation.',
    kind: 'work',
    icon: 'zscaler',
    technologies: ['Python', 'FastAPI', 'LangGraph', 'Ansible'],
  },
  {
    period: 'Aug 2025 – Present',
    organization: 'AAVARTAN, NIT Raipur',
    role: 'Tech Lead',
    detail: 'Leading web development and improving delivery workflows.',
    kind: 'current',
    icon: 'aavartan',
    current: true,
  },
];

function TimelineLogo({ type }) {
  if (type === 'zscaler') {
    return <span className="timeline-logo timeline-logo-zscaler" aria-label="Zscaler logo"><SiZscaler /></span>;
  }

  if (type === 'school') {
    return <span className="timeline-logo timeline-logo-school" aria-hidden="true"><FaGraduationCap /></span>;
  }

  if (type === 'robotix') {
    return <span className="timeline-logo timeline-logo-robotix" aria-hidden="true"><FaRobot /></span>;
  }

  return <span className="timeline-logo timeline-logo-aavartan" aria-hidden="true">A</span>;
}

const ExperienceTimeline = () => (
  <section className="experience-section" id="experience" aria-labelledby="experience-title">
    <div className="experience-container">
      <div className="experience-header">
        <div className="section-label-group">
          <span className="label-accent-line" aria-hidden="true"></span>
          <span className="label-caps">02 / THE JOURNEY SO FAR</span>
        </div>
        <h2 className="experience-headline" id="experience-title">From school to building real systems.</h2>
        <p className="experience-intro">
          A few milestones from the classroom to engineering, community, and leadership.
        </p>
      </div>

      <div className="experience-timeline">
        {timelineItems.map((item) => (
          <article className={`timeline-item ${item.current ? 'timeline-item-current' : ''}`} key={`${item.organization}-${item.role}`}>
            <span className="timeline-node" aria-hidden="true" />
            <TimelineLogo type={item.icon} />
            <div className="timeline-content">
              <div className="timeline-topline">
                <span className="timeline-period">{item.period}</span>
                {item.current && <span className="timeline-current-label">CURRENT</span>}
              </div>
              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-organization">{item.organization}</p>
              <p className="timeline-detail">{item.detail}</p>
              {item.technologies && (
                <div className="timeline-technologies" aria-label="Technologies used">
                  {item.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceTimeline;
