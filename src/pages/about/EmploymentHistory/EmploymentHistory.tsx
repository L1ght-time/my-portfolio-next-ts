import { FC } from 'react';
import Image from 'next/image';

import civenty from '@/assets/civenty.jpeg';

import IEmploymentHistoryProps from './EmploymentHistory.types';

const companiesLogos = [civenty];

export const EmploymentHistory: FC<IEmploymentHistoryProps> = ({
  company,
  position,
  period,
  responsibilities,
  technologyStack,
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex">
          <Image src={companiesLogos[company.id]} width={60} height={60} alt="" />
          <div>
            <h2 className="card-title">{position}</h2>
            <h2 className="card-title">{company.title}</h2>
          </div>
        </div>
        <span>{`${period.start} - ${period.end}`}</span>

        {responsibilities.map(({ id, item }) => (
          <span key={id}>{item}</span>
        ))}
        <p>Skills:</p>
        {technologyStack.map(({ id, tag }) => (
          <span key={id} className="badge">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
