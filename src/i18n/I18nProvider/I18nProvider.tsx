import { Fragment } from 'react';
import { IntlProvider } from 'react-intl';

import { TLocalesKeys } from '@/i18n';

import messages from '../messages';

import { TProvider } from './I18nProvider.types';

export const I18nProvider = ({ children, locale, ...props }: TProvider) => (
  <IntlProvider textComponent={Fragment} locale={locale} messages={messages[locale as TLocalesKeys]} {...props}>
    {children}
  </IntlProvider>
);
