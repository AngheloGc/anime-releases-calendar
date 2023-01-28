import styles from './styles.module.css';
import { Ubuntu } from '@next/font/google';
import { getCurrentSeason } from 'services';
import { Props } from './props';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '700' });

export const Title = async (props: Props) => {
  const { label, seasons } = props;
  const { period, year } = await getCurrentSeason();

  const intlSeason = seasons[period];

  return (
    <div className={`${styles.title_wrapper} ${ubuntu.className}`}>
      <h2 className={styles.title_h2}>{label}</h2>
      <h1 className={styles.title_h1}>
        {intlSeason} {year}
      </h1>
    </div>
  );
};
