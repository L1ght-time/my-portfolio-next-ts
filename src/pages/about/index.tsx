import type { GetStaticProps, NextPage } from 'next';
import { FormattedMessage } from 'react-intl';
import process from 'process';
import ky from 'ky';

import { IAboutData } from '@/pages/api/db/about';

import { EmploymentHistory } from './EmploymentHistory';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { employmentHistory } = await ky.get(`${process.env.API_HOST}/about`).json<IAboutData>();

    return {
      props: {
        employmentHistory,
      },
    };
  } catch {
    return {
      props: {
        employmentHistory: null,
      },
    };
  }
};

const About: NextPage<IAboutData> = ({ employmentHistory }) => {
  if (!employmentHistory) {
    return null;
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-700">
        <FormattedMessage id="about.title" />
      </h1>

      <div>
        <h2>
          <FormattedMessage id="about.employmentHistory.title" />
        </h2>
        {employmentHistory.map((item) => (
          <EmploymentHistory key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default About;
