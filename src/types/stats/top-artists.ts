export interface TopArtistsType {
  items: Item[]
  total: number
  limit: number
  offset: number
  href: string
  next: string
  previous: string
}

interface Item {
  external_urls: ExternalUrls
  followers: Followers
  genres: string[]
  href: string
  id: string
  images: Image[]
  name: string
  popularity: number
  type: string
  uri: string
}

interface ExternalUrls {
  spotify: string
}

interface Followers {
  href: string
  total: number
}

interface Image {
  height: number
  url: string
  width: number
}
