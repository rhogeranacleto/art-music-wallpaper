import { NowRequest, NowResponse } from '@now/node';
import { IAlbum } from '../src/interface';
import { getTopAlbums } from '../services/get-top-albums';

export default async function (req: NowRequest, res: NowResponse) {
  try {
    const { user, limit, period = '7day' } = req.query as {
      [key: string]: string;
    };
    let result: IAlbum[] = [];

    if (user) {
      result = await getTopAlbums(user, limit, period);
    }

    res.json(result);
  } catch (e) {
    console.log(e);
    res.status(500).json({ erro: e, message: 'jj' });
  }
}
