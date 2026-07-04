import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. `primary` (terracotta fill) is the only high-emphasis variant — use one per view. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Leading icon element, e.g. an inline SVG or Lucide icon component (16px). */
  icon?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}
