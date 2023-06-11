import { GetStaticProps, GetStaticPaths } from 'next';

import { useRouter } from 'next/router';


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


  return (
    <>
      
      
    </>
  );
}

