import { Fragment } from 'react';
import { IntlProvider } from 'react-intl';

import messages from '../messages';

import { IProvider } from './I18nProvider.types';

export const I18nProvider = ({ children, locale }: IProvider) => (
  <IntlProvider textComponent={Fragment} locale={locale} messages={messages[locale]}>
    {children}
  </IntlProvider>
);
