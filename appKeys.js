export const apiKey = '93377fa7e8a92fcffc4e85d7688ed646';

export const basePath = 'https://api.themoviedb.org/3/';

export const imagePath = 'https://image.tmdb.org/t/p/w500';

export const fullData = arr => {
  const data = arr.map(x => {
    return {
      ...x,
      poster_path: `${imagePath}${x.poster_path}`,
    };
  });
  return [data];
};
