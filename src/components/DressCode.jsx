import React from 'react';

export default function DressCode({ dressCode }) {
  return (
    <section className="dress-code-section">
      <div className="dress-code-arch-direct">
        {/* Decorative side floral sprays */}
        <img src="/images/flo6.png" alt="Guirnalda floral" className="dress-code-side-floral left" />
        <img src="/images/flo4.png" alt="Guirnalda floral" className="dress-code-side-floral right" />

        <span className="dress-code-eyebrow">CÓDIGO DE</span>
        <span className="dress-code-tag">VESTIMENTA</span>
        <h3 className="dress-code-style">{dressCode.title}</h3>

        {/* SVG Illustration */}
        <div className="dress-code-illustration">
          <svg viewBox="0 0 160 120" width="150" height="110" fill="none">
            <path 
              d="M40 25 C45 25 48 35 48 45 C48 55 42 65 38 75 C32 88 20 110 18 115 C17 116 25 116 45 116 C65 116 73 116 72 115 C70 110 58 88 52 75 C48 65 42 55 42 45 C42 35 45 25 50 25 Z" 
              fill="#6B1D2F" 
            />
            <path d="M40 25 Q45 32 50 25 Z" fill="#D4AF37" />

            {/* Suit */}
            <path 
              d="M90 25 L105 20 L120 20 L135 25 L140 70 L130 72 L128 50 L128 75 L97 75 L97 50 L95 72 L85 70 Z" 
              fill="#1A2E40" 
            />
            <polygon points="108,20 117,20 112,42" fill="#FFFFFF" />
            <polygon points="111,26 114,26 115,40 112.5,45 110,40" fill="#6B1D2F" />
            <polygon points="105,20 110,48 102,40 97,30" fill="#111F2D" />
            <polygon points="120,20 115,48 123,40 128,30" fill="#111F2D" />
            <path d="M97 75 L128 75 L126 116 L114 116 L112.5 82 L111 116 L99 116 Z" fill="#1A2E40" />
          </svg>
        </div>

        <p className="dress-code-desc">{dressCode.description}</p>

        {/* Color palette suggestions */}
        <div className="palette-container">
          <span className="palette-title">Colores sugeridos:</span>
          <div className="palette-swatches">
            {dressCode.palette.map((color, index) => (
              <div key={index} className="palette-item" title={color.name}>
                <div className="palette-circle" style={{ backgroundColor: color.hex }}></div>
                <span className="palette-name">{color.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

