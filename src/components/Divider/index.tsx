import React from "react";

const Divider: React.FC<DividerProps> = ({ text, className = "" }) => {
  return (
    <div className="flex items-center gap-2 my-2">
      {text ? (
        <>
          <span className="border-t border-gray-200 flex-grow"></span>
          <span
            className={`text-2xs text-gray-600 font-medium uppercase ${className}`}
          >
            {text}
          </span>
          <span className="border-t border-gray-200 flex-grow"></span>
        </>
      ) : (
        <span className="border-t border-gray-200 w-full"></span>
      )}
    </div>
  );
};

export default Divider;
