import { Fragment } from 'react';
import { IntlProvider } from 'react-intl';

import { useLocaleStore } from '@/store';

import messages from '../messages';

import { TProvider } from './I18nProvider.types';

export const I18nProvider = ({ children }: TProvider) => {
  const { locale } = useLocaleStore();

  return (
    <IntlProvider textComponent={Fragment} locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};
