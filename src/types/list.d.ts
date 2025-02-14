export interface ListItem {
  key: number | string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export interface ListProps {
  items: ListItem[];
  className?: string;
}
