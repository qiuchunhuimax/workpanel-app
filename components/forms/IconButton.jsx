import React from 'react';

export function IconButton({
  icon,
  size = 'md',
  outline = false,
  disabled = false,
  'aria-label': ariaLabel,
  onClick,
  className = '',
  ...rest
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`wp-iconbtn wp-iconbtn--${size} ${outline ? 'wp-iconbtn--outline' : ''} ${className}`}
      {...rest}
    >
      {icon}
    </button>
  );
}
