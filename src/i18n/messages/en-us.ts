import { LOCALES } from '@/i18n/constants';

export default {
  [LOCALES.en]: {
    'about.employmentHistory.title': 'Employment History:',
    'about.employmentHistory.button': 'More Details',
    404: 'Page is not found',
    years: `{amount, plural,
        =0 {}
        one {# y.}
        other {# y.}
      }`,
    months: `{amount, plural,
        =0 {}
        other {# mon.}
      }`,
  },
};
