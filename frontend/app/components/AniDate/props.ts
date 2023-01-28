import { Anime, Locale } from 'types';

export interface Props {
  lang: Locale;
  releaseDate?: Date
  animes: Anime[];
}