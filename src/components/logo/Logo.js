import React from 'react';
import './Logo.css';

const Logo = ({ size = 'medium', className = '', showText = true }) => {
  const sizeClass = `logo--${size}`;
  
  return (
    <div className={`logo ${sizeClass} ${className}`}>
      <div className="logo__icon">
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#2C3E50', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#34495E', stopOpacity: 1}} />
            </linearGradient>
            <linearGradient id="towerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#8B4513', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#654321', stopOpacity: 1}} />
            </linearGradient>
            <linearGradient id="hammerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#C0C0C0', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#808080', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          
          {/* Fondo circular */}
          <circle cx="256" cy="256" r="240" fill="url(#bgGradient)"/>
          
          {/* Torre simplificada */}
          <rect x="220" y="200" width="72" height="120" fill="url(#towerGradient)" rx="6"/>
          
          {/* Martillo horizontal */}
          <rect x="160" y="240" width="192" height="16" fill="#8B4513" rx="8"/>
          <rect x="140" y="220" width="32" height="56" fill="url(#hammerGradient)" rx="4"/>
          <rect x="340" y="220" width="32" height="56" fill="url(#hammerGradient)" rx="4"/>
          
          {/* Texto OWB */}
          {showText && (
            <text x="256" y="380" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" textAnchor="middle" fill="#F4A460">
              OWB
            </text>
          )}
        </svg>
      </div>
      {showText && (
        <div className="logo__text">
          <span className="logo__title">Old World</span>
          <span className="logo__subtitle">Builder</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
