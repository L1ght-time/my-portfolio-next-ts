import { FC } from 'react';
import clsx from 'clsx';

import { TCardActionsProps } from './CardActions.types';

export const CardActions: FC<TCardActionsProps> = ({ children, className, ...rest }) => (
  <div className={clsx('card-actions justify-end', className)} {...rest}>
    {children}
  </div>
);
