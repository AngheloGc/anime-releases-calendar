import { getCurrentSeason, getSeasonData } from 'services';
import { AniDate } from '../AniDate';
import { sortAnimesByDate } from './helpers';
import { Props } from './props';
import styles from './styles.module.css';

export const Grid = async (props: Props) => {
  const { lang } = props;
  const { id: seasonId } = await getCurrentSeason();
  const { animes } = await getSeasonData(seasonId);
  const sortedAnimesByDate = sortAnimesByDate(animes);

  return (
    <div className={styles.grid_wrapper}>
      {sortedAnimesByDate.map((aniDate) => (
        <AniDate
          key={aniDate.id}
          releaseDate={aniDate.releaseDate}
          animes={aniDate.animes}
          lang={lang}
        />
      ))}
    </div>
  );
};
