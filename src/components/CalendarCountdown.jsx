import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, Sparkles } from 'lucide-react';

export default function CalendarCountdown({ targetDate, dateFormatted, isVisible = true, onCalendarComplete }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Staggered step-by-step reveal states ("que aparezca uno por uno")
  const [stepPhrase, setStepPhrase] = useState(false);
  const [stepMonth, setStepMonth] = useState(false);
  const [stepDate, setStepDate] = useState(false);
  const [stepButton, setStepButton] = useState(false);
  const [stepCountdownTitle, setStepCountdownTitle] = useState(false);
  const [stepCountdownGrid, setStepCountdownGrid] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    // Uno por uno: progressive soft entrance
    const t1 = setTimeout(() => setStepPhrase(true), 150);
    const t2 = setTimeout(() => setStepMonth(true), 650);
    const t3 = setTimeout(() => setStepDate(true), 1150);
    const t4 = setTimeout(() => setStepButton(true), 1650);
    const t5 = setTimeout(() => setStepCountdownTitle(true), 2150);
    const t6 = setTimeout(() => {
      setStepCountdownGrid(true);
      if (onCalendarComplete) {
        onCalendarComplete();
      }
    }, 2650);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [isVisible, onCalendarComplete]);

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(targetDate) - new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const addToGoogleCalendar = () => {
    const title = encodeURIComponent("Mis 50 Años - Teresa Isabel (Celebración)");
    const details = encodeURIComponent(
      "Misa de Salud: 12:00 P.M. en Parroquia San Jacinto - La Punta\n" +
      "Recepción: Local de recepciones “La Cantuta del Centro” (Jr. San Martín, La Punta - Sapallanga. Ref. paradero La Oyada a 2 cuadras subiendo hacia Mallqui)\n" +
      "Amenizan: Agrupación Reyes Latinos & Orquesta Internacional Fusión Juvenil Son Class Perú"
    );
    const location = encodeURIComponent("Local de recepciones La Cantuta del Centro, Jr. San Martín, La Punta - Sapallanga, Huancayo");
    const dates = "20261010T170000Z/20261011T050000Z";
    window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <section className="calendar-countdown-section">
      <div className="ethereal-date-stage">
        {/* 1. Introductory phrase */}
        <div className={`calendar-editorial-phrase soft-stagger-item ${stepPhrase ? 'is-revealed' : ''}`}>
          <span className="phrase-ornament">✦</span>
          <span className="phrase-main-text">Te esperamos en este día inolvidable</span>
          <span className="phrase-ornament">✦</span>
        </div>

        {/* 2. Month */}
        <div className={`date-month-floating soft-stagger-item ${stepMonth ? 'is-revealed' : ''}`}>
          <span className="sparkle-gold">✦</span>
          <span>{dateFormatted.monthName}</span>
          <span className="sparkle-gold">✦</span>
        </div>

        {/* 3. Hero Date display: Sábado | 10 | 12:00 P.M. with Year 2026 */}
        <div className={`date-hero-card-flyer soft-stagger-item ${stepDate ? 'is-revealed' : ''}`}>
          <div className="date-flyer-row">
            <div className="date-flyer-col left">
              <span className="flyer-day-name">{dateFormatted.dayOfWeek}</span>
              <div className="gold-line-mini"></div>
            </div>

            <div className="date-flyer-day-number">
              {dateFormatted.dayNumber}
            </div>

            <div className="date-flyer-col right">
              <div className="flyer-time-badge">
                <Clock size={14} className="flyer-clock-icon" />
                <span className="flyer-time-val">{dateFormatted.time || "12:00 P.M."}</span>
              </div>
              <div className="gold-line-mini"></div>
            </div>
          </div>

          <div className="date-flyer-year-row">
            <span className="flyer-year-text">{dateFormatted.year}</span>
          </div>
        </div>

        {/* 4. Calendar Action Button */}
        <div className={`calendar-btn-container soft-stagger-item ${stepButton ? 'is-revealed' : ''}`}>
          <button 
            type="button" 
            className="add-calendar-btn-minimal" 
            onClick={addToGoogleCalendar}
          >
            <CalendarIcon size={15} />
            <span>Agendar en Google Calendar</span>
          </button>
        </div>
      </div>

      {/* 5 & 6. Floating elegant countdown */}
      <div className="countdown-elegant-wrapper">
        <div className={`countdown-title-group soft-stagger-item ${stepCountdownTitle ? 'is-revealed' : ''}`}>
          <span className="phrase-ornament">✦</span>
          <h3 className="countdown-title-script">Faltan</h3>
          <span className="phrase-ornament">✦</span>
        </div>

        <div className={`countdown-floating-grid soft-stagger-item ${stepCountdownGrid ? 'is-revealed' : ''}`}>
          <div className="digit-float">
            <span className="digit-num-float">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="digit-tag-float">DÍAS</span>
          </div>
          <span className="digit-separator-gold">:</span>
          <div className="digit-float">
            <span className="digit-num-float">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="digit-tag-float">HRS</span>
          </div>
          <span className="digit-separator-gold">:</span>
          <div className="digit-float">
            <span className="digit-num-float">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="digit-tag-float">MIN</span>
          </div>
          <span className="digit-separator-gold">:</span>
          <div className="digit-float pulse-second">
            <span className="digit-num-float">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="digit-tag-float">SEG</span>
          </div>
        </div>
      </div>
    </section>
  );
}
