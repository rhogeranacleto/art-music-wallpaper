import { NowRequest, NowResponse } from '@now/node'
import { getTopArtists } from '../services/get-top-artists';
import { getToptracks } from '../services/get-top-tracks';
import { getTopAlbums } from '../services/get-top-albums';

export default async function (req: NowRequest, res: NowResponse) {

  try {

    const { user, artist_limit, album_limit, track_limit, period = '7day' } = req.query;

    if (user) {

      const [artists, tracks, albums] = await Promise.all([
        getTopArtists(user as string, Number(artist_limit), period as string),
        getToptracks(user as string, Number(track_limit), period as string),
        getTopAlbums(user as string, Number(album_limit), period as string)
      ]);

      return res.json({ artists, tracks, albums });
    }

    res.json({ artists: [], tracks: [], albums: [] });
  } catch (e) {

    console.log(e);
    res.status(500).json({ erro: e, message: 'jj' });
  }
}