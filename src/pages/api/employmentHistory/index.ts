import type { NextApiRequest, NextApiResponse } from 'next';

import { employmentHistory } from '../db/employmentHistory';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(employmentHistory);
  }
}