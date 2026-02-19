import Section from './Section';

export default function Location({ mapsLink }) {
  return (
    <Section
      id="location"
      eyebrow="Dove Siamo"
      title="Raggiungi Terra Sushi"
      subtitle="Via Monfalcone 2, 37135 Verona."
      className="section-location"
    >
      <div className="panel location-map">
        <iframe
          className="map-frame"
          title="Mappa Terra Sushi Verona"
          src="https://maps.google.com/maps?cid=9602177942733427985&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <a href={mapsLink} className="inline-cta" target="_blank" rel="noreferrer">
        Apri su Google Maps
      </a>
    </Section>
  );
}
