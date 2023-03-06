import type { NextApiRequest, NextApiResponse } from 'next';

import { about } from './db/about';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(about);
  }
}
