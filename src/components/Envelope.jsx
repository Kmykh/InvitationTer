import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function Envelope({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleOpen = () => {
    if (isOpening || isCompleted) return;
    setIsOpening(true);

    try {
      // Golden & rose celebration confetti burst
      confetti({
        particleCount: 110,
        spread: 85,
        origin: { y: 0.55 },
        colors: ['#D4AF37', '#F7E7CE', '#E8A598', '#68192C', '#FFFFFF']
      });
    } catch (e) {}

    // Allow user to see the letter card slide out with the recipient details, then transition smoothly to the invitation
    setTimeout(() => {
      setIsCompleted(true);
    }, 750);

    setTimeout(() => {
      if (onOpen) onOpen();
    }, 1150);
  };

  return (
    <>
      {/* Clicking anywhere on the screen triggers opening */}
      <div 
        className={`envelope-screen-luxury ${isCompleted ? 'fade-away' : ''}`}
        onClick={handleOpen}
        style={{ cursor: isOpening ? 'default' : 'pointer' }}
      >
        {/* Top Cherub Crest */}
        <div className={`envelope-top-crest-clean ${isOpening ? 'fade-out-early' : ''}`}>
          <img 
            src="/images/angeles.png" 
            alt="Ángeles querubines" 
            className="crest-angels-clean" 
          />
        </div>

        {/* Header ABOVE the envelope - Acomodo armónico y elegante */}
        <div className={`envelope-header-royal ${isOpening ? 'fade-out-early' : ''}`}>
          <div className="royal-anniversary-title">
            <span className="anniversary-word">MIS</span>
            <span className="anniversary-number">50</span>
            <span className="anniversary-word">AÑOS</span>
          </div>

          <div className="royal-sub-invitation">
            <span className="royal-sub-accent">—</span>
            <span className="royal-sub-text">UNA INVITACIÓN PARA TI</span>
            <span className="royal-sub-accent">—</span>
          </div>

          <div className="royal-instruction-card">
            <span className="instruction-lead">Presiona el sobre para abrir</span>
            <span className="instruction-alt">o cualquier parte de la pantalla</span>
          </div>
        </div>

        {/* Realistic Classic Invitation Envelope (Rectangular 3:2 ratio, authentic 4-fold paper geometry) */}
        <div 
          className={`photorealistic-envelope-wrapper ${isOpening ? 'envelope-opening-active' : ''}`}
          onClick={handleOpen}
        >
          <div className="envelope-card-body">
            {/* Base Envelope Paper with Authentic 3-Panel Fold Seams (Left, Right, Bottom) */}
            <div className="envelope-seams-layer">
              <svg 
                className="envelope-folds-svg" 
                viewBox="0 0 360 230" 
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="envelopeBaseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFDF9" />
                    <stop offset="100%" stopColor="#F5ECE0" />
                  </linearGradient>
                  <linearGradient id="envelopeSideLeft" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#FAF4EA" />
                    <stop offset="100%" stopColor="#EDE3D2" />
                  </linearGradient>
                  <linearGradient id="envelopeSideRight" x1="100%" y1="50%" x2="0%" y2="50%">
                    <stop offset="0%" stopColor="#FAF4EA" />
                    <stop offset="100%" stopColor="#EDE3D2" />
                  </linearGradient>
                  <linearGradient id="envelopeBottomFlap" x1="50%" y1="100%" x2="50%" y2="0%">
                    <stop offset="0%" stopColor="#FAF1E4" />
                    <stop offset="100%" stopColor="#F8EEE0" />
                  </linearGradient>
                  <filter id="bottomFoldShadow" x="-10%" y="-10%" width="120%" height="130%">
                    <feDropShadow dx="0" dy="-2" stdDeviation="3" floodColor="#460E1C" floodOpacity="0.08" />
                  </filter>
                </defs>

                {/* Base Envelope Face */}
                <rect width="360" height="230" rx="14" fill="url(#envelopeBaseGrad)" />

                {/* Left Side Fold */}
                <polygon 
                  points="0,0 180,122 0,230" 
                  fill="url(#envelopeSideLeft)" 
                  stroke="rgba(212, 175, 55, 0.4)" 
                  strokeWidth="1" 
                />

                {/* Right Side Fold */}
                <polygon 
                  points="360,0 180,122 360,230" 
                  fill="url(#envelopeSideRight)" 
                  stroke="rgba(212, 175, 55, 0.4)" 
                  strokeWidth="1" 
                />

                {/* Bottom Triangle Fold (Overlaps Left and Right) */}
                <polygon 
                  points="0,230 180,118 360,230" 
                  fill="url(#envelopeBottomFlap)" 
                  stroke="rgba(212, 175, 55, 0.6)" 
                  strokeWidth="1.2" 
                  filter="url(#bottomFoldShadow)" 
                />

                {/* Delicate gold corner flourish accents */}
                <line x1="12" y1="218" x2="60" y2="218" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="0.8" />
                <line x1="300" y1="218" x2="348" y2="218" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="0.8" />
              </svg>
            </div>

            {/* Overlapping Top Triangular Flap with 3D Flip Open Animation */}
            <div className={`envelope-top-flap-deluxe ${isOpening ? 'flap-opening-deluxe' : ''}`}>
              <svg 
                className="top-flap-svg-deluxe" 
                viewBox="0 0 360 138" 
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="topFlapGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#FFFDFB" />
                    <stop offset="100%" stopColor="#F9F1E6" />
                  </linearGradient>
                  <filter id="topFlapPaperShadow" x="-10%" y="-10%" width="120%" height="150%">
                    <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#460E1C" floodOpacity="0.18" />
                  </filter>
                </defs>

                {/* Main pointed flap with luxury paper drop-shadow */}
                <polygon 
                  points="0,0 360,0 180,134" 
                  fill="url(#topFlapGrad)" 
                  stroke="#D4AF37" 
                  strokeWidth="1.5" 
                  filter="url(#topFlapPaperShadow)" 
                />

                {/* Inner delicate gold stitch line */}
                <polyline 
                  points="24,8 180,122 336,8" 
                  fill="none" 
                  stroke="rgba(212, 175, 55, 0.45)" 
                  strokeWidth="0.9" 
                  strokeDasharray="4,3" 
                />
              </svg>
            </div>

            {/* Central Royal Wax Seal (Sitting precisely at the apex of the flaps) */}
            <div className={`wax-seal-center-anchor ${isOpening ? 'seal-clicked-open' : ''}`}>
              <div className="seal-glow-ring"></div>
              <img 
                src="/assets/wax_seal.jpg" 
                alt="Sello de cera 50" 
                className="wax-seal-stamped-img" 
              />
            </div>

            {/* Outer embossed border frame */}
            <div className="envelope-outer-golden-rim"></div>
          </div>
        </div>

        {/* Subdued footer blessing */}
        <div className={`envelope-bottom-blessing ${isOpening ? 'fade-out-early' : ''}`}>
          <p className="blessing-quote">Con la bendición de Dios, hijos, esposo y familiares</p>
          <span className="blessing-name">TERESA ISABEL</span>
        </div>
      </div>
    </>
  );
}
