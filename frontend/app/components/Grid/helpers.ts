import { Anime } from 'types'
import type { Props as AniDate } from '../AniDate/props'
import crypto from 'crypto'

export const sortAnimesByDate = (animes: Anime[]): SortedAnimesByDate[] => {
  const animesByDate: SortedAnimesByDate[] = []
  const animesUndefinedDate: SortedAnimesByDate[] = []

  animes.forEach((anime) => {
    if (!anime.releaseDate) {
      return animesUndefinedDate.push({
        id: crypto.randomUUID(),
        animes: [anime],
      })
    }
    const releaseDate = new Date(anime.releaseDate)
    const year = releaseDate.getFullYear()
    const month = releaseDate.getMonth()
    const day = releaseDate.getDate()

    const date = new Date(year, month, day)
    const index = animesByDate.findIndex((anime) => anime.releaseDate?.getTime() === date.getTime())

    if (index === -1) {
      animesByDate.push({
        id: crypto.randomUUID(),
        releaseDate: date,
        animes: [anime],
      })
    } else {
      animesByDate[index].animes.push(anime)
    }
  })

  return [...animesByDate, ...animesUndefinedDate]
}

interface SortedAnimesByDate extends Omit<AniDate, 'lang'> {
  id: string | number
}
