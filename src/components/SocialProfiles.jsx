import React from 'react';
import { codingProfiles } from '../data/portfolioData';
import './SocialProfiles.css';

const profileIconFiles = {
  LeetCode: 'leetcode',
  Codeforces: 'codeforces',
  CodeChef: 'codechef',
  GitHub: 'github',
  LinkedIn: 'linkedin',
  'X / Twitter': 'x',
};

const SocialProfiles = () => (
  <section className="profiles-section" id="profiles" aria-labelledby="profiles-title">
    <div className="profiles-container">
      <div className="profiles-eyebrow"><span aria-hidden="true" /> FIND ME AROUND THE WEB</div>
      <div className="profiles-heading-row">
        <div>
          <h2 id="profiles-title">Beyond the terminal.</h2>
          <p>Code, contests, projects, and ideas — find me on these platforms.</p>
        </div>
        <span className="profiles-index">06 / PROFILES</span>
      </div>
      <div className="profiles-grid">
        {codingProfiles.map((profile) => {
          const iconFile = profileIconFiles[profile.name];
          return (
            <a
              className="profile-card"
              href={profile.url}
              key={profile.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${profile.name} profile (opens in a new tab)`}
            >
              <span className="profile-icon" aria-hidden="true">
                {iconFile && <img src={`/brand-icons/${iconFile}.svg`} alt="" width="25" height="25" loading="lazy" />}
              </span>
              <span className="profile-copy">
                <span className="profile-name">{profile.name}</span>
                <span className="profile-metric">{profile.metric}</span>
              </span>
              <span className="profile-arrow" aria-hidden="true">↗</span>
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

export default SocialProfiles;
