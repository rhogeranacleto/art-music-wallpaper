import axios from 'axios';
import { getConfig } from '../config';
import cheerio from 'cheerio';
import { ITopArtists } from '../interfaces/interfaces';

export async function getTopArtists(name: string, limit: number, period: string) {

  if (limit) {

    const { API_KEY, format, base_last_fn_api } = getConfig();

    const { data } = await axios.get<ITopArtists>(`${base_last_fn_api}/?method=user.gettopartists&user=${name}&api_key=${API_KEY}&format=${format}&limit=${limit}&period=${period}`);

    return Promise.all(data.topartists.artist.map(async artist => ({
      ...artist,
      images: await getArtistImages(artist.url)
    })));
  }

  return [];
}

async function getArtistImages(url: string) {

  const { data } = await axios.get(url + '/+images');
  const imgLinkElements = cheerio('.image-list-item-wrapper a', data);

  return getImageFromLink(imgLinkElements);
}

async function getImageFromLink(imgLinkElements: Cheerio, count = 1) {

  const imgSrcs = [];

  for (let i = 0; i < count; i++) {

    const imgLinkElement = imgLinkElements.eq(i);
    const { data } = await axios.get(`https://www.last.fm${imgLinkElement.attr('href')}`);
    const imgElement = cheerio('.js-gallery-image', data);

    imgSrcs.push(imgElement.attr('src'));
  }

  return imgSrcs;
}