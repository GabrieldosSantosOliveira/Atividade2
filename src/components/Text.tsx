import { clsx } from 'clsx';
import { NextPage } from 'next';
import { HTMLAttributes } from 'react';
export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg';
  fontWeight: 500 | 600 | 700;
}
export const Text: NextPage<TextProps> = ({
  className,
  fontWeight,
  size = 'md',
  children,
  ...props
}) => {
  return (
    <span
      className={clsx(
        'font-manrope text-white',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-base': size === 'lg',
        },
        {
          'font-medium': fontWeight === 500,
          'font-semibold': fontWeight === 600,
          'font-bold': fontWeight === 700,
        },
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
