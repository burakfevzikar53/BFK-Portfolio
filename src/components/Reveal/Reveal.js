import React from "react";
import { useInView } from "react-intersection-observer";

// Scroll'a bağlı giriş animasyonu için ortak sarmalayıcı
const Reveal = ({ children, direction = "up", delay = 0, className = "" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${inView ? "reveal-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
