import React, { useState, useEffect } from 'react';
import { Crown } from 'lucide-react';

export default function IntroSection({ 
  celebrant = "Teresa Isabel", 
  age = 50, 
  thanksgiving = "Le damos gracias a Dios por concedernos la dicha de tenerte entre nosotros y nuestro agradecimiento por todo el amor, comprensión y sacrificio que nos has brindado con mucho cariño en todos estos años.",
  invitationText = "Sus hijos, esposo y familiares tienen el agrado de invitar a Ud. y familia a la misa de salud y a la fiesta que ofrecen con motivo de celebrar:",
  isOpened, 
  onIntroComplete 
}) {
  // Animation stages: 'idle' -> 'typing-thanks' -> 'typing-invite' -> 'celebration'
  const [stage, setStage] = useState('idle');
  const [typedThanks, setTypedThanks] = useState('');
  const [typedInvite, setTypedInvite] = useState('');
  
  // Coordinated celebration reveal elements
  const [showCrown, setShowCrown] = useState(false);
  const [showAnniversary, setShowAnniversary] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showDivider, setShowDivider] = useState(false);

  // 1. Kick off when envelope opens
  useEffect(() => {
    if (!isOpened) return;
    const startTimer = setTimeout(() => {
      setStage('typing-thanks');
    }, 400);
    return () => clearTimeout(startTimer);
  }, [isOpened]);

  // 2. Typewriter for Thanksgiving prayer
  useEffect(() => {
    if (stage !== 'typing-thanks') return;

    if (typedThanks.length < thanksgiving.length) {
      const timeout = setTimeout(() => {
        setTypedThanks(thanksgiving.slice(0, typedThanks.length + 1));
      }, 18);
      return () => clearTimeout(timeout);
    } else {
      // Thanksgiving finished, pause then start invitation line
      const nextTimer = setTimeout(() => {
        setStage('typing-invite');
      }, 350);
      return () => clearTimeout(nextTimer);
    }
  }, [stage, typedThanks, thanksgiving]);

  // 3. Typewriter for Invitation sentence
  useEffect(() => {
    if (stage !== 'typing-invite') return;

    if (typedInvite.length < invitationText.length) {
      const timeout = setTimeout(() => {
        setTypedInvite(invitationText.slice(0, typedInvite.length + 1));
      }, 16);
      return () => clearTimeout(timeout);
    } else {
      // Invitation finished, proceed to coordinated celebration reveal
      const nextTimer = setTimeout(() => {
        setStage('celebration');
      }, 300);
      return () => clearTimeout(nextTimer);
    }
  }, [stage, typedInvite, invitationText]);

  // 4. Coordinated celebration reveal: Crown -> "Mis 50 Años" -> "TERESA ISABEL" -> Divider -> Complete
  useEffect(() => {
    if (stage !== 'celebration') return;

    // A. Crown drops down
    const tCrown = setTimeout(() => setShowCrown(true), 50);
    // B. "Mis 50 Años" reveals with sparkle
    const tAniv = setTimeout(() => setShowAnniversary(true), 350);
    // C. Name reveals in classic regal serif
    const tName = setTimeout(() => setShowName(true), 750);
    // D. Gold divider expands
    const tDiv = setTimeout(() => setShowDivider(true), 1150);
    // E. Notify App to reveal Calendar Countdown
    const tDone = setTimeout(() => {
      if (onIntroComplete) {
        onIntroComplete();
      }
    }, 1650);

    return () => {
      clearTimeout(tCrown);
      clearTimeout(tAniv);
      clearTimeout(tName);
      clearTimeout(tDiv);
      clearTimeout(tDone);
    };
  }, [stage, onIntroComplete]);

  // Quick skip on click if user taps
  const handleFastForward = () => {
    if (stage !== 'celebration') {
      setTypedThanks(thanksgiving);
      setTypedInvite(invitationText);
      setStage('celebration');
      setShowCrown(true);
      setShowAnniversary(true);
      setShowName(true);
      setShowDivider(true);
      if (onIntroComplete) {
        onIntroComplete();
      }
    }
  };

  return (
    <section className="intro-section" onClick={handleFastForward}>
      <div className="hero-rose-stage">
        {/* Cherubs at the apex */}
        <div className="hero-angels-crown">
          <img src="/images/angeles.png" alt="Ángeles querubines" className="hero-angels-img" />
        </div>

        {/* 1. Coherent Typewriter Text: Thanksgiving & Invitation */}
        <div className="hero-dedication-floating">
          <div className="quote-icon-decor">“</div>
          
          {/* Thanksgiving dedication text */}
          <p className="hero-dedication-phrase typewriter-text">
            {typedThanks}
          </p>

          {/* Seamless Invitation to the viewer */}
          {(stage === 'typing-invite' || stage === 'celebration') && (
            <p className="hero-invitation-phrase typewriter-text fade-in">
              {typedInvite}
            </p>
          )}
        </div>

        {/* 2. Coordinated Celebration Reveal */}
        <div className="intro-typography intro-typography-center">
          {/* Crown floating with sparkle */}
          <div className={`intro-crown-animated ${showCrown ? 'crown-drop-visible' : 'crown-hidden'}`}>
            <Crown size={32} className="royal-gold-crown-icon" />
          </div>

          {/* "Mis 50 Años" coordinated reveal */}
          <div className={`anniversary-royal-badge ${showAnniversary ? 'anniversary-visible' : 'anniversary-hidden'}`}>
            <span className="aniv-word-side aniv-mis">MIS</span>
            <span className="aniv-number-gold">{age}</span>
            <span className="aniv-word-side aniv-anos">AÑOS</span>
          </div>

          {/* Celebrant Name in classic regal serif font (from before) */}
          <h1 className={`hero-name-serif ${showName ? 'zoom-in-enter' : 'opacity-0'}`}>
            {celebrant}
          </h1>

          {/* Golden Divider */}
          <div className={`hero-gold-divider hero-gold-divider-center ${showDivider ? 'divider-expand-visible' : 'opacity-0'}`}>
            <span className="divider-sparkle">✦</span>
            <span className="divider-bar"></span>
            <span className="divider-sparkle">✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
