import slug from 'slug'

export const slugify = (flower) => {
  return `${slug(flower.name)}-${flower.id}`
}

export const getIdFromSlug = (slug) => {
  if (typeof slug !== 'string') return null
  return parseInt(slug.split('-').pop(), 10)
}