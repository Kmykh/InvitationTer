import React, { useState } from 'react';
import { MapPin, Navigation, Car, Copy, Check, ExternalLink, Info } from 'lucide-react';

export default function LocationHelper({ locationDetails }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const fullText = `${locationDetails.placeName} - ${locationDetails.address}, Huancayo`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="location-helper-section">
      <div className="section-title-wrap">
        <span className="section-eyebrow">UBICACIÓN EXACTA</span>
        <h3 className="section-title">Local de Recepción</h3>
        <div className="recuerdos-gold-divider">
          <span className="recuerdos-line"></span>
          <span className="recuerdos-star">✦</span>
          <span className="recuerdos-line"></span>
        </div>
        <p className="location-venue-name">{locationDetails.placeName}</p>
        <p className="location-venue-address">{locationDetails.address}</p>
      </div>

      <div className="location-floating-content">
        {/* Reference text in glassmorphic card */}
        <div className="location-tips-floating">
          <div className="tip-row">
            <div className="tip-icon-badge">
              <Info size={15} />
            </div>
            <span><strong>Referencia:</strong> {locationDetails.reference}</span>
          </div>
          <div className="tip-row">
            <div className="tip-icon-badge">
              <Car size={15} />
            </div>
            <span><strong>En auto o taxi:</strong> Ingreso directo a Jr. San Martín en La Punta - Sapallanga.</span>
          </div>
        </div>

        {/* Embedded Google Map with contoured luxury frame */}
        <div className="location-map-frame-deluxe">
          <div className="map-frame-header">
            <span className="map-header-dot"></span>
            <span className="map-header-title">MAPA INTERACTIVO</span>
            <span className="map-header-badge">SAPALLANGA</span>
          </div>
          <div className="map-iframe-container">
            <iframe
              title="Mapa Cantuta del Centro Sapallanga"
              src="https://maps.google.com/maps?q=Jr.+San+Martin,+La+Punta,+Sapallanga,+Huancayo&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="map-iframe"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Compact, well-arranged navigation buttons (side-by-side + copy pill) */}
        <div className="location-actions-container">
          <div className="location-nav-grid">
            <a
              href={locationDetails.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav-app btn-maps"
            >
              <div className="btn-app-icon-wrap maps-icon">
                <MapPin size={18} />
              </div>
              <div className="btn-app-text">
                <span className="app-subtitle">Navegación</span>
                <span className="app-title">Google Maps</span>
              </div>
              <ExternalLink size={14} className="app-external-icon" />
            </a>

            <a
              href={locationDetails.wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav-app btn-waze"
            >
              <div className="btn-app-icon-wrap waze-icon">
                <Navigation size={18} />
              </div>
              <div className="btn-app-text">
                <span className="app-subtitle">Ruta por voz</span>
                <span className="app-title">Waze</span>
              </div>
              <ExternalLink size={14} className="app-external-icon" />
            </a>
          </div>

          <button
            type="button"
            className="btn-copy-address-compact"
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <Check size={16} className="text-gold animate-scale-in" />
                <span>¡Dirección Copiada al Portapapeles!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copiar dirección para taxi o conductor</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}


