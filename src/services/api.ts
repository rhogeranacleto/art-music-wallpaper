import { IAlbum, IAlbumQuery, IQuery, IUserData } from '../interface';
import axios from 'axios';

export const getData = async (query: IQuery): Promise<IUserData> => {
  const params = new URLSearchParams(query as {}).toString();
  const cachedData = sessionStorage.getItem(params);

  if (cachedData) {
    console.log('Get from cache');
    return Promise.resolve(JSON.parse(cachedData));
  }

  console.time('Request from API');

  const { data } = await axios.get<IUserData>(
    `${process.env.REACT_APP_API_URL}/api?${params}`,
  );

  console.timeEnd('Request from API');

  sessionStorage.setItem(params, JSON.stringify(data));

  return data;
};

export const getAlbums = async (query: IAlbumQuery): Promise<IAlbum[]> => {
  const params = new URLSearchParams(query as {}).toString();
  const cachedData = sessionStorage.getItem(params);

  if (cachedData) {
    console.log('Get from cache');
    return Promise.resolve(JSON.parse(cachedData));
  }

  console.time('Request from API');
  const path = `/api/albums?${params}`;
  const url = process.env.REACT_APP_API_URL
    ? `${process.env.REACT_APP_API_URL}${path}`
    : path;

  const { data } = await axios.get<IAlbum[]>(url);

  console.timeEnd('Request from API');

  sessionStorage.setItem(params, JSON.stringify(data));

  return data;
};
