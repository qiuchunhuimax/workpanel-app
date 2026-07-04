export interface ToastProps {
  title: string;
  description?: string;
  tone?: 'info' | 'success' | 'danger';
  /** Leading icon (20px). */
  icon?: React.ReactNode;
  onClose?: () => void;
  className?: string;
}
