import { GetStaticProps } from 'next';
import Link from 'next/link';
import SEO from '../components/SEO';
import styles from './posts.module.scss';

interface Post {
  id: string,
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}


interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <SEO title="Posts" />

<main className={styles.container}>
  <div className={styles.posts}>
    {posts.map(post => (
      <Link href={`/posts/${post.id}`} key={post.id}legacyBehavior>
        <a>
          <time>{post.updatedAt}</time>
          <strong>{post.title}</strong>
          <p>{post.excerpt}</p>
        </a>
      </Link>
    ))}
  </div>
</main>
</>
);
}


export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  try {
    const response = await fetch('http://localhost:3333/posts');
    const posts: Post[] = await response.json();

    return {
      props: {
        posts,
      },
      revalidate: 60 * 60 * 12, // 12 hours
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [],
      },
      revalidate: 60 * 5, // 5 minutes
    };
  }
};

