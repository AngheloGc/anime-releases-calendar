import { Period } from 'types';

export interface Props {
  label: string;
  seasons: Record<Period, string>;
}