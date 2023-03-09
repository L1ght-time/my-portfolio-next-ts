import { GetStaticProps, NextPage } from 'next';
import ky from 'ky';
import process from 'process';
import { FormattedMessage } from 'react-intl';

import { IAboutData } from '@/pages/api/db/about';
import { EmploymentHistory } from '@/components/pages/About/EmploymentHistory';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { employmentHistory } = await ky.get(`${process.env.API_HOST}/about`).json<IAboutData>();

    if (!employmentHistory) {
      return {
        notFound: true,
      };
    }

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

export const About: NextPage<IAboutData> = ({ employmentHistory }) => {
  if (!employmentHistory) {
    return null;
  }

  return (
    <div>
      <h2 className="text font-bold pb-3">
        <FormattedMessage id="about.employmentHistory.title" />
      </h2>
      <div className="flex gap-6">
        {employmentHistory.map((item) => (
          <EmploymentHistory key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
