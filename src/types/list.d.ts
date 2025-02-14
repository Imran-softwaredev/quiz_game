interface ListItem {
  key: React.Key;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface ListProps {
  items: ListItem[];
  className?: string;
}
