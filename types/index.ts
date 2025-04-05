export interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  description: string;
  categories: string[];
  technologies: string[];
  client: string;
  year: string;
  url?: string;
  github?: string;
  featured: boolean;
}
