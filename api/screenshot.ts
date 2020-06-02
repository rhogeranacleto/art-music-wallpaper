import { NowRequest, NowResponse } from "@now/node";
import { screenshot } from "../services/screenshot";

export default async function (req: NowRequest, res: NowResponse) {

  try {

    const image = await screenshot();

    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': image.length
    });

    res.end(image);
  } catch (e) {

    console.log(e);
    res.status(500).json({ erro: e, message: 'jj' });
  }
}