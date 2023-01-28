import { Anime } from 'types';
import { REQUEST_INIT } from './config';

export async function getSeasonData(id: number): Promise<SeasonData> {
  const response = await fetch(
    `${process.env.BASE_API_PATH}/seasons/${id}?populate[0]=animes&populate[1]=animes.cover`,
    REQUEST_INIT
  );
  const json = await response.json();

  const animes = json.data.attributes.animes.data.map((anime: any) => ({
    id: anime.id as number,
    title: anime.attributes.name as string,
    coverImageURL: `${process.env.ASSETS_PATH}${anime.attributes.cover.data.attributes.url}`,
    releaseDate: anime.attributes.releaseDate as Date,
    slug: anime.attributes.slug as string,
  })) as Anime[]

  return {
    title: json.data.attributes.title as string,
    year: json.data.attributes.year as number,
    period: json.data.attributes.period as string,
    animes: animes.sort((a: Anime, b: Anime) => {
      const defaultDate = new Date(9999, 1, 1).getTime();
      const prevDate = a.releaseDate ? new Date(a.releaseDate).getTime() : defaultDate;
      const nextDate = b.releaseDate ? new Date(b.releaseDate ?? '').getTime() : defaultDate;
      return prevDate - nextDate;
    }),
  };
};

interface SeasonData {
  title: string;
  year: number;
  period: string;
  animes: Anime[];
}