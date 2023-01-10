import Image from 'next/image';
import { getCurrentSeason, getSeasonData } from 'services';
import { Row } from '../Row';
import styles from './styles.module.css';

export const Grid = async () => {
  const { id: seasonId } = await getCurrentSeason();
  const { animes } = await getSeasonData(seasonId);
  return (
    <div className={styles.grid_wrapper}>
      {animes.map((anime) => (
        <div key={anime.id}>
          <Image
            src={anime.coverImageURL}
            alt={anime.title}
            width={150}
            height={150}
            style={{ objectFit: 'cover', borderRadius: '4px' }}
          />
          <p>{anime.title}</p>
        </div>
      ))}
    </div>
  );
};
