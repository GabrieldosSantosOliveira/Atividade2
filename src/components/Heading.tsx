import { clsx } from 'clsx';
import { NextPage } from 'next';
import { HTMLAttributes } from 'react';
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: 'sm' | 'md' | 'lg';
  fontWeight: 500 | 600 | 700;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export const Heading: NextPage<HeadingProps> = ({
  className,
  fontWeight,
  level = 'h1',
  size = 'md',
  children,
  ...props
}) => {
  const Comp = level;
  return (
    <Comp
      className={clsx(
        'font-manrope Heading-white',
        {
          'Heading-xs': size === 'sm',
          'Heading-sm': size === 'md',
          'Heading-base': size === 'lg',
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
    </Comp>
  );
};
