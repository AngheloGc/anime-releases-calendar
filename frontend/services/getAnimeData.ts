import { REQUEST_INIT } from './config';

export async function getAnimeData(slug: string) {
  const response = await fetch(
    `${process.env.BASE_API_PATH}/animes?filters[slug][$eq]=${slug}&populate=*`,
    REQUEST_INIT
  );
  const json = await response.json();

  return {
    id: json.data[0].id as number,
    title: json.data[0].attributes.name as string,
    englishTitle: json.data[0].attributes.englishName as string,
    cover: `${process.env.ASSETS_PATH}${json.data[0].attributes.cover.data.attributes.url}`,
  };
};