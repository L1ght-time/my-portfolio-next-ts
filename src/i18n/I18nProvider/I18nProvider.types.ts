import { PropsWithChildren } from 'react';

import { LOCALES } from '@/i18n';

export type IProvider = PropsWithChildren & { locale: keyof typeof LOCALES };
