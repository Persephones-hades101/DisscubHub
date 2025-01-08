import type { PostWithData } from '@/db/queries/posts';
import Link from 'next/link';
import paths from '@/paths';

interface PostListProps {
  fetchData: () => Promise<PostWithData[]>;
}

export default async function PostList({ fetchData }: PostListProps) {
  const posts = await fetchData();

  const renderedPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;

    if (!topicSlug) {
      throw new Error('Need a slug to link to a post');
    }

    return (
      <div key={post.id} className="border rounded p-2 shadow-large w-5/6 bg-slate-500 text-white">
        <Link href={paths.postShow(topicSlug, post.id)}>
          <h3 className="text-lg font-bold mb-3">{post.title}</h3>
          <div className="flex flex-row gap-8">
            <p className="text-xs  ">By {post.user.name}</p>
            <p className="text-xs  ">
              {post._count.comments} comments
            </p>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}
