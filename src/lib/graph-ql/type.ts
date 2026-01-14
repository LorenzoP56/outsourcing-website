// Tipi per Yoast SEO
export interface YoastSEO {
  title: string;
  metaDesc: string;
  opengraphImage?: {
    sourceUrl: string;
  };
}

// Tipo per immagine in evidenza
export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText: string;
  };
}

// Tipo per categoria
export interface Category {
  name: string;
  slug: string;
}

// Tipo per singolo post
export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage: FeaturedImage | null;
  categories: {
    nodes: Category[];
  };
  seo: YoastSEO;
}

// Tipo per risposta lista posts
export interface PostsResponse {
  posts: {
    nodes: Post[];
  };
}

// Tipo per risposta singolo post
export interface PostResponse {
  post: Post;
}

// Tipo per risposta slugs (generateStaticParams)
export interface SlugsResponse {
  posts: {
    nodes: {
      slug: string;
    }[];
  };
}
