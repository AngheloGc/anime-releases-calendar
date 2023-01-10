import styles from './styles.module.css';
import { Ubuntu } from '@next/font/google';
import { getCurrentSeason } from 'services';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '700' });

export const Title = async () => {
  const { currentSeason } = await getCurrentSeason();

  return (
    <div className={`${styles.title_wrapper} ${ubuntu.className}`}>
      <h2 className={styles.title_h2}>Anime Releases</h2>
      <h1 className={styles.title_h1}>{currentSeason}</h1>
    </div>
  );
};
