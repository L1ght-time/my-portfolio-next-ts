import { DropDownIconProps } from './DropDownIcon.types';

export const DropDownIcon = ({ children, ...rest }: DropDownIconProps) => {
  return (
    <span tabIndex={0} {...rest}>
      {children}
    </span>
  );
};
