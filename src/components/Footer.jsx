import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function Footer({ celebrant = "Teresa Isabel" }) {
  return (
    <footer className="invitation-footer-deluxe">

      {/* Swaying Floral Garland */}
      <div className="footer-floral-garland-wrap">
        <img 
          src="/images/flowera.png" 
          alt="Guirnalda floral de gala" 
          className="footer-floral-garland" 
        />
      </div>

      {/* Big Warm Welcome Callout */}
      <div className="footer-welcome-banner">
        <span className="welcome-tag">¡TE ESPERAMOS CON LOS BRAZOS ABIERTOS!</span>
        <p className="welcome-subtext">Tu compañía y bendición es el regalo más hermoso</p>
      </div>

      {/* Bottom Flourish & Hearts */}
      <div className="footer-love-row">
        <div className="footer-flourish-line"></div>
        <span className="footer-sparkle-center">✦</span>
        <div className="footer-flourish-line"></div>
      </div>

      <p className="footer-signature-credit">
        Con todo el amor de sus hijos, esposo y familiares <Heart size={13} fill="#A63A50" className="inline-heart-pulse" /> para nuestra querida {celebrant}
      </p>

      {/* Animated Floating Petals/Sparkles */}
      <div className="footer-sparkles-floating" aria-hidden="true">
        <span className="sparkle-dot dot-1">✦</span>
        <span className="sparkle-dot dot-2">✧</span>
        <span className="sparkle-dot dot-3">✦</span>
        <span className="sparkle-dot dot-4">✧</span>
      </div>
    </footer>
  );
}
