import { motion, useReducedMotion } from 'framer-motion';
import Section from './Section';

const REVIEWS = [
  {
    name: 'Veronica Campostrini',
    rating: 5,
    snippet: 'Poké buonissimo, ingredienti freschi e porzioni abbondanti.',
    time: '2 settimane fa'
  },
  {
    name: 'Anna Pavan',
    rating: 5,
    snippet: 'Ottimo sushi e personale gentilissimo.',
    time: '1 mese fa'
  },
  {
    name: 'fabiano Verona',
    rating: 5,
    snippet: 'Ambiente piccolo ma curato, meglio prenotare.',
    time: '3 settimane fa'
  },
  {
    name: 'Eleonora Gobbi',
    rating: 5,
    snippet: 'Cibo ottimo, locale pulito e personale gentile.',
    time: '1 mese fa'
  },
  {
    name: 'Luca Tinelli',
    rating: 5,
    snippet: 'Servizio da 10 stelle, non vedo l\'ora di tornare.',
    time: '2 mesi fa'
  },
  {
    name: 'Gilda Liguori',
    rating: 5,
    snippet: 'Opzioni senza glutine, ingredienti freschissimi e ampia scelta.',
    time: '1 mese fa'
  },
  {
    name: 'Ecaterina Malagò',
    rating: 5,
    snippet: 'Il miglior poké provato in zona Borgo Roma.',
    time: '2 settimane fa'
  }
];

export default function Reviews() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <Section
      id="reviews"
      eyebrow="Recensioni"
      title="Chi ci sceglie, ritorna"
      subtitle="Esperienze reali da chi ha provato Terra Sushi Verona"
    >
      <motion.div
        className="reviews-grid"
        variants={reduceMotion ? undefined : container}
        initial={reduceMotion ? false : 'hidden'}
        whileInView={reduceMotion ? undefined : 'visible'}
        viewport={{ once: true, amount: 0.15 }}
      >
        {REVIEWS.map((review) => (
          <motion.article
            key={review.name}
            className="panel review-card"
            variants={reduceMotion ? undefined : item}
          >
            <p className="review-stars" aria-label={`${review.rating} stelle su 5`}>
              {'★'.repeat(review.rating)}
            </p>
            <p className="review-snippet">“{review.snippet}”</p>
            <div className="review-meta">
              <p className="review-name">{review.name}</p>
              <p className="review-time">{review.time}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
