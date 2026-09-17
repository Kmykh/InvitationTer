import React, { useState } from 'react';
import { Church, Building2, UtensilsCrossed, PartyPopper, MapPin, ExternalLink, Copy, Check } from 'lucide-react';

export default function Itinerary({ itinerary }) {
  const [copiedId, setCopiedId] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'church': return <Church size={22} />;
      case 'building': return <Building2 size={22} />;
      case 'utensils': return <UtensilsCrossed size={22} />;
      case 'party': return <PartyPopper size={22} />;
      default: return <MapPin size={22} />;
    }
  };

  const copyAddress = (address, id) => {
    navigator.clipboard.writeText(address);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section className="itinerary-section">
      <div className="section-title-wrap">
        <span className="section-eyebrow">CRONOGRAMA ESPECIAL</span>
        <h3 className="section-title">Itinerario del Evento</h3>
        <div className="recuerdos-gold-divider">
          <span className="recuerdos-line"></span>
          <span className="recuerdos-star">✦</span>
          <span className="recuerdos-line"></span>
        </div>
      </div>

      <div className="timeline-vertical">
        {itinerary.map((item, index) => (
          <div 
            key={item.id} 
            className="timeline-item animated-timeline-step"
            style={{ animationDelay: `${index * 0.22 + 0.1}s` }}
          >
            {/* Timeline line + dot with animated glow */}
            <div className="timeline-line-col">
              <div className="timeline-dot">
                <div className="timeline-dot-aura"></div>
                {getIcon(item.icon)}
              </div>
              {index < itinerary.length - 1 && (
                <div className="timeline-connector">
                  <div className="timeline-connector-flow"></div>
                </div>
              )}
            </div>

            {/* Content wrapped in an animated luxury card */}
            <div className="timeline-content">
              <div className="timeline-card-box">
                <div className="timeline-card-header">
                  <span className="timeline-time">{item.time}</span>
                  <span className="timeline-status-dot">✦</span>
                </div>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-location">{item.location}</p>
                {item.address && (
                  <p className="timeline-address">{item.address}</p>
                )}
                {item.description && (
                  <p className="timeline-desc">{item.description}</p>
                )}

                {item.mapUrl && (
                  <div className="timeline-actions">
                    <a
                      href={item.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-map-link"
                    >
                      <MapPin size={13} />
                      <span>Ver en Mapa</span>
                      <ExternalLink size={11} />
                    </a>
                    <button
                      type="button"
                      className="timeline-copy-btn"
                      onClick={() => copyAddress(item.address, item.id)}
                    >
                      {copiedId === item.id ? (
                        <><Check size={13} /> <span>¡Copiada!</span></>
                      ) : (
                        <><Copy size={13} /> <span>Copiar</span></>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
