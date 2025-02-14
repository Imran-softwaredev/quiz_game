import { motion } from "framer-motion";

function CTAButton({ onClick, text, className, disabled }: ButtonProps) {
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
