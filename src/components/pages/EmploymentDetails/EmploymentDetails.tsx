import useSWR from 'swr';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { fetcher } from '@/constants';
import { IEmploymentHistory } from '@/types/IEmploymentHistory';
import { Loader } from '@/components/shared/Loader';
import { Card } from '@/components/shared/Card';
import { EmploymentDetailHead } from '@/components/pages/EmploymentDetails/EmploymentDetailHead';
import { EmploymentDetailCompany } from '@/components/pages/EmploymentDetails/EmploymentDetailCompany';
import { EmploymentDetailPosition } from '@/components/pages/EmploymentDetails/EmploymentDetailPosition';
import { EmploymentDetailPeriod } from '@/components/pages/EmploymentDetails/EmploymentDetailPeriod';
import { EmploymentDetailResponsibilities } from '@/components/pages/EmploymentDetails/EmploymentDetailResponsibilities';
import { EmploymentDetailTechnologyStack } from '@/components/pages/EmploymentDetails/EmploymentDetailTechnologyStack';

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
    period,
    responsibilities,
    technologyStack,
  } = employmentHistory;

  return (
    <Card className="w-1/2 h-full p-5 gap-2">
      <EmploymentDetailHead image={image} />
      <EmploymentDetailCompany title={title} />
      <EmploymentDetailPosition position={position} />
      <EmploymentDetailPeriod {...period} />
      <EmploymentDetailResponsibilities responsibilities={responsibilities} />
      <EmploymentDetailTechnologyStack technologyStack={technologyStack} />
    </Card>
  );
};
