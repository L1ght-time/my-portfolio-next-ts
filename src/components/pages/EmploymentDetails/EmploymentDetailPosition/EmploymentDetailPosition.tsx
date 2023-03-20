import { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import { CardTitle } from '@/components/shared/Card';
import { IEmploymentHistory } from '@/types/IEmploymentHistory';

export const EmploymentDetailPosition: FC<Pick<IEmploymentHistory, 'position'>> = ({ position }) => (
  <div className="flex items-center gap-2">
    <CardTitle as="h2">
      <FormattedMessage id="employmentHistoryDetail.company" />
    </CardTitle>
    <p>{position}</p>
  </div>
);
