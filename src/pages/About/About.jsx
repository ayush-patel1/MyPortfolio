/* eslint-disable react/no-unescaped-entities */

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si';
import Terminal from "../../components/Terminal";
import './About.css';

const profileLinks = [
  {
    icon: <FaGithub />,
    title: "GitHub",
    url: "https://github.com/ayush-patel1",
    description: "Open source contributions and projects",
    color: "#fffdfdff"
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/ayush-patel05/",
    description: "Professional network and experience",
    color: "#1c16cbff"
  },
  {
    icon: <SiLeetcode />,
    title: "LeetCode",
    url: "https://leetcode.com/ayush005rkt",
    description: "Problem solving and algorithms",
    color: "#ff9407ff"
  },
  {
    icon: <SiCodechef />,
    title: "CodeChef",
    url: "https://www.codechef.com/users/nlogn_sorted",
    description: "Competitive programming contests",
    color: "#834217ff"
  },
  {
    icon: <SiCodeforces />,
    title: "Codeforces",
    url: "https://codeforces.com/profile/ayush.rtr",
    description: "Algorithmic problem solving",
    color: "#cb441fff"
  }
];

const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      {/* CLI Terminal Section */}
      <section className="terminal-section">
        <Terminal />
      </section>

      {/* Profile Links Section */}
      <section className="service" style={{ marginTop: '3rem' }}>
        <h3 className="h3 service-title">Connect With Me</h3>

        <ul className="service-list profile-links-grid">
          {profileLinks.map((profile, index) => (
            <li className="service-item profile-link-card" key={index}>
              <a 
                href={profile.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="profile-link"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="service-icon-box" style={{ fontSize: '2.5rem', color: profile.color }}>
                  {profile.icon}
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">{profile.title}</h4>
                  <p className="service-item-text">
                    {profile.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;

