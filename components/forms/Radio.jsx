import React from 'react';

export function Radio({ label, name, checked, onChange, disabled = false, className = '', ...rest }) {
  return (
    <label className={`wp-radio ${className}`}>
      <input type="radio" name={name} checked={checked} onChange={onChange} disabled={disabled} {...rest} />
      <span className="wp-radio__dot"></span>
      {label}
    </label>
  );
}
