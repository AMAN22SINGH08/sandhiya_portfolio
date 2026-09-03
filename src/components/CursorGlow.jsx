import React, { useEffect, useState } from 'react';

/**
 * Subtle Desktop Cursor Ambient Aura
 * Only active on non-touch devices with fine pointers.
 */
export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const onPointerChange = (e) => setIsFinePointer(e.matches);
    mediaQuery.addEventListener('change', onPointerChange);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      mediaQuery.removeEventListener('change', onPointerChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!isFinePointer || !visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, rgba(37, 99, 235, 0.02) 45%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 5,
        transition: 'opacity 0.3s ease',
      }}
      aria-hidden="true"
    />
  );
}
