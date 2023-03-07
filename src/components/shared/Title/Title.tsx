import { FC } from 'react';

import { TTitleProps } from './Title.types';

export const Title: FC<TTitleProps> = ({ headingLevel, children, className, ...rest }) => {
  const Heading = headingLevel;
  return (
    <Heading className={className} {...rest}>
      {children}
    </Heading>
  );
};
