import React from 'react';

export function Toast({ title, description, tone = 'info', icon = null, onClose, className = '' }) {
  return (
    <div className={`wp-toast wp-toast--${tone} ${className}`}>
      {icon ? <span className="wp-toast__icon">{icon}</span> : null}
      <div className="wp-toast__body">
        <span className="wp-toast__title">{title}</span>
        {description ? <span className="wp-toast__desc">{description}</span> : null}
      </div>
      {onClose ? (
        <button type="button" className="wp-toast__close" onClick={onClose} aria-label="关闭">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      ) : null}
    </div>
  );
}
