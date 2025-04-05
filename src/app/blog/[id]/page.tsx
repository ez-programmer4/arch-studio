import { fetchBlogById } from "../../../lib/blog";
import BlogPost from "../../../components/blog/BlogPost";
import { Metadata } from "next";

// Define types for your blog data
interface BlogPost {
  id: string;
  title: string;
  content: string;
  // Add all other properties your blog posts have
  [key: string]: any; // Remove this if you want strict typing
}

interface PageProps {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export const revalidate = 60;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const blog = await fetchBlogById(params.id);

  return {
    title: blog.title || `Blog Post ${params.id}`,
    description: blog.excerpt || undefined,
    // Add other metadata fields as needed
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const blog = await fetchBlogById(params.id);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return <BlogPost post={blog} />;
}
