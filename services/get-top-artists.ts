import axios from 'axios';
import { getConfig } from '../config';

export async function getTopArtists(name: string) {

  const { API_KEY, format, base_last_fn_api } = getConfig();

  const { data } = await axios.get(`${base_last_fn_api}/?method=user.gettopartists&user=${name}&api_key=${API_KEY}&format=${format}`);

  return data;
}