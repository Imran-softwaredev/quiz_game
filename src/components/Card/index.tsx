import React from "react";
import { motion } from "framer-motion";
import { CardProps } from "@/types/card";

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-[90%] max-w-sm md:max-w-md lg:max-w-lg bg-white pt-8 pb-8 shadow-md rounded-lg flex flex-col gap-10 items-center ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
