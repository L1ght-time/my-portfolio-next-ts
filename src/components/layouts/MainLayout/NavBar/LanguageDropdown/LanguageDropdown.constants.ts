import { nanoid } from 'nanoid';

export const modelLanguages = [
  { id: nanoid(), name: 'uk' },
  { id: nanoid(), name: 'en' },
] as const;
