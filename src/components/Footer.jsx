export default function Footer({ links }) {
  return (
    <footer id="contacts" className="footer section">
      <div className="container footer-grid">
        <div>
          <p className="section-eyebrow">Contatti</p>
          <h2 className="section-title">Terra Sushi Verona</h2>
          <p className="footer-line">Indirizzo: Via Monfalcone 2, 37135 Verona</p>
          <p className="footer-line">
            Telefono: <a href={links.call}>045 611 5166</a>
          </p>
          <p className="footer-line">
            WhatsApp:{' '}
            <a href={links.whatsapp} target="_blank" rel="noreferrer">
              Chat diretta
            </a>
          </p>
        </div>

        <div>
          <p className="footer-subtitle">Orari</p>
          <p className="footer-line">Lunedì: Chiuso</p>
          <p className="footer-line">Martedì: 11:30–15:00, 18:30–23:00</p>
          <p className="footer-line">Mercoledì: 11:30–15:00, 18:30–23:00</p>
          <p className="footer-line">Giovedì: 11:30–15:00, 18:30–23:00</p>
          <p className="footer-line">Venerdì: 11:30–15:00, 18:30–23:00</p>
          <p className="footer-line">Sabato: 11:30–15:00, 18:30–23:00</p>
          <p className="footer-line">Domenica: 11:30–15:00, 18:30–23:00</p>
          <p className="footer-subtitle">Social</p>
          <p className="footer-line">
            Instagram:{' '}
            <a href="https://www.instagram.com/terra_sushi_verona/" target="_blank" rel="noreferrer">
              @terra_sushi_verona
            </a>
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>*Informazioni e disponibilità soggette a conferma.</p>
        <p>© {new Date().getFullYear()} Terra Sushi Verona. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}
