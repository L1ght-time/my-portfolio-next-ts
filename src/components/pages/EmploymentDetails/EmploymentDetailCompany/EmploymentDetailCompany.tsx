import { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import { CardTitle } from '@/components/shared/Card';
import { ICompany } from '@/types/IEmploymentHistory';

export const EmploymentDetailCompany: FC<Omit<ICompany, 'image'>> = ({ title }) => (
  <div className="flex items-center gap-2">
    <CardTitle as="h2">
      <FormattedMessage id="employmentHistoryDetail.company" />
    </CardTitle>
    <p>{title}</p>
  </div>
);
