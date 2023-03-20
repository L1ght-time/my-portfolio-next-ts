import useSWR from 'swr';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Image from 'next/image';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { router } from 'next/client';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

import { fetcher } from '@/constants';
import { IEmploymentHistory } from '@/types/IEmploymentHistory';
import { Loader } from '@/components/shared/Loader';
import { Card } from '@/components/shared/Card';
import { convertDateFromISOToString, getDiffPeriodOfDate } from '@/helpers';

export const EmploymentDetails: FC = () => {
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
    <Card className="w-1/2 h-full p-5">
      <div className="flex justify-between">
        <Image src={image} className="w-16 h-16 rounded-xl" alt="" />
        <button onClick={router.back}>
          <MdOutlineKeyboardArrowLeft fontSize={36} />
        </button>
      </div>
      <div className="flex">
        <h2 className="font-bold">Company:</h2>
        <p>{title}</p>
      </div>

      <div className="flex">
        <h2 className="font-bold">Position:</h2>
        <p>{position}</p>
      </div>

      <div className="flex">
        <h2 className="font-bold">Work period:</h2>
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
        <h2 className="font-bold">Responsibilities:</h2>
        {responsibilities.map(({ id, responsibility }) => (
          <div key={id}>{responsibility}</div>
        ))}
      </div>

      <div>
        <h2 className="font-bold">Technology stack:</h2>
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
