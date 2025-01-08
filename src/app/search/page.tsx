import PostList from '@/components/posts/post-list';
import { fetchPostsBySearchTerm } from '@/db/queries/posts';
import { redirect } from 'next/navigation';

interface SearchPageProps {
  searchParams: Promise<{
    term: string;
  }>;
}

export default async function SearchPage(props: SearchPageProps) {
  const { term } = await props.searchParams;

  if (!term) {
    return redirect('/');
  }

  return (
    <div className='mx-5 px-5 '>
      <h1 className='my-3 font-bold'>{`Search Results for "${term}"`}</h1>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
}