import React, { useState } from 'react';
import { MapPin, Navigation, Car, Copy, Check, ExternalLink, Info, Church, Building2 } from 'lucide-react';

export default function LocationHelper({ locationDetails, churchDetails }) {
  const [activeTab, setActiveTab] = useState('recepcion'); // 'recepcion' | 'iglesia'
  const [copied, setCopied] = useState(false);

  const venue = activeTab === 'recepcion' 
    ? {
        name: locationDetails?.placeName || 'Local de recepciones “La Cantuta del Centro”',
        address: locationDetails?.address || 'Jr. San Martín - La Punta - Sapallanga',
        reference: locationDetails?.reference || 'Ref. paradero La Oyada a 2 cuadras subiendo hacia Mallqui',
        mapsUrl: locationDetails?.googleMapsUrl || 'https://www.google.com/maps/search/?api=1&query=Cantuta+del+centro+Jr+San+Martin+La+Punta+Sapallanga+Huancayo',
        wazeUrl: locationDetails?.wazeUrl || 'https://waze.com/ul?q=Jr+San+Martin+Sapallanga',
        embedUrl: 'https://maps.google.com/maps?q=Jr.+San+Martin,+La+Punta,+Sapallanga,+Huancayo&t=&z=16&ie=UTF8&iwloc=&output=embed',
        badge: 'RECEPCIÓN & FIESTA'
      }
    : {
        name: churchDetails?.placeName || 'Parroquia San Jacinto - La Punta',
        address: churchDetails?.address || 'Plaza Principal, La Punta - Sapallanga',
        reference: 'Misa de Salud a las 12:00 P.M.',
        mapsUrl: churchDetails?.googleMapsUrl || 'https://www.google.com/maps/search/?api=1&query=Parroquia+San+Jacinto+La+Punta+Sapallanga+Huancayo',
        wazeUrl: 'https://waze.com/ul?q=Parroquia+San+Jacinto+La+Punta+Sapallanga',
        embedUrl: 'https://maps.google.com/maps?q=Parroquia+San+Jacinto,+La+Punta,+Sapallanga,+Huancayo&t=&z=16&ie=UTF8&iwloc=&output=embed',
        badge: 'MISA DE SALUD (12:00 P.M.)'
      };

  const handleCopy = () => {
    const fullText = `${venue.name} - ${venue.address}. ${venue.reference}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="location-helper-section">
      <div className="section-title-wrap">
        <span className="section-eyebrow">CÓMO LLEGAR</span>
        <h3 className="section-title">Ubicaciones del Evento</h3>
        <div className="recuerdos-gold-divider">
          <span className="recuerdos-line"></span>
          <span className="recuerdos-star">✦</span>
          <span className="recuerdos-line"></span>
        </div>
      </div>

      {/* Tabs between Reception & Church */}
      <div className="location-tabs-nav">
        <button
          type="button"
          className={`location-tab-btn ${activeTab === 'recepcion' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('recepcion')}
        >
          <Building2 size={16} />
          <span>Local Recepción</span>
        </button>
        <button
          type="button"
          className={`location-tab-btn ${activeTab === 'iglesia' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('iglesia')}
        >
          <Church size={16} />
          <span>Misa (Parroquia)</span>
        </button>
      </div>

      <div className="location-floating-content">
        <div className="location-venue-card-highlight">
          <span className="venue-card-badge">{venue.badge}</span>
          <h4 className="location-venue-name">{venue.name}</h4>
          <p className="location-venue-address">{venue.address}</p>
        </div>

        {/* Reference text in glassmorphic card */}
        <div className="location-tips-floating">
          <div className="tip-row">
            <div className="tip-icon-badge">
              <Info size={15} />
            </div>
            <span><strong>Referencia:</strong> {venue.reference}</span>
          </div>
          {activeTab === 'recepcion' && (
            <div className="tip-row">
              <div className="tip-icon-badge">
                <Car size={15} />
              </div>
              <span><strong>En auto o taxi:</strong> Subir por paradero La Oyada 2 cuadras en dirección a Mallqui.</span>
            </div>
          )}
        </div>

        {/* Embedded Google Map */}
        <div className="location-map-frame-deluxe">
          <div className="map-frame-header">
            <span className="map-header-dot"></span>
            <span className="map-header-title">MAPA INTERACTIVO</span>
            <span className="map-header-badge">LA PUNTA - SAPALLANGA</span>
          </div>
          <div className="map-iframe-container">
            <iframe
              key={activeTab}
              title={`Mapa ${venue.name}`}
              src={venue.embedUrl}
              className="map-iframe"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Action buttons */}
        <div className="location-actions-container">
          <div className="location-nav-grid">
            <a
              href={venue.mapsUrl}
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
              href={venue.wazeUrl}
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
                <span>¡Dirección y Referencia Copiadas!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copiar dirección y referencia para taxi</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
