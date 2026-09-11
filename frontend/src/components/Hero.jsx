import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Environment,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/Hero.css";
import cvPDF from "../assets/CV/my_cv.pdf";

function Avatar3D() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Sphere
          ref={meshRef}
          args={[1, 64, 64]}
          position={[0, 0, 0]}
          scale={hovered ? 1.1 : 1}
        >
          <MeshDistortMaterial
            color="#ba80ff"
            roughness={0.2}
            metalness={0.8}
            distort={hovered ? 0.4 : 0.2}
            speed={hovered ? 2 : 1}
            envMapIntensity={1.5}
          />
        </Sphere>

        <mesh position={[-0.4, 0.2, 0.9]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="white" roughness={0.1} metalness={0.1} />
        </mesh>
        <mesh position={[0.4, 0.2, 0.9]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="white" roughness={0.1} metalness={0.1} />
        </mesh>

        <mesh position={[-0.4, 0.2, 1.02]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#1d1d1f" roughness={0} metalness={0} />
        </mesh>
        <mesh position={[0.4, 0.2, 1.02]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#1d1d1f" roughness={0} metalness={0} />
        </mesh>

        <mesh position={[0, -0.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.2, 1.4, 64]} />
          <meshStandardMaterial
            color="#ba80ff"
            transparent
            opacity={0.3}
            side={2}
            emissive="#ba80ff"
            emissiveIntensity={0.5}
          />
        </mesh>

        {[...Array(20)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.sin(i * 0.5) * 1.6,
              Math.cos(i * 0.7) * 1.6,
              Math.sin(i * 0.3) * 1.6,
            ]}
            scale={0.03}
          >
            <sphereGeometry args={[1, 8, 8]} />
            <meshStandardMaterial
              color="#ba80ff"
              emissive="#ba80ff"
              emissiveIntensity={0.5}
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const { hero } = PortfolioContent;
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDownloadCV = () => {
    setIsDownloading(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = cvPDF;
      link.download = "Uzair_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 800);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-badge"
            >
              <span className="badge-dot" />
              <span className="badge-text">{hero.badge}</span>
              <span className="badge-glow" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-title"
            >
              {hero.greeting} <span className="highlight">{hero.name}</span>
              <span className="title-cursor">|</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-subtitle"
            >
              I'm a {hero.title} who {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-actions"
            >
              <button
                className="btn-primary"
                onClick={handleDownloadCV}
                disabled={isDownloading}
              >
                <span className="btn-content">
                  {isDownloading ? (
                    <>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="spinner"
                      >
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      {hero.buttons.primary}
                    </>
                  )}
                </span>
                <span className="btn-glow-effect" />
              </button>
              <button className="btn-secondary" onClick={scrollToProjects}>
                {hero.buttons.secondary}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-stats"
          >
            {hero.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-glow" />
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="tech-stack"
          >
            <p className="tech-label">
              <span className="tech-dot" />
              Tech Stack
            </p>
            <div className="tech-grid">
              {hero.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="tech-tag"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tech}
                  <span className="tech-glow" />
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-right"
        >
          <div className="avatar-container">
            {!isMobile ? (
              <Canvas
                camera={{ position: [0, 0, 4], fov: 45 }}
                gl={{
                  antialias: true,
                  powerPreference: "high-performance",
                }}
              >
                <Suspense fallback={null}>
                  <Environment preset="city" />
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[5, 5, 5]} intensity={1} />
                  <directionalLight
                    position={[-5, -5, 5]}
                    intensity={0.5}
                    color="#ba80ff"
                  />
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={2}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                  />
                  <Avatar3D />
                </Suspense>
              </Canvas>
            ) : (
              <div className="avatar-placeholder">

                <img 
                  src={hero.avatar} 
                  alt="Uzair's Avatar" 
                  className="avatar-static-img" 
                />
              </div>
            )}

            <div className="ring-dots" />
            <div className="ring-dots-outer" />

            <div className="particle-ring">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="dot" />
              ))}
            </div>

            <div className="avatar-glow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
