import React from 'react';
import '../styles/starfield.css';

/**
 * StarfieldBackground:
 * Renders an animated 3-layer parallax starfield with light-themed luxury
 * champagne/royal gold stardust particles and soft cream/gold radial ambiance.
 */
export default function StarfieldBackground({ 
  className = '', 
  includeBackground = true,
  opacity = 'opacity-100'
}) {
  return (
    <div 
      className={`pointer-events-none select-none overflow-hidden ${
        includeBackground ? 'starfield-bg' : 'absolute inset-0'
      } ${opacity} ${className}`}
      aria-hidden="true"
    >
      <div className="stars-1" />
      <div className="stars-2" />
      <div className="stars-3" />
    </div>
  );
}
