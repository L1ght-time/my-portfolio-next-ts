import { DropDownIconProps } from './DropDownIcon.types';

export const DropDownIcon = ({ children, ...rest }: DropDownIconProps) => {
  return <span {...rest}>{children}</span>;
};
