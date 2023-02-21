import { PropsWithChildren } from 'react';

import { LOCALES } from '@/i18n';

export type TProvider = PropsWithChildren & { locale: keyof typeof LOCALES };
