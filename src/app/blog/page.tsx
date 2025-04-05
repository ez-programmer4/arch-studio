import { fetchBlogs } from "../../lib/blog";
import BlogGrid from "../../components/blog/BlogGrid";
import BlogHero from "../../components/blog/BlogHero";

export const revalidate = 60;

export default async function BlogPage() {
  const blogs = await fetchBlogs();
  return (
    <>
      <BlogHero />
      <BlogGrid initialBlogs={blogs} />
    </>
  );
}
