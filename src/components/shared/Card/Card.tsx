import { FC } from 'react';
import clsx from 'clsx';

import { TCardProps } from './Card.types';

export const Card: FC<TCardProps> = ({ children, className, ...rest }) => (
  <div className={clsx('card w-96 bg-base-100 shadow-xl', className)} {...rest}>
    {children}
  </div>
);
