import React from "react";
import { motion } from "framer-motion";

export interface CTAButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
  className?: string;
}

function CTAButton({ onClick, text, className, disabled }: CTAButtonProps) {
  return (
    <motion.button
      className={`rounded-md w-full md:w-auto h-12 px-4 flex items-center justify-center gap-2 transition-all duration-200 ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.button>
  );
}

export default CTAButton;
