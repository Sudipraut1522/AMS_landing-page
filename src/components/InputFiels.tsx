import React, { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { HiEye, HiEyeOff } from "react-icons/hi";

type InputFieldProps = {
  error?: FieldError | null;
  type?: string;
  labelName: string;
  inputClassName?: string;
  name?: string;
  placeholder?: string;
  register?: UseFormRegister<any>;
  errorClassName?: string;
  requires?: boolean;
  labelClassName?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  labelName,
  error,
  inputClassName,
  name = "",
  placeholder,
  register,
  labelClassName,
  errorClassName,
  requires,
  ...props
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className={labelClassName}>
        {labelName}
      </label>

      <div className="relative">
        <input
          id={name}
          type={isPasswordVisible && type === "password" ? "text" : type}
          required={requires}
          className={`flex h-10 w-full border-1 border-gray-300 outline-none px-3 py-4 text-sm focus:ring-[1px] placeholder:text-gray-500  ${inputClassName}`}
          placeholder={placeholder}
          {...(register ? register(name) : {})}
          {...props}
        />

        {type === "password" && (
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <HiEyeOff size={20} color="gray" />
            ) : (
              <HiEye size={20} color="gray" />
            )}
          </span>
        )}
      </div>

      {error && <p className={errorClassName}>*{error.message}</p>}
    </div>
  );
};

export default InputField;
