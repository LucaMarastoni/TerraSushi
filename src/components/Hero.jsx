import HeroVideo from './HeroVideo';
import HeroContent from './HeroContent';

export default function Hero({ links }) {
  return (
    <section id="top" className="hero" aria-label="Terra Sushi Verona">
      <HeroVideo />

      <div className="container hero-shell">
        <HeroContent links={links} />
      </div>
    </section>
  );
}
