import { PropsWithChildren, createContext } from 'react';

const DropDownContext = createContext(null);
// полиморфные

// наследование от html елементов

type DropDownContainerProps = PropsWithChildren<JSX.IntrinsicElements['div']>;
type DropDownButtonProps = PropsWithChildren<JSX.IntrinsicElements['button']>;
type DropDownContentProps = PropsWithChildren<JSX.IntrinsicElements['ul']>;
type DropDownContentItemProps = PropsWithChildren<JSX.IntrinsicElements['li']>;
type DropDownIconProps = PropsWithChildren<JSX.IntrinsicElements['span']>;

export const DropDown = ({ children, ...rest }: DropDownContainerProps) => {
  return (
    <div className="dropdown dropdown-end" {...rest}>
      {children}
    </div>
  );
};

export const DropDownButton = ({ children, ...rest }: DropDownButtonProps) => {
  return <button {...rest}>{children}</button>;
};

export const DropDownIcon = ({ children, ...rest }: DropDownIconProps) => {
  return <span {...rest}>{children}</span>;
};
export const DropDownContent = ({ children, ...rest }: DropDownContentProps) => {
  return (
    <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52" {...rest}>
      {children}
    </ul>
  );
};
export const DropDownContentItem = ({ children, ...rest }: DropDownContentItemProps) => {
  return <li {...rest}>{children}</li>;
};
