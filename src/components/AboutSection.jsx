import React from 'react';
import { Cpu, Terminal, Compass, Award, User, Target, Layers } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function AboutSection() {
  return (
    <section
      id="about"
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
            <Compass size={13} />
            <span>MISSION PROFILE // 01</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-desc">
            An overview of my academic foundation, technical trajectory, and driving curiosity.
          </p>
        </div>

        {/* Mission Briefing Card Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
          }}
          className="about-grid"
        >
          {/* Main Briefing Log (Left) */}
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              position: 'relative',
            }}
          >
            {/* Top Terminal Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1.25rem',
                marginBottom: '1.75rem',
                borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--accent-cyan)',
                  letterSpacing: '0.08em',
                }}
              >
                <Terminal size={15} />
                <span>SANIDHYA.SHARMA // DOSSIER</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#ef4444',
                    opacity: 0.6,
                  }}
                />
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#eab308',
                    opacity: 0.6,
                  }}
                />
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#22c55e',
                    opacity: 0.8,
                  }}
                />
              </div>
            </div>

            {/* Biography Paragraphs */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
              }}
            >
              {portfolioData.about.bioParagraphs.map((para, idx) => (
                <p key={idx} style={{ margin: 0 }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Core Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
                marginTop: '2.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(148, 163, 184, 0.1)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                }}
              >
                <div
                  style={{
                    padding: '0.5rem',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    color: 'var(--accent-cyan)',
                  }}
                >
                  <Cpu size={18} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      marginBottom: '0.2rem',
                    }}
                  >
                    Systems &amp; Logic
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    C, C++, algorithmic structures
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                }}
              >
                <div
                  style={{
                    padding: '0.5rem',
                    borderRadius: '8px',
                    background: 'rgba(129, 140, 248, 0.1)',
                    color: 'var(--accent-indigo)',
                  }}
                >
                  <Layers size={18} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      marginBottom: '0.2rem',
                    }}
                  >
                    Modern Web
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    React, Node.js, Express, Databases
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                }}
              >
                <div
                  style={{
                    padding: '0.5rem',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: '#34d399',
                  }}
                >
                  <Target size={18} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      marginBottom: '0.2rem',
                    }}
                  >
                    AI &amp; Embedded
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Python NLP, Arduino hardware
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Telemetry Flight Card (Right) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
            className="telemetry-grid"
          >
            {portfolioData.about.telemetry.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--accent-cyan)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {item.value}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    borderTop: '1px solid rgba(148, 163, 184, 0.08)',
                    paddingTop: '0.75rem',
                    marginTop: '0.75rem',
                  }}
                >
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1.4fr 1fr !important;
          }
          .telemetry-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
