import React from 'react';
import useReveal from '../hooks/useReveal';

// Per-element scroll reveal: the child falls into place once it enters the
// viewport. Use `delay` (ms) to stagger siblings. Keep hover transforms on the
// child, not this wrapper, so they aren't overridden by the animation.
const Reveal = ({ delay = 0, className = '', children }) => {
  const [ref, isVisible] = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
