import type { NextApiRequest, NextApiResponse } from 'next';

import { employmentHistory } from '../db/employmentHistory';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { employmentId },
  } = req;

  // TODO: simplify big O notation from O(n) to O(1)
  const history = employmentHistory.find(({ id }: { id: string }) => id === employmentId);

  if (req.method === 'GET') {
    res.status(200).json(history);
  }
}
