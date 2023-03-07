import { FC } from 'react';

import { TCardProps } from './Card.types';

export const Card: FC<TCardProps> = ({ children, className, ...rest }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl" {...rest}>
      {children}
    </div>
  );
};
