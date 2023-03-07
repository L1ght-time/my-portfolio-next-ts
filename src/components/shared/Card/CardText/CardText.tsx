import { FC } from 'react';

import { TCardTextProps } from '@/components/shared/Card/CardText/CardText.types';

export const CardText: FC<TCardTextProps> = ({ children, className, ...rest }) => (
  <p className={className} {...rest}>
    {children}
  </p>
);
