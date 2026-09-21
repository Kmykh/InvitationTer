import React from 'react';
import { Music, Sparkles, Disc3 } from 'lucide-react';

export default function MusicSection({ musicians = [] }) {
  if (!musicians || musicians.length === 0) return null;

  return (
    <section className="music-section">
      <div className="section-title-wrap">
        <span className="section-eyebrow">EN VIVO & GRAN FIESTA</span>
        <h3 className="section-title music-headline">
          <span className="amenizan-bullet">•</span> Amenizan <span className="amenizan-bullet">•</span>
        </h3>
        <div className="recuerdos-gold-divider">
          <span className="recuerdos-line"></span>
          <span className="recuerdos-star">✦</span>
          <span className="recuerdos-line"></span>
        </div>
        <p className="music-section-subtitle">
          Celebrando los 50 años con dos grandes agrupaciones musicales de primer nivel
        </p>
      </div>

      <div className="musicians-grid">
        {musicians.map((artist) => (
          <div key={artist.id} className="musician-card-luxury">
            <div className="musician-card-glow"></div>
            
            <div className="musician-img-wrap">
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="musician-img"
                loading="lazy"
              />
              <div className="musician-badge-float">
                <Music size={13} className="musician-badge-icon" />
                <span>{artist.badge || "En Vivo"}</span>
              </div>
            </div>

            <div className="musician-info">
              <h4 className="musician-name">{artist.name}</h4>
              {artist.director && (
                <span className="musician-director">Director: {artist.director}</span>
              )}
              {artist.subtitle && (
                <p className="musician-sub">{artist.subtitle}</p>
              )}
            </div>

            <div className="musician-card-shimmer"></div>
          </div>
        ))}
      </div>

      <div className="music-party-note">
        <Sparkles size={16} className="music-sparkle-icon" />
        <span>¡Prepara tus mejores pasos para una tarde y noche inolvidable!</span>
        <Sparkles size={16} className="music-sparkle-icon" />
      </div>
    </section>
  );
}
