import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import SEO from '../components/SEO';
import styles from './post.module.scss';

interface PostProps {
  post: {
    id: string;
    slug: string;
    author:string;
    title: string;
    urlToImage:string;
    urlToImage2:string;
    content:string;
    content2:string;
    updatedAt:string;
  };
}

export default function Post({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <SEO title="New" />

      <main className={styles.container}>
        
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
            
          />
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const id = context.params?.id;

    const response = await fetch(`http://localhost:3333/posts/${id}`);
    const data = await response.json();

    return {
      props: {
        post: data,
      },
      revalidate: 60 * 60 * 12, // 12 horas
    };
  } catch (error) {
    console.error('Erro ao buscar o post:', error);
    throw error;
  }
};
