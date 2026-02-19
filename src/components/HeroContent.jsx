import { motion, useReducedMotion } from 'framer-motion';
import CtaButtons from './CtaButtons';

export default function HeroContent({ links }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="hero-content"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.86, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="hero-topline" aria-hidden="true" />
      <p className="hero-kicker">Alla carta • Verona</p>
      <h1 className="hero-title">TERRA SUSHI VERONA</h1>
      <p className="hero-subtitle">GIAPPONESE - POKÉ - CINESE</p>
      <CtaButtons links={links} />
    </motion.div>
  );
}
