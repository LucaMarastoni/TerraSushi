import { motion, useReducedMotion } from 'framer-motion';

const HOURS = [
  { day: 'Lunedì', lunch: 'Chiuso', dinner: '' },
  { day: 'Martedì', lunch: '11:30–15:00', dinner: '18:30–23:00' },
  { day: 'Mercoledì', lunch: '11:30–15:00', dinner: '18:30–23:00' },
  { day: 'Giovedì', lunch: '11:30–15:00', dinner: '18:30–23:00' },
  { day: 'Venerdì', lunch: '11:30–15:00', dinner: '18:30–23:00' },
  { day: 'Sabato', lunch: '11:30–15:00', dinner: '18:30–23:00' },
  { day: 'Domenica', lunch: '11:30–15:00', dinner: '18:30–23:00' }
];

export default function Footer({ links }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      id="contacts"
      className="footer section"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container footer-shell">
        <div className="footer-header">
          <p className="footer-kicker">Contatti</p>
          <h2 className="footer-name">Terra Sushi Verona</h2>
        </div>

        <div className="footer-body">
          <section className="footer-block">
            <h3 className="footer-block-title">Dettagli</h3>
            <p className="footer-line">
              <span className="footer-line-label">Indirizzo</span>
              <span>Via Monfalcone 2, 37135 Verona</span>
            </p>
            <p className="footer-line">
              <span className="footer-line-label">Telefono</span>
              <a href={links.call}>045 611 5166</a>
            </p>
            <p className="footer-line">
              <span className="footer-line-label"></span>
              <a href={links.whatsapp} target="_blank" rel="noreferrer">
                Scrivici su WhatsApp
              </a>
            </p>
          </section>

          <section className="footer-block">
            <h3 className="footer-block-title">Orari</h3>
            <ul className="footer-hours" aria-label="Orari di apertura">
              {HOURS.map((slot) => (
                <li key={slot.day}>
                  <p className="footer-hours-day">{slot.day}</p>
                  <div className="footer-hours-time">
                    <p>{slot.lunch}</p>
                    {slot.dinner ? <p>{slot.dinner}</p> : null}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer-block">
            <h3 className="footer-block-title">Social</h3>
            <p className="footer-line">
              <span className="footer-line-label"></span>
              <a href="https://www.instagram.com/terra_sushi_verona/" target="_blank" rel="noreferrer">
                @terra_sushi_verona
              </a>
            </p>
          </section>
        </div>

        <div className="footer-legal">
          <p>*Informazioni e disponibilità soggette a conferma.</p>
          <p>© {new Date().getFullYear()} Terra Sushi Verona. Tutti i diritti riservati.</p>
        </div>

        <div className="footer-credit">
          <a href="https://lucamarastoni.eu" target="_blank" rel="noreferrer">
            Realizzato da Luca Marastoni Digital Solutions
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
