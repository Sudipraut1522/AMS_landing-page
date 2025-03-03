import React from "react";

type ButtonProps = {
  type?: "submit" | "button" | "reset";
  labelName: string;
  labelClassName?: string;
  onClick?: () => void;
  className?: string;
  icone?: React.ReactNode;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  labelName,
  labelClassName = "",
  onClick,
  className = "",
  icone,
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`cursor-pointer text-sm border-none text-center flex items-center gap-2  py-2 rounded-lg transition-all duration-200 ${
        disabled ? "cursor-not-allowed opacity-50" : "hover:bg-opacity-80"
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className={labelClassName}>{labelName}</span>
      {icone && <span>{icone}</span>}
    </button>
  );
};

export default Button;
