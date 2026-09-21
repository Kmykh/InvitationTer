import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PhotoAlbum({ photos = [] }) {
  const defaultPhotos = [
    { src: '/images/portada.jpeg', title: 'Teresa Isabel', caption: '50 años de vida, fe y amor, celebrando la dicha de estar juntos.', isCover: true },
    { src: '/images/1.jpeg', title: 'Momentos Inolvidables', caption: 'Sonrisas sinceras que se quedan grabadas en el corazón para siempre.' },
    { src: '/images/2.jpeg', title: 'Amor y Familia', caption: 'El mayor tesoro y la bendición más grande que Dios me ha regalado.' },
    { src: '/images/3.jpeg', title: 'Gratitud Infinita', caption: 'Agradecida por cada paso, cada abrazo y cada bendición en el camino.' },
    { src: '/images/4.jpeg', title: 'Alegría Compartida', caption: 'La felicidad se multiplica cuando se comparte con las personas que amas.' },
    { src: '/images/5.jpeg', title: 'Paz y Plenitud', caption: '50 años de historias, memorias doradas y amor incondicional.' },
    { src: '/images/6.jpeg', title: 'Recuerdos de Oro', caption: 'Cada instante vivido es una joya que brilla en el alma.' },
    { src: '/images/7.jpeg', title: 'Dicha y Bendición', caption: 'Celebrando la vida con el corazón lleno de gozo y esperanza.' }
  ];

  const photoList = (photos && photos.length > 0) ? photos : defaultPhotos;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animDirection, setAnimDirection] = useState('next');
  
  const touchStartX = useRef(0);
  const thumbnailsRef = useRef(null);

  // Auto-advance every 5.5s
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setAnimDirection('next');
      setCurrentIndex((prev) => (prev + 1) % photoList.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [photoList.length, isPaused]);

  // Keep active thumbnail in view (horizontal scroll only)
  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeThumb = thumbnailsRef.current.children[currentIndex];
      if (activeThumb) {
        const container = thumbnailsRef.current;
        const scrollLeft = activeThumb.offsetLeft - (container.offsetWidth / 2) + (activeThumb.offsetWidth / 2);
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex]);

  const prevSlide = (e) => {
    if (e) e.stopPropagation();
    setAnimDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + photoList.length) % photoList.length);
  };

  const nextSlide = (e) => {
    if (e) e.stopPropagation();
    setAnimDirection('next');
    setCurrentIndex((prev) => (prev + 1) % photoList.length);
  };

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;
    if (distance > 40) {
      nextSlide();
    } else if (distance < -40) {
      prevSlide();
    }
    setTimeout(() => setIsPaused(false), 2500);
  };

  const handleSelectThumb = (index) => {
    setAnimDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  };

  const currentPhoto = photoList[currentIndex] || photoList[0];

  return (
    <section className="recuerdos-showcase-section">
      {/* Refined Minimalist Header */}
      <div className="recuerdos-header">
        <span className="recuerdos-eyebrow">ÁLBUM DE RECUERDOS</span>
        <h3 className="recuerdos-title">Momentos Inolvidables</h3>
        <div className="recuerdos-gold-divider">
          <span className="recuerdos-line"></span>
          <span className="recuerdos-star">✦</span>
          <span className="recuerdos-line"></span>
        </div>
      </div>

      {/* Main Minimalist Carousel Container (Borderless & Clean) */}
      <div 
        className="recuerdos-minimal-wrapper"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Arrows (Delicate and elegant) */}
        <button 
          type="button" 
          className="recuerdos-nav-arrow prev" 
          onClick={prevSlide} 
          aria-label="Foto anterior"
        >
          <ChevronLeft size={22} />
        </button>

        <button 
          type="button" 
          className="recuerdos-nav-arrow next" 
          onClick={nextSlide} 
          aria-label="Foto siguiente"
        >
          <ChevronRight size={22} />
        </button>

        {/* Minimalist Borderless Photo Frame (No click to enlarge, clean luxury) */}
        <div className="recuerdos-borderless-frame">
          {/* Subtle Corner Counter Tag */}
          <div className="recuerdos-pill-overlay">
            {currentPhoto.isCover ? (
              <span className="pill-portada">PORTADA</span>
            ) : (
              <span className="pill-counter">{currentIndex + 1} / {photoList.length}</span>
            )}
          </div>

          {/* Active Photo with smooth fade transition */}
          <div className={`recuerdos-photo-stage anim-${animDirection}`} key={currentIndex}>
            <img 
              src={currentPhoto.src} 
              alt={currentPhoto.title || `Recuerdo ${currentIndex + 1}`} 
              className="recuerdos-clean-img" 
            />
          </div>
        </div>

        {/* Animated Text Caption (Smooth fade-up, beautiful typography, no cursor) */}
        <div className="recuerdos-caption-minimal" key={`caption-${currentIndex}`}>
          <h4 className="recuerdos-caption-title-anim">
            {currentPhoto.title}
          </h4>
          <p className="recuerdos-caption-phrase-anim">
            {currentPhoto.caption}
          </p>
        </div>

        {/* Minimalist Thumbnails Strip (Clean rounded previews, no clutter, no emojis) */}
        <div className="recuerdos-thumbs-minimal-container">
          <div className="recuerdos-thumbs-row" ref={thumbnailsRef}>
            {photoList.map((photo, index) => (
              <button
                key={index}
                type="button"
                className={`recuerdos-thumb-minimal ${index === currentIndex ? 'is-active' : ''}`}
                onClick={() => handleSelectThumb(index)}
                aria-label={`Ir a foto ${index + 1}`}
              >
                <img 
                  src={photo.src} 
                  alt="" 
                  className="thumb-minimal-img" 
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
