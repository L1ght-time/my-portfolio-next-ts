import useSWR from 'swr';
import { useRouter } from 'next/router';

import { fetcher } from '@/constants';
import { IEmploymentHistory } from '@/types/IEmploymentHistory';

export const EmploymentDetails = () => {
  const {
    query: { employmentId },
  } = useRouter();

  const { data: employmentHistory } = useSWR<IEmploymentHistory>(
    employmentId ? `/api/employmentHistory/${employmentId}` : null,
    fetcher,
  );

  if (!employmentHistory) {
    return null;
  }

  return <div>{employmentHistory.company.title}</div>;
};
