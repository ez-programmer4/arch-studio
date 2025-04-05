import { client, urlFor } from "./sanity";

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string | null;
  description: string;
  location: string;
  year: string;
  gallery: (string | null)[];
  details: {
    client?: string;
    size?: string;
    duration?: string;
    team?: string[];
  };
  features?: string[];
}

export async function fetchProjects(): Promise<Project[]> {
  try {
    // Simplified query that matches working fetchProjectById structure
    const query = `*[_type == "project"] {
      _id,
      id,
      title,
      category,
      "image": image.asset->url, // Changed from image.upload.asset->url
      description,
      location,
      year,
      "gallery": gallery[].asset->url,
      details{
        client,
        size,
        duration,
        team
      },
      features
    }`;

    // Remove problematic ordering that might fail
    const projects = await client.fetch(query);

    console.log("Raw projects from Sanity:", projects); // Debug log

    return projects.map((project) => ({
      id: project.id || project._id, // Fallback to _id if id missing
      title: project.title || "",
      category: project.category || "Uncategorized",
      image: project.image || null,
      description: project.description || "",
      location: project.location || "",
      year: project.year || "",
      gallery: project.gallery || [],
      details: project.details || {},
      features: project.features || [],
    }));
  } catch (error) {
    console.error("Sanity fetchProjects error:", error);
    return [];
  }
}

export async function fetchProjectById(id: string): Promise<Project | null> {
  try {
    console.log("Starting fetchProjectById for ID:", id);
    const query = `*[_type == "project" && id == $id][0] {
      id,
      title,
      category,
      "image": image.upload.asset->url,
      "imageUrl": image.url,
      description,
      location,
      year,
      "gallery": gallery[]{
        "upload": upload.asset->url,
        "url": url
      },
      details{
        client,
        size,
        duration,
        team
      },
      features
    }`;
    const project = await client.fetch(query, { id: parseInt(id) });
    console.log("Fetched project by ID (raw):", project);
    if (!project) return null;
    return {
      id: project.id || 0,
      title: project.title || "",
      category: project.category || "",
      image: project.image
        ? urlFor(project.image).url()
        : project.imageUrl || null,
      description: project.description || "",
      location: project.location || "",
      year: project.year || "",
      gallery: Array.isArray(project.gallery)
        ? project.gallery.map((img: any) =>
            img.upload ? urlFor(img.upload).url() : img.url || null
          )
        : [],
      details: {
        client: project.details?.client,
        size: project.details?.size,
        duration: project.details?.duration,
        team: project.details?.team || [],
      },
      features: project.features || [],
    };
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    return null;
  }
}
