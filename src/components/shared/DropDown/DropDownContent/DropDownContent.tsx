import clsx from 'clsx';

import { DropDownContentProps } from './DropDownContent.types';

export const DropDownContent = ({ children, className, ...rest }: DropDownContentProps) => {
  return (
    <ul className={clsx('dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52', className)} {...rest}>
      {children}
    </ul>
  );
};
