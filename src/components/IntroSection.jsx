import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function IntroSection({ celebrant, age, phrase, isOpened, onIntroComplete }) {
  const [showInvite, setShowInvite] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showPhrase, setShowPhrase] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    if (!isOpened) return; // Only start when envelope is open

    // 1. Show "Estás invitada a mis X años"
    const timer1 = setTimeout(() => setShowInvite(true), 350);
    // 2. Show name & divider
    const timer2 = setTimeout(() => setShowName(true), 1200);
    // 3. Start typing phrase
    const timer3 = setTimeout(() => setShowPhrase(true), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [isOpened]);

  // Typewriter effect (clean, fluid typing)
  useEffect(() => {
    if (showPhrase && typedText.length < phrase.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(phrase.slice(0, typedText.length + 1));
      }, 26); // 26ms per letter for a crisp, smooth reading pace
      return () => clearTimeout(timeoutId);
    } else if (showPhrase && typedText.length === phrase.length) {
      setTypingComplete(true);
      // Give a moment for the signature to appear, then notify App to reveal the date
      const completeTimer = setTimeout(() => {
        if (onIntroComplete) {
          onIntroComplete();
        }
      }, 700);
      return () => clearTimeout(completeTimer);
    }
  }, [showPhrase, typedText, phrase, onIntroComplete]);

  return (
    <section className="intro-section">
      <div className="hero-rose-stage">
        <div className="hero-angels-crown">
          <img src="/images/angeles.png" alt="Ángeles querubines" className="hero-angels-img" />
        </div>

        <div className="intro-typography">
          {/* Animated Intro - Left Aligned with elegant margins */}
          <div className={`intro-invite-text ${showInvite ? 'fade-up-enter' : 'opacity-0'}`}>
            Estás invitada a mis {age} años
          </div>
          
          <h2 className={`hero-name-serif ${showName ? 'zoom-in-enter' : 'opacity-0'}`}>
            {celebrant}
          </h2>
          
          <div className={`hero-gold-divider ${showName ? 'fade-in' : 'opacity-0'}`}>
            <span className="divider-sparkle">✦</span>
            <span className="divider-bar"></span>
            <span className="divider-sparkle">✦</span>
          </div>
        </div>
      </div>

      <div className={`hero-dedication-floating ${showPhrase ? 'fade-in' : 'opacity-0'}`}>
        <div className="quote-icon-decor">“</div>
        <p className="hero-dedication-phrase typewriter-text">
          {typedText}
        </p>
        <div className={`dedication-signature ${typingComplete ? 'fade-in' : 'opacity-0'}`}>
          <Heart size={14} className="text-rose" fill="#D98897" />
          <span>Con amor, {celebrant}</span>
        </div>
      </div>
    </section>
  );
}
