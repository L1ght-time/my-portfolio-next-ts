import { FC, useMemo } from 'react';
import Image from 'next/image';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { DateTime } from 'luxon';
import { useRouter } from 'next/router';

import { Card, CardBody, CardActions, CardTitle } from '@/components/shared/Card';
import { IEmploymentHistory } from '@/types/IEmploymentHistory';
import { convertDateFromISOToString } from '@/helpers';

export const EmploymentHistory: FC<IEmploymentHistory> = ({
  id,
  company: { image, title },
  position,
  period: { start, end },
}) => {
  const { push } = useRouter();

  const { years, months } = useMemo(
    () => DateTime.fromISO(end).diff(DateTime.fromISO(start), ['years', 'months']).plus({ month: 1 }).normalize(),
    [],
  );

  const handleDetail = () => push(`/employment-details/${id}`);

  return (
    <Card className="card w-[400px] bg-base-100 shadow-xl">
      <CardBody className="card-body">
        <div className="flex align-middle gap-3">
          <Image src={image} className="w-16 h-16 -ml-4 rounded-xl" alt="" />
          <div>
            <CardTitle as="h2">{position}</CardTitle>
            <CardTitle as="h2">{title}</CardTitle>
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
        </div>
        <CardActions className="mt-4">
          <button className="btn" onClick={handleDetail}>
            <FormattedMessage id="about.employmentHistory.button" />
          </button>
        </CardActions>
      </CardBody>
    </Card>
  );
};
