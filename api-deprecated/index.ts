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
        getToptracks(user as string, track_limit as string, period as string),
        getTopAlbums(user as string, album_limit as string, period as string)
      ]);

      console.log(tracks)

      return res.json({ artists, tracks, albums });
    }

    res.json({ artists: [], tracks: [], albums: [] });
  } catch (e) {

    // console.log(e);
    res.status(500).json({ erro: e, message: 'jj' });
  }
}