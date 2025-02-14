import React from "react";
import { motion } from "framer-motion";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${className} flex items-center justify-center min-h-screen bg-black p-4 md:p-8 lg:p-12`}
    >
      {children}
    </motion.div>
  );
}

export default Container;
