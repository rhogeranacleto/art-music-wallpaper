import { ITopTracks } from './interfaces';
import axios from 'axios';
import { getConfig } from '../config';

export async function getToptracks(
  user: string,
  limit: string,
  period: string,
) {
  if (Number(limit)) {
    console.log(limit);

    const { api_key, format, base_last_fn_api } = getConfig();
    const params = new URLSearchParams({
      method: 'user.gettoptracks',
      user,
      api_key,
      format,
      limit,
      period,
    }).toString();

    // console.log(`${base_last_fn_api}/?method=user.gettoptracks&user=${name}&api_key=${api_key}&format=${format}&limit=${limit}&period=${period}`)
    const { data } = await axios.get<ITopTracks>(
      `${base_last_fn_api}/?${params}`,
    );

    return data.toptracks.track;
  }

  return [];
}

// async function getTrackImage(url: string) {
//   const { data } = await axios.get(url);
//   const backgroundElement = cheerio('.header-new-background-image', data);

//   return backgroundElement.attr('content');
// }
