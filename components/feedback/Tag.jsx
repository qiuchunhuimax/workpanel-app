import React from 'react';

export function Tag({ children, removable = false, onRemove, className = '', ...rest }) {
  return (
    <span className={`wp-tag ${removable ? 'wp-tag--removable' : ''} ${className}`} {...rest}>
      {children}
      {removable ? (
        <button type="button" className="wp-tag__remove" onClick={onRemove} aria-label="移除">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      ) : null}
    </span>
  );
}
