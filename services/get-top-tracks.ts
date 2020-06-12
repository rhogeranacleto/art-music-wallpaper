import axios from 'axios';
import { getConfig } from '../config';
import cheerio from 'cheerio';
import { ITopTracks } from '../interfaces/interfaces';

export async function getToptracks(name: string, limit: number, period: string) {

  if (limit) {

    const { API_KEY, format, base_last_fn_api } = getConfig();

    const { data } = await axios.get<ITopTracks>(`${base_last_fn_api}/?method=user.gettoptracks&user=${name}&api_key=${API_KEY}&format=${format}&limit=${limit}&period=${period}`);

    return Promise.all(data.toptracks.track.map(async track => ({
      ...track,
      image: await getTrackImage(track.url)
    })));
  }

  return [];
}

async function getTrackImage(url: string) {

  const { data } = await axios.get(url);
  const backgroundElement = cheerio('.header-new-background-image', data);

  return backgroundElement.attr('content');
}