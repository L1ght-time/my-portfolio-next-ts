import type { NextPage } from 'next';

import { translate } from '@/i18n';

const About: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-700">{translate('title')}</h1>
    </>
  );
};

export default About;
