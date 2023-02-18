import { DropDownLabelProps } from './DropDownLabel.types';

export const DropDownLabel = ({ children, ...rest }: DropDownLabelProps) => {
  return <label {...rest}>{children}</label>;
};
