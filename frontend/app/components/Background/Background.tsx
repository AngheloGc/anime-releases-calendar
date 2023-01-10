import { getCurrentBackground } from 'services';
import styles from './styles.module.css';

export const Background = async () => {
  const { currentBackgroundURL } = await getCurrentBackground();

  return (
    <div
      className={styles.background_wrapper}
      style={{
        backgroundImage: `url(${currentBackgroundURL})`,
      }}
    ></div>
  );
};
