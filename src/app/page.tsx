import { Divider } from '@nextui-org/react';
import TopicCreateForm from '@/components/topics/topic-create-form';
import TopicList from '@/components/topics/topic-list';
import PostList from '@/components/posts/post-list';
import { fetchTopPosts } from '@/db/queries/posts';
export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-5 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2 font-bold">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="border shadow py-3 px-2">
        <div className='flex flex-row justify-center'>
          <TopicCreateForm />
        </div>
        <Divider className="my-2" />
        <h3 className="text-lg">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
