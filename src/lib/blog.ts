import { client, urlFor } from "./sanity";

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  image: string | null;
  excerpt: string;
  date: string;
  author: string;
  content: {
    introduction: string;
    sections: { title: string; content: string; image?: string | null }[];
    conclusion: string;
  };
}

export async function fetchBlogs(): Promise<BlogPost[]> {
  try {
    console.log("Starting fetchBlogs...");
    const query = `*[_type == "blog"] | order(date desc) {
      id,
      title,
      category,
      "image": image.upload.asset->url,
      "imageUrl": image.url,
      excerpt,
      date,
      author,
      content {
        introduction,
        sections[] {
          title,
          content,
          "image": image.upload.asset->url,
          "imageUrl": image.url
        },
        conclusion
      }
    }`;
    console.log("Executing query:", query);
    const blogs = await client.fetch(query);
    console.log("Fetched blogs (raw):", blogs);
    if (!blogs || blogs.length === 0) {
      console.log(
        "No blogs returned from Sanity. Check schema or publication status."
      );
    }
    return blogs.map((blog: any) => ({
      id: blog.id || 0,
      title: blog.title || "",
      category: blog.category || "",
      image: blog.image ? urlFor(blog.image).url() : blog.imageUrl || null,
      excerpt: blog.excerpt || "",
      date: blog.date || "",
      author: blog.author || "",
      content: {
        introduction: blog.content?.introduction || "",
        sections: Array.isArray(blog.content?.sections)
          ? blog.content.sections.map((section: any) => ({
              title: section.title || "",
              content: section.content || "",
              image: section.image
                ? urlFor(section.image).url()
                : section.imageUrl || null,
            }))
          : [],
        conclusion: blog.content?.conclusion || "",
      },
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export async function fetchBlogById(id: string): Promise<BlogPost | null> {
  try {
    console.log("Starting fetchBlogById for ID:", id);
    const query = `*[_type == "blog" && id == $id][0] {
      id,
      title,
      category,
      "image": image.upload.asset->url,
      "imageUrl": image.url,
      excerpt,
      date,
      author,
      content {
        introduction,
        sections[] {
          title,
          content,
          "image": image.upload.asset->url,
          "imageUrl": image.url
        },
        conclusion
      }
    }`;
    console.log("Executing query:", query);
    const blog = await client.fetch(query, { id: parseInt(id) });
    console.log("Fetched blog by ID (raw):", blog);
    if (!blog) {
      console.log("No blog found with ID:", id);
      return null;
    }
    return {
      id: blog.id || 0,
      title: blog.title || "",
      category: blog.category || "",
      image: blog.image ? urlFor(blog.image).url() : blog.imageUrl || null,
      excerpt: blog.excerpt || "",
      date: blog.date || "",
      author: blog.author || "",
      content: {
        introduction: blog.content?.introduction || "",
        sections: Array.isArray(blog.content?.sections)
          ? blog.content.sections.map((section: any) => ({
              title: section.title || "",
              content: section.content || "",
              image: section.image
                ? urlFor(section.image).url()
                : section.imageUrl || null,
            }))
          : [],
        conclusion: blog.content?.conclusion || "",
      },
    };
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    return null;
  }
}
