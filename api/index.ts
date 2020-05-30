import { NowRequest, NowResponse } from '@now/node'
import { getTopArtists } from '../get-top-artists';

export default async function (req: NowRequest, res: NowResponse) {

  try {
    const jj = await getTopArtists('rhogeranacleto');

    res.json(jj);
  } catch (e) {

    res.json(e);
  }
}