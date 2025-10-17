import { useState, useEffect, useRef } from 'react';
import './Timeline.css';
import { FaGraduationCap, FaCode, FaUsers, FaLaptopCode, FaTrophy, FaRocket, FaSchool, FaMedal } from 'react-icons/fa';

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const timelineRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  const timelineData = [
    {
      year: '2021',
      month: 'Apr',
      title: '10th Grade Scholar',
      institution: 'Nirmala Convent High School, Renukoot',
      description: 'Grade: 98.6% - Actively participated in cultural activities and contributed to organizing various school functions, showcasing teamwork and leadership skills.',
      icon: <FaSchool />,
      color: '#3498db',
      position: 'top'
    },
    {
      year: '2023',
      month: 'Mar',
      title: '12th Grade Scholar',
      institution: 'Nirmala Convent High School, Renukoot',
      description: 'Grade: 95.8% - Served as a member of the School Cabinet, demonstrating leadership and organizational skills. Actively participated in sports, including swimming competitions.',
      icon: <FaMedal />,
      color: '#e74c3c',
      position: 'bottom'
    },
    {
      year: '2023',
      month: 'Aug',
      title: 'Started B.Tech IT',
      institution: 'NIT Raipur',
      description: 'Pursuing a comprehensive curriculum in IT, focusing on core technical skills and innovative problem-solving. Actively engaged in technical projects, coding challenges, and leadership roles.',
      icon: <FaGraduationCap />,
      color: '#ff6b6b',
      position: 'top'
    },
    {
      year: '2024',
      month: 'Jan',
      title: 'Tech Executive',
      institution: 'Technocracy Committee',
      description: 'Joined as Tech Executive at college tech fest committee, managing technical events and workshops.',
      icon: <FaUsers />,
      color: '#4ecdc4',
      position: 'bottom'
    },
    {
      year: '2024',
      month: 'Sep',
      title: 'Open Source Contributor',
      institution: 'OpenCode & Hacktoberfest',
      description: 'Active contributor in OpenCode and Hacktoberfest, merged multiple PRs in various repositories.',
      icon: <FaLaptopCode />,
      color: '#f9ca24',
      position: 'bottom'
    },
    {
      year: '2025',
      month: 'Present',
      title: 'Building Amazing Things',
      institution: 'Current',
      description: 'Currently working on innovative projects and expanding my skill set in full-stack development.',
      icon: <FaRocket />,
      color: '#fd79a8',
      position: 'bottom'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-container" ref={timelineRef}>
      <div className="timeline-line">
        <div className="timeline-progress"></div>
      </div>

      <div className="timeline-items">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${item.position} ${
              visibleItems.includes(index) ? 'visible' : ''
            } ${activeIndex === index ? 'active' : ''}`}
            data-index={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            style={{ '--item-color': item.color, '--delay': `${index * 0.2}s` }}
          >
            <div className="timeline-content">
              <div className="timeline-header">
                <span className="timeline-date">
                  {item.month} {item.year}
                </span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-institution">{item.institution}</p>
              </div>
              <p className="timeline-description">{item.description}</p>
            </div>

            <div className="timeline-node" style={{ backgroundColor: item.color }}>
              <div className="timeline-icon">{item.icon}</div>
              <div className="node-pulse"></div>
            </div>

            <div className="timeline-connector"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
