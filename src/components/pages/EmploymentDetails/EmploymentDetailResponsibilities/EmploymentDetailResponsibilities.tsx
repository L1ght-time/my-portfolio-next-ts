import { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import { CardTitle } from '@/components/shared/Card';
import { IResponsibilities } from '@/types/IEmploymentHistory';

export const EmploymentDetailResponsibilities: FC<{
  responsibilities: ReadonlyArray<IResponsibilities>;
}> = ({ responsibilities }) => (
  <div>
    <CardTitle as="h2">
      <FormattedMessage id="employmentHistoryDetail.responsibilities" />
    </CardTitle>
    <ul className="menu">
      {responsibilities.map(({ id, responsibility }) => (
        <li key={id}>{`- ${responsibility};`}</li>
      ))}
    </ul>
  </div>
);
