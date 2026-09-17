import React, { useState } from 'react';
import { EVENT_DATA } from './data/eventData';
import Envelope from './components/Envelope';
import IntroSection from './components/IntroSection';
import PhotoAlbum from './components/PhotoAlbum';
import CalendarCountdown from './components/CalendarCountdown';
import Itinerary from './components/Itinerary';
import LocationHelper from './components/LocationHelper';
import RsvpSection from './components/RsvpSection';
import Footer from './components/Footer';

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

      <main className={`invitation-main-content ${isOpened ? 'is-visible' : 'is-hidden'}`}>
        <div className="invitation-card-container">
          {/* 1. First: Animated Intro with "Estás invitada", Name, and Dedication phrase */}
          <IntroSection 
            celebrant={EVENT_DATA.celebrant}
            age={EVENT_DATA.age}
            phrase={EVENT_DATA.phrase}
            isOpened={isOpened}
            onIntroComplete={handleIntroComplete}
          />

          {/* 2. Successive: Appears step by step once dedication phrase finishes */}
          <CalendarCountdown 
            targetDate={EVENT_DATA.date}
            dateFormatted={EVENT_DATA.dateFormatted}
            isVisible={hasIntroFinished}
            onCalendarComplete={handleCalendarComplete}
          />

          {/* 3. Follow-up: Photo album, itinerary, map, and RSVP unlock after the date */}
          {showRemaining && (
            <div className="fade-up-enter">
              <PhotoAlbum 
                photos={EVENT_DATA.photos}
              />

              <Itinerary itinerary={EVENT_DATA.itinerary} />

              <LocationHelper locationDetails={EVENT_DATA.locationDetails} />

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
