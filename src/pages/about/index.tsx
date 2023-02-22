import type { NextPage } from 'next';
import { FormattedMessage } from 'react-intl';

const About: NextPage = () => {
  return (
    <h1 className="text-3xl font-bold underline text-red-700">
      <FormattedMessage id="title" />
    </h1>
  );
};

export default About;
