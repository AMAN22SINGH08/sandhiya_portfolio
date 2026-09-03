import React, { useState } from 'react';
import { Network, Code, Server, Database, Sparkles, CheckCircle2, Orbit } from 'lucide-react';
import { portfolioData } from '../portfolioData';

// Technology nodes with normalized coordinates around center (350, 260)
const TECH_NODES = [
  // Orbit 1: Languages (Inner orbit, radius ~130px)
  { id: 'cpp', name: 'C++', category: 'Language', x: 250, y: 170, connected: ['c', 'python', 'javascript'] },
  { id: 'c', name: 'C', category: 'Language', x: 450, y: 170, connected: ['cpp'] },
  { id: 'python', name: 'Python', category: 'Language', x: 440, y: 350, connected: ['cpp', 'javascript'] },
  { id: 'javascript', name: 'JavaScript', category: 'Language', x: 260, y: 350, connected: ['react', 'nodejs', 'python'] },

  // Orbit 2: Web Frameworks & Tech (Middle orbit, radius ~210px)
  { id: 'react', name: 'React', category: 'Frontend', x: 150, y: 260, connected: ['javascript', 'nodejs', 'html', 'css'] },
  { id: 'nodejs', name: 'Node.js', category: 'Backend', x: 200, y: 440, connected: ['javascript', 'expressjs', 'mongodb'] },
  { id: 'expressjs', name: 'Express.js', category: 'Backend', x: 350, y: 460, connected: ['nodejs', 'mongodb', 'mysql'] },
  { id: 'html', name: 'HTML', category: 'Frontend', x: 160, y: 130, connected: ['css', 'bootstrap', 'react'] },
  { id: 'css', name: 'CSS', category: 'Frontend', x: 350, y: 65, connected: ['html', 'bootstrap'] },
  { id: 'bootstrap', name: 'Bootstrap', category: 'Frontend', x: 530, y: 120, connected: ['html', 'css'] },

  // Orbit 3: Databases & Systems (Outer orbit)
  { id: 'mysql', name: 'MySQL', category: 'Database', x: 550, y: 260, connected: ['dbms', 'expressjs'] },
  { id: 'mongodb', name: 'MongoDB', category: 'Database', x: 500, y: 430, connected: ['dbms', 'nodejs', 'expressjs'] },
  { id: 'dbms', name: 'DBMS', category: 'Database', x: 350, y: 155, connected: ['mysql', 'mongodb'] },
];

