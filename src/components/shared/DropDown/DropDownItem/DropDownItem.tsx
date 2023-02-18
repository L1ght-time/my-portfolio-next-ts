import { DropDownItemProps } from './DropDownItem.types';

export const DropDownItem = ({ children, ...rest }: DropDownItemProps) => {
  return <li {...rest}>{children}</li>;
};
