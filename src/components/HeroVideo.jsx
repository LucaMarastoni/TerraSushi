import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function HeroVideo() {
  const reduceMotion = useReducedMotion();
  const mediaBase = import.meta.env.BASE_URL;
  const videoRef = useRef(null);

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const video = videoRef.current;
    if (!video) {
      return undefined;
    }

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          // Some mobile browsers still block autoplay until a user gesture.
        });
      }
    };

    // Reinforce attributes used by stricter mobile autoplay policies.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('playsinline', '');

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        tryPlay();
      }
    };

    const onUserGesture = () => {
      tryPlay();
      window.removeEventListener('pointerdown', onUserGesture);
      window.removeEventListener('touchstart', onUserGesture);
      window.removeEventListener('keydown', onUserGesture);
    };

    video.addEventListener('loadeddata', tryPlay);
    window.addEventListener('focus', tryPlay);
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pointerdown', onUserGesture, { passive: true });
    window.addEventListener('touchstart', onUserGesture, { passive: true });
    window.addEventListener('keydown', onUserGesture);

    tryPlay();

    return () => {
      video.removeEventListener('loadeddata', tryPlay);
      window.removeEventListener('focus', tryPlay);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('pointerdown', onUserGesture);
      window.removeEventListener('touchstart', onUserGesture);
      window.removeEventListener('keydown', onUserGesture);
    };
  }, [reduceMotion]);

  return (
    <div className={`hero-media ${reduceMotion ? 'hero-media--reduced' : ''}`} aria-hidden="true">
      <div className="hero-media-fallback" />

      {!reduceMotion ? (
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          webkit-playsinline="true"
          poster={`${mediaBase}hero.svg`}
        >
          <source src={`${mediaBase}hero.mp4`} type="video/mp4" />
        </video>
      ) : null}

      <div className="hero-overlay" />
      <div className="hero-vignette" />
      <div className="hero-noise" />
    </div>
  );
}
