export interface Tab {
  key: string;
  label: string;
}
export interface TabsProps {
  tabs: Tab[];
  active: string;
  onChange: (key: string) => void;
  className?: string;
}
