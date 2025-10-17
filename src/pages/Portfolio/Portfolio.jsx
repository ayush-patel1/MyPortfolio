import { useState, useEffect } from 'react';
import { FaRegEye, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  // State to store project data and filtered projects
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Load project data from projects.json
  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch(error => console.error('Error loading project data:', error));
  }, []);

  // Function to handle category filter selection
  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="projects">
      <ul className="project-list">
        {filteredProjects.map((project, index) => (
          <li
            className="project-item active"
            data-filter-item
            data-category={project.category}
            key={project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-card">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaRegEye />
                </div>
                <img src={project.image} alt={project.title} loading="lazy" />
                
                {/* Overlay with description */}
                <div className={`project-overlay ${hoveredProject === project.id ? 'active' : ''}`}>
                  <p className="project-description">{project.description}</p>
                </div>
              </figure>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                
                {/* Role (for group projects) */}
                {project.role && (
                  <p className="project-role">
                    <span className="role-label">My Role:</span> {project.role}
                  </p>
                )}
                
                {/* Technologies */}
                {project.technologies && (
                  <div className="project-tech-stack">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge" style={{ animationDelay: `${idx * 0.1}s` }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="project-links">
                  {project.github && project.github !== '#' && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;