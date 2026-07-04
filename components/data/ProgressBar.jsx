import React from 'react';

export function ProgressBar({ value, label, showPercent = true, className = '' }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={`wp-progress ${className}`}>
      {(label || showPercent) ? (
        <div className="wp-progress__meta">
          <span>{label}</span>
          {showPercent ? <span>{pct}%</span> : null}
        </div>
      ) : null}
      <div className="wp-progress__track">
        <div className="wp-progress__fill" style={{ width: `${pct}%` }}></div>
      </div>
    </div>
  );
}
