import { ElementType } from 'react';

export interface IListItemProps {
  name: string;
  path: string;
  Icon: ElementType;
  isActive?: boolean;
}
