import React, { useEffect, useRef } from 'react';
import './Blogs.css';
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa';

const Blogs = () => {
  const achievementsRef = useRef([]);

  const achievements = [
    {
      id: 1,
      title: "HPCL Power Lab 2025",
      category: "National Competition",
      date: "2025",
      icon: <FaTrophy />,
      color: "#FFD700",
      description: "Semi-finalist among Top 48 of 99,000+ participants nationally.",
      stats: "Top 48 / 99,000+"
    },
    {
      id: 2,
      title: "WWT Unravel 2025",
      category: "Data Science",
      date: "2025",
      icon: <FaMedal />,
      color: "#C0C0C0",
      description: "2nd Runner-up in a national-level Data Science competition.",
      stats: "2nd Runner-up"
    },
    {
      id: 3,
      title: "GE HealthCare – Precision Care Challenge",
      category: "Healthcare Innovation",
      date: "2025",
      icon: <FaAward />,
      color: "#CD7F32",
      description: "National Finalist in the Precision Care Challenge by GE HealthCare.",
      stats: "National Finalist"
    },
    {
      id: 4,
      title: "Reliance Foundation Scholar",
      category: "Scholarship",
      date: "2024-2025",
      icon: <FaStar />,
      color: "#FF6B35",
      description: "Awarded Reliance Foundation Scholarship for academic excellence and leadership potential.",
      stats: "Academic Excellence"
    },
    {
      id: 5,
      title: "AWOO Foundation Scholar",
      category: "Scholarship",
      date: "2024-2025",
      icon: <FaStar />,
      color: "#4ECDC4",
      description: "Recognized as AWOO Foundation Scholar for outstanding academic performance and achievements.",
      stats: "Outstanding Performance"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    achievementsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <article className="achievements-page active">
      <header className="achievements-header">
        <h2 className="h2 article-title">Achievements & Recognition</h2>
        <p className="achievements-subtitle">
          A showcase of competitive achievements, scholarships, and recognition received for excellence in technology and academics.
        </p>
      </header>

      <section className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div
            key={achievement.id}
            ref={(el) => (achievementsRef.current[index] = el)}
            className="achievement-card"
            style={{ '--accent-color': achievement.color }}
          >
            <div className="achievement-icon" style={{ color: achievement.color }}>
              {achievement.icon}
            </div>
            
            <div className="achievement-content">
              <div className="achievement-header">
                <h3 className="achievement-title">{achievement.title}</h3>
                <span className="achievement-date">{achievement.date}</span>
              </div>
              
              <p className="achievement-category">{achievement.category}</p>
              <p className="achievement-description">{achievement.description}</p>
              
              <div className="achievement-stats">
                <span className="stats-badge">{achievement.stats}</span>
              </div>
            </div>

            <div className="achievement-glow"></div>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Blogs;