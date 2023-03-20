import { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import { CardTitle } from '@/components/shared/Card';
import { ITechnologyStack } from '@/types/IEmploymentHistory';

export const EmploymentDetailTechnologyStack: FC<{ technologyStack: ReadonlyArray<ITechnologyStack> }> = ({
  technologyStack,
}) => (
  <div>
    <CardTitle as="h2">
      <FormattedMessage id="employmentHistoryDetail.technologyStack" />
    </CardTitle>
    <div className="flex flex-wrap gap-2">
      {technologyStack.map(({ id, tag }) => (
        <span key={id} className="badge">
          {tag}
        </span>
      ))}
    </div>
  </div>
);
