export interface PageProps {
  params: { slug: string }
  searchParams?: {
    [key: string]: string | string[] | undefined
  }
}

export interface ErrorPageProps {
  error: Error;
  reset: () => void;
}