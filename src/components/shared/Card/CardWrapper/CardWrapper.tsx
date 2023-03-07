import { FC } from 'react';

import { TCardWrapperProps } from './CardWrapper.types';

export const CardWrapper: FC<TCardWrapperProps> = ({ children, ...rest }) => <div {...rest}>{children}</div>;
