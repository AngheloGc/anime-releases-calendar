import { PageProps } from './props';

export default async function Page({ params }: PageProps) {
  return <div>{params.slug}</div>;
}
