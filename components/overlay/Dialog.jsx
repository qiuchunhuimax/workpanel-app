import React from 'react';

export function Dialog({ open, title, children, footer, onClose }) {
  if (!open) return null;
  return (
    <div className="wp-dialog-scrim" onClick={onClose}>
      <div className="wp-dialog" onClick={e => e.stopPropagation()}>
        <div className="wp-dialog__header">
          <span className="wp-dialog__title">{title}</span>
        </div>
        <div className="wp-dialog__body">{children}</div>
        {footer ? <div className="wp-dialog__footer">{footer}</div> : null}
      </div>
    </div>
  );
}
