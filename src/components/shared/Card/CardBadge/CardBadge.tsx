import { FC } from 'react';
import clsx from 'clsx';

import { TCardBadgeProps } from './CardBadge.types';

export const CardBadge: FC<TCardBadgeProps> = ({ children, className, ...rest }) => (
  <span className={clsx('badge', className)} {...rest}>
    {children}
  </span>
);
