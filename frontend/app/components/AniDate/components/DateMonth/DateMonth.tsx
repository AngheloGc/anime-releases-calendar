import styles from '../../styles.module.css';
import { useDate } from './hooks';
import { Props } from './props';

export const DateMonth = (props: Props) => {
  const { lang, releaseDate } = props;
  const dateProperties = useDate(lang, releaseDate);

  if (!dateProperties) return <span>tba</span>;

  const { day, month, weekday, ordinal } = dateProperties;

  return (
    <div className={styles.anidate_image_mask_date}>
      <div className={styles.anidate_image_mask_date_weekday}>{weekday}</div>
      <div className={styles.anidate_image_mask_date_month}>
        {lang === 'en' ? (
          <>
            <span>{month}</span>
            <span>
              {day}
              <span className={styles.anidate_image_mask_date_month_ordinal}>
                {ordinal}
              </span>
            </span>
          </>
        ) : (
          <>
            <span>{day}</span>
            <span>{month}</span>
          </>
        )}
      </div>
    </div>
  );
};
