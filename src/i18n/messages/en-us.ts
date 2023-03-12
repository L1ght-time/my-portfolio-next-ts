import { LOCALES } from '@/i18n/constants';

export default {
  [LOCALES.en]: {
    years: 'years',
    'about.employmentHistory.title': 'Employment History:',
    'about.employmentHistory.button': 'More Details',
    404: 'Page is not found',
    'years.locale': `{amount, plural,
        =0 {}
        one {# y.}
        other {# y.}
      }`,
    'months.locale': `{amount, plural,
        =0 {}
        one {# mon.}
        other {# mon.}
      }`,
  },
};
