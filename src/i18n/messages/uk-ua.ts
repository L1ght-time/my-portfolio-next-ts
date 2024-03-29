import { LOCALES } from '@/i18n/constants';

export default {
  [LOCALES.uk]: {
    'about.employmentHistory.title': 'Історія Працевлаштування:',
    'about.employmentHistory.button': 'Більш Детально',
    404: 'Сторінка не знайдена',
    years: `{amount, plural,
        =0 {}
        other {# р. }
      }`,
    months: `{amount, plural,
        =0 {}
        other {# міс.}
      }`,
  },
};
