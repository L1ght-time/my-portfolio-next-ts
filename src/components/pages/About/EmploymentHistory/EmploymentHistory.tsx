import { FC } from 'react';
import Image from 'next/image';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { DateTime } from 'luxon';

import { Card, CardBody, CardActions, CardTitle } from '@/components/shared/Card';

import { IEmploymentHistoryProps } from './EmploymentHistory.types';

export const EmploymentHistory: FC<IEmploymentHistoryProps> = ({
  company: { image, title },
  position,
  period: { start, end },
}) => {
  const { years, months } = DateTime.fromISO(end).diff(DateTime.fromISO(start), ['years', 'months']);

  const computedAmountMonths = months && months < 11 ? months + 1 : months;

  return (
    <Card className="card w-[400px] bg-base-100 shadow-xl">
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
              <>
                (
                <FormattedMessage id="years" values={{ amount: years }} />
                <FormattedMessage id="months" values={{ amount: computedAmountMonths }} />)
              </>
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
