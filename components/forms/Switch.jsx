import React from 'react';

export function Switch({ label, checked, onChange, disabled = false, className = '', ...rest }) {
  return (
    <label className={`wp-switch ${className}`}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} {...rest} />
      <span className="wp-switch__track"></span>
      {label}
    </label>
  );
}
