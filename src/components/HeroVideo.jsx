import { useReducedMotion } from 'framer-motion';

export default function HeroVideo() {
  const reduceMotion = useReducedMotion();
  const mediaBase = import.meta.env.BASE_URL;

  return (
    <div className={`hero-media ${reduceMotion ? 'hero-media--reduced' : ''}`} aria-hidden="true">
      <div className="hero-media-fallback" />

      {!reduceMotion ? (
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
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
