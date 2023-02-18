import { PropsWithChildren, createContext } from 'react';
import clsx from 'clsx';

const DropDownContext = createContext(null);

type DropDownContainerProps = PropsWithChildren<JSX.IntrinsicElements['div']>;
export const DropDown = ({ children, className, ...rest }: DropDownContainerProps) => {
  return (
    <div className={clsx('dropdown dropdown-end', className)} {...rest}>
      {children}
    </div>
  );
};
