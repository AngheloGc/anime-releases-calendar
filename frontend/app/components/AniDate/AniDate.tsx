import Image from 'next/image';
import { Props } from './props';
import styles from './styles.module.css';
import { Ubuntu } from '@next/font/google';
import { DateMonth } from './components';
import Link from 'next/link';

const ubuntuBold = Ubuntu({ subsets: ['latin'], weight: '700' });

export const AniDate = (props: Props) => {
  const { releaseDate, animes, lang } = props;
  const currentDate = releaseDate ? releaseDate.toString() : undefined;

  return (
    <div className={styles.anidate_wrapper}>
      <div className={styles.anidate_image}>
        <Image
          src={animes[0].coverImageURL ?? 'https://via.placeholder.com/150x150'}
          alt={animes[0].title}
          width={160}
          height={160}
          style={{
            borderRadius: '4px',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <div className={`${styles.anidate_image_mask} ${ubuntuBold.className}`}>
          <DateMonth releaseDate={currentDate} lang={lang} />
        </div>
      </div>
      <div>
        <ul className={styles.anidate_names_list}>
          {animes.map((anime) => (
            <li key={anime.id} className={styles.anidate_names_list_element}>
              <Link href={`${lang}/anime/${anime.slug}`}>{anime.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
