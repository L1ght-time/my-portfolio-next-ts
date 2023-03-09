import { FC } from 'react';
import clsx from 'clsx';

import { TCardBodyProps } from './CardBody.types';

export const CardBody: FC<TCardBodyProps> = ({ children, className, ...rest }) => (
  <div className={clsx('card-body', className)} {...rest}>
    {children}
  </div>
);
