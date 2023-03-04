import type { NextPage } from 'next';
import { FormattedMessage } from 'react-intl';
import process from 'process';

import { IAboutData } from '@/pages/api/db/about';

import { EmploymentHistory } from './EmploymentHistory';

export async function getStaticProps() {
  try {
    const response = await fetch(`${process.env.API_HOST}/about`);
    const data = await response.json();

    return {
      props: {
        title: data.title,
        employmentHistory: data.employmentHistory,
      },
    };
  } catch {
    return {
      props: {
        title: null,
        employmentHistory: null,
      },
    };
  }
}
const About: NextPage<IAboutData> = ({ title, employmentHistory }) => {
  if (!title || !employmentHistory) {
    return null;
  }

  console.log({ title, employmentHistory });

  return (
    <>
      {title}

      <h1 className="text-3xl font-bold underline text-red-700">
        <FormattedMessage id="title" />
      </h1>

      <div>
        {employmentHistory.map((item) => (
          <EmploymentHistory key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default About;
