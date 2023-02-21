import { Fragment } from 'react';
import { IntlProvider } from 'react-intl';

import messages from '../messages';

import { TProvider } from './I18nProvider.types';

export const I18nProvider = ({ children, locale }: TProvider) => (
  <IntlProvider textComponent={Fragment} locale={locale} messages={messages[locale]}>
    {children}
  </IntlProvider>
);
