import { motion, useReducedMotion } from 'framer-motion';

const PRIMARY_CTA = { key: 'menu', label: 'Sfoglia il menù' };
const EDITORIAL_LINKS = [
  { key: 'poke', label: 'Menù Poké' },
  { key: 'gluten', label: 'Menù senza glutine' }
];

const UTILITY_BUTTONS = [
  { key: 'call', label: 'Chiama ora', icon: PhoneIcon },
  { key: 'whatsapp', label: 'WhatsApp', icon: ChatIcon }
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6.9 3.8a1.2 1.2 0 0 1 1.3-.6l2.8.8a1.2 1.2 0 0 1 .8.9l.5 2.5a1.2 1.2 0 0 1-.3 1l-1.5 1.5a14.1 14.1 0 0 0 3.5 3.5l1.5-1.5a1.2 1.2 0 0 1 1-.3l2.5.5a1.2 1.2 0 0 1 .9.8l.8 2.8a1.2 1.2 0 0 1-.6 1.3l-2.5 1.3a2.3 2.3 0 0 1-2 .1 20 20 0 0 1-11-11 2.3 2.3 0 0 1 .1-2L6.9 3.8Z" fill="currentColor" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Zm5.3 12.7c-.2.5-1 .8-1.4.8-.4.1-.9.1-1.4 0a11.5 11.5 0 0 1-4.7-2.9 10 10 0 0 1-2.3-3.1c-.3-.8 0-1.7.6-2.2.2-.2.4-.2.6-.2h.4c.2 0 .4 0 .6.5l.7 1.8c.1.3 0 .5-.1.7l-.3.4-.3.4a7 7 0 0 0 3.3 2.8c.3.1.4.1.6-.1l.8-1c.2-.2.4-.2.7-.1l1.7.8c.3.1.5.2.5.4.1.2.1 1-.1 1.5Z" fill="currentColor" />
    </svg>
  );
}

export default function CtaButtons({ links }) {
  const reduceMotion = useReducedMotion();

  const group = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.08 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const interaction = reduceMotion
    ? {}
    : {
        whileTap: { y: 0, scale: 0.99 }
      };

  return (
    <div className="hero-cta-stack" role="group" aria-label="Azioni rapide Terra Sushi">
      <motion.a
        href={links[PRIMARY_CTA.key]}
        className="hero-btn hero-btn--primary"
        aria-label="Sfoglia il menù completo di Terra Sushi"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        {...interaction}
      >
        <span className="hero-btn-label">{PRIMARY_CTA.label}</span>
        <span className="hero-btn-arrow" aria-hidden="true">
          →
        </span>
      </motion.a>

      <motion.div
        className="hero-quick-nav-wrap"
        variants={reduceMotion ? undefined : group}
        initial={reduceMotion ? false : 'hidden'}
        animate={reduceMotion ? undefined : 'visible'}
      >
        <nav className="hero-quick-nav" aria-label="Scorciatoie menu">
          {EDITORIAL_LINKS.map((itemData) => (
            <motion.a
              key={itemData.key}
              href={links[itemData.key]}
              className="hero-nav-row"
              aria-label={`Apri ${itemData.label} di Terra Sushi`}
              variants={reduceMotion ? undefined : item}
              {...interaction}
            >
              <span className="hero-nav-label">{itemData.label}</span>
              <span className="hero-nav-chev" aria-hidden="true">
                →
              </span>
            </motion.a>
          ))}
        </nav>
      </motion.div>

      <motion.div
        className="hero-utility"
        variants={reduceMotion ? undefined : group}
        initial={reduceMotion ? false : 'hidden'}
        animate={reduceMotion ? undefined : 'visible'}
      >
        {UTILITY_BUTTONS.map((itemData) => {
          const Icon = itemData.icon;
          return (
            <motion.a
              key={itemData.key}
              href={links[itemData.key]}
              className={`hero-utility-link hero-utility-link--${itemData.key}`}
              target={itemData.key === 'whatsapp' ? '_blank' : undefined}
              rel={itemData.key === 'whatsapp' ? 'noreferrer' : undefined}
              variants={reduceMotion ? undefined : item}
              {...interaction}
            >
              <Icon />
              <span>{itemData.label}</span>
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
