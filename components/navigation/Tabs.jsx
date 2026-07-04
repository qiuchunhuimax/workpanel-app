import React from 'react';

export function Tabs({ tabs, active, onChange, className = '' }) {
  return (
    <div className={className}>
      <div className="wp-tabs__list" role="tablist">
        {tabs.map(t => (
          <button
            key={t.key}
            role="tab"
            aria-selected={t.key === active}
            className={`wp-tabs__tab ${t.key === active ? 'wp-tabs__tab--active' : ''}`}
            onClick={() => onChange(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
