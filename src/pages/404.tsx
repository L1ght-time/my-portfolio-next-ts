import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { TbArrowNarrowLeft } from 'react-icons/tb';
import { FormattedMessage } from 'react-intl';
import { useTimeoutFn } from 'react-use';

import { ROUTES } from '@/constants';
import { Title } from '@/components/shared/Title';

const NotFound = () => {
  const router = useRouter();
  const handeRedirect = () => router.push(ROUTES.home);

  useTimeoutFn(handeRedirect, 5000);

  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <button onClick={handeRedirect}>
          <TbArrowNarrowLeft fontSize={24} />
        </button>
        <Title headingLevel="h2" className="font-medium">
          <FormattedMessage id={'404'} />
        </Title>
      </div>
    </div>
  );
};

export default NotFound;
