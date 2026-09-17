import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PhotoAlbum({ photos = [] }) {
  const defaultPhotos = [
    { src: '/images/2.jpeg', title: 'Celebrando la vida', caption: '50 Años de amor y alegría' },
    { src: '/images/3.jpeg', title: 'Momentos inolvidables', caption: 'Siempre sonriendo y compartiendo' },
    { src: '/images/1.jpeg', title: 'Aventuras y gratitud', caption: 'Agradecida con cada día vivido' }
  ];

  const photoList = (photos && photos.length > 0) ? photos : defaultPhotos;
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photoList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [photoList.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photoList.length) % photoList.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photoList.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      nextSlide();
    } else if (distance < -45) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="recuerdos-showcase-section">
      {/* Refined Header matching the rest of the invitation */}
      <div className="recuerdos-header">
        <span className="recuerdos-eyebrow">MOMENTOS INOLVIDABLES</span>
        <h3 className="recuerdos-title">Recuerdos</h3>
        <div className="recuerdos-gold-divider">
          <span className="recuerdos-line"></span>
          <span className="recuerdos-star">✦</span>
          <span className="recuerdos-line"></span>
        </div>
      </div>

      {/* Swipe Interactive Guide Hint (para que el usuario sepa que puede deslizar) */}
      <div className="recuerdos-swipe-guide">
        <span className="guide-arrow pulse-left">‹</span>
        <span className="guide-touch-icon">👆</span>
        <span className="guide-label">Desliza para ver más recuerdos</span>
        <span className="guide-arrow pulse-right">›</span>
      </div>

      {/* Modern seamless photo showcase */}
      <div 
        className="recuerdos-carousel-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Floating circular navigation buttons */}
        <button 
          type="button" 
          className="recuerdos-nav-btn prev" 
          onClick={prevSlide} 
          aria-label="Foto anterior"
        >
          <ChevronLeft size={22} />
        </button>

        <button 
          type="button" 
          className="recuerdos-nav-btn next" 
          onClick={nextSlide} 
          aria-label="Foto siguiente"
        >
          <ChevronRight size={22} />
        </button>

        {/* The Frame */}
        <div className="recuerdos-photo-frame">
          {/* Photo Counter Pill (ej: 1 / 3) */}
          <div className="recuerdos-counter-pill">
            <span className="counter-current">{currentIndex + 1}</span>
            <span className="counter-sep">/</span>
            <span className="counter-total">{photoList.length}</span>
          </div>

          <div 
            className="recuerdos-slider-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {photoList.map((photo, index) => (
              <div key={index} className="recuerdos-slide-card">
                <img 
                  src={photo.src} 
                  alt={photo.title || `Recuerdo ${index + 1}`} 
                  className="recuerdos-slide-img" 
                />
                
                {/* Subtle bottom gradient */}
                <div className="recuerdos-overlay-gradient"></div>

                {/* High-visibility Glassmorphic Caption Card */}
                {(photo.title || photo.caption) && (
                  <div className="recuerdos-caption-glass-card">
                    {photo.title && (
                      <div className="recuerdos-caption-badge-row">
                        <span className="recuerdos-caption-star">✦</span>
                        <span className="recuerdos-caption-tag">{photo.title}</span>
                      </div>
                    )}
                    {photo.caption && (
                      <p className="recuerdos-caption-text">{photo.caption}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Minimalist golden pagination dots */}
        <div className="recuerdos-indicators">
          {photoList.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`recuerdos-dot ${index === currentIndex ? 'is-active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a foto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



