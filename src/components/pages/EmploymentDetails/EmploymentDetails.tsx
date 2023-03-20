import useSWR from 'swr';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Image from 'next/image';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

import { fetcher } from '@/constants';
import { IEmploymentHistory } from '@/types/IEmploymentHistory';
import { Loader } from '@/components/shared/Loader';
import { Card, CardTitle } from '@/components/shared/Card';
import { convertDateFromISOToString, getDiffPeriodOfDate } from '@/helpers';

export const EmploymentDetails: FC = () => {
  const router = useRouter();

  const {
    query: { employmentId },
  } = useRouter();

  const { data: employmentHistory, isLoading } = useSWR<IEmploymentHistory>(
    employmentId ? `/api/employmentHistory/${employmentId}` : null,
    fetcher,
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!employmentHistory) {
    return null;
  }

  const {
    company: { image, title },
    position,
    period: { start, end },
    responsibilities,
    technologyStack,
  } = employmentHistory;

  const { years, months } = getDiffPeriodOfDate({ start, end });

  return (
    <Card className="w-1/2 h-full p-5 gap-2">
      <div className="flex justify-between">
        <Image src={image} className="w-16 h-16 rounded-xl" alt="" />
        <button onClick={router.back}>
          <MdOutlineKeyboardArrowLeft fontSize={36} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <CardTitle as="h2">
          <FormattedMessage id="employmentHistoryDetail.company" />
        </CardTitle>
        <p>{title}</p>
      </div>

      <div className="flex items-center gap-2">
        <CardTitle as="h2">
          <FormattedMessage id="employmentHistoryDetail.position" />
        </CardTitle>
        <p>{position}</p>
      </div>

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

      <div>
        <CardTitle as="h2">
          <FormattedMessage id="employmentHistoryDetail.responsibilities" />
        </CardTitle>
        <ul className="menu">
          {responsibilities.map(({ id, responsibility }) => (
            <li key={id}>{`- ${responsibility};`}</li>
          ))}
        </ul>
      </div>

      <div>
        <CardTitle as="h2">
          <FormattedMessage id="employmentHistoryDetail.technologyStack" />
        </CardTitle>
        <div className="flex flex-wrap gap-2">
          {technologyStack.map(({ id, tag }) => (
            <span key={id} className="badge">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};
