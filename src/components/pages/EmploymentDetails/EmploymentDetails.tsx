import useSWR from 'swr';
import { useRouter } from 'next/router';

import { fetcher } from '@/constants';
import { IEmploymentHistory } from '@/types/IEmploymentHistory';

export const EmploymentDetails = () => {
  const router = useRouter();
  const { data: employmentHistory } = useSWR<ReadonlyArray<IEmploymentHistory>>('/api/employmentHistory', fetcher);

  if (!employmentHistory?.length) {
    return null;
  }

  const card = employmentHistory.find(({ id }: any) => id === router.query.id);

  if (!card) {
    return null;
  }

  return <div>{card.company.title}</div>;
};
