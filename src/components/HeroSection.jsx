import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Terminal, Shield, Sparkles, Orbit, Code2 } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 2rem)',
        paddingBottom: '4rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Celestial Orbital Geometry (Subtle SVG) */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '8%',
          transform: 'translateY(-50%)',
          width: '680px',
          height: '680px',
          pointerEvents: 'none',
          opacity: 0.65,
          zIndex: 1,
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 700 700" fill="none" style={{ width: '100%', height: '100%' }}>
          {/* Subtle Outer Orbital Ring */}
          <circle
            cx="350"
            cy="350"
            r="320"
            stroke="rgba(56, 189, 248, 0.08)"
            strokeWidth="1"
            strokeDasharray="6 10"
          />
          {/* Middle Elliptical Orbit */}
          <ellipse
            cx="350"
            cy="350"
            rx="290"
            ry="190"
            stroke="rgba(129, 140, 248, 0.12)"
            strokeWidth="1"
            transform="rotate(-25 350 350)"
          />
          {/* Inner Coordinate Ring */}
          <circle
            cx="350"
            cy="350"
            r="230"
            stroke="rgba(56, 189, 248, 0.14)"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
          {/* Planetary Silhouette Accent */}
          <circle cx="350" cy="350" r="140" fill="rgba(8, 11, 24, 0.4)" />
          {/* Orbital Satellite Node */}
          <circle cx="580" cy="220" r="4" fill="#38bdf8" />
          <circle cx="580" cy="220" r="10" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
          {/* Tiny constellation dots */}
          <circle cx="160" cy="210" r="2.5" fill="rgba(224, 242, 254, 0.6)" />
          <circle cx="210" cy="180" r="2" fill="rgba(224, 242, 254, 0.5)" />
          <line
            x1="160"
            y1="210"
            x2="210"
            y2="180"
            stroke="rgba(56, 189, 248, 0.15)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Hero Content (Left) */}
          <div style={{ maxWidth: '640px' }}>
            {/* Status Indicator */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.4rem 0.95rem',
                borderRadius: '9999px',
                background: 'rgba(56, 189, 248, 0.05)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                marginBottom: '1.75rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                }}
                className="animate-beacon"
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  color: '#e0f2fe',
                }}
              >
                ● {portfolioData.personal.statusBadge}
              </span>
              <span
                style={{
                  color: 'rgba(148, 163, 184, 0.4)',
                  fontSize: '0.75rem',
                }}
              >
                |
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--accent-cyan)',
                  letterSpacing: '0.04em',
                }}
              >
                SYS.ONLINE
              </span>
            </div>

            {/* Name / Greeting Subtitle */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.95rem',
                color: 'var(--accent-cyan)',
                letterSpacing: '0.08em',
                marginBottom: '0.65rem',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Sparkles size={15} />
              <span>{portfolioData.personal.name}</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 4rem)',
                fontWeight: 700,
                letterSpacing: '-0.035em',
                color: '#ffffff',
                marginBottom: '1.35rem',
                lineHeight: 1.12,
              }}
            >
              “Building the future,{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                one line of code
              </span>{' '}
              at a time.”
            </h1>

            {/* Sub-headline */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '2.5rem',
                fontWeight: 400,
              }}
            >
              {portfolioData.personal.subHeadline}
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
              }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('projects');
                }}
                className="btn-primary"
              >
                <span>View My Work</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('contact');
                }}
                className="btn-secondary"
              >
                <span>Let's Connect</span>
                <MessageSquare size={17} />
              </a>
            </div>

            {/* Telemetry Micro-Readout */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.75rem',
                marginTop: '2.75rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid rgba(148, 163, 184, 0.1)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}
            >
              <div>
                <span style={{ color: 'var(--text-secondary)' }}>BASE:</span>{' '}
                Lovely Professional Univ
              </div>
              <div style={{ color: 'rgba(148, 163, 184, 0.3)' }}>•</div>
              <div>
                <span style={{ color: 'var(--text-secondary)' }}>DISCIPLINE:</span>{' '}
                B.Tech CSE
              </div>
            </div>
          </div>

          {/* Profile Photo Presentation (Right) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Luminous Orbital Ring Container */}
            <div
              style={{
                position: 'relative',
                width: '320px',
                height: '320px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Soft Ambient Depth Glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-15px',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 70%)',
                  filter: 'blur(24px)',
                  zIndex: 1,
                }}
                className="animate-pulse-glow"
              />

              {/* Outer Subtle Orbital Ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-20px',
                  borderRadius: '50%',
                  border: '1px dashed rgba(56, 189, 248, 0.25)',
                  zIndex: 2,
                }}
                className="animate-orbit-slow"
              >
                {/* Orbit Satellite Node */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12%',
                    left: '12%',
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: 'var(--accent-cyan)',
                    boxShadow: '0 0 10px rgba(56, 189, 248, 0.8)',
                  }}
                />
              </div>

              {/* Reverse Counter-Rotating Calibration Ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-6px',
                  borderRadius: '50%',
                  border: '1px solid rgba(129, 140, 248, 0.18)',
                  borderTopColor: 'rgba(56, 189, 248, 0.6)',
                  borderRightColor: 'transparent',
                  zIndex: 2,
                }}
                className="animate-orbit-reverse-slow"
              />

              {/* Primary Circular Portrait Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  padding: '5px',
                  background:
                    'linear-gradient(135deg, rgba(56, 189, 248, 0.5) 0%, rgba(30, 27, 75, 0.7) 50%, rgba(56, 189, 248, 0.3) 100%)',
                  boxShadow:
                    '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(56, 189, 248, 0.15)',
                  zIndex: 3,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: '#080b18',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {!imgError ? (
                    <img
                      src={portfolioData.personal.profileImage}
                      alt={portfolioData.personal.name}
                      onError={() => setImgError(true)}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 20%',
                        display: 'block',
                      }}
                    />
                  ) : null}

                  {/* Fallback Visor/Celestial Crest (Active if photo file not placed yet) */}
                  {imgError && (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background:
                          'radial-gradient(circle at 50% 40%, #0d1530 0%, #050816 80%)',
                        position: 'relative',
                      }}
                    >
                      {/* Stylized Astronomical Astronaut / Developer Visor */}
                      <div
                        style={{
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          background:
                            'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(99, 102, 241, 0.1) 100%)',
                          border: '1.5px solid rgba(56, 189, 248, 0.4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '0.75rem',
                          boxShadow: 'inset 0 0 20px rgba(56, 189, 248, 0.2)',
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '2rem',
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            color: '#ffffff',
                            textShadow: '0 0 15px rgba(56, 189, 248, 0.6)',
                          }}
                        >
                          SS
                        </span>
                        {/* Orbiting micro dot */}
                        <div
                          style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                          }}
                          className="animate-orbit-slow"
                        >
                          <span
                            style={{
                              position: 'absolute',
                              top: '-3px',
                              left: '50%',
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: '#38bdf8',
                              boxShadow: '0 0 6px #38bdf8',
                            }}
                          />
                        </div>
                      </div>

                      <div
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          color: '#f8fafc',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {portfolioData.personal.name}
                      </div>

                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          color: 'var(--accent-cyan)',
                          letterSpacing: '0.08em',
                          marginTop: '0.2rem',
                        }}
                      >
                        CSE UNDERGRADUATE
                      </div>
                    </div>
                  )}

                  {/* Scientific Lens Coordinates Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      color: 'rgba(224, 242, 254, 0.6)',
                      background: 'rgba(5, 8, 22, 0.75)',
                      backdropFilter: 'blur(6px)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    REC // 31.95°N 77.10°E
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
