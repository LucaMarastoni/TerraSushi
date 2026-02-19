import { motion, useReducedMotion } from 'framer-motion';

export default function Section({ id, eyebrow, title, subtitle, className = '', children }) {
  const reduceMotion = useReducedMotion();
  const headingId = title ? `${id}-title` : undefined;

  const reveal = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.section
      id={id}
      className={`section ${className}`.trim()}
      aria-label={title || eyebrow || id}
      aria-labelledby={headingId}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.2 }}
      variants={reduceMotion ? undefined : reveal}
    >
      <div className="container section-inner">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        {title ? <h2 id={headingId} className="section-title">{title}</h2> : null}
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        <div className="section-content">{children}</div>
      </div>
    </motion.section>
  );
}
