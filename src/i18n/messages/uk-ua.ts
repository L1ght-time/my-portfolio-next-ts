import { LOCALES } from '@/i18n/constants';

export default {
  [LOCALES.uk]: {
    'about.employmentHistory.title': 'Історія Працевлаштування:',
    'about.employmentHistory.button': 'Більш Детально',
    404: 'Сторінка не знайдена',
    'years.locale': `{amount, plural,
        =0 {}
        other {# р.}
      }`,
    'months.locale': `{amount, plural,
        =0 {}
        other {# міс.}
      }`,
  },
};
