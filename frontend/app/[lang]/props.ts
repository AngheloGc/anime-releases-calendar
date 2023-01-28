import { Locale } from 'types';

export interface RootProps {
  children: React.ReactNode;
  params: { lang: Locale; }
}

export interface HomePageProps {
  params: { lang: Locale; }
}

export interface ErrorPageProps {
  error: Error;
  reset: () => void;
}