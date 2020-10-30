import React from 'react';

interface TextFieldProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  name?: string;
  type?: 'email' | 'password' | 'text';
}

const TextField = ({ onChange, ...rest }: TextFieldProps) => {
  return (
    <input
      className="rounded-md w-full border border-gray-400 p-3 mb-5"
      onChange={({ target: { value } }) => onChange(value)}
      {...rest}
    />
  );
};

export default TextField;
