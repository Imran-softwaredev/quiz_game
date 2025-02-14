import React from "react";
import { motion } from "framer-motion";

function Loading() {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-lg">Loading...</span>
    </motion.div>
  );
}

export default Loading;
