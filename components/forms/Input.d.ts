export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Helper text shown below the field when there's no error. */
  hint?: string;
  /** Error message; also switches the border/hint to the danger color. */
  error?: string;
  /** Leading icon (16px), e.g. a search glyph. */
  icon?: React.ReactNode;
}
