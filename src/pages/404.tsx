import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { TbArrowNarrowLeft } from 'react-icons/tb';
import { FormattedMessage } from 'react-intl';

import { ROUTES_PAGES } from '@/constants';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      return router.push(ROUTES_PAGES.home);
    }, 5000);
  }, [router]);

  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <button onClick={() => router.push(ROUTES_PAGES.home)}>
          <TbArrowNarrowLeft fontSize={24} />
        </button>
        <h1 className="font-medium">
          <FormattedMessage id={'404'} />
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
