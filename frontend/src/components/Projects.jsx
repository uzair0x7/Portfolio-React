import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom"; 
import PortfolioContent from "../data/PortfolioContent";
import "../styles/Projects.css";

export default function Projects() {
  const { projects } = PortfolioContent;
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = filter === "all" 
    ? projects.items 
    : projects.items.filter(p => p.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="projects-header"
        >
          <span className="section-tag">{projects.tag}</span>
          <h2 className="section-title">
            {projects.title} <span className="highlight">{projects.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {projects.description}
          </p>
        </motion.div>

        <div className="projects-filters">
          {projects.categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? "active" : ""}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="project-card"
            >
              <div className="project-image">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="project-img" loading="lazy" />
                ) : (
                  <span className="project-emoji">{project.emoji || "📁"}</span>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <button onClick={() => openModal(project)} className="project-link">
                  View Project →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {createPortal(
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={closeModal}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                <div className="modal-image">
                  {selectedProject.imageUrl ? (
                    <img src={selectedProject.imageUrl} alt={selectedProject.title} loading="lazy" />
                  ) : (
                    <span className="modal-emoji">{selectedProject.emoji || "📁"}</span>
                  )}
                </div>

                <div className="modal-body">
                  <h2 className="modal-title">{selectedProject.title}</h2>
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  <div className="modal-tags">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="modal-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="modal-actions">
                    {selectedProject.liveUrl ? (
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="modal-btn primary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                          <path d="M2 12h20M12 2c2.5 2.5 3.5 6 3.5 10s-1 7.5-3.5 10c-2.5-2.5-3.5-6-3.5-10s1-7.5 3.5-10z" />
                        </svg>
                        Live Site
                      </a>
                    ) : (
                      <button className="modal-btn primary disabled" disabled title="Not live yet">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                          <path d="M2 12h20M12 2c2.5 2.5 3.5 6 3.5 10s-1 7.5-3.5 10c-2.5-2.5-3.5-6-3.5-10s1-7.5 3.5-10z" />
                        </svg>
                        Not Live Yet
                      </button>
                    )}
                    
                    {selectedProject.githubUrl && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="modal-btn secondary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>

                  {!selectedProject.liveUrl && selectedProject.githubUrl && (
                    <p className="modal-note">This project is currently in development. Check back soon for the live version!</p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body 
      )}
    </section>
  );
}