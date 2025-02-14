import React from "react";
import { motion } from "framer-motion";
import Divider from "@/components/Divider";

export interface ListItem {
  key: number | string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export interface ListProps {
  items: ListItem[];
  className?: string;
}

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const List: React.FC<ListProps> = ({ items, className }) => {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <React.Fragment key={item.key}>
          <motion.li
            variants={listItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center pl-6 pr-6 text-gray-700 py-2"
          >
            {item.icon && <div className="mr-4">{item.icon}</div>}
            <div>{item.content}</div>
          </motion.li>
          {index < items.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default List;
