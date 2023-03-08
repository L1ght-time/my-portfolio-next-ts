import { FC } from 'react';
import Image from 'next/image';

import { Card, CardBody, CardActions, CardTitle } from '@/components/shared/Card';

import { IEmploymentHistoryProps } from './EmploymentHistory.types';

export const EmploymentHistory: FC<IEmploymentHistoryProps> = ({
  company: { image, title },
  position,
  period: { start, end },
  responsibilities,
  technologyStack,
}) => {
  return (
    <Card className="card w-96 bg-base-100 shadow-xl">
      <CardBody className="card-body">
        <div className="flex">
          <Image src={image} width={60} height={60} alt="" />
          <div>
            <CardTitle as="h2">{position}</CardTitle>
            <CardTitle as="h2">{title}</CardTitle>
          </div>
        </div>
        <p>{`${start} - ${end}`}</p>
        <p>Responsibilities:</p>
        <div>
          {responsibilities.map(({ id, responsibility }) => (
            <p key={id}>{responsibility}</p>
          ))}
        </div>
        <p>Skills:</p>
        {technologyStack.map(({ id, tag }) => (
          <span key={id} className="badge">
            {tag}
          </span>
        ))}
        <CardActions>
          <button className="btn">More Details</button>
        </CardActions>
      </CardBody>
    </Card>
  );
};
