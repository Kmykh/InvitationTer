import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function FloatingAudioPlayer({ isOpened }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // The selected song: Worthy (A Thousand Years Instrumental etc.)
  const audioSrc = "/music.m4a";

  useEffect(() => {
    // When the invitation is opened (user clicks the seal), start playing music
    if (isOpened && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => {
          console.log("Autoplay was prevented by browser:", err);
          setIsPlaying(false);
        });
    }
  }, [isOpened]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(console.error);
    }
  };

  if (!isOpened) return null;

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />
      <button 
        className={`floating-audio-btn ${isPlaying ? 'is-playing' : ''}`} 
        onClick={togglePlay}
        aria-label="Toggle background music"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </>
  );
}
