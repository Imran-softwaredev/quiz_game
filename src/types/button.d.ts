interface ButtonProps {
  type?: "button" | "submit" | "reset";
  label: string;
  onClick?: () => void;
  className?: string;
  value?: string;
  testId?: string;
  text?: string;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  labelClassName?: string;
  loading?: boolean;
  loadingProps?: SpinnerPropsT;
}

interface RadioItem {
  id: number;
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface RadioButtonsProps {
  items: {
    id: number;
    value: string;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }[];
  selectedValue?: string;
}
