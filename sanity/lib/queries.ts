import { groq } from 'next-sanity'

export const allBooksQuery = groq`
  *[_type == "book"] | order(publishedAt desc) {
    _id, title, slug, status, amazonLink,
    cover, publishedAt,
    author->{ name, slug, photo }
  }
`

export const bookBySlugQuery = groq`
  *[_type == "book" && slug.current == $slug][0] {
    _id, title, slug, description, status,
    amazonLink, cover, publishedAt,
    author->{ name, slug, photo, bio, socialLinks }
  }
`

export const allAuthorsQuery = groq`
  *[_type == "author"] | order(name asc) {
    _id, name, slug, photo, bio, socialLinks
  }
`

export const authorBySlugQuery = groq`
  *[_type == "author" && slug.current == $slug][0] {
    _id, name, slug, photo, bio, socialLinks,
    "books": *[_type == "book" && references(^._id)] {
      _id, title, slug, cover, status, amazonLink
    },
    "episode": *[_type == "episode" && guest._ref == ^._id][0] {
      _id, title, slug, season
    }
  }
`

export const allEpisodesQuery = groq`
  *[_type == "episode"] | order(season asc, publishedAt asc) {
    _id, title, slug, season, description,
    videoEmbed, publishedAt,
    guest->{ name, slug, photo }
  }
`

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, category,
    coverImage, publishedAt,
    author->{ name, slug, photo }
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, category, body,
    coverImage, publishedAt,
    author->{ name, slug, photo }
  }
`