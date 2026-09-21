import React, { useState } from 'react';
import { CheckCircle2, XCircle, Users, User, Loader2, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RsvpSection({ rsvp, celebrant }) {
  const [guestName, setGuestName] = useState('');
  const [willAttend, setWillAttend] = useState('si'); // 'si' | 'no'
  const [companions, setCompanions] = useState('1');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    setIsSubmitting(true);

    const now = new Date();
    const formattedDate = now.toLocaleDateString('es-PE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const newGuest = {
      fecha: formattedDate,
      nombre: guestName.trim(),
      asistencia: willAttend === 'si' ? 'Confirmado (Asistirá)' : 'No podrá asistir',
      asistentes: willAttend === 'si' ? companions : '0'
    };

    // 1. Send to Google Sheets Webhook if configured
    if (rsvp.googleSheetWebhookUrl) {
      try {
        await fetch(rsvp.googleSheetWebhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(newGuest)
        });
      } catch (err) {
        console.warn("Google Sheet sync error (fallback)", err);
      }
    }

    // 2. Local backup in localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('teresa_50_invitados') || '[]');
      existing.unshift(newGuest);
      localStorage.setItem('teresa_50_invitados', JSON.stringify(existing));
    } catch (e) {}

    // Confetti effect if attending
    if (willAttend === 'si') {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#D4AF37', '#E8A598', '#68192C', '#FFFFFF']
        });
      } catch (e) {}
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section className="rsvp-section" id="confirmar">
      <div className="section-title-wrap">
        <span className="section-eyebrow">RSVP • RESERVA TU LUGAR</span>
        <h3 className="section-title">Confirmar Asistencia</h3>
        <div className="recuerdos-gold-divider">
          <span className="recuerdos-line"></span>
          <span className="recuerdos-star">✦</span>
          <span className="recuerdos-line"></span>
        </div>
        <p className="rsvp-sub-phrase">
          Acompáñanos a celebrar los 50 años de {celebrant || "Teresa Isabel"}. Por favor confirma tu presencia.
        </p>
      </div>

      <div className="rsvp-luxury-card">
        {!submitted ? (
          <form className="rsvp-streamlined-form" onSubmit={handleSubmit}>
            {/* Step 1: Guest Name Input */}
            <div className="rsvp-input-group">
              <label htmlFor="guestName" className="rsvp-label-clean">
                <User size={15} className="text-gold" />
                <span>Nombre Completo o Familia</span>
              </label>
              <input
                id="guestName"
                type="text"
                className="rsvp-input-field"
                placeholder="Ej. Familia Rodríguez o Carmen Pérez"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
                autoComplete="name"
              />
            </div>

            {/* Step 2: Attendance Toggle (Compact 2-Button Row) */}
            <div className="rsvp-input-group">
              <span className="rsvp-label-clean">
                <Sparkles size={14} className="text-gold" />
                <span>¿Nos acompañarás en este gran día?</span>
              </span>
              <div className="rsvp-toggle-row">
                <button
                  type="button"
                  className={`rsvp-toggle-btn btn-yes ${willAttend === 'si' ? 'is-selected' : ''}`}
                  onClick={() => setWillAttend('si')}
                >
                  <CheckCircle2 size={18} className="toggle-icon" />
                  <div className="toggle-text">
                    <span className="toggle-main">¡Sí, asistiré!</span>
                    <span className="toggle-sub">Estaré presente</span>
                  </div>
                </button>

                <button
                  type="button"
                  className={`rsvp-toggle-btn btn-no ${willAttend === 'no' ? 'is-selected' : ''}`}
                  onClick={() => setWillAttend('no')}
                >
                  <XCircle size={18} className="toggle-icon" />
                  <div className="toggle-text">
                    <span className="toggle-main">No podré</span>
                    <span className="toggle-sub">Mis bendiciones</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 3: Companion Selector (Only if attending, perfectly fitted, no overflow) */}
            {willAttend === 'si' && (
              <div className="rsvp-input-group rsvp-fade-slide">
                <label className="rsvp-label-clean">
                  <Users size={15} className="text-gold" />
                  <span>Total de asistentes (incluyéndote):</span>
                </label>
                <div className="rsvp-chips-container">
                  {['1', '2', '3', '4', '5+'].map((num) => (
                    <button
                      key={num}
                      type="button"
                      className={`rsvp-chip-number ${companions === num ? 'is-active' : ''}`}
                      onClick={() => setCompanions(num)}
                    >
                      <span className="chip-digit">{num}</span>
                      <span className="chip-tag">{num === '1' ? 'pers.' : 'pers.'}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Submit Button with Shimmer */}
            <button
              type="submit"
              className="btn-rsvp-confirm-streamlined"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Registrando...</span>
                </>
              ) : (
                <>
                  <Sparkles size={17} />
                  <span>CONFIRMAR MI ASISTENCIA</span>
                </>
              )}
            </button>

            {/* Updated Deadline: 01 de Octubre de 2026 */}
            <div className="rsvp-deadline-pill">
              <span>Confirmar antes del <strong>01 de Octubre de 2026</strong></span>
            </div>
          </form>
        ) : (
          /* Confirmation Message */
          <div className="rsvp-success-luxury-card">
            <div className="success-icon-badge-glow">
              <CheckCircle2 size={40} />
            </div>
            <h4 className="success-name-heading">¡Muchas gracias, {guestName}!</h4>
            <p className="success-message-text">
              {willAttend === 'si' 
                ? `Nos llena de inmensa alegría saber que contaremos contigo. Hemos anotado tu confirmación para ${companions} persona(s) para celebrar juntos este gran día inolvidable.` 
                : 'Apreciamos sinceramente que nos hayas avisado. Aunque te echaremos de menos, sabemos que estarás presente de corazón enviando tus bendiciones a la cumpleañera.'}
            </p>
            <div className="success-accent-divider">
              <span>✦</span>
            </div>
            <button
              type="button"
              className="btn-new-response-luxury"
              onClick={() => {
                setSubmitted(false);
                setGuestName('');
                setCompanions('1');
              }}
            >
              Modificar o enviar otra respuesta
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

