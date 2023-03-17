import useSWR from 'swr';
import { useRouter } from 'next/router';

import { IAboutData } from '@/pages/api/db/about';
import { fetcher } from '@/constants';

export const EmploymentDetails = () => {
  const router = useRouter();
  const { data: about } = useSWR<IAboutData>('/api/about', fetcher);
  if (!about?.employmentHistory) {
    return null;
  }

  const { employmentHistory } = about;

  const card = employmentHistory.find(({ id }: any) => id === router.query.id);

  if (!card) {
    return null;
  }

  return <div>{card.company.title}</div>;
};
