import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!finePointer) return undefined;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf;

    const interactiveSelector = 'a,button,input,textarea,select,[role="button"],.interactive-card,.magnetic-button,.contact-tile,.skill-chip';

    const onMove = event => {
      x = event.clientX;
      y = event.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${x - 5}px, ${y - 5}px, 0)`;
    };

    const animate = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(animate);
    };

    const onPointerOver = event => {
      if (event.target.closest(interactiveSelector)) document.body.classList.add('cursor-hovering');
    };

    const onPointerOut = event => {
      const next = event.relatedTarget;
      if (!next || !next.closest || !next.closest(interactiveSelector)) {
        document.body.classList.remove('cursor-hovering');
      }
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('pointerover', onPointerOver);
    document.addEventListener('pointerout', onPointerOut);
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('pointerover', onPointerOver);
      document.removeEventListener('pointerout', onPointerOut);
      document.body.classList.remove('cursor-hovering');
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot desktop-cursor" />
      <div ref={ring} className="cursor-ring desktop-cursor" />
    </>
  );
}
