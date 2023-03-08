import { FC } from 'react';
import Image from 'next/image';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { DateTime } from 'luxon';

import { Card, CardBody, CardActions, CardTitle } from '@/components/shared/Card';
import { getAmountOfPeriod } from '@/components/pages/About/EmploymentHistory/helper/getDiffPeriod';

import { IEmploymentHistoryProps } from './EmploymentHistory.types';

export const EmploymentHistory: FC<IEmploymentHistoryProps> = ({
  company: { image, title },
  position,
  period: { start, end },
}) => {
  const diff = DateTime.fromISO(end).diff(DateTime.fromISO(start), 'months');

  return (
    <Card className="card w-96 bg-base-100 shadow-xl">
      <CardBody className="card-body">
        <div className="flex align-middle gap-3">
          <Image src={image} className="w-16 h-16 -ml-4 rounded-xl" alt="" />
          <div>
            <CardTitle as="h2">{position}</CardTitle>
            <CardTitle as="h2">{title}</CardTitle>
            <p>
              <FormattedDate value={start} year="numeric" month="short" />
              <> - </>
              <FormattedDate value={end} year="numeric" month="short" />
              <>({getAmountOfPeriod({ months: diff.as('months') })})</>
              {/*<FormattedMessage id={getAmountOfPeriod({ months: diff.as('months') })} />*/}
            </p>
          </div>
        </div>
        <CardActions className="mt-4">
          <button className="btn">
            <FormattedMessage id="about.employmentHistory.button" />
          </button>
        </CardActions>
      </CardBody>
    </Card>
  );
};
