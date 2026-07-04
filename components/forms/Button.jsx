import React from 'react';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  disabled = false,
  type = 'button',
  onClick,
  className = '',
  ...rest
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`wp-btn wp-btn--${variant} wp-btn--${size} ${className}`}
      {...rest}
    >
      {icon ? <span className="wp-btn__icon">{icon}</span> : null}
      {children}
    </button>
  );
}
