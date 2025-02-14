import React from "react";
import { motion } from "framer-motion";
import Text from "@/components/Text";
import SpinnerLoader from "@components/Spinner";
import { cn } from "@/utils/index.utils";

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  label: string;
  onClick: () => void;
  testId?: string;
  className?: string;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
  iconPosition?: "left" | "right";
  labelClassName?: string;
  loadingProps?: Record<string, any>;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  label,
  onClick,
  testId = "",
  className = "",
  variant = "primary",
  disabled = false,
  icon,
  loading,
  iconPosition = "left",
  labelClassName = "",
  loadingProps = {},
}) => {
  const baseStyles =
    "rounded-md w-full md:w-auto h-12 px-4 flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const computedStyles = `${baseStyles} ${variantStyles[variant]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  return (
    <motion.button
      type={type}
      data-testId={testId}
      className={computedStyles}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {icon && iconPosition === "left" && icon}
      <Text
        variant="small"
        weight="medium"
        className={cn(
          "flex items-center",
          variant === "primary" && "text-white",
          labelClassName,
          {
            "flex flex-row gap-2 items-center": loading,
          },
        )}
      >
        {loading ? (
          <SpinnerLoader color="text-white" size="small" {...loadingProps} />
        ) : (
          label
        )}
      </Text>
      {icon && iconPosition === "right" && icon}
    </motion.button>
  );
};

export default Button;
