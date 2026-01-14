import { gql, GraphQLClient } from 'graphql-request';
import type { PostsResponse, PostResponse, SlugsResponse, Post } from './type';

const baseUrl = process.env.WP_URL || 'http://localhost:8000/graphql';
const client = new GraphQLClient(baseUrl);

// Query per ottenere tutti i post con SEO
const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts(first: 100, where: { status: PUBLISH }) {
      nodes {
        id
        slug
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        seo {
          title
          metaDesc
        }
      }
    }
  }
`;

// Query per ottenere un singolo post per slug
const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      content
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
`;

// Query per ottenere tutti gli slug (per generateStaticParams)
const GET_ALL_SLUGS = gql`
  query GetAllSlugs {
    posts(first: 100, where: { status: PUBLISH }) {
      nodes {
        slug
      }
    }
  }
`;

/**
 * Recupera tutti i post pubblicati
 */
export async function getAllPosts(): Promise<Post[]> {
  try {
    const data = await client.request<PostsResponse>(GET_ALL_POSTS);
    return data.posts.nodes;
  } catch (error) {
    console.error('Errore nel recupero dei post:', error);
    return [];
  }
}

/**
 * Recupera un singolo post per slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const data = await client.request<PostResponse>(GET_POST_BY_SLUG, { slug });
    return data.post;
  } catch (error) {
    console.error(`Errore nel recupero del post "${slug}":`, error);
    return null;
  }
}

/**
 * Recupera tutti gli slug dei post (per generateStaticParams)
 */
export async function getAllSlugs(): Promise<string[]> {
  try {
    const data = await client.request<SlugsResponse>(GET_ALL_SLUGS);
    return data.posts.nodes.map((post) => post.slug);
  } catch (error) {
    console.error('Errore nel recupero degli slug:', error);
    return [];
  }
}

/**
 * Formatta una data ISO in formato italiano
 */
export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Rimuove i tag HTML dall'excerpt
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}
