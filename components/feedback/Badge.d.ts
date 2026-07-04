export interface BadgeProps {
  children: React.ReactNode;
  /** Color tone. `accent` is for brand moments; `success/danger/info/warning` map to status meaning. */
  tone?: 'neutral' | 'success' | 'danger' | 'info' | 'warning' | 'accent';
  /** Shows a small leading dot instead of/alongside text — useful for compact status chips. */
  dot?: boolean;
  className?: string;
}
