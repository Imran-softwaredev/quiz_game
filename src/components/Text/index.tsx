import React from "react";
import { cn } from "@utils/index.utils";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant: keyof typeof textVariants;
  weight?: keyof typeof textWeights;
  testid?: string;
  align?: "left" | "center" | "right" | "justify";
  as?: React.ElementType;
  className?: string;
}

const textVariants = {
  h1: "sm:text-4xl text-3xl", // Larger on mobile, even larger on desktop
  h2: "sm:text-3xl text-2xl",
  h3: "sm:text-2xl text-xl",
  h4: "sm:text-xl text-lg",
  medium: "sm:text-base text-sm",
  body: "sm:text-sm text-xs",
  small: "text-[13px]",
};

const textWeights = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const Text: React.FC<TextProps> = ({
  variant,
  testid,
  weight = "normal",
  children,
  className,
  align = "left",
  as = "div",
  ...props
}) => {
  const Component = as;
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  return (
    <Component
      data-testid={testid}
      className={cn(
        textVariants[variant],
        textWeights[weight],
        "font-poppins text-gray-700",
        alignClasses[align],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
