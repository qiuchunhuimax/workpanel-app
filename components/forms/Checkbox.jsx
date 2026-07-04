import React from 'react';

export function Checkbox({ label, checked, onChange, disabled = false, className = '', ...rest }) {
  return (
    <label className={`wp-check ${className}`}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} {...rest} />
      <span className="wp-check__box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 12 9 17 20 6"></polyline></svg>
      </span>
      {label}
    </label>
  );
}
