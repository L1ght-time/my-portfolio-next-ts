import type { NextApiRequest, NextApiResponse } from 'next';

import { ABOUT } from '@/pages/api/db/about';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: any) {
  res.status(200).json(ABOUT);
}
