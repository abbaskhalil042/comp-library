import type { ChangeEvent } from "react";

interface InputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value?: string;
  placeholder?: string;
}

const Input = ({ onChange, type, value, placeholder }: InputProps) => {
  return (
    <>
      <input
        className="input"
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
