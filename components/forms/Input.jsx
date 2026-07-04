import React from 'react';

export function Input({
  label,
  hint,
  error,
  icon = null,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || `wp-input-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <div className={`wp-field ${error ? 'wp-field--error' : ''} ${className}`}>
      {label ? <label className="wp-field__label" htmlFor={inputId}>{label}</label> : null}
      <div className="wp-input-wrap">
        {icon ? <span className="wp-input-wrap__icon">{icon}</span> : null}
        <input id={inputId} className={`wp-input ${icon ? 'wp-input--with-icon' : ''}`} {...rest} />
      </div>
      {error ? <span className="wp-field__error">{error}</span> : hint ? <span className="wp-field__hint">{hint}</span> : null}
    </div>
  );
}
