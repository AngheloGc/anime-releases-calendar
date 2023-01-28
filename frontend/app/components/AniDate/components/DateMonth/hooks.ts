import { Locale } from 'types';
import { getOrdinal } from './utils';

export const useDate = (lang: Locale, releaseDate?: string): ReturnParams | null => {

  const date = new Date(releaseDate ?? '');
  const month = date.toLocaleString(lang, { month: 'long' }).slice(0, 3).toUpperCase();
  const day = date.getDate().toString();
  const ordinal = getOrdinal(date.getDate()) ?? 'th';
  const weekday = new Intl.DateTimeFormat(lang, { weekday: 'long' }).format(date)

  if (!releaseDate) return null;

  return { month, day, weekday, ordinal, lang };
}

interface ReturnParams {
  month: string
  day: string
  ordinal: string
  weekday: string
  lang: string
}