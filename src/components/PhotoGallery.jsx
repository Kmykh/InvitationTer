import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function PhotoGallery({ photos }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedPhoto(photos[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    const newIdx = (currentIndex + 1) % photos.length;
    setCurrentIndex(newIdx);
    setSelectedPhoto(photos[newIdx]);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    const newIdx = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(newIdx);
    setSelectedPhoto(photos[newIdx]);
  };

  return (
    <section className="photo-gallery-section">
      <div className="section-title-wrap">
        <img src="/images/angeles.png" alt="Ángeles querubines" className="gallery-angels-badge" />
        <span className="section-eyebrow">RECUERDOS QUE PERDURAN</span>
        <h3 className="section-title">Momentos Especiales</h3>
        <p className="section-desc">
          Celebrando 50 años de vida, risas, fortaleza y amor incondicional
        </p>
        <img src="/images/flowera.png" alt="Flores" className="gallery-header-floral" />
      </div>

      <div className="polaroid-gallery-grid">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className={`polaroid-card tilt-${(index % 3) + 1}`}
            onClick={() => openLightbox(index)}
          >
            <div className="polaroid-pin"></div>
            <div className="polaroid-img-wrapper">
              <img src={photo.src} alt={photo.title} className="polaroid-img" />
              <div className="polaroid-hover-badge">
                <Heart size={16} fill="#E8A598" color="#E8A598" />
                <span>Ver foto completa</span>
              </div>
            </div>
            <div className="polaroid-caption">
              <h5 className="polaroid-title">{photo.title}</h5>
              <p className="polaroid-sub">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox */}
      {selectedPhoto && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button type="button" className="lightbox-close-btn" onClick={closeLightbox} aria-label="Cerrar foto">
            <X size={28} />
          </button>

          <button type="button" className="lightbox-nav-btn prev-btn" onClick={prevPhoto} aria-label="Foto anterior">
            <ChevronLeft size={36} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPhoto.src} alt={selectedPhoto.title} className="lightbox-img" />
            <div className="lightbox-info">
              <h4>{selectedPhoto.title}</h4>
              <p>{selectedPhoto.caption}</p>
            </div>
          </div>

          <button type="button" className="lightbox-nav-btn next-btn" onClick={nextPhoto} aria-label="Siguiente foto">
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
}

