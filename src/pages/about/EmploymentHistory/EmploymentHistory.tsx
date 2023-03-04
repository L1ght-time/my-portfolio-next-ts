import { FC } from 'react';
import Image from 'next/image';

import IEmploymentHistoryProps from './EmploymentHistory.types';

export const EmploymentHistory: FC<IEmploymentHistoryProps> = ({
  company,
  position,
  period,
  responsibilities,
  technologyStack,
}) => {
  return (
    <div>
      <>
        <Image src={`/${company.path}`} width={60} height={60} alt="" />
        <h2>{company.title}</h2>
        <h2>{position}</h2>
      </>
    </div>
  );
};
