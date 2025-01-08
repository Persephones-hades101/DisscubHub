import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/db";
import PostShow from "@/components/posts/post-show";
import CommentList from "@/components/comments/comment-list";
import CommentCreateForm from "@/components/comments/comment-create-form";
import paths from "@/paths";

interface PostShowPageProps {
  params: Promise<{
    slug: string;
    postId: string;
  }>;
}

export default async function PostShowPage(props: PostShowPageProps) {
  const { slug, postId } = await props.params;

  const post = await db.post.findUnique({
    where: { id: postId },
  });

  const comments = await db.comment.findMany({
    where: { postId },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-3 mt-3 mx-5">
      <Link className="underline decoration-solid " href={paths.topicShow(slug)}>
        {"< "}Back to {slug}
      </Link>
      <PostShow post={post} />
      <CommentCreateForm postId={postId} />
      <CommentList comments={comments} />
    </div>
  );
}

export async function generateStaticParams() {
  const topics = await db.topic.findMany({
    include: { posts: { select: { id: true } } },
  });

  return topics.flatMap((topic) => {
    return topic.posts.map((post) => {
      return {
        postId: post.id,
        slug: topic.slug,
      };
    });
  });
}
