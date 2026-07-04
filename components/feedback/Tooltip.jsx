import React from 'react';

export function Tooltip({ label, children, className = '' }) {
  return (
    <span className={`wp-tooltip-wrap ${className}`}>
      {children}
      <span className="wp-tooltip" role="tooltip">{label}</span>
    </span>
  );
}
