import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function Footer({ celebrant = "Teresa Isabel" }) {
  return (
    <footer className="invitation-footer-deluxe">
      {/* Animated Floating Cherubs with Golden Aura */}
      <div className="footer-angels-stage">
        <div className="footer-angels-halo"></div>
        <img 
          src="/images/angeles.png" 
          alt="Querubines celestiales" 
          className="footer-angels-animated" 
        />
      </div>

      {/* Swaying Floral Garland */}
      <div className="footer-floral-garland-wrap">
        <img 
          src="/images/flowera.png" 
          alt="Guirnalda floral de gala" 
          className="footer-floral-garland" 
        />
      </div>

      {/* Decorative Golden Seal */}
      <div className="footer-seal-badge">
        <Sparkles size={14} className="seal-star-left" />
        <span className="seal-text">CELEBRACIÓN DE GALA</span>
        <Sparkles size={14} className="seal-star-right" />
      </div>

      {/* Celebrant Name in Calligraphy */}
      <h4 className="footer-name-script">{celebrant}</h4>

      {/* Emotional Closing Dedication from the card */}
      <p className="footer-closing-dedication">
        "Le damos gracias a Dios por concedernos la dicha de tenerte entre nosotros y nuestro agradecimiento por todo el amor, comprensión y sacrificio brindado con cariño en todos estos años."
      </p>

      {/* Big Warm Welcome Callout */}
      <div className="footer-welcome-banner">
        <span className="welcome-tag">¡TE ESPERAMOS CON LOS BRAZOS ABIERTOS!</span>
        <p className="welcome-subtext">Tu compañía y bendición es el regalo más hermoso</p>
      </div>

      <div className="footer-date-line">
        <span className="footer-date-text">SÁBADO 10 DE OCTUBRE DE 2026 • 12:00 P.M.</span>
        <span className="footer-place-text">Parroquia San Jacinto & Local La Cantuta del Centro</span>
        <span className="footer-subplace-text">La Punta - Sapallanga</span>
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
