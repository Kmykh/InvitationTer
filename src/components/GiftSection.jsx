import React from 'react';
import { Heart } from 'lucide-react';

export default function GiftSection() {
  return (
    <section className="gift-section-floating">
      <div className="gift-artwork-wrapper">
        <img 
          src="/images/custom-gifts.jpg" 
          alt="Caja y lluvia de sobres de gala" 
          className="gift-artwork-img" 
        />
        <img 
          src="/images/flowera.png" 
          alt="Flores decorativas" 
          className="gift-floral-overlay" 
        />
      </div>

      <span className="gift-eyebrow">DETALLE ESPECIAL</span>
      <h4 className="gift-title">Lluvia de Sobres</h4>

      <p className="gift-desc">
        Tu presencia y cariño es nuestro mejor regalo. Si deseas tener una muestra de aprecio hacia Teresa, contaremos con un baúl especial de <strong>Lluvia de Sobres</strong> el día del evento.
      </p>

      <div className="gift-heart-divider">
        <Heart size={16} className="text-rose" fill="#D98897" />
      </div>
    </section>
  );
}

