import { useEffect, useRef } from 'react';

const SkillItem = ({ title, value, icon }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.setProperty('--progress-width', `${value}%`);
    }
  }, [value]);

  return (
    <li className="skills-item">
      <div className="title-wrapper">
        <div className="skill-title-content">
          {icon && <span className="skill-icon">{icon}</span>}
          <h5 className="h5">{title}</h5>
        </div>
        <data value={value}>{value}%</data>
      </div>
      <div className="skill-progress-bg">
        <div 
          ref={progressRef}
          className="skill-progress-fill" 
          style={{ '--progress-width': `${value}%` }}
        ></div>
      </div>
    </li>
  );
}

export default SkillItem;