import { getCurrentSeason } from 'services';

export default async function Head() {
  const { currentSeason } = await getCurrentSeason();

  return (
    <>
      <title>{`Anime releases - ${currentSeason}`}</title>
      <meta
        name="description"
        content="Check all animes in the current season"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
