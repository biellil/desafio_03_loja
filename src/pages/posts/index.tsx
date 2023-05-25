import { GetStaticProps } from 'next';
import SEO from '../components/SEO';
import Link from 'next/link';
import styles from './posts.module.scss';

interface Post {
  id:string;
  slug: string;
  title: string;
  description: string;
  updatedAt: string;
  icone: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <SEO title="News" />

      <main className={styles.container}>
        <div className={styles.posts}>
        {posts.map((post, index) => (
  <Link href={`/posts/${post.id}`} key={post.id}legacyBehavior>
    <div>
  
      <a>
     
        <img src={post.icone} />
        <time>{post.updatedAt}</time>
        <strong>{post.title}</strong>
        <p>{post.description}</p>
      </a>
    </div>
  </Link>
))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3333/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 12, // 12 horas
  };
};
