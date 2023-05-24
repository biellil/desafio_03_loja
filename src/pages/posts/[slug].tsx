import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import SEO from '../components/SEO';
import styles from './post.module.scss';

interface PostProps {
  post: {
    id:string;
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function Post({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <SEO title="Post" />

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

    let updatedAt = ''; // Valor padrão se updatedAt for indefinido

    if (data.updatedAt) {
      updatedAt = format(
        new Date(data.updatedAt.slice(0, 14)),
        "yyyy-MM-dd'T'HH:mm:ss",
        { locale: ptBR }
      );
    }

    const post = {
      id: data.id ? data.id.toString() : null,
      slug: data.slug,
      title: data.title,
      content: data.content,
      updatedAt: updatedAt,
    };

    return {
      props: {
        post,
      },
      revalidate: 60 * 60 * 12, // 12 horas
    };
  } catch (error) {
    console.error('Erro ao buscar o post:', error);
    throw error;
  }
};
