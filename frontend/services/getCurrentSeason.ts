import { REQUEST_INIT } from './config';

export async function getCurrentSeason() {
  const response = await fetch(
    `${process.env.BASE_API_PATH}/current-season?populate=*`,
    REQUEST_INIT
  );
  const json = await response.json();
  return {
    id: json.data.attributes.season.data.id as number,
    currentSeason: json.data.attributes.title as string,
  };
};