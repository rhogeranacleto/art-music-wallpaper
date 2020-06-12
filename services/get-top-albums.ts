import { ITopAlbums } from '../interfaces/interfaces';
import axios from 'axios';
import { getConfig } from '../config';

export async function getTopAlbums(
  user: string,
  limit: string,
  period: string,
) {
  if (Number(limit)) {
    const { api_key, format, base_last_fn_api } = getConfig();
    const params = new URLSearchParams({
      method: 'user.gettopalbums',
      user,
      api_key,
      format,
      limit,
      period,
    }).toString();

    const url = `${base_last_fn_api}/?${params}`;

    const { data } = await axios.get<ITopAlbums>(url);

    return data.topalbums.album;
  }

  return [];
}
