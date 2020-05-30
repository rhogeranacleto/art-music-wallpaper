import axios from 'axios';
import { getConfig } from './config';

export async function getTopArtists(name: string) {

  const { API_KEY, format } = getConfig();

  const { data } = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${name}&api_key=${API_KEY}&format=${format}`);

  return data;
}