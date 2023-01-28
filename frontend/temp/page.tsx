import { Background, Grid, Title } from '../app/components';
import styles from './styles.module.css';

export default function HomePage() {
  return (
    <div className={styles.main_body}>
      {/* @ts-expect-error Server Component */}
      <Background />
      <div className={styles.main_content}>
        {/* @ts-expect-error Server Component */}
        <Title />
        {/* @ts-expect-error Server Component */}
        <Grid />
      </div>
    </div>
  );
}
