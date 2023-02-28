import type { NextPage } from 'next';
import { FormattedMessage } from 'react-intl';
import process from 'process';

export async function getStaticProps() {
  try {
    const response = await fetch(`${process.env.API_HOST}/about`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        title: data.title,
      },
    };
  } catch {
    return {
      props: {
        title: null,
      },
    };
  }
}
const About: NextPage = ({ title }: any) => {
  if (!title) {
    return null;
  }

  return (
    <>
      {title}

      <h1 className="text-3xl font-bold underline text-red-700">
        <FormattedMessage id="title" />
      </h1>
    </>
  );
};

export default About;
