export interface AvatarProps {
  /** Full name — last 1–2 characters are used as initials when no image is given. */
  name?: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Styles as the AI teammate's identity (terracotta fill instead of ink). */
  ai?: boolean;
  status?: 'online' | 'offline';
  className?: string;
}
