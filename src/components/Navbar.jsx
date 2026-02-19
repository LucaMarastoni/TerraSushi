import { useEffect, useRef, useState } from 'react';

export default function Navbar({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const panelRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    let frameId = null;

    const onScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 24);
        frameId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousFocus = document.activeElement;
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    if (focusable?.length) {
      focusable[0].focus();
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        return;
      }

      if (event.key !== 'Tab' || !focusable?.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [isOpen]);

  return (
    <header className={`navbar-wrap ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar">
        <a href="#top" className="brand" aria-label="Terra Sushi home">
          TERRA SUSHI
        </a>

        <nav className="desktop-nav" aria-label="Navigazione principale">
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Apri menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isOpen ? (
        <div className="menu-overlay" role="presentation" onClick={closeMenu}>
          <aside
            id="mobile-menu"
            className="mobile-menu-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobile"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mobile-menu-top">
              <p className="brand">TERRA SUSHI</p>
              <button type="button" className="drawer-close" onClick={closeMenu} aria-label="Chiudi menu">
                ×
              </button>
            </div>

            <nav aria-label="Navigazione mobile">
              <ul className="mobile-nav-list">
                {items.map((item, index) => (
                  <li key={item.href}>
                    <a href={item.href} onClick={closeMenu}>
                      <span className="mobile-nav-number">{`0${index + 1}`}</span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
