import { DropDownLabelProps } from './DropDownLabel.types';

export const DropDownLabel = ({ children, ...rest }: DropDownLabelProps) => {
  return (
    <label tabIndex={0} {...rest}>
      {children}
    </label>
  );
};
