import { getDictionary } from 'get-dictionary';
import { Background, Grid, Title } from '../components';
import { HomePageProps } from './props';
import styles from './styles.module.css';

export default async function HomePage(props: HomePageProps) {
  const { params } = props;

  const dictionary = await getDictionary(params.lang);

  return (
    <div className={styles.main_body}>
      {/* @ts-expect-error Server Component */}
      <Background />
      <div className={styles.main_content}>
        {/* @ts-expect-error Server Component */}
        <Title
          label={dictionary['main-title']}
          seasons={dictionary['seasons']}
        />
        {/* @ts-expect-error Server Component */}
        <Grid lang={params.lang} />
      </div>
    </div>
  );
}
