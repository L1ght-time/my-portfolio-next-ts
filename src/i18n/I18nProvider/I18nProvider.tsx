import { Fragment, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

import messages from '../messages';
import { LOCALES } from '../constants';

interface IProvider {
  children: ReactNode;
  locale: keyof typeof LOCALES;
}
export const I18nProvider = ({ children, locale }: IProvider) => (
  <IntlProvider textComponent={Fragment} locale={locale} messages={messages[locale]}>
    {children}
  </IntlProvider>
);
