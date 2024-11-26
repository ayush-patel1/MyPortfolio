import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';
import ResumeDownload from './ResumeDownload';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="National Institute of Technology, Raipur"
            date="2023-2027(Expected)"
            description="Pursuing a comprehensive curriculum in IT, focusing on core technical skills and innovative problem-solving. Actively engaged in technical projects, coding challenges, and leadership roles within student committees."
          />
          <TimelineItem
            title="Nirmala Convent High School, Renukoot , India"
            date="2022 — 2023"
            description="12th Grade Scholar | Apr 2022 - Mar 2023 | Grade: 95.8%
Served as a member of the School Cabinet, demonstrating leadership and organizational skills. Actively participated in sports, including swimming competitions, showcasing a well-rounded skill set."
          />
          <TimelineItem
            title="Nirmala Convent High School, Renukoot, India"
            date="2020 — 2021"
            description="10th Grade Scholar | Mar 2020 - Apr 2021 | Grade: 98.6%
           Actively participated in cultural activities and contributed to organizing various school functions, showcasing teamwork and leadership skills."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Robotix Club"
            date="2023 — Present"
            description="Designed and implemented features to enhance the club’s website, including event listings, speaker profiles, and real-time updates. Collaborated with members to gather feedback and optimize user experience."
          />
          <TimelineItem
            title="Technocracy Commitee"
            date="2024 — Present"
            description="Collaborated with a cross-functional team to ensure timely delivery and provided real-time updates during events. Continuously optimized the platform based on user feedback to enhance engagement and accessibility"
          />
          {/* <TimelineItem
            title="Web designer"
            date="2010 — 2013"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          /> */}
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web Development" value={80} />
          <SkillItem title="Data Structures & Algorithms" value={70} />
          <SkillItem title="Competitive Coding" value={70} />
          <SkillItem title="Communication" value={50} />
        </ul>
      </div>

      <div className="btn">
        <ResumeDownload></ResumeDownload>
      </div>
    </section>
  );
};

export default Resume;