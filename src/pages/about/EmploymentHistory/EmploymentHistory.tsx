import { FC } from 'react';

import { Title } from '@/components/shared/Title';
import { Card, CardBody, CardImage, CardBadge, CardText } from '@/components/shared/Card';
import { CardWrapper } from '@/components/shared/Card/CardWrapper';

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
        <CardWrapper className="flex">
          <CardImage src={image} width={60} height={60} alt="" />
          <CardWrapper>
            <Title headingLevel="h2" className="card-title">
              {position}
            </Title>
            <Title headingLevel="h2" className="card-title">
              {title}
            </Title>
          </CardWrapper>
        </CardWrapper>
        <CardText>{`${start} - ${end}`}</CardText>
        <CardText>Responsibilities:</CardText>
        <CardWrapper>
          {responsibilities.map(({ id, responsibility }) => (
            <CardText key={id}>{responsibility}</CardText>
          ))}
        </CardWrapper>
        <CardText>Skills:</CardText>
        {technologyStack.map(({ id, tag }) => (
          <CardBadge key={id}>{tag}</CardBadge>
        ))}
      </CardBody>
    </Card>
  );
};
