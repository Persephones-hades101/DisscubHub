import PostCreateForm from '@/components/posts/post-create-form';
import PostList from '@/components/posts/post-list';
import { fetchPostsByTopicSlug } from '@/db/queries/posts';
import { Divider } from '@nextui-org/react';
import ShowDescription from '@/components/common/show-description';
interface TopicShowPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TopicShowPage(props: TopicShowPageProps) {
  const { slug } = await props.params;
  // const desc = await 
  return (
    <div className="grid grid-cols-4 gap-4 p-4  mt-5">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
      </div>

      <div className="border shadow py-3 px-2">
        <div className='flex flex-row justify-center'>
          <PostCreateForm slug={slug} />
        </div>
        <Divider className="my-2" />
        <ShowDescription slug={slug} />

      </div>
    </div>
  );
}
