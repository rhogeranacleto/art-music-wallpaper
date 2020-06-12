import axios from 'axios';
import { getConfig } from '../config';
import cheerio from 'cheerio';
import { ITopAlbums } from '../interfaces/interfaces';

export async function getTopAlbums(user: string, limit: string, period: string) {

  if (Number(limit)) {

    const { api_key, format, base_last_fn_api } = getConfig();
    const params = new URLSearchParams({
      method: 'user.gettopalbums',
      user,
      api_key,
      format,
      limit,
      period
    }).toString();

    const { data } = await axios.get<ITopAlbums>(`${base_last_fn_api}/?${params}`);

    return data.topalbums.album;
  }

  return [];
}

async function getAlbumImage(url: string) {

  const { data } = await axios.get(url);
  const albumCoverElement = cheerio('a.cover-art img', data);

  return albumCoverElement.attr('src');
}