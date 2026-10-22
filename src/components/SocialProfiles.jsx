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

      <nav className="profile-directory" aria-label="Social and coding profiles">
        {codingProfiles.map((profile, index) => {
          const Icon = profileIcons[profile.name];
          return (
            <a
              className="profile-link"
              href={profile.url}
              key={profile.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${profile.name}, ${profile.handle} (opens in a new tab)`}
            >
              <span className="profile-link-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={`profile-link-icon profile-brand-${index + 1}`} aria-hidden="true">
                {Icon && <Icon />}
              </span>
              <span className="profile-link-copy">
                <span className="profile-link-name">{profile.name}</span>
                <span className="profile-link-handle">@{profile.handle}</span>
                <span className="profile-link-description">{profile.metric}</span>
              </span>
              <span className="profile-link-arrow" aria-hidden="true">↗</span>
            </a>
          );
        })}
      </nav>
    </div>
  </section>
);

export default SocialProfiles;
