import React from 'react';
import './RosterAndDates.css';

const rosterItems = [
  {
    tag: 'SYSTEM 01',
    name: 'Frontend Architecture & Systems',
    count: '04 RELEASES'
  },
  {
    tag: 'SYSTEM 02',
    name: 'Distributed Backend & REST APIs',
    count: '03 SYSTEMS'
  },
  {
    tag: 'SYSTEM 03',
    name: 'Algorithmic Problem Solving & CP',
    count: '800+ SOLVED'
  },
  {
    tag: 'SYSTEM 04',
    name: 'Applied AI & Autonomous Agent Workflows',
    count: '02 FRAMEWORKS'
  }
];

const timelineDates = [
  {
    index: '01',
    year: '2025',
    title: 'HPCL Power Lab',
    org: 'Hindustan Petroleum',
    discipline: 'National Tech Finalist (Top 48 / 99,000+)'
  },
  {
    index: '02',
    year: '2025',
    title: 'WWT Unravel',
    org: 'World Wide Technology',
    discipline: '2nd Runner-Up / Data Science'
  },
  {
    index: '03',
    year: '2025',
    title: 'GE HealthCare Precision Care',
    org: 'GE HealthCare',
    discipline: 'National Finalist / HealthTech'
  },
  {
    index: '04',
    year: '2024–25',
    title: 'Reliance Foundation Scholar',
    org: 'Reliance Foundation',
    discipline: 'Academic Excellence Scholarship'
  },
  {
    index: '05',
    year: '2024–25',
    title: 'AWOO Foundation Scholar',
    org: 'AWOO Foundation',
    discipline: 'Merit Scholar / Technical Leadership'
  },
  {
    index: '06',
    year: '2024',
    title: 'Tech Executive — Technocracy',
    org: 'NIT Raipur',
    discipline: 'Flagship Tech Fest Web & Infrastructure'
  },
  {
    index: '07',
    year: '2023–27',
    title: 'B.Tech Information Technology',
    org: 'NIT Raipur',
    discipline: 'Core Engineering Degree'
  }
];

const RosterAndDates = () => {
  return (
    <section className="roster-dates-section" id="roster">
      <div className="roster-dates-container">
        
        {/* Subsection 1: Hairline Roster */}
        <div className="roster-block">
          <div className="section-header-row">
            <span className="label-caps">03 / ROSTER</span>
            <span className="label-caps header-meta">CORE COMPETENCY STACKS</span>
          </div>

          <div className="roster-list">
            {rosterItems.map((item, idx) => (
              <div className="roster-row" key={idx}>
                <div className="roster-tag-box">
                  <span className="roster-accent-dot" aria-hidden="true"></span>
                  <span className="label-caps roster-tag">{item.tag}</span>
                </div>
                <h3 className="roster-name">{item.name}</h3>
                <span className="roster-count">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subsection 2: Verified Dates Table */}
        <div className="dates-block" id="dates">
          <div className="section-header-row">
            <span className="label-caps">04 / CHRONOLOGY</span>
            <span className="label-caps header-meta">RECORD OF ENGAGEMENTS & HONOURS</span>
          </div>

          <div className="dates-table-wrapper">
            <div className="dates-table-header">
              <span className="table-th th-idx">INDEX</span>
              <span className="table-th th-year">YEAR</span>
              <span className="table-th th-title">ENGAGEMENT / RECORD</span>
              <span className="table-th th-org">ORGANISATION</span>
              <span className="table-th th-discipline">DISCIPLINE</span>
            </div>

            <div className="dates-table-body">
              {timelineDates.map((item) => (
                <div className="dates-row" key={item.index}>
                  <span className="dates-td td-idx">{item.index}</span>
                  <span className="dates-td td-year">{item.year}</span>
                  <span className="dates-td td-title">{item.title}</span>
                  <span className="dates-td td-org">{item.org}</span>
                  <span className="dates-td td-discipline">{item.discipline}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RosterAndDates;
