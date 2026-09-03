import React, { useState, useEffect } from 'react';
import { Rocket, ExternalLink, Radio, Cpu, Mic, Activity, HardDrive, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { portfolioData } from '../portfolioData';

// Simulated AI Waveform Component for Project 1
function VoiceWaveformVisualizer({ isHovered }) {
  const barCount = 28;
  return (
    <div
      style={{
        width: '100%',
        height: '140px',
        borderRadius: '12px',
        background: 'rgba(5, 8, 22, 0.75)',
        border: '1px solid rgba(56, 189, 248, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 1rem',
      }}
    >
      {/* Background Orbital Rings */}
      <div
        style={{
          position: 'absolute',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          border: '1px dashed rgba(56, 189, 248, 0.15)',
          transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 8s linear infinite',
          pointerEvents: 'none',
        }}
        className={isHovered ? 'animate-orbit-slow' : ''}
      />

      {/* Center Mic / AI Beacon */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          color: isHovered ? 'var(--accent-cyan)' : 'var(--text-muted)',
          transition: 'color 0.3s ease',
        }}
      >
        <Mic size={14} />
        <span>AUDIO_STREAM // {isHovered ? 'ACTIVE SPECTRUM' : 'STANDBY'}</span>
      </div>

      {/* Dynamic Waveform Bars */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          height: '75px',
          width: '100%',
          maxWidth: '380px',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        {Array.from({ length: barCount }).map((_, i) => {
          // Dynamic heights based on index
          const baseHeight = Math.sin((i / barCount) * Math.PI) * 55 + 15;
          const animDelay = (i * 0.08) % 1.2;
          const animDuration = 0.8 + ((i % 5) * 0.15);

          return (
            <div
              key={i}
              style={{
                width: '6px',
                height: `${baseHeight}%`,
                borderRadius: '3px',
                background: isHovered
                  ? 'linear-gradient(to top, #0284c7 0%, #38bdf8 60%, #e0f2fe 100%)'
                  : 'linear-gradient(to top, rgba(2, 132, 199, 0.4) 0%, rgba(56, 189, 248, 0.3) 100%)',
                boxShadow: isHovered
                  ? '0 0 8px rgba(56, 189, 248, 0.7)'
                  : 'none',
                transition: 'all 0.3s ease',
                animation: isHovered
                  ? `waveformBar ${animDuration}s ease-in-out infinite alternate`
                  : 'none',
                animationDelay: `${animDelay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Status Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: isHovered ? '#34d399' : 'var(--text-muted)',
        }}
      >
        NLP PARSER // READY
      </div>
    </div>
  );
}

// Simulated Smart Parking Radar & Slot Visualizer for Project 2
function SmartParkingVisualizer({ isHovered }) {
  const [slots, setSlots] = useState([
    { id: 'S-01', occupied: false, dist: '185cm' },
    { id: 'S-02', occupied: true, dist: '24cm' },
    { id: 'S-03', occupied: false, dist: '190cm' },
    { id: 'S-04', occupied: true, dist: '18cm' },
    { id: 'S-05', occupied: false, dist: '178cm' },
    { id: 'S-06', occupied: true, dist: '32cm' },
  ]);

  // Periodic sensor pulse
  useEffect(() => {
    if (!isHovered) return;
    const interval = setInterval(() => {
      setSlots((prev) =>
        prev.map((slot, i) => {
          if (i === 0 || i === 4) {
            const nextOcc = !slot.occupied;
            return {
              ...slot,
              occupied: nextOcc,
              dist: nextOcc ? '22cm' : '182cm',
            };
          }
          return slot;
        })
      );
    }, 2400);

    return () => clearInterval(interval);
  }, [isHovered]);

  const availableCount = slots.filter((s) => !s.occupied).length;

  return (
    <div
      style={{
        width: '100%',
        borderRadius: '12px',
        background: 'rgba(5, 8, 22, 0.85)',
        border: '1px solid rgba(56, 189, 248, 0.2)',
        padding: '1.25rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Sensor Header & Simulated 16x2 LCD Display */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--accent-cyan)',
          }}
        >
          <Radio size={14} className={isHovered ? 'animate-pulse-glow' : ''} />
          <span>ULTRASONIC RADAR // ECHO SCAN</span>
        </div>

        {/* LCD 16x2 Display Mockup */}
        <div
          style={{
            background: '#042f2e',
            border: '1.5px solid #0d9488',
            borderRadius: '4px',
            padding: '0.25rem 0.65rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#2dd4bf',
            letterSpacing: '0.08em',
            boxShadow: '0 0 10px rgba(45, 212, 191, 0.2)',
          }}
        >
          LCD: [AVAIL: {availableCount}/6] [STATUS: OK]
        </div>
      </div>

      {/* Parking Grid Visualization */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.75rem',
          position: 'relative',
        }}
      >
        {/* Radar Scanning Line Effect */}
        {isHovered && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #38bdf8, transparent)',
              boxShadow: '0 0 8px #38bdf8',
              zIndex: 5,
              animation: 'scanline 2s linear infinite',
              pointerEvents: 'none',
            }}
          />
        )}

        {slots.map((slot) => (
          <div
            key={slot.id}
            style={{
              borderRadius: '8px',
              border: slot.occupied
                ? '1px solid rgba(239, 68, 68, 0.4)'
                : '1px solid rgba(34, 197, 94, 0.4)',
              background: slot.occupied
                ? 'rgba(239, 68, 68, 0.08)'
                : 'rgba(34, 197, 94, 0.08)',
              padding: '0.65rem 0.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              transition: 'all 0.3s ease',
            }}
          >
            {/* LED Status Light */}
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: slot.occupied ? '#ef4444' : '#22c55e',
                boxShadow: slot.occupied
                  ? '0 0 8px rgba(239, 68, 68, 0.8)'
                  : '0 0 8px rgba(34, 197, 94, 0.8)',
                marginBottom: '0.35rem',
              }}
            />

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              {slot.id}
            </span>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: slot.occupied ? '#fca5a5' : '#86efac',
                marginTop: '0.15rem',
              }}
            >
              {slot.occupied ? 'OCCUPIED' : 'EMPTY'}
            </span>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                color: 'var(--text-muted)',
              }}
            >
              {slot.dist}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="projects"
      style={{
        padding: '6rem 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Rocket size={13} />
            <span>MISSIONS // 03</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            Engineered systems spanning conversational artificial intelligence and embedded IoT hardware.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
          }}
        >
          {portfolioData.projects.map((project, index) => {
            const isHovered = hoveredProject === project.id;
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="glass-panel project-card"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  padding: '2.5rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '2.5rem',
                  alignItems: 'center',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  borderColor: isHovered
                    ? 'rgba(56, 189, 248, 0.45)'
                    : 'var(--border-subtle)',
                  boxShadow: isHovered
                    ? '0 24px 48px -12px rgba(0, 0, 0, 0.7), 0 0 24px -4px rgba(56, 189, 248, 0.2)'
                    : 'none',
                }}
              >
                {/* Visual Simulation Interactive Stage (Alternates on desktop) */}
                <div
                  style={{
                    order: isEven ? 2 : 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                  className="project-visual"
                >
                  {project.id === 'voice-recognition-ai' ? (
                    <VoiceWaveformVisualizer isHovered={isHovered} />
                  ) : (
                    <SmartParkingVisualizer isHovered={isHovered} />
                  )}

                  {/* Micro-telemetry bar under visual */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.65rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(15, 23, 42, 0.4)',
                      border: '1px solid rgba(148, 163, 184, 0.08)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    <span>ID: {project.id.toUpperCase()}</span>
                    <span style={{ color: 'var(--accent-cyan)' }}>
                      STATUS: VERIFIED DEPLOYMENT
                    </span>
                  </div>
                </div>

                {/* Project Details Content */}
                <div
                  style={{
                    order: isEven ? 1 : 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  className="project-info"
                >
                  {/* Category & Date */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.75rem',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--accent-cyan)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {project.classification}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {project.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      marginBottom: '0.5rem',
                      color: '#ffffff',
                    }}
                  >
                    {project.title}
                  </h3>

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: 'var(--accent-cyan)',
                      marginBottom: '1rem',
                    }}
                  >
                    {project.tagline}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.98rem',
                      lineHeight: 1.65,
                      color: 'var(--text-secondary)',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Capabilities List */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      marginBottom: '1.75rem',
                    }}
                  >
                    {project.capabilities.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.85rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <CheckCircle2
                          size={14}
                          color="var(--accent-cyan)"
                          style={{ marginTop: '3px', flexShrink: 0 }}
                        />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '2rem',
                    }}
                  >
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '6px',
                          background: 'rgba(56, 189, 248, 0.08)',
                          border: '1px solid rgba(56, 189, 248, 0.25)',
                          color: '#e0f2fe',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{
                          padding: '0.65rem 1.25rem',
                          fontSize: '0.85rem',
                        }}
                      >
                        <GithubIcon size={16} />
                        <span>GitHub</span>
                      </a>
                    )}

                    {project.links.viewProject && (
                      <a
                        href={project.links.viewProject}
                        onClick={(e) => {
                          if (project.links.viewProject === '#') {
                            e.preventDefault();
                            alert(`Project: ${project.title}\nBuilt with ${project.technologies.join(', ')}.`);
                          }
                        }}
                        className="btn-primary"
                        style={{
                          padding: '0.65rem 1.25rem',
                          fontSize: '0.85rem',
                        }}
                      >
                        <span>View Project</span>
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .project-card {
            grid-template-columns: 1fr 1.15fr !important;
          }
          .project-card:nth-child(even) .project-visual {
            order: 1 !important;
          }
          .project-card:nth-child(even) .project-info {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}
