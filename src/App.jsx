import React, { useState } from 'react';
import { EVENT_DATA } from './data/eventData';
import Envelope from './components/Envelope';
import IntroSection from './components/IntroSection';
import PhotoAlbum from './components/PhotoAlbum';
import CalendarCountdown from './components/CalendarCountdown';
import Itinerary from './components/Itinerary';
import MusicSection from './components/MusicSection';
import RsvpSection from './components/RsvpSection';
import Footer from './components/Footer';
import FloatingAudioPlayer from './components/FloatingAudioPlayer';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [hasIntroFinished, setHasIntroFinished] = useState(false);
  const [showRemaining, setShowRemaining] = useState(false);

  const handleEnvelopeOpen = () => {
    setIsOpened(true);
  };

  const handleIntroComplete = () => {
    setHasIntroFinished(true);
  };

  const handleCalendarComplete = () => {
    setTimeout(() => {
      setShowRemaining(true);
    }, 500);
  };

  return (
    <div className="invitation-app-root">
      <div className="app-backdrop"></div>

      {/* Envelope screen */}
      <Envelope onOpen={handleEnvelopeOpen} />
      
      {/* Background Audio Player */}
      <FloatingAudioPlayer isOpened={isOpened} />

      <main className={`invitation-main-content ${isOpened ? 'is-visible' : 'is-hidden'}`}>
        <div className="invitation-card-container">
          {/* 1. First: Animated Intro with Thanksgiving prayer, "Mis 50 Años", "Teresa Isabel", and Hosts */}
          <IntroSection 
            celebrant={EVENT_DATA.celebrant}
            age={EVENT_DATA.age}
            thanksgiving={EVENT_DATA.thanksgiving}
            invitationText={EVENT_DATA.invitationText}
            isOpened={isOpened}
            onIntroComplete={handleIntroComplete}
          />

          {/* 2. Successive: Sábado 10 de Octubre 2026 - 12:00 P.M. & Countdown */}
          <CalendarCountdown 
            targetDate={EVENT_DATA.date}
            dateFormatted={EVENT_DATA.dateFormatted}
            isVisible={hasIntroFinished}
            onCalendarComplete={handleCalendarComplete}
          />

          {/* 3. Follow-up: Photo album, itinerary, music amenizan, and RSVP unlock after the date */}
          {showRemaining && (
            <div className="fade-up-enter">
              <PhotoAlbum 
                photos={EVENT_DATA.photos}
              />

              <Itinerary itinerary={EVENT_DATA.itinerary} />

              <MusicSection musicians={EVENT_DATA.musicians} />

              <RsvpSection 
                rsvp={EVENT_DATA.rsvp}
                celebrant={EVENT_DATA.celebrant}
              />

              <Footer celebrant={EVENT_DATA.celebrant} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
