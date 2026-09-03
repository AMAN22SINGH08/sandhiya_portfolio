import React from 'react';
import { Compass, Heart, ArrowUp } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(148, 163, 184, 0.1)',
        padding: '3rem 0 2rem',
        background: 'rgba(3, 6, 17, 0.95)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(148, 163, 184, 0.08)',
          }}
        >
          {/* Left Brand info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #0284c7 0%, #1e1b4b 100%)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#38bdf8',
              }}
            >
              <Compass size={18} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                {portfolioData.personal.name}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--text-muted)',
                }}
              >
                B.Tech CSE • Lovely Professional University
              </div>
            </div>
          </div>

          {/* Center Coordinates */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span>ORBIT: 31.95°N, 77.10°E</span>
            <span>•</span>
            <span style={{ color: 'var(--accent-cyan)' }}>SYS STATUS: ALL SYSTEMS NOMINAL</span>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 0.95rem',
              borderRadius: '8px',
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid var(--border-light)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Bottom Credits */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} {portfolioData.personal.name}. Designed with deep-space mission aesthetics.
          </div>
          <div>
            Pure engineering. Zero fabricated metrics.
          </div>
        </div>
      </div>
    </footer>
  );
}
