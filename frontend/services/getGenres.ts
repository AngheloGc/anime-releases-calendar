import { Genre } from 'types';
import { REQUEST_INIT } from './config';

export async function getGenres(): Promise<{ genres: Genre[] }> {
  const response = await fetch(
    `${process.env.BASE_API_PATH}/genres`,
    REQUEST_INIT
  );
  const json = await response.json();
  return {
    genres: json.data.map((genre: any) => ({
      id: genre.id as number,
      name: genre.attributes.name as string,
    }))
  };
}