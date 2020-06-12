import axios from 'axios';
import { IUserData, IQuery, IAlbum, IAlbumQuery } from '../interface';

export const getData = async (query: IQuery): Promise<IUserData> => {

  const params = new URLSearchParams(query as {}).toString();
  const cachedData = sessionStorage.getItem(params);

  // if (cachedData) {

  //   console.log('Get from cache');
  //   return Promise.resolve(JSON.parse(cachedData));
  // }

  console.time('Request from API');

  const { data } = await axios.get<IUserData>(`${process.env.REACT_APP_API_URL}/api?${params}`);

  console.timeEnd('Request from API');

  sessionStorage.setItem(params, JSON.stringify(data));

  return data;
}

export const getAlbums = async (query: IAlbumQuery): Promise<IAlbum[]> => {

  const params = new URLSearchParams(query as {}).toString();
  const cachedData = sessionStorage.getItem(params);

  // if (cachedData) {

  //   console.log('Get from cache');
  //   return Promise.resolve(JSON.parse(cachedData));
  // }

  console.time('Request from API');

  const { data } = await axios.get<IAlbum[]>(`${process.env.REACT_APP_API_URL}/api/albums?${params}`);

  console.timeEnd('Request from API');

  sessionStorage.setItem(params, JSON.stringify(data));

  return data;
}