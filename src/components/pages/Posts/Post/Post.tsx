export const getStaticPaths = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json());

  const paths = posts.map(({ id }: any) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { id } = context.params;
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => response.json());

  try {
    return {
      props: post,
    };
  } catch {
    return {
      props: null,
    };
  }
};

export const Post = ({ id, title }: any) => {
  return <div>{`${id} - ${title}`}</div>;
};
