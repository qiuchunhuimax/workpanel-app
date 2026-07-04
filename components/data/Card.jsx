import React from 'react';

export function Card({ title, children, interactive = false, onClick, className = '', ...rest }) {
  return (
    <div className={`wp-card ${interactive ? 'wp-card--interactive' : ''} ${className}`} onClick={onClick} {...rest}>
      {title ? <div className="wp-card__title">{title}</div> : null}
      <div className="wp-card__body">{children}</div>
    </div>
  );
}
