import { NextPage } from 'next';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
export const Button: NextPage<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="px-7 py-2 text-white font-manrope font-extrabold border border-solid border-button rounded-md"
      {...props}
    >
      {children}
    </button>
  );
};
