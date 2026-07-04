export interface CardProps {
  title?: string;
  children: React.ReactNode;
  /** Adds hover elevation + pointer cursor for clickable cards (e.g. a task card opening a detail view). */
  interactive?: boolean;
  onClick?: () => void;
  className?: string;
}
