import { FC } from 'react';
import Image from 'next/image';

import IEmploymentHistoryProps from './EmploymentHistory.types';

export const EmploymentHistory: FC<IEmploymentHistoryProps> = ({
  company: { image, title },
  position,
  period: { start, end },
  responsibilities,
  technologyStack,
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex">
          <Image src={image} width={60} height={60} alt="" />
          <div>
            <h2 className="card-title">{position}</h2>
            <h2 className="card-title">{title}</h2>
          </div>
        </div>
        <span>{`${start} - ${end}`}</span>

        <p>Skills:</p>
        <ul>
          {responsibilities.map(({ id, responsibility }) => (
            <li key={id}>{responsibility}</li>
          ))}
        </ul>
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
