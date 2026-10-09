import React from 'react';

export function Card({ 
  image, 
  title, 
  date, 
  description, 
  href, 
  cta = "Saiba mais",
  className = ''
}) {
  const CardWrapper = href ? 'a' : 'div';
  const wrapperProps = href ? { href, className: `block group focus:outline-none focus-visible:ring-2 focus-visible:ring-shalom-orange rounded-2xl ${className}` } : { className };

  return (
    <CardWrapper {...wrapperProps}>
      <div className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full border border-gray-100 ${href ? '' : className}`}>
        {image && (
          <div className="w-full h-48 sm:h-56 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>
        )}
        <div className="p-6 sm:p-8 flex flex-col flex-grow">
          {date && <span className="text-sm text-gray-500 mb-2">{date}</span>}
          <h3 className="font-display text-xl sm:text-2xl text-deep-dark mb-3">{title}</h3>
          {description && <p className="text-gray-600 mb-6 flex-grow">{description}</p>}
          {href && (
            <div className="mt-auto pt-2">
              <span className="text-shalom-orange font-medium inline-flex items-center group-hover:underline">
                {cta}
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          )}
        </div>
      </div>
    </CardWrapper>
  );
}
