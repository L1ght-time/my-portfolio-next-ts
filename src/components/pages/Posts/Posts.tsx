import Link from 'next/link';

export const getStaticProps = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json());

  try {
    return {
      props: {
        posts,
      },
    };
  } catch {
    return {
      props: {
        posts: null,
      },
    };
  }
};

export const Posts = ({ posts }: any) => {
  if (!posts) {
    return null;
  }

  return (
    <>
      {posts.map(({ id, title }: any) => {
        return (
          <div key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </div>
        );
      })}
    </>
  );
};
