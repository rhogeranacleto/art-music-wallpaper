import { NowRequest, NowResponse } from "@now/node";
import { screenshot } from "../services/screenshot";

export default async function (req: NowRequest, res: NowResponse) {

  try {

    const { user } = req.query;

    if (user) {

      const image = await screenshot(user as string);

      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': image.length
      });

      res.end(image);
    } else {

      res.send('favor informar usuário. Ex: ?user=rhogeranacleto')
    }
  } catch (e) {

    console.log(e);
    res.status(500).json({ erro: e, message: 'jj' });
  }
}