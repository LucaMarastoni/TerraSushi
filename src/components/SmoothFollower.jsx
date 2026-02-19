import { useEffect, useRef, useState } from 'react';

const DOT_SMOOTHNESS = 0.2;
const BORDER_SMOOTHNESS = 0.1;
const INTERACTIVE_SELECTOR =
  'a, button, img, input, textarea, select, [role="button"], [data-cursor-hover="true"]';

export default function SmoothFollower() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderPosition = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const hasMoved = useRef(false);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [renderPos, setRenderPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 }
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const desktopPointerQuery = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 900px)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateEnabled = () => {
      setIsEnabled(desktopPointerQuery.matches && !reducedMotionQuery.matches);
    };

    updateEnabled();
    desktopPointerQuery.addEventListener('change', updateEnabled);
    reducedMotionQuery.addEventListener('change', updateEnabled);

    return () => {
      desktopPointerQuery.removeEventListener('change', updateEnabled);
      reducedMotionQuery.removeEventListener('change', updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled || typeof window === 'undefined') {
      setIsVisible(false);
      setIsHovering(false);
      return undefined;
    }

    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    mousePosition.current = { x: initialX, y: initialY };
    dotPosition.current = { x: initialX, y: initialY };
    borderPosition.current = { x: initialX, y: initialY };
    setRenderPos({
      dot: { x: initialX, y: initialY },
      border: { x: initialX, y: initialY }
    });

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, DOT_SMOOTHNESS);
      dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, DOT_SMOOTHNESS);
      borderPosition.current.x = lerp(borderPosition.current.x, mousePosition.current.x, BORDER_SMOOTHNESS);
      borderPosition.current.y = lerp(borderPosition.current.y, mousePosition.current.y, BORDER_SMOOTHNESS);

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: { x: borderPosition.current.x, y: borderPosition.current.y }
      });

      rafId.current = window.requestAnimationFrame(animate);
    };

    const onMouseMove = (event) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
      if (!hasMoved.current) {
        hasMoved.current = true;
        setIsVisible(true);
      }
    };

    const onPointerOver = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest(INTERACTIVE_SELECTOR)) {
        setIsHovering(true);
      }
    };

    const onPointerOut = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target?.closest(INTERACTIVE_SELECTOR)) {
        return;
      }

      const nextTarget = event.relatedTarget instanceof Element ? event.relatedTarget : null;
      if (!nextTarget?.closest(INTERACTIVE_SELECTOR)) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('pointerover', onPointerOver);
    document.addEventListener('pointerout', onPointerOut);
    rafId.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('pointerover', onPointerOver);
      document.removeEventListener('pointerout', onPointerOut);
      if (rafId.current) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <div
      className={`smooth-follower ${isHovering ? 'smooth-follower--hover' : ''} ${
        isVisible ? 'smooth-follower--visible' : ''
      }`}
      aria-hidden="true"
    >
      <div
        className="smooth-follower__dot"
        style={{
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`
        }}
      />

      <div
        className="smooth-follower__ring"
        style={{
          width: isHovering ? '44px' : '28px',
          height: isHovering ? '44px' : '28px',
          left: `${renderPos.border.x}px`,
          top: `${renderPos.border.y}px`
        }}
      />
    </div>
  );
}
