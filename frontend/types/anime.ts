import { Genre } from './genre'

export interface Anime {
  id: number
  title: string
  englishTitle?: string
  synopsis: string
  coverImageURL?: string
  studio?: string
  slug: string
  episodes?: number
  isBroadcasting: boolean
  smallCoverImageURL?: string
  largeCoverImageURL?: string
  genres: Genre[]
  releaseDate?: Date
}