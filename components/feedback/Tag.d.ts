export interface TagProps {
  children: React.ReactNode;
  /** Adds a small remove (×) button. */
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}
