import axios from 'axios';
import { IUserData, IQuery } from '../interface';

export const getData = async (query: IQuery): Promise<IUserData> => {

  const params = new URLSearchParams(query as {}).toString();
  const cachedData = sessionStorage.getItem(params);

  if (cachedData) {

    console.log('Get from cache');
    return Promise.resolve(JSON.parse(cachedData));
  }

  console.log('Request from API');

  const { data } = await axios.get<IUserData>(`/api?${params}`);

  sessionStorage.setItem(params, JSON.stringify(data));

  return data;
}