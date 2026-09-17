// Web Audio API synthesized romantic melody (gentle piano & music box tones)
// Works 100% offline, guaranteed to play without broken audio links
class RomanticMelodyPlayer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timeoutIds = [];
    this.onStateChange = null;
    this.startTime = 0;
    this.pauseTime = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playNote(frequency, time, duration, gainValue = 0.2) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Warm bell/piano harmonic feel
    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, time);

    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(gainValue, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + duration);
  }

  // Sweet gentle melody: romantic arpeggio progression (C - G/B - Am - F)
  start() {
    this.init();
    this.isPlaying = true;
    if (this.onStateChange) this.onStateChange(true);

    const notes = [
      // Phrase 1 (C major gentle piano)
      { f: 523.25, d: 0.8 }, // C5
      { f: 659.25, d: 0.8 }, // E5
      { f: 783.99, d: 1.2 }, // G5
      { f: 659.25, d: 0.8 }, // E5
      { f: 523.25, d: 1.4 }, // C5
      
      // Phrase 2 (G major)
      { f: 493.88, d: 0.8 }, // B4
      { f: 587.33, d: 0.8 }, // D5
      { f: 783.99, d: 1.2 }, // G5
      { f: 587.33, d: 0.8 }, // D5
      { f: 493.88, d: 1.4 }, // B4

      // Phrase 3 (A minor)
      { f: 440.00, d: 0.8 }, // A4
      { f: 523.25, d: 0.8 }, // C5
      { f: 659.25, d: 1.2 }, // E5
      { f: 523.25, d: 0.8 }, // C5
      { f: 440.00, d: 1.4 }, // A4

      // Phrase 4 (F major resolution)
      { f: 349.23, d: 0.8 }, // F4
      { f: 440.00, d: 0.8 }, // A4
      { f: 523.25, d: 1.2 }, // C5
      { f: 659.25, d: 1.2 }, // E5
      { f: 587.33, d: 1.8 }  // D5
    ];

    const noteStep = 0.55;
    const totalDuration = notes.length * noteStep;

    const scheduleLoop = () => {
      if (!this.isPlaying) return;
      const now = this.ctx.currentTime;
      notes.forEach((note, index) => {
        const noteTime = now + index * noteStep;
        this.playNote(note.f, noteTime, note.d, 0.16);
        // Add subtle lower bass octave for fullness
        if (index % 5 === 0) {
          this.playNote(note.f / 2, noteTime, 1.8, 0.08);
        }
      });

      const tid = setTimeout(() => {
        if (this.isPlaying) scheduleLoop();
      }, totalDuration * 1000);
      this.timeoutIds.push(tid);
    };

    scheduleLoop();
  }

  stop() {
    this.isPlaying = false;
    this.timeoutIds.forEach(id => clearTimeout(id));
    this.timeoutIds = [];
    if (this.onStateChange) this.onStateChange(false);
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
    return this.isPlaying;
  }
}

export const bgMusic = new RomanticMelodyPlayer();
