import type { NextApiRequest, NextApiResponse } from 'next';

import { about } from './db/about';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: any) {
  if (req.method === 'GET') {
    res.status(200).json(about);
  }
}
