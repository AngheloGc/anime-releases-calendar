import { DashboardLayoutProps } from './props';
import 'styles/globals.css';
import 'animate.css';

import { Ubuntu } from '@next/font/google';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '400' });

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <section>{children}</section>
      </body>
    </html>
  );
}
