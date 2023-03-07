import { FC } from 'react';
import Image from 'next/image';

import { CardImageProps } from './CardImage.types';

export const CardImage: FC<CardImageProps> = ({ ...rest }) => <Image {...rest} />;
