import React from 'react';
import useReveal from '../hooks/useReveal';

// Consistent wrapper for every page section: max width, padding, scroll target, reveal animation.
const Section = ({ id, title, eyebrow, center = false, children, className = '' }) => {
  const [ref, isVisible] = useReveal();

  return (
    <section id={id} name={id} className={`scroll-mt-24 ${className}`}>
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 py-20 sm:px-8 reveal ${isVisible ? 'is-visible' : ''}`}
      >
        {title && (
          <div className={`mb-12 ${center ? 'text-center' : ''}`}>
            {eyebrow && (
              <p className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
            )}
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              {title}
              <span className={`mt-3 block h-1 w-16 rounded-full bg-accent ${center ? 'mx-auto' : ''}`} />
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
