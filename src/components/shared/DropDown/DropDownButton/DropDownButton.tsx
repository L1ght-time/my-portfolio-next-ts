import { DropDownButtonProps } from './DropDownButton.types';

export const DropDownButton = ({ children, ...rest }: DropDownButtonProps) => {
  return <button {...rest}>{children}</button>;
};
