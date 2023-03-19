import useSWR from 'swr';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { fetcher } from '@/constants';
import { IEmploymentHistory } from '@/types/IEmploymentHistory';
import { Loader } from '@/components/shared/Loader';

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

  return <div>{employmentHistory.company.title}</div>;
};
