import React from 'react';
import { Target, Trophy, Award, MapPin, Zap } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function AchievementsSection() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Zap size={24} color="#38bdf8" />;
      case 1:
        return <Trophy size={24} color="#f59e0b" />;
      case 2:
        return <Award size={24} color="#818cf8" />;
      default:
        return <Target size={24} color="#38bdf8" />;
    }
  };

  return (
    <section
      id="achievements"
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
            <Trophy size={13} />
            <span>MISSION MILESTONES // 06</span>
          </div>
          <h2 className="section-title">Key Achievements</h2>
          <p className="section-desc">
            Milestones celebrating algorithmic discipline, technical excellence, and competitive distinction.
          </p>
        </div>

        {/* Milestones Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {portfolioData.achievements.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              {/* Top Milestone Header */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(148, 163, 184, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getIcon(idx)}
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    MILESTONE 0{idx + 1}
                  </span>
                </div>

                {/* Big Number / Title Ticker Display */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2.75rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                    }}
                  >
                    {item.numeric}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1rem',
                      color: 'var(--accent-cyan)',
                      fontWeight: 600,
                    }}
                  >
                    {item.suffix}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: '#f8fafc',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.label}
                </h3>

                {/* Detail */}
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {item.detail}
                </p>
              </div>

              {/* Bottom Mission Telemetry Pill */}
              <div
                style={{
                  marginTop: '2rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(148, 163, 184, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--accent-cyan)',
                  }}
                />
                <span>STATUS: RECORD CONFIRMED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
