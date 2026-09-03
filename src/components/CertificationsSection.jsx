import React from 'react';
import { ShieldCheck, Award, FileCode, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
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
            <ShieldCheck size={13} />
            <span>CREDENTIALS // 05</span>
          </div>
          <h2 className="section-title">Verified Certifications</h2>
          <p className="section-desc">
            Industry-recognized credentials in programming fundamentals and technology leadership.
          </p>
        </div>

        {/* Certification Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {portfolioData.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top Accent Gradient Line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, ${cert.accent}, transparent)`,
                }}
              />

              <div>
                {/* Badge Crest & Code */}
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
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: `1px solid ${cert.accent}66`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: cert.accent,
                      boxShadow: `0 0 15px ${cert.accent}33`,
                    }}
                  >
                    {idx === 0 ? <Award size={24} /> : <FileCode size={24} />}
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {cert.badgeId}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    lineHeight: 1.3,
                  }}
                >
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.95rem',
                    color: cert.accent,
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                  }}
                >
                  {cert.issuer}
                </div>

                {/* Domain Focus */}
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}
                >
                  {cert.domain}
                </p>
              </div>

              {/* Bottom Metadata & Verification Indicator */}
              <div
                style={{
                  marginTop: '2rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(148, 163, 184, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#34d399',
                  }}
                >
                  <CheckCircle2 size={14} />
                  <span>VERIFIED MISSION CREDENTIAL</span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  {cert.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
