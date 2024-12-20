import React from "react";

interface InputProps {
    type: string;
    name: string;
    placeholder?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    className?: string;
  }
  
  const Input: React.FC<InputProps> = ({
    type,
    name,
    placeholder = "",
    value,
    onChange,
    required = false,
    className = "",
  }) => {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`p-2 border rounded text-gray-800 ${className}`}
      />
    );
  };
  
  export default Input;
  