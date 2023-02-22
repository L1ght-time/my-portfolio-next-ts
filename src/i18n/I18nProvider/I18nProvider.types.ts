import { PropsWithChildren } from 'react';

import { TLocalesKeys } from '@/types';

export type TProvider = PropsWithChildren & { locale: TLocalesKeys };
