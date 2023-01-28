'use client';

import { useEffect } from 'react';
import { ErrorPageProps } from './props';

export default function Error(props: ErrorPageProps) {
  const { error, reset } = props;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
