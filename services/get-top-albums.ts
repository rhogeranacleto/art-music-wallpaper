import axios from 'axios';
import { getConfig } from '../config';
import cheerio from 'cheerio';
import { ITopAlbums } from '../interfaces/interfaces';

export async function getTopAlbums(name: string, limit: number, period: string) {

  if (limit) {

    const { API_KEY, format, base_last_fn_api } = getConfig();

    const { data } = await axios.get<ITopAlbums>(`${base_last_fn_api}/?method=user.gettopalbums&user=${name}&api_key=${API_KEY}&format=${format}&limit=${limit}&period=${period}`);

    return Promise.all(data.topalbums.album.map(async album => ({
      ...album,
      image: await getAlbumImage(album.url)
    })));
  }

  return [];
}

async function getAlbumImage(url: string) {

  const { data } = await axios.get(url);
  const albumCoverElement = cheerio('a.cover-art img', data);

  return albumCoverElement.attr('src');
}