import { REQUEST_INIT } from './config';

export async function getCurrentBackground() {
  const response = await fetch(
    `${process.env.BASE_API_PATH}/current-background?populate=*`,
    REQUEST_INIT
  );
  const json = await response.json();
  return {
    currentBackgroundURL: `${process.env.ASSETS_PATH}${json.data.attributes.image.data.attributes.url}`,
  };
}