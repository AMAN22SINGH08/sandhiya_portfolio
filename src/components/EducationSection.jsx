import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle, Orbit } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function EducationSection() {
  return (
    <section
      id="education"
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
            <Orbit size={13} />
            <span>TRAJECTORY // 04</span>
          </div>
          <h2 className="section-title">Academic Flight Path</h2>
          <p className="section-desc">
            An orbital timeline tracing verified milestones from foundational schooling to higher computer science studies.
          </p>
        </div>

        {/* Orbital Trajectory Timeline Container */}
        <div
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {/* Central Connecting Trajectory Guide Line (Desktop & Mobile) */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              bottom: '40px',
              left: '28px',
              width: '2px',
              background:
                'linear-gradient(to bottom, #38bdf8 0%, #818cf8 60%, rgba(56, 189, 248, 0.2) 100%)',
              zIndex: 1,
            }}
            className="timeline-line"
          />

          {/* Education Trajectory Nodes */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {portfolioData.education.map((item, idx) => {
              const isCurrent = idx === 0;

              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.75rem',
                  }}
                  className="timeline-item"
                >
                  {/* Waypoint Satellite Ring / Dot */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: isCurrent
                        ? 'radial-gradient(circle, #0284c7 0%, #080d22 100%)'
                        : 'rgba(15, 23, 42, 0.9)',
                      border: isCurrent
                        ? '2px solid #38bdf8'
                        : '1.5px solid rgba(148, 163, 184, 0.3)',
                      boxShadow: isCurrent
                        ? '0 0 20px rgba(56, 189, 248, 0.6)'
                        : '0 0 10px rgba(0, 0, 0, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isCurrent ? '#ffffff' : 'var(--text-secondary)',
                      flexShrink: 0,
                      position: 'relative',
                    }}
                  >
                    <GraduationCap size={22} />
                    {isCurrent && (
                      <span
                        style={{
                          position: 'absolute',
                          inset: '-6px',
                          borderRadius: '50%',
                          border: '1px dashed rgba(56, 189, 248, 0.4)',
                        }}
                        className="animate-orbit-slow"
                      />
                    )}
                  </div>

                  {/* Waypoint Details Card */}
                  <div
                    className="glass-panel"
                    style={{
                      padding: '2rem',
                      flex: 1,
                      borderLeft: isCurrent
                        ? '3px solid #38bdf8'
                        : '1px solid var(--border-subtle)',
                    }}
                  >
                    {/* Header Level & Status */}
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
                          color: isCurrent ? 'var(--accent-cyan)' : 'var(--text-muted)',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {item.level}
                      </span>

                      {/* Grade Badge */}
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          padding: '0.25rem 0.65rem',
                          borderRadius: '9999px',
                          background: isCurrent
                            ? 'rgba(56, 189, 248, 0.15)'
                            : 'rgba(148, 163, 184, 0.1)',
                          border: isCurrent
                            ? '1px solid rgba(56, 189, 248, 0.4)'
                            : '1px solid rgba(148, 163, 184, 0.2)',
                          color: isCurrent ? '#38bdf8' : '#cbd5e1',
                        }}
                      >
                        {item.grade}
                      </span>
                    </div>

                    {/* Degree & Institution */}
                    <h3
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {item.degree}
                    </h3>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        marginBottom: '1.25rem',
                        flexWrap: 'wrap',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.82rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <span style={{ color: '#ffffff', fontWeight: 500 }}>
                        {item.institution}
                      </span>
                      <span style={{ color: 'rgba(148, 163, 184, 0.3)' }}>•</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={13} color="var(--accent-cyan)" />
                        {item.location}
                      </span>
                      <span style={{ color: 'rgba(148, 163, 184, 0.3)' }}>•</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Calendar size={13} color="var(--accent-cyan)" />
                        {item.period}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        borderTop: '1px solid rgba(148, 163, 184, 0.08)',
                        paddingTop: '1rem',
                      }}
                    >
                      {item.highlights.map((point, pIdx) => (
                        <div
                          key={pIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            fontSize: '0.88rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.5,
                          }}
                        >
                          <span
                            style={{
                              color: 'var(--accent-cyan)',
                              fontSize: '0.75rem',
                              marginTop: '2px',
                            }}
                          >
                            ▹
                          </span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
