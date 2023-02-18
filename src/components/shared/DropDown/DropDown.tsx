import { createContext } from 'react';
import clsx from 'clsx';

import { DropDownContainerProps } from './DropDown.types';

const DropDownContext = createContext(null);

export const DropDown = ({ children, className, ...rest }: DropDownContainerProps) => {
  return (
    <div className={clsx('dropdown dropdown-end', className)} {...rest}>
      {children}
    </div>
  );
};
