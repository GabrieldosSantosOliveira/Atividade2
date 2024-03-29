import { clsx } from 'clsx';
import { NextPage } from 'next';
import { useState } from 'react';

import { Text, TextProps } from './Text';

export interface NavBarButtonProps
  extends Omit<TextProps, 'fontWeight' | 'size'> {}
export const NavBarButton: NextPage<NavBarButtonProps> = ({
  children,
  ...props
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <li
      className={clsx(
        'border-b w-full border-solid border-menu-mobile p-3 text-menu-mobile',
        {
          'text-menu-mobile': !isSelected,
          'text-color-menu-mobile': isSelected,
          'border-l-8 border-l-button': isSelected,
        },
      )}
    >
      <Text
        fontWeight={isSelected ? 700 : 500}
        size="lg"
        {...props}
        onClick={() => setIsSelected((prev) => !prev)}
      >
        <button>{children}</button>
      </Text>
    </li>
  );
};
