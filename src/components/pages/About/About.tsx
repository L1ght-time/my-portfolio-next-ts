import { NextPage } from 'next';
import { FormattedMessage } from 'react-intl';
import useSWR from 'swr';

import { IAboutData } from '@/pages/api/db/about';
import { EmploymentHistory } from '@/components/pages/About/EmploymentHistory';

const fetcher = (...args: any[]) => fetch(...(args as [any, any])).then((res) => res.json());

export const About: NextPage = () => {
  const { data: about } = useSWR<IAboutData>(`${process.env.API_HOST}/about`, fetcher);
  if (!about?.employmentHistory) {
    return null;
  }

  const { employmentHistory } = about;

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
