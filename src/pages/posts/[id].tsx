import { GetStaticProps, GetStaticPaths } from 'next';
import SEO from '../components/SEO';
import { useRouter } from 'next/router';

interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  updatedAt: string;
  icone: string;
  content: string;
  content1: string;
  content2: string;
  urlToImage: string;
  urlToImage1: string;
}

interface PostProps {
  post: Post;
}

export default function PostPage({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  const renderContent = (content: string) => {
    if (!content) {
      return null;
    }

    const lines = content.split('/n');
    return lines.map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <>
      <SEO title={post.title} />

      <main>
        <div>
          <strong>{post.title}</strong>
          <img src={post.urlToImage} />
          <time>{post.updatedAt}</time>

          {renderContent(post.content)}

          <img src={post.urlToImage1} />

          {renderContent(post.content1)}

          <p>{post.content2}</p>
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:3333/posts');
  const posts = await response.json();

  const paths = posts.map((post: Post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id || typeof params.id !== 'string') {
    return {
      notFound: true,
    };
  }

  const { id } = params;
  const response = await fetch(`http://localhost:3333/posts/${id}`);
  const post = await response.json();

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 12, // 12 hours
  };
};
