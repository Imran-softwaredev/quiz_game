import React from "react";
import { motion } from "framer-motion";
import { CrossIcon, TickIcon } from "@/icons";

export interface RadioButtonItem {
  id: number;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioButtonsProps {
  items: RadioButtonItem[];
  selectedValue: string;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({
  items,
  selectedValue,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
      {items.map((item) => (
        <motion.label
          key={item.id}
          whileHover={{ scale: 1.02 }}
          className={`flex items-center gap-3 p-3 cursor-pointer transition-all rounded-lg border-2 w-full md:w-auto text-center ${
            selectedValue === item.value
              ? item.value === "True"
                ? "border-green-600 text-green-600 bg-green-100"
                : "border-red-600 text-red-600 bg-red-100"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          <input
            type="radio"
            name="quizAnswer"
            value={item.value}
            onChange={item.onChange}
            className="hidden"
            checked={selectedValue === item.value}
          />

          <div
            className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all ${
              selectedValue === item.value
                ? item.value === "True"
                  ? "border-green-600 bg-green-600 text-white"
                  : "border-red-600 bg-red-600 text-white"
                : "bg-white"
            }`}
          >
            {selectedValue === item.value && item.value === "True" && (
              <TickIcon />
            )}
            {selectedValue === item.value && item.value === "False" && (
              <CrossIcon />
            )}
          </div>

          <span className="text-lg font-medium">{item.label}</span>
        </motion.label>
      ))}
    </div>
  );
};

export default RadioButtons;
