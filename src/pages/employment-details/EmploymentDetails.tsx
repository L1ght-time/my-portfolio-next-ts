import useSWR from 'swr';

import { IAboutData } from '@/pages/api/db/about';
import { fetcher } from '@/constants';

export const EmploymentDetails = () => {
  const { data: about } = useSWR<IAboutData>('/api/about', fetcher);
  if (!about?.employmentHistory) {
    return null;
  }

  return <div>EmploymentHistory</div>;
};
