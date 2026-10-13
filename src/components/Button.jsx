import React from 'react';

const variants = {
  primary: 'bg-shalom-orange text-deep-dark hover:brightness-105 active:brightness-90',
  secondary: 'bg-shalom-blue text-white hover:brightness-110',
  outline: 'border-2 border-shalom-blue text-shalom-blue bg-transparent hover:bg-shalom-blue hover:text-white',
  'outline-light': 'border-2 border-white text-white bg-transparent hover:bg-white hover:text-deep-dark',
};

export function Button({
  as: Component = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center min-h-[44px] px-6 py-2 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-shalom-orange';
  const variantClasses = variants[variant] || variants.primary;

  return (
    <Component className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </Component>
  );
}
