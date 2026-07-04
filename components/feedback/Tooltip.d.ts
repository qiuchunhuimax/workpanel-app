export interface TooltipProps {
  /** Short label text shown on hover. */
  label: string;
  /** The trigger element (usually an IconButton or truncated text). */
  children: React.ReactNode;
  className?: string;
}
