import { createContext, FC } from 'react';

import { TCardProps } from './Card.types';

const CardContext = createContext(null);

export const Card: FC<TCardProps> = ({ children, className, ...rest }) => {
  return <div className="card w-96 bg-base-100 shadow-xl">{children}</div>;
};
