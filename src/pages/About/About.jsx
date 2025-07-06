/* eslint-disable react/no-unescaped-entities */

import Service from "../About/Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Competitive Coder",
    description:
      "Demonstrates a modern and high-quality approach to competitive coding, solving complex problems with precision and efficiency on platforms like Codeforces, Codechef, and LeetCode."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web Development",
    description:
      "High-quality development of websites and web applications with a focus on performance, scalability, and user experience."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Open-Source Contributor",
    description:
      "Actively contributes to open-source projects through platforms and events like OpenCode and Hacktoberfest, enhancing collaborative development and community-driven innovation."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Keen Learner",
    description:
      "Continuously expands knowledge and skills by exploring new technologies, frameworks, and problem-solving approaches to stay ahead in the ever-evolving tech landscape."
  }
];

const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am Ayush Patel, a B.Tech student in Information Technology at NIT Raipur, passionate about technology and innovation.
          With a strong foundation in programming and competitive coding, I actively participate on platforms like Codeforces, Codechef, and LeetCode,
          solving complex problems to improve my skills and ranking.
          I contribute to open-source communities through initiatives like OpenCode and Hacktoberfest, building impactful projects collaboratively.
          I enjoy exploring new technologies and honing my technical expertise with a mindset of continuous learning and growth.
        </p>

{/*         <p style={{ marginTop: "1rem" }}>
          <strong>My Profiles:</strong><br />
          <a href="https://codeforces.com/profile/ayush_patel05" target="_blank" rel="noopener noreferrer">
            Codeforces
          </a>{" | "}
          <a href="https://www.codechef.com/users/ayush_patel1" target="_blank" rel="noopener noreferrer">
            Codechef
          </a>{" | "}
          <a href="https://leetcode.com/ayush_patel05" target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>{" | "}
          <a href="https://github.com/ayush-patel1" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{" | "}
          <a href="https://www.linkedin.com/in/ayush-patel05/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p> */}
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* Testimonials and Clients sections remain commented for now */}
    </article>
  );
};

export default About;

