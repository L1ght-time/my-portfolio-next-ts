import type { NextPage } from 'next';
import { FormattedMessage } from 'react-intl';
import process from 'process';

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_HOST}/about`);
  const data = await response.json();
  return {
    props: {
      title: data.title,
    },
  };
}
const About: NextPage = ({ title }: any) => {
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
