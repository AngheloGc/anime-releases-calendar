import Image from 'next/image';
import { getAnimeData, getCurrentSeason, getSeasonData } from 'services';
import { PageProps } from './props';

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const { title, englishTitle, cover } = await getAnimeData(slug);

  return (
    <div>
      <p>
        Title: {title} - English title: {englishTitle}
      </p>
      <Image
        src={cover ?? ''}
        alt={title}
        width={150}
        height={150}
        style={{
          borderRadius: '4px',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const { id: seasonId } = await getCurrentSeason();
  const { animes } = await getSeasonData(seasonId);

  return animes.map((anime) => ({
    slug: anime.slug,
  }));
}
