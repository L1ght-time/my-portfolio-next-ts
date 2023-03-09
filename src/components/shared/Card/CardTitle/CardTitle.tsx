import { FC } from 'react';
import clsx from 'clsx';

import { TCardTitleProps } from './CardTitle.types';

export const CardTitle: FC<TCardTitleProps> = ({ as, children, className, ...rest }) => (
  <div className={clsx('card-title', className)} {...rest}>
    {children}
  </div>
);