export default function SkillsSection() {
  const [activeNode, setActiveNode] = useState(null);

  const activeConnectedIds = activeNode
    ? (TECH_NODES.find((n) => n.id === activeNode.id)?.connected || [])
    : [];

  return (
    <section
      id="skills"
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
            <Network size={13} />
            <span>TECHNOLOGY SYSTEMS // 02</span>
          </div>
          <h2 className="section-title">Technical Constellation</h2>
          <p className="section-desc">
            An interconnected system of verified programming languages, frameworks, and data platforms.
          </p>
        </div>

        {/* Interactive Constellation Canvas / SVG Area */}
        <div
          className="glass-panel"
          style={{
            padding: '2rem 1.5rem',
            marginBottom: '3.5rem',
            position: 'relative',
            overflow: 'visible',
          }}
        >
          {/* Header indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid rgba(148, 163, 184, 0.08)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
              }}
            >
              ORBITAL MAPPING // HOVER NODES TO INSPECT CONNECTIONS
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent-cyan)',
              }}
            >
              ACTIVE NODES: 13
            </div>
          </div>

          {/* Constellation Container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '700px',
              height: '520px',
              margin: '0 auto',
            }}
            className="constellation-wrapper"
          >
            {/* SVG Lines & Orbital Rings */}
            <svg
              viewBox="0 0 700 520"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
              }}
            >
              {/* Concentric Orbit Rings */}
              <circle
                cx="350"
                cy="260"
                r="110"
                fill="none"
                stroke="rgba(56, 189, 248, 0.07)"
                strokeWidth="1"
                strokeDasharray="4 6"
              />
              <circle
                cx="350"
                cy="260"
                r="185"
                fill="none"
                stroke="rgba(129, 140, 248, 0.06)"
                strokeWidth="1"
                strokeDasharray="3 8"
              />
              <circle
                cx="350"
                cy="260"
                r="245"
                fill="none"
                stroke="rgba(56, 189, 248, 0.04)"
                strokeWidth="1"
              />

              {/* Lines from Central Node to All Tech Nodes */}
              {TECH_NODES.map((node) => {
                const isConnected =
                  activeNode?.id === node.id ||
                  activeConnectedIds.includes(node.id);
                return (
                  <line
                    key={`center-${node.id}`}
                    x1="350"
                    y1="260"
                    x2={node.x}
                    y2={node.y}
                    stroke={
                      activeNode?.id === node.id
                        ? 'rgba(56, 189, 248, 0.65)'
                        : isConnected
                        ? 'rgba(56, 189, 248, 0.35)'
                        : 'rgba(148, 163, 184, 0.09)'
                    }
                    strokeWidth={activeNode?.id === node.id ? 2 : 1}
                    strokeDasharray={isConnected ? 'none' : '3 4'}
                    style={{ transition: 'all 0.3s ease' }}
                  />
                );
              })}

              {/* Inter-node Constellation Links */}
              {TECH_NODES.map((node) =>
                node.connected.map((targetId) => {
                  const targetNode = TECH_NODES.find((n) => n.id === targetId);
                  if (!targetNode || node.id > targetId) return null;
                  const isHighlighted =
                    (activeNode?.id === node.id && activeConnectedIds.includes(targetId)) ||
                    (activeNode?.id === targetId && activeConnectedIds.includes(node.id));

                  return (
                    <line
                      key={`${node.id}-${targetId}`}
                      x1={node.x}
                      y1={node.y}
                      x2={targetNode.x}
                      y2={targetNode.y}
                      stroke={
                        isHighlighted
                          ? 'rgba(56, 189, 248, 0.8)'
                          : 'rgba(129, 140, 248, 0.12)'
                      }
                      strokeWidth={isHighlighted ? 2 : 1}
                      style={{ transition: 'all 0.3s ease' }}
                    />
                  );
                })
              )}
            </svg>

            {/* Central Hub Node */}
            <div
              style={{
                position: 'absolute',
                left: '350px',
                top: '260px',
                transform: 'translate(-50%, -50%)',
                width: '124px',
                height: '124px',
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, #0f1d40 0%, #080d22 75%, #050816 100%)',
                border: '1.5px solid rgba(56, 189, 248, 0.6)',
                boxShadow:
                  '0 0 25px rgba(56, 189, 248, 0.35), inset 0 0 15px rgba(56, 189, 248, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 15,
                textAlign: 'center',
                padding: '0.5rem',
              }}
            >
              <Orbit size={20} color="#38bdf8" style={{ marginBottom: '0.2rem' }} />
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: '#ffffff',
                  lineHeight: 1.2,
                }}
              >
                SANIDHYA
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  color: 'var(--accent-cyan)',
                  letterSpacing: '0.08em',
                }}
              >
                TECH STACK
              </div>
            </div>

            {/* Interactive Orbiting Nodes */}
            {TECH_NODES.map((node) => {
              const isHovered = activeNode?.id === node.id;
              const isConnected = activeConnectedIds.includes(node.id);

              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setActiveNode(node)}
                  onMouseLeave={() => setActiveNode(null)}
                  onClick={() => setActiveNode(isHovered ? null : node)}
                  style={{
                    position: 'absolute',
                    left: `${node.x}px`,
                    top: `${node.y}px`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: isHovered ? 25 : 12,
                    cursor: 'pointer',
                    transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div
                    style={{
                      padding: '0.45rem 0.9rem',
                      borderRadius: '9999px',
                      background: isHovered
                        ? 'rgba(14, 165, 233, 0.35)'
                        : isConnected
                        ? 'rgba(30, 41, 59, 0.9)'
                        : 'rgba(15, 23, 42, 0.75)',
                      border: isHovered
                        ? '1.5px solid #38bdf8'
                        : isConnected
                        ? '1px solid rgba(56, 189, 248, 0.5)'
                        : '1px solid rgba(148, 163, 184, 0.18)',
                      backdropFilter: 'blur(8px)',
                      color: isHovered
                        ? '#ffffff'
                        : isConnected
                        ? '#e0f2fe'
                        : 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      letterSpacing: '0.02em',
                      whiteSpace: 'nowrap',
                      boxShadow: isHovered
                        ? '0 0 18px rgba(56, 189, 248, 0.6)'
                        : isConnected
                        ? '0 0 10px rgba(56, 189, 248, 0.25)'
                        : '0 4px 12px rgba(0, 0, 0, 0.4)',
                      transform: isHovered ? 'scale(1.12)' : 'scale(1)',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: isHovered
                          ? '#38bdf8'
                          : isConnected
                          ? '#818cf8'
                          : 'rgba(148, 163, 184, 0.5)',
                        display: 'inline-block',
                      }}
                    />
                    <span>{node.name}</span>
                  </div>

                  {/* Tooltip on Active Node */}
                  {isHovered && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-48px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'rgba(5, 8, 22, 0.95)',
                        border: '1px solid rgba(56, 189, 248, 0.4)',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)',
                        borderRadius: '6px',
                        padding: '0.3rem 0.65rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--accent-cyan)',
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                        zIndex: 30,
                      }}
                    >
                      {node.category} System // Linked: {node.connected.length}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Node Telemetry Card Bar */}
          <div
            style={{
              marginTop: '1.5rem',
              padding: '1rem 1.25rem',
              borderRadius: '10px',
              background: 'rgba(15, 23, 42, 0.45)',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: activeNode ? 'var(--accent-cyan)' : 'var(--text-muted)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: activeNode ? '#ffffff' : 'var(--text-secondary)',
                }}
              >
                {activeNode
                  ? `Selected: ${activeNode.name} (${activeNode.category})`
                  : 'Hover any node in the constellation above to inspect telemetry'}
              </span>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
              }}
            >
              SYSTEM: REAL-TIME CONSTELLATION GRAPH
            </div>
          </div>
        </div>

        {/* Structured Categorized Grid (For Mobile & Quick Reference) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {portfolioData.skills.categories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  marginBottom: '1.25rem',
                }}
              >
                {cat.name.includes('Languages') && <Code size={18} color="#38bdf8" />}
                {cat.name.includes('Frameworks') && <Server size={18} color="#818cf8" />}
                {cat.name.includes('Databases') && <Database size={18} color="#34d399" />}
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                  }}
                >
                  {cat.name}
                </h3>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                }}
              >
                {cat.skills.map((s, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      background: 'rgba(15, 23, 42, 0.4)',
                      border: '1px solid rgba(148, 163, 184, 0.08)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.2rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: '#f8fafc',
                        }}
                      >
                        {s.name}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {s.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Mission Matrix */}
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              marginBottom: '1.5rem',
            }}
          >
            <Sparkles size={18} color="var(--accent-cyan)" />
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
              }}
            >
              Professional Competencies &amp; Soft Skills
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {portfolioData.skills.softSkills.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.25rem',
                  borderRadius: '10px',
                  background: 'rgba(15, 23, 42, 0.4)',
                  border: '1px solid rgba(148, 163, 184, 0.08)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent-cyan)" />
                  <h4
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#ffffff',
                    }}
                  >
                    {item.name}
                  </h4>
                </div>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .constellation-wrapper {
            height: 380px !important;
            transform: scale(0.72);
            transform-origin: center center;
          }
        }
      `}</style>
    </section>
  );
}
