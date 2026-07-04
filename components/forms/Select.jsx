import React from 'react';

export function Select({ label, hint, error, id, children, className = '', ...rest }) {
  const selectId = id || `wp-select-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <div className={`wp-field ${error ? 'wp-field--error' : ''} ${className}`}>
      {label ? <label className="wp-field__label" htmlFor={selectId}>{label}</label> : null}
      <select id={selectId} className="wp-select" {...rest}>
        {children}
      </select>
      {error ? <span className="wp-field__error">{error}</span> : hint ? <span className="wp-field__hint">{hint}</span> : null}
    </div>
  );
}
