export interface DialogProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  /** Usually two Buttons (secondary + primary/danger). */
  footer?: React.ReactNode;
  onClose: () => void;
}
