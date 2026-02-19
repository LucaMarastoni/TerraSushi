import HeroVideo from './HeroVideo';
import HeroContent from './HeroContent';

export default function Hero({ links }) {
  return (
    <header id="top" className="hero" aria-label="Hero Terra Sushi Verona">
      <HeroVideo />

      <div className="container hero-shell">
        <HeroContent links={links} />
      </div>
    </header>
  );
}
