import { DropDownLabelProps } from '@/components/shared/DropDown/DropDownLabel/DropDownLabel.types';

export const DropDownLabel = ({ children, ...rest }: DropDownLabelProps) => {
  return <label {...rest}>{children}</label>;
};
