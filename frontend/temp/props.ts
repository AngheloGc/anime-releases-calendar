import { Locale } from 'types';

export interface DashboardLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale; }
}