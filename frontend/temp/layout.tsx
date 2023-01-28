import { DashboardLayoutProps } from './props';
import 'styles/globals.css';
import 'animate.css';

import { Ubuntu } from '@next/font/google';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '400' });

export default function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  return (
    <html lang={params.lang}>
      <body className={ubuntu.className}>
        <section>{children}</section>
      </body>
    </html>
  );
}
