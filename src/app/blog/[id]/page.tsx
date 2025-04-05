import { fetchBlogById } from "../../../lib/blog";
import BlogPost from "../../../components/blog/BlogPost";

export const revalidate = 60;

export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = await fetchBlogById(params.id);

  return <BlogPost post={blog} />;
}
