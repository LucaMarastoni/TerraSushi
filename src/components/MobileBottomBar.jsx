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

export default function MobileBottomBar({ links }) {
  return (
    <div className="mobile-bottom-bar" aria-label="Azioni rapide mobile">
      <a href={links.call} className="mobile-bottom-bar__call">
        <span className="mobile-bottom-bar__icon">
          <PhoneIcon />
        </span>
        <span>Chiama ora</span>
      </a>
      <a href={links.whatsapp} className="mobile-bottom-bar__whatsapp" target="_blank" rel="noreferrer">
        <span className="mobile-bottom-bar__icon mobile-bottom-bar__icon--whatsapp">
          <ChatIcon />
        </span>
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
