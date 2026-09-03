import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Radio, Terminal, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';
import { portfolioData } from '../portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4500);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '7rem 0 5rem',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        {/* Section Header & Main CTA */}
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Radio size={13} className="animate-beacon" />
            <span>ESTABLISH CONTACT // 07</span>
          </div>
          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              marginBottom: '1rem',
            }}
          >
            “Have an idea worth building?”
          </h2>
          <p
            className="section-desc"
            style={{
              fontSize: '1.2rem',
              color: 'var(--accent-cyan)',
              fontWeight: 500,
            }}
          >
            “Let’s turn it into something real.”
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            maxWidth: '1050px',
            margin: '0 auto',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Communication Channels */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {/* Email Card with Copy Button */}
            <div
              className="glass-panel"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    marginBottom: '0.75rem',
                    color: 'var(--accent-cyan)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                  }}
                >
                  <Mail size={16} />
                  <span>DIRECT TRANSMISSION // EMAIL</span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    wordBreak: 'break-all',
                    marginBottom: '1rem',
                  }}
                >
                  {portfolioData.personal.email}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="btn-primary"
                  style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
                >
                  <Mail size={15} />
                  <span>Compose Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="btn-secondary"
                  style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
                >
                  {copied ? <Check size={15} color="#34d399" /> : <Copy size={15} />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Address'}</span>
                </button>
              </div>
            </div>

            {/* LinkedIn & GitHub Nodes */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {/* LinkedIn */}
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'rgba(2, 132, 199, 0.15)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                  }}
                >
                  <LinkedinIcon size={22} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    NETWORK
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: '#ffffff',
                    }}
                  >
                    LinkedIn
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'rgba(129, 140, 248, 0.15)',
                    border: '1px solid rgba(129, 140, 248, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#818cf8',
                  }}
                >
                  <GithubIcon size={22} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    SOURCE REPOS
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: '#ffffff',
                    }}
                  >
                    GitHub
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Mission Control Transmission Dispatch Form */}
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent-cyan)',
                letterSpacing: '0.08em',
              }}
            >
              <Terminal size={16} />
              <span>DISPATCH TRANSMISSION</span>
            </div>

            {formSubmitted ? (
              <div
                style={{
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: 'rgba(34, 197, 94, 0.15)',
                    border: '1px solid #22c55e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#22c55e',
                  }}
                >
                  <Check size={26} />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#ffffff' }}>
                  Transmission Received
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. Your transmission has been queued and Sanidhya will respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    OPERATOR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name or organization"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(15, 23, 42, 0.6)',
                      border: '1px solid var(--border-light)',
                      color: '#ffffff',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    SIGNAL RETURN // EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@company.com"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(15, 23, 42, 0.6)',
                      border: '1px solid var(--border-light)',
                      color: '#ffffff',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    PAYLOAD // MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Details regarding your project, internship, or collaboration inquiry..."
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(15, 23, 42, 0.6)',
                      border: '1px solid var(--border-light)',
                      color: '#ffffff',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      resize: 'vertical',
                      outline: 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    marginTop: '0.5rem',
                  }}
                >
                  <Send size={16} />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
