import { IQuery, IUserData } from '../interface';
import { useEffect, useState } from 'react';
import { getData } from './api';

export const useImages = (query: IQuery) => {
  const [images, setData] = useState<IUserData>({
    albums: [],
    artists: [],
    tracks: [],
  });
  const [ready, setReady] = useState(false);

  const getImages = async () => {
    const data = await getData(query);

    setData(data);
    setReady(true);
  };

  useEffect(() => {
    getImages();
  }, []);

  return { images, ready };
};
