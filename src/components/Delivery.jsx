import Section from './Section';

const DELIVERY_ITEMS = [
  {
    id: 'hours',
    label: 'ORARI CONSEGNA',
    dayRange: 'Mar–Dom',
    slots: [
      { tag: 'Pranzo', time: '11:30–15:00' },
      { tag: 'Cena', time: '18:30–23:00' }
    ],
    note: 'Lunedì chiuso'
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
      subtitle="Il tuo ristorante sushi a Verona, zona Borgo Roma, direttamente a casa."
      className="section-delivery"
    >
      <div className="delivery-layout">
        <div className="delivery-grid">
          {DELIVERY_ITEMS.map((item) => (
            <article key={item.id} className={`panel delivery-item delivery-item--${item.id}`}>
              <p className="delivery-item-label">{item.label}</p>
              {item.id === 'hours' ? (
                <div className="delivery-hours-block">
                  <p className="delivery-hours-day">{item.dayRange}</p>
                  <div className="delivery-hours-grid" aria-label="Orari consegna pranzo e cena">
                    {item.slots.map((slot) => (
                      <div key={slot.tag} className="delivery-hours-row">
                        <span className="delivery-hours-tag">{slot.tag}</span>
                        <span className="delivery-hours-time">{slot.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="delivery-hours-note">{item.note}</p>
                </div>
              ) : (
                <>
                  <p className="delivery-item-value">{item.value}</p>
                  <p className="delivery-item-detail">{item.detail}</p>
                </>
              )}
            </article>
          ))}
        </div>

        <div className="delivery-actions">
          <a href={orderLink} className="inline-cta delivery-cta">
            Ordina ora
          </a>
        </div>
      </div>

    </Section>
  );
}
