import { RootProps } from './props';
import 'styles/globals.css';
import 'animate.css';

import { Ubuntu } from '@next/font/google';

import { i18n } from 'i18n-config';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '400' });

export default function Root(props: RootProps) {
  const { children, params } = props;
  return (
    <html lang={params.lang}>
      <body className={ubuntu.className}>
        <section>{children}</section>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
