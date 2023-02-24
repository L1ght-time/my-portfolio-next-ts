import { PropsWithChildren } from 'react';
import { IntlConfig } from 'react-intl';

export type TProvider = PropsWithChildren & Omit<IntlConfig, 'locale'>;
