import Section from './Section';

const DELIVERY_ITEMS = [
  {
    id: 'hours',
    label: 'Orari Consegna',
    value: 'Mar–Dom 11:30–15:00',
    detail: '18:30–23:00 • Lunedì chiuso'
  },
  {
    id: 'fee',
    label: 'Costo Consegna',
    value: '€2',
    detail: 'Tariffa base nelle zone coperte.'
  },
  {
    id: 'coverage',
    label: 'Zone Coperte',
    value: 'Entro 5/6 km dal ristorante',
    detail: 'Oltre i 5/6 km: €10 per ogni km extra.'
  }
];

export default function Delivery({ orderLink }) {
  return (
    <Section
      id="delivery"
      eyebrow="Consegna"
      title="Consegne a Domicilio"
      subtitle="GUSTA IL SAPORE DI TERRA SUSHI A CASA TUA"
      className="section-delivery"
    >
      <div className="delivery-layout">
        <article className="panel delivery-hero-card">
          <p className="delivery-pill">Delivery Terra Sushi</p>
          <p className="delivery-intro">
            Goditi i sapori autentici di Terra Sushi direttamente a casa. Ordina online e ricevi i
            tuoi piatti preferiti in pochi minuti.
          </p>

          <div className="delivery-highlights" aria-label="Punti chiave consegna">
            <p>Pranzo e cena da martedì a domenica</p>
            <p>Copertura Verona e aree limitrofe</p>
          </div>

          <a href={orderLink} className="inline-cta delivery-cta">
            Ordina ora
          </a>
        </article>

        <div className="delivery-grid">
          {DELIVERY_ITEMS.map((item) => (
            <article key={item.id} className={`panel delivery-item delivery-item--${item.id}`}>
              <p className="delivery-item-label">{item.label}</p>
              <p className="delivery-item-value">{item.value}</p>
              <p className="delivery-item-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>

      <p className="delivery-note">*Regole consegna soggette a conferma*</p>
    </Section>
  );
}
