import React from 'react';

export function SectionTitle({ 
  eyebrow, 
  title, 
  subtitle,
  className = ''
}) {
  return (
    <div className={`mb-12 ${className}`}>
      {eyebrow && (
        <span className="block text-shalom-orange font-medium tracking-wider uppercase text-sm mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-deep-dark mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-deep-dark/70 text-lg sm:text-xl max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
