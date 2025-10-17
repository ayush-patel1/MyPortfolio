import React from 'react';
import { FaBookReader, FaRegBookmark, FaReact, FaNodeJs, FaPython, FaCode, FaPalette, FaBrain } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiCplusplus, SiGit, SiFigma, SiTailwindcss } from "react-icons/si";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';
import ResumeDownload from './ResumeDownload';
import Timeline from '../../components/Timeline';
import './Resume.css';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Interactive Horizontal Timeline */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">My Journey</h3>
        </div>
        <Timeline />
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        
        {/* Frontend Skills */}
        <div className="skills-category">
          <div className="category-header">
            <FaCode className="category-icon" />
            <h4 className="category-title">Frontend Development</h4>
          </div>
          <ul className="skills-list content-card">
            <SkillItem title="React & Modern Frameworks" value={85} icon={<FaReact />} />
            <SkillItem title="JavaScript/TypeScript" value={80} icon={<SiJavascript />} />
            <SkillItem title="HTML5 & CSS3" value={90} icon={<FaCode />} />
            <SkillItem title="Tailwind CSS" value={75} icon={<SiTailwindcss />} />
          </ul>
        </div>

        {/* Backend & Database */}
        <div className="skills-category">
          <div className="category-header">
            <FaNodeJs className="category-icon" />
            <h4 className="category-title">Backend & Database</h4>
          </div>
          <ul className="skills-list content-card">
            <SkillItem title="Node.js & Express" value={80} icon={<FaNodeJs />} />
            <SkillItem title="MongoDB" value={75} icon={<SiMongodb />} />
            <SkillItem title="REST APIs" value={85} icon={<FaCode />} />
          </ul>
        </div>

        {/* Programming & DSA */}
        <div className="skills-category">
          <div className="category-header">
            <FaBrain className="category-icon" />
            <h4 className="category-title">Programming & Algorithms</h4>
          </div>
          <ul className="skills-list content-card">
            <SkillItem title="Data Structures & Algorithms" value={75} icon={<SiCplusplus />} />
            <SkillItem title="C++ / Python" value={80} icon={<FaPython />} />
            <SkillItem title="Problem Solving" value={85} icon={<FaBrain />} />
          </ul>
        </div>

        {/* Tools & Design */}
        <div className="skills-category">
          <div className="category-header">
            <FaPalette className="category-icon" />
            <h4 className="category-title">Tools & Design</h4>
          </div>
          <ul className="skills-list content-card">
            <SkillItem title="Git & GitHub" value={85} icon={<SiGit />} />
            <SkillItem title="UI/UX Design" value={70} icon={<FaPalette />} />
            <SkillItem title="Figma" value={65} icon={<SiFigma />} />
          </ul>
        </div>
      </div>

      <div className="btn">
        <ResumeDownload />
      </div>
    </section>
  );
};

export default Resume;
