import React from 'react';
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGithub,
  SiLinkedin,
  SiX,
} from 'react-icons/si';
import { codingProfiles } from '../data/portfolioData';
import './SocialProfiles.css';

const profileIcons = {
  LeetCode: SiLeetcode,
  Codeforces: SiCodeforces,
  CodeChef: SiCodechef,
  GitHub: SiGithub,
  LinkedIn: SiLinkedin,
  'X / Twitter': SiX,
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
          const Icon = profileIcons[profile.name];
          return (
            <a
              className="profile-card"
              href={profile.url}
              key={profile.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${profile.name}, ${profile.handle} (opens in a new tab)`}
            >
              <span className="profile-icon" aria-hidden="true">{Icon && <Icon />}</span>
              <span className="profile-copy">
                <span className="profile-name">{profile.name}</span>
                <span className="profile-handle">@{profile.handle}</span>
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
