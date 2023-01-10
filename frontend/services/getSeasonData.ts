import { REQUEST_INIT } from './config';

export async function getSeasonData(id: number) {
  const response = await fetch(
    `${process.env.BASE_API_PATH}/seasons/${id}?populate[0]=animes&populate[1]=animes.cover`,
    REQUEST_INIT
  );
  const json = await response.json();

  return {
    title: json.data.attributes.title as string,
    year: json.data.attributes.year as number,
    period: json.data.attributes.period as string,
    animes: json.data.attributes.animes.data.map((anime: any) => ({
      id: anime.id as number,
      title: anime.attributes.name as string,
      coverImageURL: `${process.env.ASSETS_PATH}${anime.attributes.cover.data.attributes.url}` as string,
    })) as Anime[],
  };
};

interface Anime {
  id: number
  title: string
  coverImageURL: string
}