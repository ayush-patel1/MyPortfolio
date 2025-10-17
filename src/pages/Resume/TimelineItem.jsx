import { useState } from 'react';

const TimelineItem = ({ title, date, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      <span>{date}</span>
      <p className="timeline-text">
        {description}
      </p>
    </li>
  );
}

export default TimelineItem;