import { FC } from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';

import { CardTitle } from '@/components/shared/Card';
import { IPeriod } from '@/types/IEmploymentHistory';
import { convertDateFromISOToString, getDiffPeriodOfDate } from '@/helpers';

export const EmploymentDetailPeriod: FC<IPeriod> = ({ start, end }) => {
  const { years, months } = getDiffPeriodOfDate({ start, end });

  return (
    <div className="flex items-center gap-2">
      <CardTitle as="h2">
        <FormattedMessage id="employmentHistoryDetail.period" />
      </CardTitle>
      <p>
        <FormattedDate value={convertDateFromISOToString(start)} year="numeric" month="short" />
        <> - </>
        <FormattedDate value={convertDateFromISOToString(end)} year="numeric" month="short" />
        <>
          (
          <FormattedMessage id="years" values={{ amount: years }} />
          <FormattedMessage id="months" values={{ amount: Math.round(months) }} />)
        </>
      </p>
    </div>
  );
};
