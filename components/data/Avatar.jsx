import React from 'react';

export function Avatar({ name, src, size = 'md', ai = false, status, className = '' }) {
  const initials = name ? name.trim().slice(-2) : '?';
  return (
    <span className={`wp-avatar wp-avatar--${size} ${ai ? 'wp-avatar--ai' : ''} ${className}`}>
      {src ? <img src={src} alt={name || ''} /> : initials}
      {status ? <span className={`wp-avatar__status ${status === 'online' ? 'wp-avatar__status--online' : ''}`}></span> : null}
    </span>
  );
}
