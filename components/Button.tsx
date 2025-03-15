import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className = "" }: ButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`
      inline-flex items-center
      px-5 py-2.5 mr-2 mb-2
      text-sm font-medium text-white text-center
      bg-gradient-to-br from-purple-600 to-blue-500 
      hover:bg-gradient-to-bl
      focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
      rounded-lg
      transition-all duration-1000
      ${className}
    `}
  >
    {children}
  </button>
);

export default Button;