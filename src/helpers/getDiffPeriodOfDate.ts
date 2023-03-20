import { DateTime } from 'luxon';

import { IPeriod } from '@/types/IEmploymentHistory';

export const getDiffPeriodOfDate = ({ start, end }: IPeriod) => {
  const { years, months } = DateTime.fromISO(end)
    .diff(DateTime.fromISO(start), ['years', 'months'])
    .plus({ month: 1 })
    .normalize();

  return { years, months };
};
