export interface IconButtonProps {
  /** A single icon element (18px), e.g. a Lucide icon component. */
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  /** Adds a hairline border — use in toolbars where the button needs a resting outline. */
  outline?: boolean;
  disabled?: boolean;
  'aria-label': string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}
