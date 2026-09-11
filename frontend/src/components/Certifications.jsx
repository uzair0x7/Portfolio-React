import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/Certifications.css";

export default function Certifications() {
  const { certifications } = PortfolioContent; 
  const certsList = certifications?.items || certifications || [];

  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedCert(null), 300);
  };

  if (certsList.length === 0) return null;

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="certifications-header"
        >
          <span className="section-tag">{certifications?.tag || "Credentials"}</span>
          <h2 className="section-title">
            {certifications?.title || "My "} 
            <span className="highlight">{certifications?.titleHighlight || "Certifications"}</span>
          </h2>
          <p className="section-subtitle">
            {certifications?.description || "A showcase of my professional qualifications and continuous learning journey."}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="certifications-grid">
          {certsList.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="cert-card"
            >
              <div className="cert-image-wrapper">
                {cert.imageUrl ? (
                  <img src={cert.imageUrl} alt={cert.title} className="cert-img" loading="lazy" />
                ) : (
                  <div className="cert-image-placeholder">{cert.title}</div>
                )}
                
                {cert.logoUrl && (
                  <div className="cert-logo-badge">
                    <img src={cert.logoUrl} alt={`${cert.issuer} logo`} />
                  </div>
                )}
              </div>

              <div className="cert-content">
                <p className="cert-issuer">{cert.issuer}</p>
                <h3 className="cert-title">{cert.title}</h3>
                <button 
                  onClick={() => openModal(cert)} 
                  className="cert-link"
                >
                  View Certification →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal via Portal */}
      {createPortal(
        <AnimatePresence>
          {isModalOpen && selectedCert && (
            <motion.div
              className="cert-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="cert-modal-content"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="cert-modal-close" onClick={closeModal}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                {/* Image Section */}
                <div className="cert-modal-image-wrapper">
                  {selectedCert.imageUrl ? (
                    <img src={selectedCert.imageUrl} alt={selectedCert.title} className="cert-modal-img" />
                  ) : (
                    <div className="cert-modal-placeholder">No Image Available</div>
                  )}
                </div>

                <div className="cert-modal-body">
                  <div className="cert-modal-header">
                    {selectedCert.logoUrl && (
                      <img src={selectedCert.logoUrl} alt={selectedCert.issuer} className="cert-modal-logo" />
                    )}
                    <div>
                      <h2 className="cert-modal-title">{selectedCert.title}</h2>
                      <p className="cert-modal-issuer">{selectedCert.issuer}</p>
                    </div>
                  </div>
                  
                  <p className="cert-modal-description">{selectedCert.description}</p>

                  <div className="cert-modal-actions">
                    {selectedCert.link ? (
                      <a 
                        href={selectedCert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cert-modal-btn primary"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        View Credentials
                      </a>
                    ) : (
                      <button className="cert-modal-btn primary disabled" disabled>
                        No Link Available
                      </button>
                    )}
                  </div>
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