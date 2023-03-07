import { FC } from 'react';
import clsx from 'clsx';

import { CardButtonProps } from './CardButton.types';

export const CardButton: FC<CardButtonProps> = ({ children, className, ...rest }) => (
  <button className={clsx('btn btn-primary', className)} {...rest}>
    {children}
  </button>
);
