import { GetStaticProps, GetStaticPaths } from 'next';
import SEO from '../components/SEO';
import { useRouter } from 'next/router';
import styles from './post.module.scss';

interface Post {
  id: string;
  slug: string;
  title: string;
  author:string;
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



  const replaceNewLines = (content: string) => {
    return content ? content.replace(/\/n/g, '<br />') : '';
  };

  return (
    <>
      
      <main className={styles.container}>
       
        <article className={styles.post}>
  
        <h1>{post.title}</h1>
        <time>{post.updatedAt} . {post.author}</time>
          <div
            className={styles.content1}
            dangerouslySetInnerHTML={{ __html: replaceNewLines(post.content) }}
          />
          <img src={post.urlToImage} />
          <div
            className={styles.content2}
            dangerouslySetInnerHTML={{ __html: replaceNewLines(post.content2) }}
          />
          <img src={post.urlToImage1} />
        </article>
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
