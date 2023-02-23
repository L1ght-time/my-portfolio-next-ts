import { PropsWithChildren } from 'react';

import { TLocalesKeys } from '@/i18n';

export type TProvider = PropsWithChildren & { locale: TLocalesKeys };
