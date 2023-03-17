import { NextPage } from 'next';
import { FormattedMessage } from 'react-intl';
import useSWR from 'swr';

import { fetcher } from '@/constants';
import { IEmploymentHistory } from '@/types/IEmploymentHistory';

import { EmploymentHistory } from './EmploymentHistory';

export const About: NextPage = () => {
  const { data: employmentHistory } = useSWR<ReadonlyArray<IEmploymentHistory>>('/api/employmentHistory', fetcher);

  if (!employmentHistory?.length) {
    return null;
  }

  return (
    <div>
      <h2 className="text font-bold pb-3">
        <FormattedMessage id="about.employmentHistory.title" />
      </h2>
      <div className="flex gap-6">
        {employmentHistory.map((item) => (
          <EmploymentHistory key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
