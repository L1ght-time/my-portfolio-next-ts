type THeading = { as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' };

export type TCardTitleProps = THeading & JSX.IntrinsicElements[THeading['as']];
