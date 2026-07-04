import React from 'react';

export function Badge({ children, tone = 'neutral', dot = false, className = '', ...rest }) {
  return (
    <span className={`wp-badge wp-badge--${tone} ${className}`} {...rest}>
      {dot ? <span className="wp-badge__dot"></span> : null}
      {children}
    </span>
  );
}
