import { PropsWithChildren } from 'react';

type THeading = { headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' };

export type TTitleProps = THeading & PropsWithChildren<JSX.IntrinsicElements[THeading['headingLevel']]>;
